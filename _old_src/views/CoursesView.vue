<script setup lang="ts">
import CourseList from '@/components/CourseList.vue';
import CourseForm from '@/components/CourseForm.vue';
</script>

<template>
    <header>
      Add course:
    </header>
    <CourseForm />

  <main>
    <header>
      Available courses:
    </header>
    <CourseList />
  </main>
</template>
