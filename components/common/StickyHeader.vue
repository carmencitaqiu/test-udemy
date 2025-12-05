<template>
  <div
    class="bg-black text-white h-[60px] fixed top-0 left-0 w-full z-10 rounded-none shadow-[0_4px_15px_rgba(0,0,0,0.05)] px-[30px] py-0 flex items-center"
  >
    <div class="flex flex-col">
      <!-- 课程标题 -->
      <h1 class="text-lg font-medium text-white whitespace-nowrap">
        100 Days of Code™: The Complete Python Pro Bootcamp
      </h1>
      <div class="flex items-center space-x-2">
        <!-- 热门课程标签 -->
        <CommonTag label="热门课程" type="hot" />

        <!-- 评分 -->
        <div class="flex items-center gap-2">
          <span class="text-sm font-bold text-white">4.7</span>

          <CommonStar :rating="4.7" />

          <!-- 学生数量 -->
          <span class="text-sm text-white">1700582名学生</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑（如果需要）
</script>
