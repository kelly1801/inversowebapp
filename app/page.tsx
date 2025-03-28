import qs from "qs";
import { notFound } from "next/navigation";
import { fetchAPI } from "@/lib/landing/fetch-api";
import { getStrapiURL } from "@/lib/landing/utils";
import { blockRenderer } from "@/lib/landing/block-renderer";
import { Block } from "@/types";
import { cache } from "react";

// ✅ Memoized Data Fetcher to cache responses
const fetchHomePageData = cache(async () => {
  const BASE_URL = getStrapiURL();
  const path = "/api/home-page";
  const url = new URL(path, BASE_URL);

  const query = qs.stringify(
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
                links: { populate: true },
              },
            },
            "layout.seccion-espacios": {
              populate: {
                imageSrc: { fields: ["url", "alternativeText", "name"] },
                galleryImages: { fields: ["url", "alternativeText", "name"] },
              },
            },
            "layout.hero-seccion": {
              populate: {
                imageSrc: { fields: ["url", "alternativeText", "name"] },
                buttons: { populate: true },
              },
            },
            "layout.spacer": { populate: true },
            "layout.footer": {
              populate: {
                logo: {
                  populate: {
                    LogoImg: {
                      fields: ["url", "alternativeText", "name"],
                    },
                  },
                },
                links: { populate: true },
                socialLinks: {
                  populate: {
                    link: {
                      populate: {
                        icon: { fields: ["url", "alternativeText", "name"] },
                      },
                    },
                  },
                },
              },
            },
            "layout.text-seccion": {
              populate: {
                buttons: { populate: true },
              },
            },
            "layout.about-seccion": {
              populate: {
                mainImageSrc: { fields: ["url", "alternativeText", "name"] },
                sideImageSrc: { fields: ["url", "alternativeText", "name"] },
              },
            },
            "layout.background-seccion": {
              populate: {
                backgroundImage: { fields: ["url", "alternativeText", "name"] },
                backgroundVideo: { fields: ["url", "alternativeText", "name"] },
                buttons: { populate: true },
              },
            },
            "layout.map": { populate: true },
          },
        },
      },
    },
    { encodeValuesOnly: true }
  );

  url.search = query;

  const data = await fetchAPI(url.href, { method: "GET" });

  if (!data?.data) notFound();

  return data.data.blocks || [];
});

// ✅ Memoized Page Component
const Page = async () => {
  const blocks = await fetchHomePageData();

  return (
    <div className="flex flex-col overflow-x-hidden">
      {blocks.map((block: Block, index: number) => blockRenderer(block, index))}
    </div>
  );
};

export default Page;
