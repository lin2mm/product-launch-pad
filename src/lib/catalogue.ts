import s1Thumb from "@/assets/s1_thumb.jpg.asset.json";
import s1Stand from "@/assets/s1_stand.jpg.asset.json";
import s1Scale from "@/assets/p1_s1_mobile_scale_v2.png.asset.json";
import s1Door from "@/assets/c02a_s1_v2_landscape.jpg.asset.json";
import s2Hero from "@/assets/hero_s2.jpg.asset.json";
import s2Thumb from "@/assets/s2_thumb.jpg.asset.json";
import s2Batt from "@/assets/s2_batt.jpg.asset.json";
import s2Door from "@/assets/c01c_s2_v2_square.jpg.asset.json";
import oak from "@/assets/a01_oak.jpg.asset.json";
import swatch from "@/assets/oem_swatch.jpg.asset.json";
import entry from "@/assets/a06_entry.jpg.asset.json";

export const img = {
  s1Thumb: s1Thumb.url, s1Stand: s1Stand.url, s1Scale: s1Scale.url, s1Door: s1Door.url,
  s2Hero: s2Hero.url, s2Thumb: s2Thumb.url, s2Batt: s2Batt.url, s2Door: s2Door.url,
  oak: oak.url, swatch: swatch.url, entry: entry.url,
};

export const INQUIRY_EMAIL = "oem-inquiry@partner-network.com";

export type Spec = { k: string; v: string; level: string; target?: boolean };

export type Product = {
  slug: "s1" | "s2";
  code: string;
  name: string;
  tagline: string;
  install: string;
  color: string;
  idealFor: string;
  points: string[];
  hero: string;
  gallery: { src: string; caption: string }[];
  specs: Spec[];
  note: string;
};

