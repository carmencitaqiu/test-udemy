<template>
  <div
    class="flex items-start justify-between gap-4 py-4 cursor-pointer"
  >
    <!-- 左侧：课程缩略图 -->
    <div class="flex-shrink-0">
      <div style="border: 1px solid red" class="w-[200px] h-[120px] object-cover border border-gray-200 border-solid rounded-sm"></div>
    </div>

    <!-- 中间：课程信息 -->
    <div class="flex-1">
      <!-- 标题 -->
      <h3 class="text-base font-medium text-gray-900 mb-1">
        {{ programmer.title }}
      </h3>

      <!-- 讲师 -->
      <p class="text-sm text-gray-600 mb-1">
        {{ programmer.instructor }}
      </p>

      <!-- 评分与人数 -->
      <div class="flex items-center gap-2 mb-1">
        <CommonStar :rating="programmer.rating" />
        <span class="text-xs text-gray-500">
          ({{ formatNumber(programmer.ratingCount) }})
        </span>
      </div>

      <!-- 标签 -->
      <div class="flex items-center gap-2 mt-1">
        <CommonTag label="高级" type="advanced" />
        <CommonTag label="热门课程" type="hot" />
      </div>
    </div>

    <!-- 右侧：价格 -->
    <div class="flex-shrink-0 text-right">
      <div class="text-lg font-semibold text-gray-900">
        US${{ programmer.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  programmer: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      thumbnail: '',
      title: '',
      instructor: '',
      rating: 0,
      ratingCount: 0,
      price: 0,
    }),
  },
});

const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};
</script>
