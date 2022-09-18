import { defineStore } from 'pinia'

export const useTimetable = defineStore("timetable", {
  state: () => {
    return {
      timetable: [
        {
          id: 1,
          schoolday: 1,
          subject: 4,
          nr: "I  08:00 – 08:45",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 2,
          schoolday: 1,
          subject: 13,
          nr: "II  08:50 – 09:35",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 3,
          schoolday: 1,
          subject: 1,
          nr: "III  09:55 – 10:40",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 4,
          schoolday: 1,
          subject: 6,
          nr: "IV  10:45 – 11:30",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 5,
          schoolday: 1,
          subject: 9,
          nr: "V  11:35 – 12:20",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 6,
          schoolday: 1,
          subject: 7,
          nr: "VI  12:25 – 13:10",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 7,
          schoolday: 2,
          subject: 16,
          nr: "I  08:00 – 08:45",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 8,
          schoolday: 2,
          subject: 4,
          nr: "II  08:50 – 09:35",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 9,
          schoolday: 2,
          subject: 10,
          nr: "III  09:55 – 10:40",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 10,
          schoolday: 2,
          subject: 2,
          nr: "IV  10:45 – 11:30",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 11,
          schoolday: 2,
          subject: 5,
          nr: "V  11:35 – 12:20",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 12,
          schoolday: 2,
          subject: 1,
          nr: "VI  12:25 – 13:10",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 13,
          schoolday: 3,
          subject: 7,
          nr: "I  08:00 – 08:45",
          period: "AM",
          startAt: "08:00",
        },
        {
          id: 14,
          schoolday: 3,
          subject: 15,
          nr: "II  08:50 – 09:35",
          period: "AM",
        },
        {
          id: 15,
          schoolday: 3,
          subject: 12,
          nr: "III  09:55 – 10:40",
          period: "AM",
        },
        {
          id: 16,
          schoolday: 3,
          subject: 12,
          nr: "IV  10:45 – 11:30",
          period: "AM",
        },
        {
          id: 17,
          schoolday: 3,
          subject: 3,
          nr: "V  11:35 – 12:20",
          period: "AM",
        },
        {
          id: 18,
          schoolday: 3,
          subject: 2,
          nr: "VI  12:25 – 13:10",
          period: "AM",
        },
        {
          id: 19,
          schoolday: 4,
          subject: 2,
          nr: "I  08:00 – 08:45",
          period: "AM",
        },
        {
          id: 20,
          schoolday: 4,
          subject: 9,
          nr: "II  08:50 – 09:35",
          period: "AM",
        },
        {
          id: 21,
          schoolday: 4,
          subject: 10,
          nr: "III  09:55 – 10:40",
          period: "AM",
        },
        {
          id: 22,
          schoolday: 4,
          subject: 4,
          nr: "IV  10:45 – 11:30",
          period: "AM",
        },
        {
          id: 23,
          schoolday: 4,
          subject: 1,
          nr: "V  11:35 – 12:20",
          period: "AM",
        },
        {
          id: 24,
          schoolday: 5,
          subject: 1,
          nr: "I  08:00 – 08:45",
          period: "AM",
        },
        {
          id: 25,
          schoolday: 5,
          subject: 13,
          nr: "II  08:50 – 09:35",
          period: "AM",
        },
        {
          id: 26,
          schoolday: 5,
          subject: 2,
          nr: "III  09:55 – 10:40",
          period: "AM",
        },
        {
          id: 27,
          schoolday: 5,
          subject: 15,
          nr: "IV  10:45 – 11:30",
          period: "AM",
        },
        {
          id: 28,
          schoolday: 5,
          subject: 8,
          nr: "V  11:35 – 12:20",
          period: "AM",
        },
        {
          id: 29,
          schoolday: 5,
          subject: 6,
          nr: "VI  12:25 – 13:10",
          period: "AM",
        },
        {
          id: 30,
          schoolday: 1,
          subject: 7,
          nr: "I  14:00 – 14:45",
          period: "PM",
        },
        {
          id: 31,
          schoolday: 1,
          subject: 9,
          nr: "II  14:50 – 15:35",
          period: "PM",
        },
        {
          id: 32,
          schoolday: 1,
          subject: 6,
          nr: "III  15:55 – 16:40",
          period: "PM",
        },
        {
          id: 33,
          schoolday: 1,
          subject: 1,
          nr: "IV  16:45 – 17:30",
          period: "PM",
        },
        {
          id: 34,
          schoolday: 1,
          subject: 13,
          nr: "V  17:35 – 18:20",
          period: "PM",
        },
        {
          id: 35,
          schoolday: 1,
          subject: 4,
          nr: "VI  18:25 – 19:10",
          period: "PM",
        },
        {
          id: 36,
          schoolday: 2,
          subject: 5,
          nr: "I  14:00 – 14:45",
          period: "PM",
        },
        {
          id: 37,
          schoolday: 2,
          subject: 2,
          nr: "II  14:50 – 15:35",
          period: "PM",
        },
        {
          id: 38,
          schoolday: 2,
          subject: 1,
          nr: "III  15:55 – 16:40",
          period: "PM",
        },
        {
          id: 39,
          schoolday: 2,
          subject: 10,
          nr: "IV  16:45 – 17:30",
          period: "PM",
        },
        {
          id: 40,
          schoolday: 2,
          subject: 4,
          nr: "V  17:35 – 18:20",
          period: "PM",
        },
        {
          id: 41,
          schoolday: 2,
          subject: 3,
          nr: "VI  18:25 – 19:10",
          period: "PM",
        },
        {
          id: 42,
          schoolday: 3,
          subject: 7,
          nr: "I  14:00 – 14:45",
          period: "PM",
        },
        {
          id: 43,
          schoolday: 3,
          subject: 12,
          nr: "II  14:50 – 15:35",
          period: "PM",
        },
        {
          id: 44,
          schoolday: 3,
          subject: 12,
          nr: "III  15:55 – 16:40",
          period: "PM",
        },
        {
          id: 45,
          schoolday: 3,
          subject: 2,
          nr: "IV  16:45 – 17:30",
          period: "PM",
        },
        {
          id: 46,
          schoolday: 3,
          subject: 9,
          nr: "V  17:35 – 18:20",
          period: "PM",
        },
        {
          id: 47,
          schoolday: 3,
          subject: 15,
          nr: "VI  18:25 – 19:10",
          period: "PM",
        },
        {
          id: 48,
          schoolday: 4,
          subject: 1,
          nr: "I  14:00 – 14:45",
          period: "PM",
        },
        {
          id: 49,
          schoolday: 4,
          subject: 16,
          nr: "II  14:50 – 15:35",
          period: "PM",
        },
        {
          id: 50,
          schoolday: 4,
          subject: 4,
          nr: "III  15:55 – 16:40",
          period: "PM",
        },
        {
          id: 51,
          schoolday: 4,
          subject: 10,
          nr: "IV  16:45 – 17:30",
          period: "PM",
        },
        {
          id: 52,
          schoolday: 4,
          subject: 2,
          nr: "V  17:35 – 18:20",
          period: "PM",
        },
        {
          id: 53,
          schoolday: 5,
          subject: 1,
          nr: "I  14:00 – 14:45",
          period: "PM",
        },
        {
          id: 54,
          schoolday: 5,
          subject: 13,
          nr: "II  14:50 – 15:35",
          period: "PM",
        },
        {
          id: 55,
          schoolday: 5,
          subject: 9,
          nr: "III  15:55 – 16:40",
          period: "PM",
        },
        {
          id: 56,
          schoolday: 5,
          subject: 15,
          nr: "IV  16:45 – 17:30",
          period: "PM",
        },
        {
          id: 57,
          schoolday: 5,
          subject: 2,
          nr: "V  17:35 – 18:20",
          period: "PM",
        },
        {
          id: 58,
          schoolday: 5,
          subject: 8,
          nr: "VI  18:25 – 19:10",
          period: "PM",
        },
      ],
    }
  },
  actions: {
    addTime(time) {
      this.timetable.push(time)
    },
    updateTime(time) {
      this.timetable.push(time)
    },
    deleteTime(id) {
      this.timetable = this.timetable.filter(time => time.id !== id)
    }
  },
  getters: {
    getTimetable(state) {
      return state.timetable
    }
  }
})