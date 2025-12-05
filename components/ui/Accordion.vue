<template>
  <div class="w-full my-4">
    <!-- 标题区域 -->
    <div class="px-4 py-4">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-xl font-bold text-gray-900">课程内容</h2>
        <button
          @click="toggleExpandAll"
          class="text-sm text-purple-600 hover:text-purple-700 underline"
        >
          {{ expandAllMode ? '折叠所有章节' : '展开所有章节' }}
        </button>
      </div>
      <div class="text-sm text-gray-600">
        {{ totalChapters }} 个章节・{{ totalLectures }} 个讲座・总时长 {{ totalDuration }}
      </div>
    </div>
    
    <slot />
    
    <!-- 显示更多章节按钮 -->
    <div v-if="showMoreButton" class="px-4 py-4 border-t border-gray-200">
      <button
        @click="expandAll"
        class="w-full py-3 px-4 border border-purple-600 rounded text-purple-600 hover:bg-purple-50 transition-colors duration-200"
      >
        还有 {{ remainingChapters }} 个章节
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // 章节数据（用于自动计算统计信息）
  items: {
    type: Array,
    default: () => []
  },
  // 默认显示的章节数量
  defaultVisibleCount: {
    type: Number,
    default: 10
  }
})

const activeIndex = ref(null)
const isTransitioning = ref(false)
const showAll = ref(false) // 用于控制显示更多章节
const expandAllMode = ref(false) // 用于控制展开所有章节的模式
const expandedIndexes = ref([]) // 在展开所有模式下，存储所有展开的索引

// 计算可见的章节数量
const visibleCount = computed(() => {
  return showAll.value ? props.items.length : props.defaultVisibleCount
})

// 计算可见的章节列表
const visibleItems = computed(() => {
  return props.items.slice(0, visibleCount.value)
})

// 计算剩余章节数
const remainingChapters = computed(() => {
  return Math.max(0, props.items.length - props.defaultVisibleCount)
})

// 是否显示"还有 X 个章节"按钮
const showMoreButton = computed(() => {
  return !showAll.value && remainingChapters.value > 0
})

// 展开所有章节
const expandAll = () => {
  showAll.value = true
}

const setActiveIndex = (index) => {
  // 如果处于展开所有模式
  if (expandAllMode.value) {
    // 切换该索引的展开状态
    const indexPos = expandedIndexes.value.indexOf(index)
    if (indexPos > -1) {
      expandedIndexes.value.splice(indexPos, 1)
    } else {
      expandedIndexes.value.push(index)
    }
    return
  }
  
  // 普通模式：同一时间只有一个展开
  // 如果点击的是已展开的 item，则收起
  if (activeIndex.value === index) {
    activeIndex.value = null
    return
  }
  
  // 如果当前有展开的 item，先收起它，然后再展开新的
  if (activeIndex.value !== null && !isTransitioning.value) {
    isTransitioning.value = true
    // 先收起旧的
    activeIndex.value = null
    // 等待收起动画完成后再展开新的（150ms 是收起动画的一半时间，让过渡更平滑）
    setTimeout(() => {
      activeIndex.value = index
      // 等待展开动画完成后重置状态
      setTimeout(() => {
        isTransitioning.value = false
      }, 300)
    }, 150)
  } else {
    // 如果没有展开的 item，直接展开
    activeIndex.value = index
  }
}

// 切换展开所有章节模式
const toggleExpandAll = () => {
  if (expandAllMode.value) {
    // 折叠所有章节：退出展开所有模式，清空所有展开状态
    expandAllMode.value = false
    // 使用新数组确保响应式更新
    expandedIndexes.value = []
    activeIndex.value = null
    // 确保退出过渡状态
    isTransitioning.value = false
  } else {
    // 展开所有章节：进入展开所有模式
    // 先保存当前展开的索引（如果有）
    const currentActiveIndex = activeIndex.value
    
    // 将所有可见的章节索引添加到展开数组中
    const visibleCount = showAll.value ? props.items.length : props.defaultVisibleCount
    const newExpandedIndexes = []
    for (let i = 0; i < visibleCount; i++) {
      newExpandedIndexes.push(i)
    }
    // 如果之前在普通模式下有展开的item，也加入到展开数组中
    if (currentActiveIndex !== null && !newExpandedIndexes.includes(currentActiveIndex)) {
      newExpandedIndexes.push(currentActiveIndex)
    }
    
    // 设置新状态
    expandAllMode.value = true
    expandedIndexes.value = newExpandedIndexes
    // 清空普通模式的 activeIndex，因为现在使用 expandedIndexes
    activeIndex.value = null
  }
}

// 计算统计信息
const totalChapters = computed(() => {
  return props.items.length || 0
})

const totalLectures = computed(() => {
  if (!props.items || props.items.length === 0) return 0
  return props.items.reduce((sum, item) => {
    return sum + (item.childrenList?.length || 0)
  }, 0)
})

// 计算总时长（需要解析时长字符串）
const totalDuration = computed(() => {
  if (!props.items || props.items.length === 0) return '0 分钟'
  
  let totalMinutes = 0
  
  // 解析每个章节的时长
  props.items.forEach(item => {
    if (item.duration) {
      const duration = item.duration
      // 解析 "1 小时 12 分钟" 或 "45 分钟" 格式
      const hourMatch = duration.match(/(\d+)\s*小时/)
      const minuteMatch = duration.match(/(\d+)\s*分钟/)
      
      if (hourMatch) {
        totalMinutes += parseInt(hourMatch[1]) * 60
      }
      if (minuteMatch) {
        totalMinutes += parseInt(minuteMatch[1])
      }
    }
  })
  
  // 格式化输出
  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60
  
  if (hours > 0 && minutes > 0) {
    return `${hours} 小时 ${minutes} 分钟`
  } else if (hours > 0) {
    return `${hours} 小时`
  } else {
    return `${minutes} 分钟`
  }
})

// 创建一个计算属性来确保响应式更新
const expandedIndexesComputed = computed(() => expandedIndexes.value)

// 提供给子组件使用
provide('accordion', {
  activeIndex: readonly(activeIndex),
  setActiveIndex,
  visibleCount: readonly(visibleCount),
  showAll: readonly(showAll),
  defaultVisibleCount: props.defaultVisibleCount,
  expandAllMode: readonly(expandAllMode),
  expandedIndexes: expandedIndexesComputed,
  totalItems: props.items.length
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

