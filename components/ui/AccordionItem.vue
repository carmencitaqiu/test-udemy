<template>
  <div
    v-if="isVisible"
    :class="[
      'border-l border-r border-t border-gray-200',
      isLast ? 'border-b' : ''
    ]"
  >
    <!-- Item 标题区域 -->
    <button
      @click="handleClick"
      :class="[
        'w-full bg-gray-50 flex items-start justify-between py-4 px-4 text-left transition-colors duration-200',
        isActive ? 'bg-gray-50' : 'hover:bg-gray-50'
      ]"
    >
    <div class="flex gap-x-4">
      <!-- 左侧：展开/收起图标 -->
      <svg
        :class="[
          'w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 mt-0.5',
          isActive ? 'transform rotate-180' : ''
        ]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>

      <!-- 中间：标题（可换行） -->
      <span  class="flex-1 font-medium text-gray-900 text-left break-words min-w-0 max-w-md overflow-wrap-anywhere">{{ title }}</span>
    </div>


      <!-- 右侧：讲座数量和时间 -->
      <div class="flex-shrink-0 text-sm text-gray-600 ml-2">
        {{ metaInfo }}
      </div>
    </button>

    <!-- 子列表内容区域 -->
    <div
      class="overflow-hidden transition-all duration-300 ease-in-out"
      :style="{
        maxHeight: isActive ? `${contentHeight}px` : '0px',
        opacity: isActive ? 1 : 0
      }"
    >
      <div ref="innerRef" class="px-4 pb-2">
        <ul class="space-y-1">
          <li
            v-for="(child, childIndex) in childrenList"
            :key="childIndex"
            class="flex items-center gap-3 py-2 px-2 cursor-pointer rounded transition-colors duration-150"
          >
            <slot name="child" :item="child" :index="childIndex">
              <!-- 左侧：视频图标（显示器+播放） -->
              <div class="flex-shrink-0 relative">
                <svg
                  class="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <!-- 显示器外框 -->
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="12"
                    rx="1"
                    stroke-width="1.5"
                  />
                  <!-- 显示器底座 -->
                  <path
                    d="M8 16h8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                  <!-- 播放按钮 -->
                  <path
                    d="M10 9l4 3-4 3V9z"
                    fill="currentColor"
                  />
                </svg>
              </div>

              <!-- 中间：标题 -->
              <span class="flex-1 text-sm text-gray-900">{{ getChildTitle(child) }}</span>

              <!-- 预览按钮 -->
              <div v-if="getChildPreview(child)" class="flex items-center gap-1.5 flex-shrink-0">
                <svg
                  class="w-4 h-4 text-gray-700"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.1"/>
                  <path
                    d="M10 8v8l6-4-6-4z"
                    fill="currentColor"
                  />
                </svg>
                <span class="text-sm text-purple-600 underline cursor-pointer hover:text-purple-700">预览</span>
              </div>

              <!-- 右侧：时长 -->
              <span v-if="getChildDuration(child)" class="text-sm text-gray-500 flex-shrink-0">
                {{ getChildDuration(child) }}
              </span>
            </slot>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // Item 标题
  title: {
    type: String,
    required: true
  },
  // 讲座数量
  lectureCount: {
    type: Number,
    default: null
  },
  // 时长（例如："1 小时 12 分钟"）
  duration: {
    type: String,
    default: ''
  },
  // 子列表数据
  childrenList: {
    type: Array,
    required: true,
    default: () => []
  },
  // Item 的索引（由父组件传入）
  index: {
    type: Number,
    required: true
  }
})

// 从父组件获取手风琴状态和方法
const accordion = inject('accordion', null)

if (!accordion) {
  console.warn('AccordionItem 必须在 Accordion 组件内使用')
}

const isActive = computed(() => {
  if (!accordion) return false
  
  // 如果处于展开所有模式，检查索引是否在展开数组中
  if (accordion.expandAllMode?.value) {
    return accordion.expandedIndexes?.value?.includes(props.index) || false
  }
  
  // 普通模式：检查是否是当前激活的索引
  return accordion.activeIndex?.value === props.index
})

// 检查是否应该显示（根据默认可见数量）
const isVisible = computed(() => {
  if (!accordion) return true
  // 如果 showAll 为 true，显示所有
  if (accordion.showAll?.value) return true
  // 否则检查 index 是否在默认可见范围内
  const defaultVisibleCount = accordion.defaultVisibleCount || 10
  return props.index < defaultVisibleCount
})

// 判断是否是最后一个可见的元素
const isLast = computed(() => {
  if (!accordion) return false
  const totalItems = accordion.totalItems || 0
  
  // 计算可见的最大索引
  let maxVisibleIndex = -1
  if (accordion.showAll?.value) {
    // 如果显示所有，最后一个可见的是总数量-1
    maxVisibleIndex = totalItems - 1
  } else {
    // 否则是默认可见数量-1，但不能超过总数量
    const defaultVisibleCount = accordion.defaultVisibleCount || 10
    maxVisibleIndex = Math.min(defaultVisibleCount - 1, totalItems - 1)
  }
  
  // 当前索引是最后一个可见的索引
  return props.index === maxVisibleIndex
})

const handleClick = () => {
  accordion?.setActiveIndex(props.index)
}

// 计算右侧显示的元信息（讲座数量和时间）
const metaInfo = computed(() => {
  const parts = []
  if (props.lectureCount !== null && props.lectureCount !== undefined) {
    parts.push(`${props.lectureCount} 个讲座`)
  }
  if (props.duration) {
    parts.push(props.duration)
  }
  return parts.join(' • ')
})

// 获取子项标题（支持对象或字符串）
const getChildTitle = (child) => {
  return typeof child === 'object' && child !== null ? child.title : child
}

// 获取子项是否可预览
const getChildPreview = (child) => {
  return typeof child === 'object' && child !== null ? child.preview : false
}

// 获取子项时长
const getChildDuration = (child) => {
  return typeof child === 'object' && child !== null ? child.duration : ''
}

// 动态计算内容高度
const innerRef = ref(null)
const contentHeight = ref(0)
let resizeObserver = null

// 当内容变化或展开时，重新计算高度
watch([isActive, () => props.childrenList], () => {
  if (isActive.value && innerRef.value) {
    nextTick(() => {
      contentHeight.value = innerRef.value.scrollHeight
    })
  }
}, { immediate: true })

// 监听窗口大小变化，重新计算高度
onMounted(() => {
  if (innerRef.value) {
    contentHeight.value = innerRef.value.scrollHeight
  }
  
  resizeObserver = new ResizeObserver(() => {
    if (isActive.value && innerRef.value) {
      contentHeight.value = innerRef.value.scrollHeight
    }
  })
  
  if (innerRef.value) {
    resizeObserver.observe(innerRef.value)
  }
})

onUnmounted(() => {
  if (resizeObserver) {
    resizeObserver.disconnect()
  }
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

