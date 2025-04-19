import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
}

export const SearchBar = ({
  value,
  onChange,
  placeholder = "Search...",
  id = "search",
  name = "search",
}: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="sr-only">
        Search
      </label>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
      >
        <path
          d="M11 4a7 7 0 014.9 11.9l4.3 4.3a1 1 0 01-1.4 1.4l-4.3-4.3A7 7 0 1111 4zm0 2a5 5 0 100 10 5 5 0 000-10z"
          fill="currentColor"
        />
      </svg>
      <input
        type="search"
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete="off"
        className="w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white py-2 pl-11 pr-3 shadow-sm focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] focus:outline-none"
      />
    </div>
  );
};
