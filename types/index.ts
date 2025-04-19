export type AssetType = "kpi" | "layout" | "dataviz" | "storyboard";

export interface Asset {
  id: string;
  name: string;
  type: AssetType;
  description: string;
  tags: string[];
  uses: number;
  pages?: number;
  metricIds?: string[];
  calculation?: string;
  visualTypes?: string[];
  affiliateApplicability?: string[];
  updatedAt: string;
  businessQuestions?: string[];
  kpisUsed?: string[];
  assetInfoContext?: string;
}
