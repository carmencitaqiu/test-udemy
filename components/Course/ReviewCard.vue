<template>
  <div class="border border-gray-200 rounded p-4 bg-white">
    <!-- 用户信息 -->
    <div class="flex items-start gap-3 mb-3">
      <!-- 头像 -->
      <div class="flex-shrink-0">
        <div class="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-white font-semibold text-sm">
          {{ initials }}
        </div>
      </div>

      <!-- 姓名和评分 -->
      <div class="flex-1 min-w-0">
        <div class="font-medium text-gray-900 text-sm mb-1">{{ reviewerName }}</div>
        <div class="flex items-center gap-2">
          <!-- 星星评分 -->
          <div class="flex items-center gap-0.5">
            <svg
              v-for="i in 5"
              :key="i"
              class="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
            </svg>
          </div>
          <!-- 时间 -->
          <span class="text-xs text-gray-500">{{ timeAgo }}</span>
        </div>
      </div>
    </div>

    <!-- 评论文本 -->
    <div class="mb-3">
      <p
        ref="reviewTextRef"
        :class="[
          'text-sm text-gray-900 leading-relaxed transition-all duration-300',
          showFullText ? '' : 'line-clamp-4'
        ]"
      >
        {{ reviewText }}
      </p>
      <!-- 显示更多按钮（暂时不加点击事件） -->
      <button
        v-if="showMoreButton"
        class="mt-1 text-sm text-purple-600 hover:text-purple-700 underline"
      >
        显示更多
      </button>
    </div>

    <!-- 有帮助吗？ -->
    <div class="flex items-center gap-2">
      <span class="text-sm text-gray-600">有帮助吗?</span>
      <button class="p-1 hover:bg-gray-100 rounded transition-colors duration-150">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      </button>
      <button class="p-1 hover:bg-gray-100 rounded transition-colors duration-150">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.904 0 .714-.211 1.412-.608 2.006L11 11v3m7-10h2m-2 0h-5m-2 0H3m2 0v5" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  reviewerName: {
    type: String,
    required: true
  },
  reviewText: {
    type: String,
    required: true
  },
  timeAgo: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    default: 5
  }
})

const reviewTextRef = ref(null)
const showFullText = ref(false)
const showMoreButton = ref(false)

// 计算姓名首字母
const initials = computed(() => {
  const names = props.reviewerName.split(' ')
  if (names.length >= 2) {
    return (names[0][0] + names[names.length - 1][0]).toUpperCase()
  }
  return props.reviewerName.substring(0, 2).toUpperCase()
})

// 检查内容是否超过行数限制，决定是否显示按钮
const checkContentLines = () => {
  if (reviewTextRef.value) {
    // 临时移除 line-clamp 限制来获取完整内容
    const originalClass = reviewTextRef.value.className
    reviewTextRef.value.classList.remove('line-clamp-4')
    
    // 计算实际行数
    const lineHeight = parseFloat(getComputedStyle(reviewTextRef.value).lineHeight)
    const fullHeight = reviewTextRef.value.scrollHeight
    const actualLines = Math.ceil(fullHeight / lineHeight)
    
    // 恢复原始类名
    reviewTextRef.value.className = originalClass
    
    // 如果实际行数超过 4 行，显示按钮
    showMoreButton.value = actualLines > 4
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
/* 如需自定义样式可在此添加 */
</style>

