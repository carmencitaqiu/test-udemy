<template>
    <div class="flex items-center min-w-[760px] h-[95px] absolute -bottom-20 left-4 overflow-hidden border border-gray-200 rounded-lg border-solid">
      <div class="flex items-center gap-4 bg-blue-3 text-white px-9 py-4 flex-shrink-0 h-full rounded-l-lg">
        <div class="flex flex-col gap-1 h-full items-center justify-center">
          <span class="font-medium text-base">高级</span>
          
        </div>
      </div>
      <div class="h-full max-w-72 flex items-center justify-center px-4 bg-white">
        <p class="text-sm text-gray-900">
            通过 Udemy 方案访问26,000多门最受好评的课程。
            <a href="#" class="underline hover:text-purple-200 text-blue-3">查看计划和定价</a>
        </p>
      </div>

      <div class="flex items-center flex-col justify-between py-2 bg-white text-gray-900 px-6  flex-1 h-full">
        <div class="text-2xl font-bold">4.7</div>
        <CommonStar :rating="rating" :showNumber="showNumber"/>
        <a href="#" class="text-sm text-gray-900 underline ">
          402,578 个评分
        </a>
      </div>

      <div class="flex items-center flex-col justify-center  bg-white text-gray-900 px-6 py-4 flex-shrink-0 h-full rounded-r-lg">
        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <circle cx="9" cy="7" r="4" />
          <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
          <circle cx="17" cy="7" r="4" />
          <path d="M11 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        </svg>
        <div class="text-base font-semibold">1,700,210</div>
        <div class="text-sm text-gray-600">学习者</div>
      </div>
    </div>
</template>

<script setup>
// 可以添加 props 来接收动态数据
const props = defineProps({
  rating: {
    type: [Number, String],
    default: '4.7'
  },
  ratingCount: {
    type: [Number, String],
    default: '402,578'
  },
  learnerCount: {
    type: [Number, String],
    default: '1,700,210'
  }
})
const rating = ref(4.7)
const showNumber = ref(false)
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

