import qs from "qs";
import { notFound } from "next/navigation";

import { fetchAPI } from "@/lib/landing/fetch-api";
import { getStrapiURL } from "@/lib/landing/utils";
import { blockRenderer } from "@/lib/landing/block-renderer";
import { Block } from "@/types";

const homePageQuery = qs.stringify(
  {
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





async function loader() {
  // const authToken = process.env.STRAPI_API_TOKEN;
  const BASE_URL = getStrapiURL();
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);

  url.search = homePageQuery;

  const data = await fetchAPI(url.href, {
    method: "GET",
  });

  if (!data.data) notFound();

  const blocks = data?.data?.blocks || [];
  return { blocks };
}

export default async function Page() {
  const data = await loader();
  const blocks = data.blocks;

  return (
    <div className="flex flex-col">

      {blocks.map((block: Block, index: number) => {
        return blockRenderer(block, index);
      })}
    </div>
  );
}
