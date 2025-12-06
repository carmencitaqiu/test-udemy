<template>
  <div class="w-full mt-8 mb-4">
    <!-- 标题区域 -->
    <div class="mb-6">
      <h2 class="text-2xl font-medium text-gray-900">
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
    <div class="text-left">
      <button class="px-4 py-2 border border-purple-300 text-purple-600 bg-white font-medium rounded hover:bg-purple-50 transition-colors duration-200">
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

