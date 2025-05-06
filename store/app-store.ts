import { create } from "zustand"
import { UIState, useUISlice } from "./ui-store"
import { BranchStoreState, useBranchStore } from "./branch-store"

export const useAppStore = create<UIState & BranchStoreState>()((...a) => ({
    ...useUISlice(...a),
    ...useBranchStore(...a)
  }))