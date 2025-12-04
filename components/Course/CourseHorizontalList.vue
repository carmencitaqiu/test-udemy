<template>
  <div class="w-full py-6 border-b border-solid border-gray-200">
    <!-- 标题 -->
    <h2 class="text-2xl font-medium mb-6">
        <span class="text-blue-3"> {{ instructorName }}</span>
      的更多课程
    </h2>

    <!-- 课程卡片列表（水平排列） -->
    <div class="grid grid-cols-3 gap-6">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  instructorName: {
    type: String,
    default: 'Dr. Angela Yu, Developer and Lead Instructor',
  },
});

// 长度为3的课程数组
const courses = [
  {
    id: 1,
    thumbnail: '/images/fullstack-course.jpg',
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
    thumbnail: '/images/ios-course.jpg',
    title: 'iOS & Swift - The Complete iOS App Development Bootcamp',
    instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
    rating: 4.6,
    ratingCount: 95795,
    totalHours: 60.5,
    lectures: 542,
    level: '所有级别',
    price: 174.99,
  },
  {
    id: 3,
    thumbnail: '/images/flutter-course.jpg',
    title: 'The Complete Flutter Development Bootcamp with Dart',
    instructor: 'Dr. Angela Yu, Developer and Lead Instructor',
    rating: 4.5,
    ratingCount: 57946,
    totalHours: 29,
    lectures: 218,
    level: '所有级别',
    price: 174.99,
  },
];
</script>

