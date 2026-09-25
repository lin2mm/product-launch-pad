import { createFileRoute } from "@tanstack/react-router";
import { ProductPage } from "@/components/ProductPage";
import { products } from "@/lib/catalogue";

export const Route = createFileRoute("/s1")({
  head: () => ({
    meta: [
      { title: "SKU-S1 Surface Thumb-Turn Retrofit — Smart Lock" },
      { name: "description", content: "Retrofit smart lock that clamps over the interior thumb-turn. Keeps original keys, no drilling." },
      { property: "og:title", content: "SKU-S1 Surface Thumb-Turn Retrofit" },
      { property: "og:description", content: "Keeps original keys, no drilling, installs in under 10 minutes." },
    ],
  }),
  component: () => <ProductPage p={products[0]} />,
});
