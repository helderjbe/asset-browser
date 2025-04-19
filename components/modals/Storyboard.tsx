"use client";

import { useState } from "react";
import type { Asset } from "@/types";

interface StoryboardProps {
  asset: Asset;
}

export const Storyboard = ({ asset }: StoryboardProps) => {
  const [showForm, setShowForm] = useState(false);
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (!reason.trim()) return;
    setSubmitted(true);
  }

  return (
    <div className="max-h-[60vh] overflow-y-auto pr-1">
      <section className="space-y-6">
        {asset.kpisUsed?.length && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Coupled KPIs / Filters
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
              {asset.kpisUsed.map((kpi) => (
                <li key={kpi}>{kpi}</li>
              ))}
            </ul>
          </div>
        )}
        {asset.affiliateApplicability?.length && (
          <div>
            <h3 className="text-lg font-semibold mb-2">
              Applicable affiliates
            </h3>
            <ul className="flex flex-wrap gap-2">
              {asset.affiliateApplicability.map((aff) => (
                <span key={aff} className="chip">
                  {aff}
                </span>
              ))}
            </ul>
          </div>
        )}
      </section>
      <hr className="my-6 border-[var(--color-border)]" />
      {!showForm && !submitted && (
        <button
          className="btn-primary w-full md:w-auto"
          onClick={() => setShowForm(true)}
        >
          🛎  Request access
        </button>
      )}
      {showForm && !submitted && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          <label className="block text-sm font-medium" htmlFor="reason">
            Briefly explain why you need access
          </label>
          <textarea
            id="reason"
            rows={4}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full rounded-md border border-[var(--color-border)] p-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            required
          />
          <div className="flex gap-2 justify-end">
            <button
              type="button"
              className="btn-primary bg-slate-100 text-slate-700 hover:bg-slate-200"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Submit request
            </button>
          </div>
        </form>
      )}
      {submitted && (
        <p className="text-sm text-green-700 font-medium">
          ✅ Request submitted! We’ll notify you when it’s approved.
        </p>
      )}
    </div>
  );
};
