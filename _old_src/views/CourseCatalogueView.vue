<script setup lang="ts">
import CourseList from '@/components/CourseList.vue';
import CourseForm from '@/components/CourseForm.vue';
</script>

<template>
  <div>Users profile</div>

  <div>Search for courses</div>

  
  <main>
    <header>
      Available courses:
    </header>
    <CourseCatalogue />
  </main>
</template>
