<template>
  <UiCard 
    padding="lg" 
    :class="[
      'max-w-2xl w-[340px]',
      isFixed ? 'fixed top-8 right-32 z-30' : 'absolute top-8 right-0'
    ]"
  >
    <!-- 视频区域 -->
    <div class="w-full h-[186px] mb-4 bg-gray-200 rounded flex items-center justify-center">
      <span class="text-gray-500">video</span>
    </div>

    <!-- Tab 组件 -->
    <UiTab :tabs="tabTitles" :defaultTab="1">
      <!-- 个人 Tab 内容 -->
      <template #tab-0>
        <div class="px-6">
          <!-- 顶部提示 -->
          <div class="flex items-center gap-2 mb-4">
            <div class="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <img src="/icons/check.svg" alt="check" class="w-3 h-3" />
            </div>
            <span class="text-sm text-gray-900">此高级课程包含在方案中</span>
          </div>

          <!-- 标题 -->
          <h2 class="text-xl text-gray-900">
            订阅 Udemy 的热门课程
          </h2>

          <!-- 描述文字 -->
          <p class="text-gray-700 mb-4 text-sm leading-relaxed">
            通过个人方案订阅,获得这门课程以及26000多门我们最受好评的课程。
            <!-- 了解更多链接 -->
            <a href="#" class="text-sm text-purple-600 underline hover:text-purple-700 mb-6 inline-block">
              了解更多
            </a>
          </p>
          <!-- 开始订阅按钮 -->
          <button class="w-full bg-blue-3 text-white font-bold py-3 px-6 rounded mb-4 hover:bg-purple-700 transition-colors">
            开始订阅
          </button>

          <!-- 价格和取消信息 -->
          <div class="text-center space-y-1 mb-6">
            <p class="text-sm text-gray-900">每月 US$14.00 起售</p>
            <p class="text-sm text-gray-600">随时取消</p>
          </div>
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

// 滚动监听
const isFixed = ref(false)

const handleScroll = () => {
  const scrollY = window.scrollY
  // 当滚动位置在 400-800 之间时，固定组件
  isFixed.value = scrollY >= 400 && scrollY <= 3400
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // 初始化时也检查一次
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

