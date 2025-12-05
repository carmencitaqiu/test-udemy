<template>
  <div class="w-full">
    <!-- 标题区域 -->
    <div class="mb-6">
      <h2 class="text-xl font-bold text-gray-900">
        {{ courseRating }} 课程评分 • {{ totalRatings }} 评分
      </h2>
    </div>

    <!-- 评论网格（2x2） -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <CourseReviewCard
        v-for="(review, index) in reviews"
        :key="index"
        :reviewerName="review.reviewerName"
        :reviewText="review.reviewText"
        :timeAgo="review.timeAgo"
        :rating="review.rating"
      />
    </div>

    <!-- 显示所有评论按钮 -->
    <div class="text-center">
      <button class="px-6 py-3 bg-purple-600 text-white font-medium rounded hover:bg-purple-700 transition-colors duration-200">
        显示所有评论
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  courseRating: {
    type: [Number, String],
    default: '4.7'
  },
  totalRatings: {
    type: [Number, String],
    default: '403K'
  },
  reviews: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

