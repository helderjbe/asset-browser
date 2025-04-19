import type { Asset } from "@/types";

export const assets: Asset[] = [
  {
    id: "kpi-1",
    name: "KPI 1",
    type: "kpi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["tag1", "tag2", "tag3"],
    uses: 99,
    metricIds: ["metric1", "metric2"],
    calculation: "Σ(calc) – Σ(calc)",
    visualTypes: ["visual1", "visual2", "visual3"],
    affiliateApplicability: ["Affiliate1"],
    updatedAt: "2024/06/15",
    businessQuestions: [
      "Example question 1?",
      "Example question 2?",
      "Example question 3?",
    ],
  },
  {
    id: "kpi-2",
    name: "KPI 2",
    type: "kpi",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["tag1", "tag2", "tag3"],
    uses: 99,
    metricIds: ["metric1", "metric2"],
    calculation: "Σ(calc) – Σ(calc)",
    visualTypes: ["visual1", "visual2", "visual3"],
    affiliateApplicability: ["Affiliate1"],
    updatedAt: "2024/06/15",
    businessQuestions: [
      "Example question 1?",
      "Example question 2?",
      "Example question 3?",
    ],
  },
  {
    id: "dataviz-1",
    name: "DataViz 1",
    type: "dataviz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["tag1", "tag2"],
    uses: 999,
    assetInfoContext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    kpisUsed: ["kpi-1", "kpi-2"],
    updatedAt: "2024/07/02",
  },
  {
    id: "dataviz-2",
    name: "DataViz 2",
    type: "dataviz",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["tag1", "tag2"],
    uses: 999,
    assetInfoContext:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    kpisUsed: ["kpi-1", "kpi-2"],
    updatedAt: "2024/07/02",
  },
  {
    id: "layout-1",
    name: "Layout 1",
    type: "layout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pages: 5,
    tags: ["tag1", "tag2"],
    uses: 999,
    updatedAt: "2024/07/02",
    kpisUsed: ["kpi-1", "kpi-2"],
    visualTypes: ["Universal"],
  },
  {
    id: "layout-2",
    name: "Layout 2",
    type: "layout",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pages: 5,
    tags: ["tag1", "tag2"],
    uses: 999,
    updatedAt: "2024/07/02",
    kpisUsed: ["kpi-1", "kpi-2"],
    visualTypes: ["Universal"],
  },
  {
    id: "storyboard-1",
    name: "Storyboard 1",
    type: "storyboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pages: 5,
    tags: ["tag1", "tag2"],
    uses: 999,
    affiliateApplicability: ["Affiliate1"],
    updatedAt: "2024/07/02",
    kpisUsed: ["kpi-1", "kpi-2"],
  },
  {
    id: "storyboard-2",
    name: "Storyboard 2",
    type: "storyboard",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    pages: 5,
    tags: ["tag1", "tag2"],
    uses: 999,
    affiliateApplicability: ["Affiliate1"],
    updatedAt: "2024/07/02",
    kpisUsed: ["kpi-1", "kpi-2"],
  },
];
