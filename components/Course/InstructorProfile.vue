<template>
  <div class="w-full">
    <!-- 标题区域 -->
    <div class="mb-4">
      <h2 class="text-2xl font-bold text-gray-900 mb-2">讲师</h2>
      <a href="#" class="text-lg text-purple-600 underline hover:text-purple-700">
        Dr. Angela Yu, Developer and Lead Instructor
      </a>
      <p class="text-sm text-gray-900 mt-1">Developer and Lead Instructor</p>
    </div>

    <!-- 讲师信息卡片 -->
    <div class="flex gap-6 mb-6">
      <!-- 左侧：头像 -->
      <div class="flex-shrink-0">
        <div class="w-24 h-24 rounded-full bg-gray-200 overflow-hidden">
          <!-- 这里可以替换为实际头像图片 -->
          <div class="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center text-3xl text-blue-600">
            AY
          </div>
        </div>
      </div>

      <!-- 右侧：统计信息 -->
      <div class="flex-1 space-y-3">
        <!-- 讲师评分 -->
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          <span class="text-sm text-gray-900">4.7 讲师评分</span>
        </div>

        <!-- 评论数 -->
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span class="text-sm text-gray-900">1021612 条评论</span>
        </div>

        <!-- 学生数 -->
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span class="text-sm text-gray-900">3334863 名学生</span>
        </div>

        <!-- 课程数 -->
        <div class="flex items-center gap-2">
          <svg class="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-sm text-gray-900">8 门课程</span>
        </div>
      </div>
    </div>

    <!-- 描述区域 -->
    <div class="relative">
      <p
        ref="descriptionRef"
        :class="[
          'text-sm text-gray-900 leading-relaxed transition-all duration-300',
          isExpanded ? '' : 'line-clamp-6'
        ]"
      >
        I'm Angela, I'm a developer with a passion for teaching. I'm the <strong>lead instructor</strong> at the London App Brewery, London's leading <strong>Programming Bootcamp</strong>. I've helped hundreds of thousands of students learn to code and change their lives by becoming a developer. I've been invited by companies such as Twitter, Facebook and Google to teach their employees.
        <br>
        My first foray into programming was when I was just 12 years old, wanting to build my own Space Invader game. Since then, I've made <strong>hundred of websites, apps and games</strong>. But most importantly, I realised that my <strong>greatest</strong> passion is for teaching. I spend most of my time researching how to make learning to code fun and make hard concepts easy to understand. I apply everything I discover into my bootcamp courses. In my courses, you will find lots of geeky humour but also lots of explanations and animations to make sure everything is easy to understand.
      </p>

      <!-- 显示更多/更少按钮 -->
      <button
        v-if="showToggleButton"
        @click="toggleExpand"
        class="mt-3 text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors duration-200"
      >
        <span>{{ isExpanded ? '显示更少' : '显示更多' }}</span>
        <svg
          :class="[
            'w-4 h-4 transition-transform duration-200',
            isExpanded ? 'transform rotate-180' : ''
          ]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const isExpanded = ref(false)
const descriptionRef = ref(null)
const showToggleButton = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// 检查内容是否超过行数限制，决定是否显示按钮
const checkContentLines = () => {
  if (descriptionRef.value) {
    // 临时移除 line-clamp 限制来获取完整内容
    const originalClass = descriptionRef.value.className
    descriptionRef.value.classList.remove('line-clamp-6')
    
    // 计算实际行数
    const lineHeight = parseFloat(getComputedStyle(descriptionRef.value).lineHeight)
    const fullHeight = descriptionRef.value.scrollHeight
    const actualLines = Math.ceil(fullHeight / lineHeight)
    
    // 恢复原始类名
    descriptionRef.value.className = originalClass
    
    // 如果实际行数超过 4 行，显示按钮
    showToggleButton.value = actualLines > 4
  }
}

onMounted(() => {
  // 等待 DOM 渲染完成后检查
  nextTick(() => {
    checkContentLines()
  })
})
</script>

<style scoped>
/* 渐变遮罩效果（可选，用于折叠时显示渐变） */
</style>

