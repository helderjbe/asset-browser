"use client";

import { useState } from "react";
import type { Asset } from "@/types";

interface DataVizProps {
  asset: Asset;
}

type ViewMode = "chart" | "table";

export const DataViz = ({ asset }: DataVizProps) => {
  const [view, setView] = useState<ViewMode>("chart");

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Interact with chart</h3>
        <div className="flex gap-2">
          <button
            className="tab-pill"
            data-active={view === "chart"}
            onClick={() => setView("chart")}
          >
            Chart
          </button>
          <button
            className="tab-pill"
            data-active={view === "table"}
            onClick={() => setView("table")}
          >
            Table
          </button>
        </div>
      </div>

      <div className="bg-slate-50 border border-[var(--color-border)] rounded-[var(--radius-md)] h-60 grid place-items-center text-slate-400">
        {view === "chart" ? "[Chart preview]" : "[Tabular preview]"}
      </div>

      {asset.kpisUsed?.length ? (
        <div>
          <h4 className="text-md font-semibold mb-2">
            Applicable KPI favourites
          </h4>
          <ul className="grid gap-3 sm:grid-cols-2">
            {asset.kpisUsed.map((kpi) => (
              <li key={kpi} className="card py-2 pr-2">
                <span className="flex-1 text-sm font-medium">{kpi}</span>
                <button
                  className="btn-primary !px-2 !py-1"
                  aria-label={`Favourite ${kpi}`}
                >
                  ⭐
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {asset.assetInfoContext && (
        <div>
          <h4 className="text-md font-semibold mb-2">Asset info context</h4>
          <p className="text-sm text-[var(--color-muted)] leading-relaxed">
            {asset.assetInfoContext}
          </p>
        </div>
      )}
    </section>
  );
};