export const products: Product[] = [
  {
    slug: "s1",
    code: "SKU-S1",
    name: "Surface Thumb-Turn Retrofit",
    tagline: "Non-invasive motorized smart upgrade preserving original lock cylinders.",
    install: "Surface clamp / adhesive adapter",
    color: "Architectural Red-Brown",
    idealFor: "Rental apartments, Airbnb, quick B2C/B2B deployments",
    points: [
      "Keeps existing cylinder and exterior keys intact",
      "Clamps directly over the interior thumb-turn",
      "Zero door drilling or mortise alteration",
      "Installs in 10 minutes or less",
    ],
    hero: img.s1Stand,
    gallery: [
      { src: img.s1Door, caption: "In use on a dark matte door with smartphone unlock" },
      { src: img.s1Scale, caption: "Scale: beside a standard smartphone and cylinder cell" },
      { src: img.s1Thumb, caption: "Rotary manual knob and status indicator" },
    ],
    specs: [
      { k: "Product envelope", v: "39.8 W × 22.5 D × 90.5 H mm", level: "Validated engineering CAD" },
      { k: "Enclosure", v: "One-piece CNC / extruded aluminum alloy", level: "Validated spec" },
      { k: "Faceplate", v: "Fine-textured polymer, Red-Brown standard", level: "OEM customizable" },
      { k: "Drive", v: "High-torque precision motorized gearbox", level: "Validated component" },
      { k: "Manual override", v: "Knurled rotary knob (power-free)", level: "Mechanical feature" },
      { k: "Rated torque", v: "≥ 10 kgf·cm", level: "Engineering target", target: true },
      { k: "Unlock duration", v: "≤ 2.0 s @ rated load", level: "Pending validation", target: true },
      { k: "Acoustic noise", v: "≤ 45 dBA @ 0.5 m", level: "Engineering target", target: true },
      { k: "Battery life", v: "≥ 9 months @ 8 cycles/day", level: "Engineering target", target: true },
      { k: "Battery capacity", v: "≥ 7 Wh (≈ 2000 mAh rechargeable)", level: "Engineering target", target: true },
      { k: "Operating range", v: "−20 °C to +50 °C", level: "Pending validation", target: true },
      { k: "Installation time", v: "≤ 10 min on compatible doors", level: "Field study target", target: true },
    ],
    note: "Figures marked as targets are subject to final testing and assembly validation.",
  },
  {
    slug: "s2",
    code: "SKU-S2",
    name: "Integrated Euro Cylinder",
    tagline: "Integrated architectural lock module with direct drive coupling.",
    install: "Direct Euro cylinder swap",
    color: "Deep Charcoal-Brown",
    idealFor: "High-end residential renovation and hospitality",
    points: [
      "Replaces the existing Euro profile cylinder entirely",
      "Direct mechanical drive to the mortise lock",
      "High rigidity, zero backlash, tamper resistant",
      "Quick-swap rechargeable battery pack",
    ],
    hero: img.s2Hero,
    gallery: [
      { src: img.s2Door, caption: "Mounted below the existing lever, phone interaction" },
      { src: img.s2Thumb, caption: "Integrated Euro profile cylinder assembly" },
      { src: img.s2Batt, caption: "Quick-access rechargeable battery compartment" },
    ],
    specs: [
      { k: "Product envelope", v: "39.8 W × 22.5 D × 90.5 H mm (housing)", level: "Validated engineering CAD" },
      { k: "Cylinder type", v: "Standard European DIN profile", level: "Hardware verified" },
      { k: "Enclosure", v: "One-piece CNC / extruded aluminum alloy", level: "Validated spec" },
      { k: "Faceplate", v: "Fine-textured polymer, Dark Charcoal standard", level: "OEM customizable" },
      { k: "Manual override", v: "Thumb-turn bar + external key slot", level: "Mechanical feature" },
      { k: "Rated torque", v: "≥ 10 kgf·cm direct drive", level: "Engineering target", target: true },
      { k: "Durability", v: "≥ 100,000 full cycles", level: "Engineering target", target: true },
      { k: "Repeatability", v: "±2° / 100 cycles", level: "Engineering target", target: true },
      { k: "Battery module", v: "≥ 7 Wh quick-swap lithium pack", level: "Engineering target", target: true },
      { k: "Connectivity", v: "Mobile app control (BLE profile TBC)", level: "Configuration TBC" },
      { k: "Emergency power", v: "External USB-C / contact override", level: "Mechanical target" },
      { k: "Installation", v: "Single set-screw DIN cylinder exchange", level: "Field validated" },
    ],
    note: "S2 directly replaces DIN EN 1303 cylinders. Compatibility review recommended before roll-out.",
  },
];

export const compare: [string, string, string][] = [
  ["Envelope", "39.8 × 22.5 × 90.5 mm", "39.8 × 22.5 × 90.5 mm (body)"],
  ["Retrofit principle", "Clamps over existing thumb-turn", "Replaces entire Euro cylinder"],
  ["Exterior keys", "Original keys 100% retained", "Supplied with matching keys"],
  ["Compatibility", "Thumb-turn / key turn locks", "Euro profile DIN cutouts"],
  ["Housing", "Seamless aluminum shell", "Seamless aluminum shell"],
  ["Default color", "Architectural Red-Brown", "Deep Charcoal-Brown"],
  ["Manual knob", "Circular knurled thumb-knob", "Horizontal turn-bar"],
  ["Door prep", "None (adhesive / clamp)", "Remove cylinder set-screw"],
  ["Typical use", "Rental, smart home retrofit", "Hotels, high-end residential"],
];

export const finishes = [
  { name: "Matte Graphite", c: "oklch(0.3 0.005 60)" },
  { name: "Brushed Silver", c: "oklch(0.82 0.005 80)" },
  { name: "Champagne Gold", c: "oklch(0.8 0.07 85)" },
  { name: "Architectural Red-Brown", c: "oklch(0.47 0.09 45)" },
  { name: "Nordic Slate", c: "oklch(0.5 0.02 240)" },
];
