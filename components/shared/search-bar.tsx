import { SearchIcon } from "../home/icons";

type SearchBarProps = {
  placeholder: string;
  onClick?: () => void;
  /** True when the sticky header group is pinned to the top. */
  stuck?: boolean;
};

export function SearchBar({ placeholder, onClick, stuck = false }: SearchBarProps) {
  return (
    <div className={`mx-4 pb-0 transition-transform duration-200 ${stuck ? "" : "-mb-5 -translate-y-1/2"}`}>
      <button
        type="button"
        onClick={onClick}
        // Figma "Search bar" (392:9275): 40px, 4px radius, no border; 20px icon at 8px, Nhãn text #19264E/70.
        className={`flex h-10 w-full items-center gap-3 rounded px-2 transition-[background-color,box-shadow] duration-200 ${
          stuck ? "bg-[#E3E2E0]" : "bg-white shadow-[0px_4px_4px_0px_#00000017]"
        }`}
      >
        <SearchIcon className="size-5 shrink-0 text-[#19264E]" />
        <span className="flex-1 truncate text-left text-xs text-[#19264E]/70">{placeholder}</span>
      </button>
    </div>
  );
}
