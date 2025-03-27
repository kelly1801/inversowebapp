import {fetchAPI} from "@/lib/landing/fetch-api";
import { blockRenderer } from "@/lib/landing/block-renderer";
import { getStrapiURL } from "@/lib/landing/utils";
import qs from "qs"

export default async function Page({ params }: { params: { slug: string } }) {
 
    const {slug} = await params
    if (!slug) return <p>Loading...</p>;

  try {
  

    const query = qs.stringify(
      {
        filters: { slug: { $eq: slug } },
        
        populate: {
          blocks: {
            on: {
              "layout.top-nav": {
                populate: {
                  Logo: {
                    populate: {
                      LogoImg: {
                        fields: ["url", "alternativeText", "name"],
                      },
                    },
                  },
                  links: {
                    populate: true,
                  },
                },
              },
    
              "layout.seccion-espacios": {
                populate: {
                  imageSrc: { fields: ["url", "alternativeText", "name"] }, // ✅ Populate the single image field
                  galleryImages: { fields: ["url", "alternativeText", "name"] }, // ✅ Populate the multiple images
                },
              },
              
            },
          },
        },
      },
      { encodeValuesOnly: true } // Prevents encoding issues
    );
    const url = `${getStrapiURL()}/api/pages?${query}`;
    const res = await fetchAPI(url, {method: "GET"});
    if (!res?.data || res.data.length === 0) {
      return <p>404 - Page Not Found</p>;
    }

    const pageData = res.data[0];
    console.log("Page Data:", pageData.blocks);

    return (
      <div>
        {pageData.blocks.map((block: any, index: number) => blockRenderer(block, index))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching page:", error);
    return <p>Error loading page</p>;
  }
}
