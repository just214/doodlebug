import type { Metadata } from "next";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://doodlebug.vercel.app"
    : "http://localhost:3000";

const DEFAULT_VALUES = {
  title: "Doodlebug",
  description: "A fun drawing game for the whole family.",
  path: "/",
  image: "/icon-512.png",
};

type Args = {
  title?: string;
  description?: string;
  path?: `/${string}`;
  image?: string;
};

export function createMetadata(args?: Args): Metadata {
  const title = args?.title || DEFAULT_VALUES.title;
  const description = args?.description || DEFAULT_VALUES.description;
  const path = args?.path || DEFAULT_VALUES.path;
  const image = args?.image || DEFAULT_VALUES.image;

  const url = `${baseUrl}${path}`;
  return {
    metadataBase: new URL(baseUrl),
    title,
    description,
    // Open Graph
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      images: [
        {
          url: image,
          width: 1200,
          height: 628,
          alt: "Doodlebug",
        },
      ],
      locale: "en-US",
      type: "website",
    },

    // Icons
    icons: {
      icon: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },

    // Manifest
    manifest: "/manifest.webmanifest",

    // Twitter
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },

    // Viewport
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
    },
  };
}
