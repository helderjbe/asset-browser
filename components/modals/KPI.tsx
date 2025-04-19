"use client";

import type { Asset } from "@/types";

interface KPIProps {
  asset: Asset;
}

export const KPI = ({ asset }: KPIProps) => {
  if (!asset) return null;

  return (
    <section className="space-y-8">
      {asset.businessQuestions?.length ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">Business Questions</h3>
          <ul className="grid gap-3 md:grid-cols-2">
            {asset.businessQuestions.map((q, i) => (
              <li key={i} className="card flex-col">
                <span className="font-medium">Question {i + 1}</span>
                <p className="text-sm text-[var(--color-muted)] mt-1">{q}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {asset.metricIds?.length ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">Metric IDs</h3>
          <ul className="flex flex-wrap gap-2">
            {asset.metricIds.map((m) => (
              <li key={m} className="chip">
                {m}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {asset.description ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">Description</h3>
          <p className="leading-relaxed text-[var(--color-muted)]">
            {asset.description}
          </p>
        </div>
      ) : null}

      {asset.calculation ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">Calculation</h3>
          <pre className="bg-slate-50 border border-[var(--color-border)] p-4 rounded code-block whitespace-pre-wrap">
            {asset.calculation}
          </pre>
        </div>
      ) : null}

      {asset.visualTypes?.length ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">Visuals Available</h3>
          <ul className="flex flex-wrap gap-2">
            {asset.visualTypes.map((viz) => (
              <li key={viz} className="chip capitalize">
                {viz}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {asset.affiliateApplicability?.length ? (
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Affiliate Applicability
          </h3>
          <ul className="flex flex-wrap gap-2">
            {asset.affiliateApplicability.map((aff) => (
              <li key={aff} className="chip">
                {aff}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
