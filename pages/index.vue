<template>
  <div>
    <CourseHero />
    <div class="container mx-auto ">
      <div class="max-w-[760px] my-4">
        <CourseList />
        <CourseComplateProgrammer />
        <CourseHorizontalList />
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
</script>

