<template>
  <div class="w-full">
    <slot />
  </div>
</template>

<script setup>
const activeIndex = ref(null)
const isTransitioning = ref(false)

const setActiveIndex = (index) => {
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

// 提供给子组件使用
provide('accordion', {
  activeIndex: readonly(activeIndex),
  setActiveIndex
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

