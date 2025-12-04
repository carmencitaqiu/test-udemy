<template>
  <div 
    :class="[
      'bg-white shadow-sm border border-gray-200',
      hoverClass
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
const props = defineProps({
  // 内边距大小：'none', 'sm', 'md', 'lg', 'xl'
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  // 是否显示悬停效果
  hover: {
    type: Boolean,
    default: false
  }
})


const hoverClass = computed(() => {
  return props.hover ? 'hover:shadow-md transition-shadow duration-200' : ''
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

