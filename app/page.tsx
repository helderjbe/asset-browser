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

  const featuredAssets = useMemo(() => {
    const count = expanded === "Featured" ? 6 : 4;
    return assets.slice(0, count);
  }, [expanded]);

  const trendingAssets = useMemo(() => {
    const count = expanded === "Trending" ? 6 : 4;
    return assets.slice(4, 4 + count);
  }, [expanded]);

  const filteredAssets = useMemo(() => {
    const lower = query.toLowerCase();
    return assets.filter((asset) => {
      return (
        asset.name.toLowerCase().includes(lower) ||
        (asset.description ?? "").toLowerCase().includes(lower)
      );
    });
  }, [query]);

  const sections = useMemo(() => {
    return ["Featured", "Trending"].map((section) => ({
      title: section,
      assets: section === "Featured" ? featuredAssets : trendingAssets,
    }));
  }, [featuredAssets, trendingAssets]);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">Library</h1>
        <p className="mx-auto mt-2 max-w-2xl text-[var(--color-muted)]">
          Browse for assets needed to report and present analysis.
        </p>
      </header>

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
      ) : (
        <section className="mt-10 grid gap-6 sm:grid-cols-2">
          {filteredAssets.length > 0 ? (
            filteredAssets.map((asset) => (
              <AssetCard
                key={asset.id}
                asset={asset}
                onSelect={setSelectedAsset}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-[var(--color-muted)]">
              No assets found.
            </p>
          )}
        </section>
      )}

      <AssetModal
        open={Boolean(selectedAsset)}
        asset={selectedAsset}
        onClose={() => setSelectedAsset(null)}
      />
    </main>
  );
}
