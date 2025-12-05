<template>
    <!-- Hero Banner - 满屏深色背景 -->
    <div class="bg-black text-white w-full pb-4">
      <div class="container mx-auto px-6 py-8 relative">
        <div class="max-w-[760px]">
          <!-- 面包屑导航 -->
          <UiBreadcrumb :items="breadcrumbItems" theme="dark" class="mb-6" />
  
          <!-- 课程标题 -->
          <h1 class="text-4xl font-medium leading-[1.2]  mb-4">
            100 Days of Code™: The Complete Python Pro Bootcamp
          </h1>
  
          <!-- 课程描述 -->
          <p class="text-[19px] leading-[1.4] mb-6">
            Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
          </p>
  
          <!-- 畅销标签 -->
          <div class="inline-block mb-4">
            <CommonTag label="热门课程" type="hot" />
          </div>
  
          <!-- 创建者信息 -->
          <div class="mt-2 text-sm">
            <span class="text-gray-300">创建者 </span>
            <a href="#" class="text-purple-2 underline hover:text-purple-300">
              Dr. Angela Yu, Developer and Lead Instructor
            </a>
          </div>
  
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-gray-300">
            <!-- 更新时间图标 -->
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>上次更新时间：2025/11</span>
            </div>
  
            <!-- 语言图标 -->
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              <span>英语</span>
            </div>
  
            <!-- 字幕图标 -->
            <div class="flex items-center space-x-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
              <span>字幕：中文 [自动], 英语,</span>
              <a href="#" class="text-purple-2 underline hover:text-purple-300 whitespace-nowrap">
                还有 22 种
              </a>
            </div>
          </div>
        </div>
        <CourseBusinessCard />
      <!-- 课程统计信息栏 -->
      <CourseStatsBar />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // 导入面包屑组件（如果需要）
  // import Breadcrumb from '@/components/ui/Breadcrumb.vue'
  
  // 面包屑数据
  const breadcrumbItems = [
    { label: '开发', href: '/category/development' },
    { label: '编程语言', href: '/category/programming-languages' },
    { label: 'Python', href: '/category/python' }
  ]
  </script>
  
  <style scoped>
  /* 自定义样式 */
  </style>