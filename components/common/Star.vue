<template>
  <div class="flex items-center gap-1">
    <!-- 评分数字 -->
    <span v-if="showNumber" class="text-sm font-bold text-orange-600">{{ rating }}</span>

    <!-- 完整星星 -->
    <svg
      v-for="index in fullStars"
      :key="`full-${index}`"
      class="w-3 h-3 text-orange-600 fill-current"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
      />
    </svg>

    <!-- 半星 -->
    <div
      v-if="hasHalfStar"
      class="relative w-3 h-3"
    >
      <!-- 完整星（作为背景） -->
      <svg
        class="absolute w-3 h-3 text-gray-300 fill-current"
        viewBox="0 0 20 20"
      >
        <path
          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
        />
      </svg>
      <!-- 半星（左半部分填充橙色） -->
      <div class="absolute inset-0 overflow-hidden" style="width: 50%">
        <svg
          class="w-3 h-3 text-orange-600 fill-current"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
          />
        </svg>
      </div>
    </div>

    <!-- 空星（如果需要显示完整的5颗星位置） -->
    <svg
      v-for="index in emptyStars"
      :key="`empty-${index}`"
      class="w-3 h-3 text-gray-300 fill-current"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
      />
    </svg>
  </div>
</template>

<script setup>
const props = defineProps({
  rating: {
    type: Number,
    required: true,
  },
  showNumber: {
    type: Boolean,
    default: false,
  },
});

// 计算完整星数量
const fullStars = computed(() => {
  if (!props.rating || props.rating < 0) return 0;
  return Math.floor(props.rating);
});

// 判断是否有半星（小数部分 >= 0.5）
const hasHalfStar = computed(() => {
  if (!props.rating || props.rating < 0) return false;
  const decimal = props.rating % 1;
  return decimal >= 0.5 && decimal < 1;
});

// 计算空星数量（总共显示5颗星）
const emptyStars = computed(() => {
  const total = fullStars.value + (hasHalfStar.value ? 1 : 0);
  return Math.max(0, 5 - total);
});
</script>