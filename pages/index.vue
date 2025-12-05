<template>
  <div>
    <CourseHero />
    <div class="container mx-auto ">
      <div class="max-w-[760px] my-4">
        <CourseList />
        <CourseComplateProgrammer />
        <CourseInstructorProfile />
        <CourseHorizontalList />
        <div class="mx-auto w-full">
        <UiAccordion>
          <UiAccordionItem
            v-for="(item, index) in accordionData"
            :key="index"
            :title="item.title"
            :lectureCount="item.lectureCount"
            :duration="item.duration"
            :childrenList="item.childrenList"
            :index="index"
          />
        </UiAccordion>
      </div>
      <CourseCourseReviews />
      </div>
    </div>
  </div>
</template>

<script setup>
// 页面元数据
useHead({
  title: '首页 - Test Italy',
  meta: [
    { name: 'description', content: 'Vue3 + Nuxt + Tailwind CSS 项目首页' }
  ]
})
// 示例数据：10 个 Item
const accordionData = ref([
  {
    title: 'Day 1 - Beginner - Working with Variables in Python to Manage Data',
    lectureCount: 12,
    duration: '1 小时 12 分钟',
    childrenList: [
      { title: "What you're going to get from this course", preview: true, duration: '03:27' },
      { title: 'Introduction to Python Variables', preview: false, duration: '05:15' },
      { title: 'Working with Different Data Types', preview: true, duration: '08:42' }
    ]
  },
  {
    title: 'Day 2 - Intermediate - Data Structures and Algorithms',
    lectureCount: 8,
    duration: '45 分钟',
    childrenList: [
      { title: 'Understanding Lists and Tuples', preview: true, duration: '06:30' },
      { title: 'Dictionary Operations', preview: false, duration: '07:20' }
    ]
  },
  {
    title: 'Day 3 - Advanced - Object-Oriented Programming',
    lectureCount: 15,
    duration: '2 小时 30 分钟',
    childrenList: [
      { title: 'Classes and Objects Basics', preview: true, duration: '10:15' },
      { title: 'Inheritance and Polymorphism', preview: false, duration: '12:30' },
      { title: 'Encapsulation Concepts', preview: true, duration: '09:45' },
      { title: 'Advanced OOP Patterns', preview: false, duration: '11:20' }
    ]
  },
  {
    title: 'Day 4 - Expert - Design Patterns',
    lectureCount: 10,
    duration: '1 小时 45 分钟',
    childrenList: [
      { title: 'Introduction to Design Patterns', preview: true, duration: '08:50' }
    ]
  },
  {
    title: 'Day 5 - Master - Advanced Python Features',
    lectureCount: 6,
    duration: '1 小时',
    childrenList: [
      { title: 'Decorators and Generators', preview: true, duration: '12:15' },
      { title: 'Context Managers', preview: false, duration: '09:30' },
      { title: 'Metaclasses Explained', preview: true, duration: '15:20' }
    ]
  },
  {
    title: 'Day 6 - Professional - Testing and Debugging',
    lectureCount: 9,
    duration: '1 小时 20 分钟',
    childrenList: [
      { title: 'Unit Testing with pytest', preview: true, duration: '10:45' },
      { title: 'Debugging Techniques', preview: false, duration: '08:30' }
    ]
  },
  {
    title: 'Day 7 - Expert - Web Development with Flask',
    lectureCount: 14,
    duration: '2 小时 15 分钟',
    childrenList: [
      { title: 'Flask Setup and Basics', preview: true, duration: '07:20' },
      { title: 'Routing and Views', preview: false, duration: '09:15' },
      { title: 'Template Engine', preview: true, duration: '11:30' },
      { title: 'Database Integration', preview: false, duration: '13:45' },
      { title: 'RESTful API Development', preview: true, duration: '10:25' }
    ]
  },
  {
    title: 'Day 8 - Advanced - Database Integration',
    lectureCount: 7,
    duration: '1 小时 10 分钟',
    childrenList: [
      { title: 'SQLAlchemy Introduction', preview: true, duration: '12:40' }
    ]
  },
  {
    title: 'Day 9 - Master - API Development',
    lectureCount: 11,
    duration: '1 小时 50 分钟',
    childrenList: [
      { title: 'REST API Design Principles', preview: true, duration: '14:20' },
      { title: 'Authentication and Authorization', preview: false, duration: '11:15' },
      { title: 'API Documentation', preview: true, duration: '09:30' }
    ]
  },
  {
    title: 'Day 10 - Professional - Deployment and DevOps',
    lectureCount: 5,
    duration: '50 分钟',
    childrenList: [
      { title: 'Docker Containerization', preview: true, duration: '08:15' },
      { title: 'CI/CD Pipeline Setup', preview: false, duration: '07:30' }
    ]
  }
])
</script>

