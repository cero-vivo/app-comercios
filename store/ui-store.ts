import { StateCreator } from "zustand";

export interface UIState {
    //ON BOARDING
    showOnboarding?: boolean,
    setShowOnboarding: (value: boolean) => void

    // BRANCH SELECTOR
    showBranchSelectorModal?: boolean,
    setShowBranchSelectorModal: (value: boolean) => void,
    toggleBranchSelectorModal: () => void

}

export const useUISlice: StateCreator<UIState> = (set,get) => ({

    showOnboarding: undefined,
    setShowOnboarding: (value: boolean) => set((state) => ({...state, showOnboarding: value})),

    showBranchSelectorModal: undefined,
    setShowBranchSelectorModal: (value: boolean) => set((state) => ({...state, showBranchSelectorModal: value})),
    toggleBranchSelectorModal: () => set((state) => ({...state, showBranchSelectorModal: !state.showBranchSelectorModal})),
})