import { create } from "zustand";

/** Selections from each category's filter sheet, keyed by category scope (e.g. "bao-tang"). */
type FilterStore = {
  filters: Record<string, Set<string>>;
  toggleFilter: (scope: string, key: string) => void;
};

const EMPTY = new Set<string>();

export const useCategoryFilterStore = create<FilterStore>((set) => ({
  filters: {},
  toggleFilter: (scope, key) =>
    set((state) => {
      const next = new Set(state.filters[scope]);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return { filters: { ...state.filters, [scope]: next } };
    }),
}));

export const useScopeFilters = (scope: string) => useCategoryFilterStore((state) => state.filters[scope] ?? EMPTY);

export const useHasActiveFilters = (scope: string) =>
  useCategoryFilterStore((state) => (state.filters[scope]?.size ?? 0) > 0);
