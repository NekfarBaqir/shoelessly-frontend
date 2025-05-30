import { Metadata } from "next";

export const rootMetadata: Metadata = {
    title: "Shoelessly",
    description: "Shoelessly Description",
    icons: {
      icon: [
        { url: "/favicon.ico" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "android-chrome-192x192",
          url: "/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          rel: "android-chrome-512x512",
          url: "/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    manifest: "/site.webmanifest",
    themeColor: "#ffffff",
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },
    robots: {
      index: true,
      follow: true,
    },
  }