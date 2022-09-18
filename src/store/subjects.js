import { defineStore } from 'pinia'

export const useSubjects = defineStore("subjects", {
  state: () => {
    return {
      subjects: [
        { id: 1, name: "Matematika" },
        { id: 2, name: "Srpski" },
        { id: 3, name: "Muzičko" },
        { id: 4, name: "Fizičko" },
        { id: 5, name: "Likovno" },
        { id: 6, name: "Biologija" },
        { id: 7, name: "Geografija" },
        { id: 8, name: "Informatika" },
        { id: 9, name: "Engleski" },
        { id: 10, name: "Francuski" },
        { id: 11, name: "Španski" },
        { id: 12, name: "Tehničko" },
        { id: 13, name: "Fizika" },
        { id: 14, name: "Hemija" },
        { id: 15, name: "Istorija" },
        { id: 16, name: "Razredni" },
        { id: 17, name: "Građansko" },
      ],
    }
  },
  actions: {
    addSubject(subject) {
      this.subjects.push(subject)
    },
    updateSubject(subject) {
      this.subjects.push(subject)
    },
    deleteSubject(id) {
      this.subjects = this.subjects.filter(subject => subject.id !== id)
    }
  },
  getters: {
    getSubjects(state) {
      return state.subjects
    }
  }
})