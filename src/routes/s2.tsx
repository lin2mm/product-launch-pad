import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/lib/catalogue";

export const Route = createFileRoute("/s2")({
  head: () => ({
    meta: [
      { title: "SKU-S2 Integrated Euro Cylinder — Smart Lock" },
      { name: "description", content: "Smart lock module that replaces the Euro DIN cylinder with direct drive coupling." },
      { property: "og:title", content: "SKU-S2 Integrated Euro Cylinder" },
      { property: "og:description", content: "Direct-drive Euro cylinder replacement for hotels and high-end residential." },
    ],
  }),
  component: () => <ProductPage p={products[1]!} />,
});
