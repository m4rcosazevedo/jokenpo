import { create } from 'zustand'

interface ScoreState {
  score: number
  inc: () => void
  dec: () => void
  reset: () => void
}

export const useScore = create<ScoreState>(set => ({
  score: 0,
  inc: () => set(state => ({ score: state.score + 1 })),
  dec: () => set(state => ({ score: state.score - 1 })),
  reset: () => set(() => ({ score: 0 }))
}))
