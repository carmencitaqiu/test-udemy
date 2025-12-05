<template>
  <div class="absolute top-8 right-6 w-[340px] z-10">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
      <!-- 视频预览区域 -->
      <div class="w-full h-[186px] mb-4 bg-gray-800 relative">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <svg class="w-16 h-16 text-white mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span class="text-white text-sm">预览本课程</span>
          </div>
        </div>
        <div class="absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          Python
        </div>
      </div>

      <!-- Tab 组件 -->
      <UiTab :tabs="tabTitles" :defaultTab="0">
        <!-- 个人 Tab 内容 -->
        <template #tab-0>
          <div class="p-6">
            <!-- 复选框和标题 -->
            <div class="flex items-start gap-3 mb-4">
              <div class="flex-shrink-0 mt-1">
                <svg class="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
              </div>
              <div class="flex-1">
                <p class="text-sm text-gray-600 mb-2">此高级课程包含在方案中</p>
                <h3 class="text-lg font-bold text-gray-900 mb-2">订阅 Udemy 的热门课程</h3>
                <p class="text-sm text-gray-600 leading-relaxed mb-4">
                  通过个人方案订阅，获得这门课程以及26000多门我们最受好评的课程。
                  <a href="#" class="text-purple-600 underline hover:text-purple-700">了解更多</a>
                </p>
              </div>
            </div>

            <!-- 开始订阅按钮 -->
            <button class="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded mb-3 hover:bg-purple-700 transition-colors">
              开始订阅
            </button>

            <!-- 价格信息 -->
            <p class="text-sm text-gray-600 text-center">
              每月 US$14.00 起售
            </p>
          </div>
        </template>

        <!-- 团队 Tab 内容 -->
        <template #tab-1>
          <div class="p-6">
            <!-- Logo -->
            <div class="mb-4">
              <img src="/images/logo-business.svg" alt="Udemy Business" class="h-6" />
            </div>

            <!-- 描述文字 -->
            <p class="text-gray-700 mb-6 text-base leading-relaxed">
              让您的团队随时随地访问30000多门 Udemy 热门课程。
            </p>

            <!-- 试用按钮 -->
            <button class="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded mb-6 hover:bg-blue-700 transition-colors">
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
    </div>
  </div>
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

