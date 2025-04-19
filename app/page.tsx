"use client";

import { assets } from "../data/assets";
import { AssetCard } from "../components/AssetCard";
import { useMemo, useState } from "react";
import { Asset } from "../types";
import { Tabs } from "../components/Tabs";
import { SearchBar } from "../components/SearchBar";
import { AssetModal } from "../components/modals/AssetModal";

const TAB_LABELS = ["Featured", "KPI", "Layouts", "Storyboards"] as const;
type Tab = (typeof TAB_LABELS)[number];

export default function LibraryPage() {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("Featured");
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [expanded, setExpanded] = useState<"Featured" | "Trending" | null>(
    null
  );

  const featuredAssets = useMemo(
    () => getAssetsBySection("Featured", expanded),
    [expanded]
  );
  const trendingAssets = useMemo(
    () => getAssetsBySection("Trending", expanded),
    [expanded]
  );

  const filteredAssets = useMemo(
    () => filterAssets(query, activeTab),
    [query, activeTab]
  );

  const sections = useMemo(
    () => createSections(featuredAssets, trendingAssets),
    [featuredAssets, trendingAssets]
  );

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Header />

      <div className="mb-6">
        <SearchBar
          value={query}
          onChange={setQuery}
          placeholder="Type to search..."
        />
      </div>

      <Tabs
        tabs={TAB_LABELS}
        activeTab={activeTab}
        onChange={(t: Tab) => setActiveTab(t)}
      />

      {!query && activeTab === "Featured" ? (
        <FeaturedSections
          sections={sections}
          expanded={expanded}
          setExpanded={setExpanded}
          setSelectedAsset={setSelectedAsset}
        />
      ) : (
        <FilteredAssets
          filteredAssets={filteredAssets}
          query={query}
          setQuery={setQuery}
          setSelectedAsset={setSelectedAsset}
        />
      )}

      <AssetModal
        open={Boolean(selectedAsset)}
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />
    </main>
  );
}

function getAssetsBySection(
  section: "Featured" | "Trending",
  expanded: "Featured" | "Trending" | null
) {
  const count = expanded === section ? 6 : 4;
  return section === "Featured"
    ? assets.slice(0, count)
    : assets.slice(4, 4 + count);
}

function filterAssets(query: string, activeTab: Tab) {
  const lower = query.toLowerCase();
  return assets.filter((asset) => {
    const matchesQuery =
      asset.name.toLowerCase().includes(lower) ||
      (asset.description ?? "").toLowerCase().includes(lower);
    const matchesTab =
      !query &&
      (activeTab === "Featured" ||
        (activeTab === "KPI" && asset.type === "kpi") ||
        (activeTab === "Layouts" && asset.type === "layout") ||
        (activeTab === "Storyboards" && asset.type === "storyboard"));
    return matchesQuery && (query ? true : matchesTab);
  });
}

function createSections(featuredAssets: Asset[], trendingAssets: Asset[]) {
  return ["Featured", "Trending"].map((section) => ({
    title: section,
    assets: section === "Featured" ? featuredAssets : trendingAssets,
  }));
}

function Header() {
  return (
    <header className="mb-10 text-center">
      <h1 className="text-5xl font-extrabold tracking-tight">Library</h1>
      <p className="mx-auto mt-2 max-w-2xl text-[var(--color-muted)]">
        Browse for assets needed to report and present analysis.
      </p>
    </header>
  );
}

function FeaturedSections({
  sections,
  expanded,
  setExpanded,
  setSelectedAsset,
}: {
  sections: { title: string; assets: Asset[] }[];
  expanded: "Featured" | "Trending" | null;
  setExpanded: React.Dispatch<
    React.SetStateAction<"Featured" | "Trending" | null>
  >;
  setSelectedAsset: React.Dispatch<React.SetStateAction<Asset | null>>;
}) {
  return (
    <>
      {sections.map(({ title, assets }) => (
        <section key={title} className="mt-10">
          <div className="mb-4 flex items-center">
            <h2 className="text-2xl font-semibold mr-5">{title}</h2>
            <button
              className="text-xs text-primary hover:underline cursor-pointer"
              onClick={() =>
                setExpanded((prev) =>
                  prev === title ? null : (title as "Featured" | "Trending")
                )
              }
            >
              {expanded === title ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {assets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onSelect={setSelectedAsset}
              />
            ))}
          </div>
          {expanded === title && (
            <p className="mt-4 text-center text-[var(--color-muted)]">
              Not seeing what you need? Try searching.
            </p>
          )}
        </section>
      ))}
    </>
  );
}

function FilteredAssets({
  filteredAssets,
  query,
  setQuery,
  setSelectedAsset,
}: {
  filteredAssets: Asset[];
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedAsset: React.Dispatch<React.SetStateAction<Asset | null>>;
}) {
  return (
    <section className="mt-10 grid gap-6 sm:grid-cols-2">
      {filteredAssets.length > 0 ? (
        filteredAssets.map((asset) => (
          <AssetCard key={asset.id} asset={asset} onSelect={setSelectedAsset} />
        ))
      ) : (
        <p className="col-span-full text-center text-[var(--color-muted)]">
          No assets found.
        </p>
      )}
      {query && (
        <div className="col-span-full text-center mt-4">
          <button
            className="text-sm text-primary hover:underline"
            onClick={() => setQuery("")}
          >
            Clear Search
          </button>
        </div>
      )}
    </section>
  );
}
