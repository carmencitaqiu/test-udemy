<template>
  <div>
    <CourseHero />
    <div class="container mx-auto ">
      <div class="max-w-[760px] my-4">
        <CourseList />
        <CourseComplateProgrammer />
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
          >
            <!-- 可选：自定义子项渲染 -->
            <template #child="{ item: childItem }">
              <div class="flex items-center">
                <span class="mr-2">•</span>
                <span>{{ childItem }}</span>
              </div>
            </template>
          </UiAccordionItem>
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
    childrenList: ['子项 1-1', '子项 1-2', '子项 1-3']
  },
  {
    title: 'Day 2 - Intermediate - Data Structures and Algorithms',
    lectureCount: 8,
    duration: '45 分钟',
    childrenList: ['子项 2-1', '子项 2-2']
  },
  {
    title: 'Day 3 - Advanced - Object-Oriented Programming',
    lectureCount: 15,
    duration: '2 小时 30 分钟',
    childrenList: ['子项 3-1', '子项 3-2', '子项 3-3', '子项 3-4']
  },
  {
    title: 'Day 4 - Expert - Design Patterns',
    lectureCount: 10,
    duration: '1 小时 45 分钟',
    childrenList: ['子项 4-1']
  },
  {
    title: 'Day 5 - Master - Advanced Python Features',
    lectureCount: 6,
    duration: '1 小时',
    childrenList: ['子项 5-1', '子项 5-2', '子项 5-3']
  },
  {
    title: 'Day 6 - Professional - Testing and Debugging',
    lectureCount: 9,
    duration: '1 小时 20 分钟',
    childrenList: ['子项 6-1', '子项 6-2']
  },
  {
    title: 'Day 7 - Expert - Web Development with Flask',
    lectureCount: 14,
    duration: '2 小时 15 分钟',
    childrenList: ['子项 7-1', '子项 7-2', '子项 7-3', '子项 7-4', '子项 7-5']
  },
  {
    title: 'Day 8 - Advanced - Database Integration',
    lectureCount: 7,
    duration: '1 小时 10 分钟',
    childrenList: ['子项 8-1']
  },
  {
    title: 'Day 9 - Master - API Development',
    lectureCount: 11,
    duration: '1 小时 50 分钟',
    childrenList: ['子项 9-1', '子项 9-2', '子项 9-3']
  },
  {
    title: 'Day 10 - Professional - Deployment and DevOps',
    lectureCount: 5,
    duration: '50 分钟',
    childrenList: ['子项 10-1', '子项 10-2']
  }
])
</script>

