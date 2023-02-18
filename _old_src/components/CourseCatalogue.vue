
  <template>
    <table class="table table-striped table-bordered">
        <tr border="1">
          <th>CourseId</th>
          <th>CourseItem</th>
          <!--<th>Completed</th>-->
          <th>Delete</th>
        </tr>
        <tr v-for="course in courses">
          <td>{{ course.id }}</td>
          <td class="item">{{ course.courseTitle }}</td>
          <!--<td class="item"><span :class="{ completed: course.completed }">{{ course.item }}</span></td>-->
          <!--<td><span @click.stop="toggleCompleted(course.id)">&#10004;</span></td>-->
          <td><span @click="deleteCourse(course.id)" class="x">&#10060;</span></td>
        </tr>
    </table>
  </template>




  <script lang="ts">
  import { defineComponent } from "vue";
  import { useCoursesStore } from "../stores/courses";
  import { storeToRefs } from "pinia";
  
  export default defineComponent({
    setup() {
      const store = useCoursesStore();
      const { courses } = storeToRefs(store);
      const { deleteCourse } = store;
      return { store, courses, deleteCourse };
    },
    created() {
      this.store.reloadCourses();
    }
  });
  </script>
  
  <style scoped>
  span {
    margin: 0 10px;
    cursor: pointer;
  }
  .completed {
    text-decoration: line-through;
  }
  .list {
    display: flex;
    justify-content: center;
  }
  .item {
    display: flex;
    font-size: 1.5em;
    justify-content: space-between;
    /*width: 50vw;*/
    padding: 5px;
  }
  </style>