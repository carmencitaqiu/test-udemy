<template>
  <div>
    <CourseHero />
    <div class="container mx-auto ">
      <div class="max-w-[760px] my-4">
        <CourseList />
        <CourseComplateProgrammer />
        <CourseInstructorProfile />
        <CourseReviews
          :courseRating="4.7"
          totalRatings="403K"
          :reviews="reviewsData"
        />
        <CourseHorizontalList />
        <div class="mx-auto w-full">
        <UiAccordion :items="accordionData" :defaultVisibleCount="10">
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
  },
  {
    title: 'Day 11 - Expert - Machine Learning',
    lectureCount: 13,
    duration: '2 小时 20 分钟',
    childrenList: [
      { title: 'Introduction to Machine Learning', preview: true, duration: '11:30' }
    ]
  }
])

// 评论数据
const reviewsData = ref([
  {
    reviewerName: 'Mohd Kashif A.',
    reviewText: "I really enjoyed the 100 Projects in 100 Days course. It helped me learn Python by actually building things, from small automation scripts to games and data analysis projects. The instructor's teaching style is clear and engaging, and the projects are well-structured. Each project builds on previous concepts, making it easy to follow along. The course covers a wide range of topics from basics to advanced concepts, which is perfect for both beginners and intermediate learners.",
    timeAgo: '2 周前',
    rating: 5
  },
  {
    reviewerName: 'Aime J.',
    reviewText: "This course exceeded my expectations! The hands-on approach with real projects made learning Python so much more effective than just reading theory. I've completed over 50 projects so far and each one has taught me something new. The instructor explains everything clearly and provides great support. The course structure is logical and the difficulty progression is just right. Highly recommend to anyone wanting to learn Python through practical application.",
    timeAgo: '3 周前',
    rating: 5
  },
  {
    reviewerName: 'Priyanka Z.',
    reviewText: "Excellent course for learning Python! The project-based approach is fantastic. I've learned so much by actually coding rather than just watching videos. The instructor is knowledgeable and explains concepts well. The projects are diverse and cover many real-world scenarios. This course has helped me build a strong portfolio of Python projects.",
    timeAgo: '1 个月前',
    rating: 5
  },
  {
    reviewerName: 'Jesse D.',
    reviewText: "Great course! The 100 projects format is brilliant. Each project is well-explained and builds your skills progressively. I've learned Python fundamentals, web scraping, data analysis, and much more. The instructor's teaching style is engaging and the code examples are clear. This is one of the best Python courses I've taken.",
    timeAgo: '1 周前',
    rating: 5
  }
])
</script>

