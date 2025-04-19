"use client";

import type { Asset } from "@/types";

interface LayoutProps {
  asset: Asset;
}

export const Layout = ({ asset }: LayoutProps) => {
  return (
    <section className="space-y-8">
      <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
        <div className="space-y-0.5 border-r border-[var(--color-border)] last:border-none">
          <dt className="font-medium text-[var(--color-muted)]">Used</dt>
          <dd className="font-semibold">{asset.uses.toLocaleString()}</dd>
        </div>
        <div className="space-y-0.5 border-r border-[var(--color-border)] last:border-none">
          <dt className="font-medium text-[var(--color-muted)]">Type</dt>
          <dd className="font-semibold capitalize">{asset.visualTypes?.[0]}</dd>
        </div>
        <div className="space-y-0.5 border-r border-[var(--color-border)] last:border-none">
          <dt className="font-medium text-[var(--color-muted)]">Pages No.</dt>
          <dd className="font-semibold">{asset.pages}</dd>
        </div>
        <div className="space-y-0.5">
          <dt className="font-medium text-[var(--color-muted)]">
            Last updated
          </dt>
          <dd className="font-semibold whitespace-nowrap">{asset.updatedAt}</dd>
        </div>
      </dl>
      <div className="relative">
        <div className="h-48 w-full rounded-md bg-slate-100 border border-[var(--color-border)] grid place-items-center text-slate-400 text-4xl">
          📷
        </div>
        <button
          className="btn-primary absolute bottom-4 right-4"
          onClick={() => alert("TODO: open full‑screen preview")}
        >
          Preview layout
        </button>
      </div>
      {asset.kpisUsed && asset.kpisUsed.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold mb-3">KPIs being used</h3>
          <ul className="flex flex-wrap gap-2">
            {asset.kpisUsed.map((kpi: string) => (
              <li key={kpi} className="chip capitalize">
                {kpi}
              </li>
            ))}
          </ul>
        </section>
      )}
      {asset.businessQuestions && asset.businessQuestions.length > 0 && (
        <section>
          <h3 className="text-lg font-semibold mb-3">Business Questions</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {asset.businessQuestions.map((q: string, idx: number) => (
              <li
                key={idx}
                className="p-3 rounded-md bg-slate-50 border border-[var(--color-border)]"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
};
