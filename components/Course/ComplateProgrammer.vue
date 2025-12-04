<template>
  <div class="w-full border border-gray-200 border-solid rounded-lg p-6 my-8">
    <h2 class="text-2xl font-medium">The Complete Programmer</h2>
    <CourseComplateProgrammerItem
      v-for="programmer in programmers"
      :key="programmer.id"
      :programmer="programmer"
    />
  </div>
</template>

<script setup>
// 这里维护一个 Programmer 数组
const programmers = [
  {
    id: 1,
    thumbnail: '/images/python-course.jpg',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
    rating: 4.7,
    ratingCount: 458749,
    totalHours: 62,
    lectures: 374,
    level: '所有级别',
    price: 124.99,
  },
  {
    id: 2,
    thumbnail: '/images/javascript-course.jpg',
    title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann, JavaScript Developer',
    rating: 4.8,
    ratingCount: 285634,
    totalHours: 69,
    lectures: 400,
    level: '所有级别',
    price: 89.99,
  },
  {
    id: 3,
    thumbnail: '/images/react-course.jpg',
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    instructor: 'Maximilian Schwarzmüller, Professional Web Developer',
    rating: 4.6,
    ratingCount: 198752,
    totalHours: 50,
    lectures: 300,
    level: '所有级别',
    price: 94.99,
  },
];
</script>
