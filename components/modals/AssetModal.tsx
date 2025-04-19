"use client";

import { useRef, MouseEvent } from "react";
import type { Asset, AssetType } from "../../types";

import { KPI } from "./KPI";
// import DataViz from "./DataViz";
// import Layout from "./Layout";
// import Storyboard from "./Storyboard";

interface AssetModalProps {
  open: boolean;
  asset: Asset | null;
  onClose: () => void;
}

const variantMap: Record<AssetType, React.ComponentType<{ asset: Asset }>> = {
  kpi: KPI,
  // dataviz: DataViz,
  // layout: Layout,
  // storyboard: Storyboard,
} as const;

export const AssetModal = ({ open, asset, onClose }: AssetModalProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  if (!open || !asset) return null;

  const Variant = variantMap[asset.type];

  return (
    <div
      ref={overlayRef}
      className="modal"
      aria-hidden={!open}
      onClick={(e: MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${asset.name} details`}
        className="modal-content"
      >
        <header className="flex items-start gap-4 mb-6">
          <div className="h-12 w-12 rounded grid place-items-center bg-slate-100">
            <span className="text-2xl">🗂️</span>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold leading-tight flex items-center gap-2">
              {asset.name}
              <span className="chip capitalize">{asset.type}</span>
            </h2>
            {asset.description && (
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {asset.description}
              </p>
            )}
            {asset.tags?.length && (
              <div className="mt-2 flex flex-wrap gap-2">
                {asset.tags.map((tag) => (
                  <span key={tag} className="chip">
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => undefined}
              className="text-md w-6 h-6 p-0 rounded-full"
              aria-label="Copy link"
            >
              🔗
            </button>
            <button
              onClick={onClose}
              className="text-md w-6 h-6 p-0 rounded-full"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
        </header>

        <Variant asset={asset} />

        <footer className="mt-8 pt-4 flex justify-end">
          <button className="btn-primary w-full bg-slate-900">
            ⭐ Favorite item
          </button>
        </footer>
      </div>
    </div>
  );
};
