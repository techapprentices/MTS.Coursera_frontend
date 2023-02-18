<script setup lang="ts">
import TokenStorage from '@/token'

export default defineComponent({
    setup() {
      const store = useCoursesStore();
      const { courses } = storeToRefs(store);
      const { deleteCourse } = store;
      return { store, courses, deleteCourse };
    },
    created() {
      this.store.reloadCourses();

        console.log("first init of token")
        TokenStorage.setToken('eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTY3NjI5NzA1MywiZXhwIjoxNjc2MzAwNjUzfQ.dSvbEqHfy5W5rJW_p9ixO5HLAOBd9f8icLOFI3qs2xY');
        console.log("token now is " + TokenStorage.getToken())

    }
  });

</script>


<template>
hello for example

your token is {{ TokenStorage.getToken() }}
</template>


