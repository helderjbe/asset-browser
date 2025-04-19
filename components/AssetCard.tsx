import { Asset } from "../types";

interface AssetCardProps {
  asset: Asset;
  onSelect?: (asset: Asset) => void;
}

export const AssetCard = ({ asset, onSelect }: AssetCardProps) => {
  const handleActivate = () => onSelect?.(asset);

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={handleActivate}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleActivate();
        }
      }}
      className="card cursor-pointer transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
    >
      <div
        className="h-full w-auto aspect-square flex-shrink-0 rounded-lg bg-slate-100 grid place-items-center text-2xl"
        aria-label="Asset icon"
      >
        🗂️
      </div>
      <div className="flex min-w-0 flex-col gap-0.5">
        <h3 className="truncate text-lg font-semibold leading-5">
          {asset.name}
        </h3>
        {asset.description && (
          <p className="line-clamp-2 text-sm text-slate-600">
            {asset.description}
          </p>
        )}
        <time
          dateTime={asset.updatedAt}
          className="mt-1 text-xs text-slate-400"
        >
          {asset.updatedAt}
        </time>
      </div>
    </article>
  );
};
