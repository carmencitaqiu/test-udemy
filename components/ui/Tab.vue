<template>
  <div class="w-full">
    <!-- Tab 头部 -->
    <div class="border-b border-gray-200">
      <div class="flex">
        <button 
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activeTab = index"
          :class="[
            'flex-1 py-3 text-base font-medium transition-all duration-200',
            activeTab === index
              ? 'text-gray-900 border-b-2 border-gray-900'
              : 'text-gray-500 hover:text-gray-700'
          ]"
        >
          {{ tab }}
        </button>
      </div>
    </div>
    
    <!-- Tab 内容区域 -->
    <div class="mt-4">
      <slot :name="`tab-${activeTab}`" :activeTab="activeTab" :tabTitle="tabs[activeTab]">
        <!-- 默认内容 -->
        <div v-if="hasDefaultSlot">
          <slot />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  // Tab 标题数组，例如：['个人', '团队']
  tabs: {
    type: Array,
    required: true,
    default: () => []
  },
  // 默认选中的 tab 索引
  defaultTab: {
    type: Number,
    default: 0
  }
})

const activeTab = ref(props.defaultTab)

// 检查是否有默认 slot
const slots = useSlots()
const hasDefaultSlot = computed(() => !!slots.default)
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>