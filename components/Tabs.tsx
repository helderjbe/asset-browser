"use client";

import { useRef, useEffect } from "react";

export interface TabsProps<T extends string = string> {
  tabs: readonly T[];
  activeTab: T;
  onChange: (tab: T) => void;
  className?: string;
}

export interface Tab {
  id: string;
  label: string;
}

export const Tabs = <T extends string = string>({
  tabs,
  activeTab,
  onChange,
  className = "",
}: TabsProps<T>) => {
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const activeIndex = tabs.indexOf(activeTab);
    const activeTabElement = tabRefs.current[activeIndex];

    if (indicatorRef.current && activeTabElement) {
      const { offsetLeft, offsetWidth } = activeTabElement;
      indicatorRef.current.style.transform = `translateX(${offsetLeft}px)`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
    }
  }, [activeTab, tabs]);

  return (
    <div
      role="tablist"
      className={`relative w-full flex gap-1 rounded-[var(--radius-md)] bg-slate-100 p-1 ${className}`}
    >
      <span
        ref={indicatorRef}
        className="absolute top-1 left-0 h-[calc(100%-0.5rem)] rounded-[var(--radius-md)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-transform duration-300"
        aria-hidden="true"
      />

      {tabs.map((tab, i) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab as string}
            role="tab"
            aria-selected={isActive}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            onClick={() => onChange(tab)}
            className="relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-400"
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
};
