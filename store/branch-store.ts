import { StateCreator } from "zustand";
export interface Branch {
    id: string
    address: string
}
export interface BranchStoreState {
    branchSelected?: Branch,
    setBranchSelected: (value: Branch) => void
}

export const useBranchStore: StateCreator<BranchStoreState> = (set,get) => ({
    branchSelected: undefined,
    setBranchSelected: (value: Branch) => set((state) => ({...state, branchSelected: value})),
})