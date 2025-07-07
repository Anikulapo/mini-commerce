import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'


interface CategoryState {
  selectedCategory: string
  setCategory: (category: string) => void
}

export const useCategoryStore = create<CategoryState>()(
  subscribeWithSelector((set) => ({
    selectedCategory: 'all',
    setCategory: (category) => set({ selectedCategory: category }),
  }))
)

export const useCategory = ()=>{
    const category = useCategoryStore((state)=> state.selectedCategory )
    const setCategory = useCategoryStore((state) => state.setCategory)

    return{
        category,
        setCategory
    }
}
