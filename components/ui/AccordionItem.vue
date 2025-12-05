<template>
  <div class="border-b border-gray-200 last:border-b-0">
    <!-- Item 标题区域 -->
    <button
      @click="handleClick"
      :class="[
        'w-full flex items-start justify-between gap-3 py-4 px-4 text-left transition-colors duration-200',
        isActive ? 'bg-gray-50' : 'hover:bg-gray-50'
      ]"
    >
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
      <span class="flex-1 font-medium text-gray-900 text-left break-words min-w-0 max-w-md overflow-wrap-anywhere">{{ title }}</span>

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
      <div ref="innerRef" class="px-4 pb-4">
        <ul class="space-y-2">
          <li
            v-for="(child, childIndex) in childrenList"
            :key="childIndex"
            class="py-2 px-3 text-gray-700 hover:bg-gray-100 rounded transition-colors duration-150"
          >
            <slot name="child" :item="child" :index="childIndex">
              {{ child }}
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
  return accordion?.activeIndex.value === props.index
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

