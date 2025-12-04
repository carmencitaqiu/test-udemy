<template>
  <UiCard padding="lg" class="max-w-2xl absolute top-8 right-0 w-[340px]">
    <!-- 视频区域 -->
    <div class="w-full h-[186px] mb-4 bg-gray-200 rounded flex items-center justify-center">
      <span class="text-gray-500">video</span>
    </div>

    <!-- Tab 组件 -->
    <UiTab :tabs="tabTitles" :defaultTab="1">
      <!-- 个人 Tab 内容 -->
      <template #tab-0>
        <div class="p-4">
          <p class="text-gray-600">个人订阅方案内容</p>
        </div>
      </template>

      <!-- 团队 Tab 内容 -->
      <template #tab-1>
        <div class="p-6">
          <!-- Logo -->
          <div class="mb-4">
            <h2 class="text-2xl font-bold">
              <img src="/images/logo-business.svg" alt="Udemy" class="h-6" />
            </h2>
          </div>

          <!-- 描述文字 -->
          <p class="text-gray-700 mb-6 text-base leading-relaxed">
            让您的团队随时随地访问30000多门 Udemy 热门课程。
          </p>

          <!-- 试用按钮 -->
          <button class="w-full bg-blue-3 text-white font-bold py-3 px-6 rounded mb-6 hover:bg-udemy-purple-600 transition-colors">
            试用 Udemy Business
          </button>

          <!-- 特性列表 -->
          <ul class="space-y-3">
            <li v-for="(feature, index) in teamFeatures" :key="index" class="flex items-start">
              <img 
                src="/icons/check.svg" 
                alt="check" 
                class="w-5 h-5 mr-3 mt-0.5 flex-shrink-0"
              />
              <span class="text-gray-700 text-sm">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </template>
    </UiTab>
  </UiCard>
</template>

<script setup>
// Tab 标题数组
const tabTitles = ['个人', '团队']

// 团队特性列表
const teamFeatures = [
  '面向用户数为2人或以上的团队',
  '30000个以上需求最高的全新课程',
  '学习互动工具',
  'SSO 和 LMS 集成'
]
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

