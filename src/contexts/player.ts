import { create } from 'zustand'

interface PlayerState {
  option: HandOption | null
  setOption: (option: HandOption | null) => void
}

export const usePlayer = create<PlayerState>(set => ({
  option: null,
  setOption: option => set({ option })
}))
