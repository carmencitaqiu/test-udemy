<template>
  <div class="w-full">
    <h2 class="text-2xl font-medium">学生还购买了</h2>
    
    <!-- 课程列表 -->
    <div class="bg-white rounded-lg shadow-sm">
      <CourseItem 
        v-for="course in courses" 
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
// 示例数据
const courses = [
  {
    id: 1,
    thumbnail: '/images/course-thumbnail.jpg',
    title: 'The Complete Python Bootcamp From Zero to Hero in Python',
    isAdvanced: true,
    totalHours: 22.5,
    updateDate: '2025/8',
    rating: 4.6,
    students: 2110578,
    price: 199.99
  },
  {
    id: 2,
    thumbnail: '/images/course-thumbnail-2.jpg',
    title: 'JavaScript: The Complete Guide',
    isAdvanced: false,
    totalHours: 18.5,
    updateDate: '2025/7',
    rating: 4.7,
    students: 1500000,
    price: 179.99
  }
]
</script>

