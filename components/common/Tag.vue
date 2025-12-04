<template>
  <div
    v-if="type === 'advanced'"
    class="flex items-center gap-1 bg-blue-3 text-white px-2 py-1 rounded text-xs"
  >
    <div class="text-xs">{{ label }}</div>
  </div>
<span v-else-if="type === 'hot'" class="bg-silver rounded text-[#3D3C0A] text-xs  px-2 py-1">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'advanced', // 默认显示“高级”标签
    validator: (value) => ['hot', 'advanced'].includes(value),
  },
});
</script>

