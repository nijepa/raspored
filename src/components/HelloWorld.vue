<template>
  <video-background :src="require('@/assets/dolphin.mp4')" :sources="[require('@/assets/dolphin.mp4')]" :poster="require('@/assets/logo.png')">
          </video-background>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ul>
      <li v-for="date in dates" :key="date">
        {{ date }}
      </li>
      <ul v-for="(schooldayName, subjectName) in hoursByEmployee" :key="subjectName">
          <li>{{ subjectName }}</li>
          <li v-for="date in dates" :key="date">{{ schooldayName[date] }}</li> 
        </ul>
    </ul> -->
    <div class="group">
      <input
        type="radio"
        name="rb"
        id="rb1"
        value="AM"
        v-model="period"
        @change="togglePeriod('AM')"
      />
      <label for="rb1">PRE PODNE</label>
      <input
        type="radio"
        name="rb"
        id="rb2"
        value="PM"
        v-model="period"
        @change="togglePeriod('PM')"
      />
      <label for="rb2">POSLE PODNE</label>
    </div>
    <!-- <input type="radio" id="one" value="AM" v-model="period" @change="togglePeriod('AM')">
    <label for="one">PRE PODNE</label>
    <br>
    <input type="radio" id="two" value="PM" v-model="period" @change="togglePeriod('PM')">
    <label for="two">POSLE PODNE</label>
    <br> -->

    <table>
      <thead>
        <tr>
          <th>{{ period === "AM" ? "PRE PODNE" : "POSLE PODNE" }}</th>
          <th
            v-for="date in dates"
            :key="date.id"
            :class="period === 'AM' ? 'day' : 'night'"
          >
            {{ date }}
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(schooldayName, subjectName) in hoursByEmployee"
          :key="subjectName"
        >
          <!-- <transition-group tag="tr" name="list" appear>  -->
          <td>{{ subjectName }}</td>

          <td
            v-for="date in dates"
            :key="date.id"
            @click="cellClick(schooldayName[id])"
          >
            {{ schooldayName[date] }}
          </td>
          <!-- </transition-group>  -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import VideoBackground from 'vue-responsive-video-background-player';
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    VideoBackground
  },
  setup(props, context) {
    //const cellHovered = ref(Number())
    const schooldays = ref([
      { id: 1, name: "Ponedeljak" },
      { id: 2, name: "Utorak" },
      { id: 3, name: "Sreda" },
      { id: 4, name: "Četvrtak" },
      { id: 5, name: "Petak" },
      { id: 6, name: "Subota" },
      { id: 7, name: "Nedelja" },
    ]);
    const subjects = ref([
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
    ]);
    const timetable = ref([
      {
        id: 1,
        schoolday: 1,
        subject: 1,
        nr: "I  08:00 – 08:45",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 2,
        schoolday: 1,
        subject: 15,
        nr: "II  08:50 – 09:35",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 3,
        schoolday: 1,
        subject: 3,
        nr: "III  09:55 – 10:40",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 4,
        schoolday: 1,
        subject: 2,
        nr: "IV  10:45 – 11:30",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 5,
        schoolday: 1,
        subject: 4,
        nr: "V  11:35 – 12:20",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 6,
        schoolday: 1,
        subject: 9,
        nr: "VI  12:25 – 13:10",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 28,
        schoolday: 1,
        subject: 16,
        nr: "VII  13:15 – 14:00",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 7,
        schoolday: 2,
        subject: 6,
        nr: "I  08:00 – 08:45",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 8,
        schoolday: 2,
        subject: 2,
        nr: "II  08:50 – 09:35",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 9,
        schoolday: 2,
        subject: 1,
        nr: "III  09:55 – 10:40",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 10,
        schoolday: 2,
        subject: 12,
        nr: "IV  10:45 – 11:30",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 11,
        schoolday: 2,
        subject: 12,
        nr: "V  11:35 – 12:20",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 12,
        schoolday: 3,
        subject: 5,
        nr: "I  08:00 – 08:45",
        period: "AM",
        startAt: "08:00",
      },
      {
        id: 13,
        schoolday: 3,
        subject: 5,
        nr: "II  08:50 – 09:35",
        period: "AM",
      },
      {
        id: 14,
        schoolday: 3,
        subject: 11,
        nr: "III  09:55 – 10:40",
        period: "AM",
      },
      {
        id: 15,
        schoolday: 3,
        subject: 1,
        nr: "IV  10:45 – 11:30",
        period: "AM",
      },
      {
        id: 16,
        schoolday: 3,
        subject: 2,
        nr: "V  11:35 – 12:20",
        period: "AM",
      },
      {
        id: 17,
        schoolday: 4,
        subject: 6,
        nr: "I  08:00 – 08:45",
        period: "AM",
      },
      {
        id: 18,
        schoolday: 4,
        subject: 1,
        nr: "II  08:50 – 09:35",
        period: "AM",
      },
      {
        id: 19,
        schoolday: 4,
        subject: 9,
        nr: "III  09:55 – 10:40",
        period: "AM",
      },
      {
        id: 20,
        schoolday: 4,
        subject: 2,
        nr: "IV  10:45 – 11:30",
        period: "AM",
      },
      {
        id: 21,
        schoolday: 4,
        subject: 4,
        nr: "V  11:35 – 12:20",
        period: "AM",
      },
      {
        id: 22,
        schoolday: 4,
        subject: 3,
        nr: "VI  12:25 – 13:10",
        period: "AM",
      },
      {
        id: 23,
        schoolday: 5,
        subject: 8,
        nr: "I  08:00 – 08:45",
        period: "AM",
      },
      {
        id: 24,
        schoolday: 5,
        subject: 11,
        nr: "II  08:50 – 09:35",
        period: "AM",
      },
      {
        id: 25,
        schoolday: 5,
        subject: 2,
        nr: "III  09:55 – 10:40",
        period: "AM",
      },
      {
        id: 26,
        schoolday: 5,
        subject: 7,
        nr: "IV  10:45 – 11:30",
        period: "AM",
      },
      {
        id: 27,
        schoolday: 5,
        subject: 10,
        nr: "V  11:35 – 12:20",
        period: "AM",
      },
      { id: 1, schoolday: 1, subject: 4, nr: "I  14:00 – 14:45", period: "PM" },
      {
        id: 2,
        schoolday: 1,
        subject: 15,
        nr: "II  14:50 – 15:35",
        period: "PM",
      },
      {
        id: 3,
        schoolday: 1,
        subject: 2,
        nr: "III  15:55 – 16:40",
        period: "PM",
      },
      {
        id: 4,
        schoolday: 1,
        subject: 3,
        nr: "IV  16:45 – 17:30",
        period: "PM",
      },
      { id: 5, schoolday: 1, subject: 9, nr: "V  17:35 – 18:20", period: "PM" },
      {
        id: 6,
        schoolday: 1,
        subject: 1,
        nr: "VI  18:25 – 19:10",
        period: "PM",
      },
      { id: 7, schoolday: 2, subject: 6, nr: "I  14:00 – 14:45", period: "PM" },
      {
        id: 8,
        schoolday: 2,
        subject: 2,
        nr: "II  14:50 – 15:35",
        period: "PM",
      },
      {
        id: 9,
        schoolday: 2,
        subject: 1,
        nr: "III  15:55 – 16:40",
        period: "PM",
      },
      {
        id: 10,
        schoolday: 2,
        subject: 12,
        nr: "IV  16:45 – 17:30",
        period: "PM",
      },
      {
        id: 11,
        schoolday: 2,
        subject: 12,
        nr: "V  17:35 – 18:20",
        period: "PM",
      },
      {
        id: 12,
        schoolday: 3,
        subject: 5,
        nr: "I  14:00 – 14:45",
        period: "PM",
      },
      {
        id: 13,
        schoolday: 3,
        subject: 5,
        nr: "II  14:50 – 15:35",
        period: "PM",
      },
      {
        id: 14,
        schoolday: 3,
        subject: 11,
        nr: "III  15:55 – 16:40",
        period: "PM",
      },
      {
        id: 15,
        schoolday: 3,
        subject: 1,
        nr: "IV  16:45 – 17:30",
        period: "PM",
      },
      {
        id: 16,
        schoolday: 3,
        subject: 2,
        nr: "V  17:35 – 18:20",
        period: "PM",
      },
      {
        id: 29,
        schoolday: 3,
        subject: 16,
        nr: "VI  18:25 – 19:10",
        period: "PM",
      },
      {
        id: 17,
        schoolday: 4,
        subject: 9,
        nr: "I  14:00 – 14:45",
        period: "PM",
      },
      {
        id: 18,
        schoolday: 4,
        subject: 4,
        nr: "II  14:50 – 15:35",
        period: "PM",
      },
      {
        id: 19,
        schoolday: 4,
        subject: 2,
        nr: "III  15:55 – 16:40",
        period: "PM",
      },
      {
        id: 20,
        schoolday: 4,
        subject: 1,
        nr: "IV  16:45 – 17:30",
        period: "PM",
      },
      {
        id: 21,
        schoolday: 4,
        subject: 3,
        nr: "V  17:35 – 18:20",
        period: "PM",
      },
      {
        id: 22,
        schoolday: 4,
        subject: 6,
        nr: "VI  18:25 – 19:10",
        period: "PM",
      },
      {
        id: 23,
        schoolday: 5,
        subject: 8,
        nr: "I  14:00 – 14:45",
        period: "PM",
      },
      {
        id: 24,
        schoolday: 5,
        subject: 11,
        nr: "II  14:50 – 15:35",
        period: "PM",
      },
      {
        id: 25,
        schoolday: 5,
        subject: 2,
        nr: "III  15:55 – 16:40",
        period: "PM",
      },
      {
        id: 26,
        schoolday: 5,
        subject: 7,
        nr: "IV  16:45 – 17:30",
        period: "PM",
      },
      {
        id: 27,
        schoolday: 5,
        subject: 10,
        nr: "V  17:35 – 18:20",
        period: "PM",
      },
    ]);
    const period = ref("AM");
    const times = computed(() => {
      return timetable.value.map((t) => {
        let schooldayName = schooldays.value.filter(
          (s) => s.id === t.schoolday
        )[0].name;
        let subjectName = subjects.value.filter((s) => s.id === t.subject)[0]
          .name;
        return { ...t, schooldayName, subjectName };
      });
    });
    //const switchPeriod = computed(() => period.value ? 'AM' : 'PM')
    //console.log(switchPeriod.value)
    const header = computed(() =>
      times.value
        .sort((a, b) => a.nr - b.nr)
        .filter((t) => t.period === period.value)
    );

    const hoursByEmployee = computed(() => {
      return header.value.reduce((r, o) => {
        r[o.nr] ??= {};
        r[o.nr][o.schooldayName] = o.subjectName;
        r[o.nr][o.idn] = o.id;
        return r;
      }, {});
    });
    const dates = computed(() => {
      const dates = [...new Set(header.value.map((r) => r.schooldayName))];
      return dates; //.sort((a,b) => a - b)
    });
    console.log(header);
    /*const res = [];
    const result = {};
    header.value.forEach((e) => {
      result[e.nr] = header.value.filter((h) => h.nr === e.nr);
      res.push(header.value.filter((h) => h.nr === e.nr));
    });*/

    const cellClick = (id) => {
      console.log(id);
    };

    /* const mouseOver = (idx) => {
      cellHovered.value = idx
      console.log(cellHovered.value)
    } */

    const togglePeriod = (per) => {
      period.value = per;
      context.emit("customChange");
    };

    return {
      schooldays,
      subjects,
      timetable,
      times,
      hoursByEmployee,
      dates,
      cellClick,
      //mouseOver,
      togglePeriod,
      period,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
$clouds: #ecf0f1;
$midnight: rgb(43, 61, 79);
$wisteria: #8e44ad;
$turquoise: rgb(0, 204, 204);
$day: rgb(243, 247, 12);
$wisterian: #e095f7;
.vue-responsive-videobg {
  height: 100vh;
  position: absolute !important;
  top: 0;
  z-index: -1;
}
svg {
  position: absolute;
  top: 0;
  z-index: 1;
}
.hello {
  position: absolute;
  top: 20%;
  left: 20%;
}
.day {
  background: rgba(243, 247, 12, .7) !important;
}
.night {
  background: rgba(43, 61, 79, .7) !important;
  color: $wisterian;
}
h1 {
  text-transform: uppercase;
  font-family: "Concert One", cursive;
  font-weight: 700;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
table {
  font-family: "Concert One", cursive;
  margin: 25px auto;
  border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid $turquoise;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05),
    0px 20px 20px rgba(0, 0, 0, 0.05), 0px 30px 20px rgba(0, 0, 0, 0.05);
  tr {
    &:hover {
      //background: #e223f3;

      td {
        //color: rgb(65, 208, 252);
      }
    }
  }
  th,
  td {
    color: $wisteria;
    border: 1px solid #eee;
    padding: 12px 35px;
    border-collapse: collapse;
    border-right: 1px solid $wisteria;
    //border-bottom: 1px solid $wisteria;
    font-size: 1.2em;
    background: rgba(0, 204, 204, .8);
  }
  th {
    background: rgba(0, 204, 204, .8);
    color: $wisteria;
    text-transform: uppercase;
    -webkit-box-shadow: 0px -2px 15px 5px rgba(0, 0, 0, 0.82);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1),
      0px -10px 20px rgba(0, 0, 0, 0.05), 0px -20px 20px rgba(0, 0, 0, 0.05),
      0px -30px 20px rgba(0, 0, 0, 0.05);

    letter-spacing: 0.1em;
    &.last {
      border-right: none;
    }
  }
  td:last-child {
    border-right: 1px solid transparent;
  }
  th:last-child {
    border-right: 1px solid transparent;
  }
  /*   tbody:hover td {
    color: transparent;
    text-shadow: 0 0 3px #aaa;
  }

  tbody:hover tr:hover td {
    //color: #444;
    text-shadow: 0 1px 0 #fff;
  }  */
}
.hovered {
  background: violet;
}

.group {
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  justify-content: center;
  font-family: "Concert One", cursive;
}
input[type="checkbox"],
input[type="radio"] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
label {
  position: relative;
  margin-right: 1em;
  padding-left: 2em;
  padding-right: 1em;
  line-height: 2;
  cursor: pointer;
  &:before {
    box-sizing: border-box;
    content: " ";
    position: absolute;
    top: 0.3em;
    left: 0;
    display: block;
    width: 1.4em;
    height: 1.4em;
    border: 2px solid $wisteria;
    border-radius: 0.25em;
    z-index: -1;
  }
}
input[type="radio"] + label::before {
  border-radius: 1em;
}
/* Checked */
input[type="checkbox"]:checked + label,
input[type="radio"]:checked + label {
  padding-left: 1em;
  color: $clouds;
  &:before {
    top: 0;
    width: 100%;
    height: 2em;
    background: $wisteria;
  }
}

/* Transition */
label,
label::before {
  -webkit-transition: 0.25s all ease;
  -o-transition: 0.25s all ease;
  transition: 0.25s all ease;
}

.list-enter-from {
  opacity: 0;
  transform: scale(0.6);
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
}
.list-enter-active {
  transition: all 0.5s ease;
}
.list-leave-from {
  opacity: 1;
  transform: scale(1);
}
.list-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
.list-leave-active {
  transition: all 0.5s ease;
  position: absolute;
}
.list-move {
  transition: all 0.5s ease;
}
</style>
