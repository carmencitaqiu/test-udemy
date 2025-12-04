<template>
    <nav class="flex items-center space-x-2 text-sm" :class="textColor">
      <template v-for="(item, index) in items" :key="index">
        <!-- 面包屑项 -->
        <a 
          v-if="index < items.length - 1"
          :href="item.href" 
          class="hover:underline transition-colors"
          :class="linkHoverColor"
        >
          {{ item.label }}
        </a>
        <span v-else class="font-medium">
          {{ item.label }}
        </span>
  
        <!-- 分隔符 -->
        <span v-if="index < items.length - 1" :class="separatorColor">
          ›
        </span>
      </template>
    </nav>
  </template>
  
  <script setup>
  // 定义 props，theme 默认值为 'dark'
  const props = defineProps({
    items: {
      type: Array,
      required: true
    },
    theme: {
      type: String,
      default: 'dark',
      validator: (value) => ['dark', 'light'].includes(value)
    }
  })
  
  // 根据主题设置颜色
  const textColor = computed(() => {
    return props.theme === 'dark' ? 'text-purple-2' : 'text-gray-600'
  })
  
  const linkHoverColor = computed(() => {
    return props.theme === 'dark' ? 'hover:text-purple-2' : 'hover:text-gray-900'
  })
  
  const separatorColor = computed(() => {
    return props.theme === 'dark' ? 'text-gray-400' : 'text-gray-400'
  })
  </script>
  
  <style scoped>
  /* 如需自定义样式可在此添加 */
  </style>