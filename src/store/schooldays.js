import { defineStore } from 'pinia'

export const useSchooldays = defineStore("schooldays", {
  state: () => {
    return {
      schooldays: [
        { id: 1, name: "Ponedeljak" },
        { id: 2, name: "Utorak" },
        { id: 3, name: "Sreda" },
        { id: 4, name: "Četvrtak" },
        { id: 5, name: "Petak" },
        { id: 6, name: "Subota" },
        { id: 7, name: "Nedelja" },
      ],
    }
  },
  actions: {
    addSchoolday(schoolday) {
      this.schooldays.push(schoolday)
    },
    updateSchoolday(schoolday) {
      this.schooldays.push(schoolday)
    },
    deleteSchoolday(id) {
      this.schooldays = this.schooldays.filter(schoolday => schoolday.id !== id)
    }
  },
  getters: {
    getSchooldays(state) {
      return state.schooldays
    }
  }
})