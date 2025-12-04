<template>
  <div class="flex flex-col cursor-pointer">
    <!-- 顶部：课程缩略图 -->
    <div class="w-full mb-3">
      <img
        :src="course.thumbnail"
        :alt="course.title"
        class="w-full h-32 object-cover border border-gray-200 border-solid rounded-sm"
      />
    </div>

    <!-- 课程信息（垂直布局） -->
    <div class="flex flex-col">
      <!-- 标题 -->
      <h3 class="text-base font-medium text-gray-900 mb-1 line-clamp-2">
        {{ course.title }}
      </h3>

      <!-- 讲师 -->
      <p class="text-sm text-gray-600 mb-2 truncate">
        {{ course.instructor }}
      </p>

      <!-- 评分与人数 -->
      <div class="flex items-center gap-2 mb-2">
        <CommonStar :rating="course.rating" />
        <span class="text-xs text-gray-500">
          ({{ formatNumber(course.ratingCount) }})
        </span>
      </div>

      <!-- 课程详情 -->
      <div class="text-sm text-gray-600 mb-3">
        <span v-if="course.totalHours">总共{{ course.totalHours }}小时</span>
        <span v-if="course.lectures">·{{ course.lectures }}个讲座</span>
        <span v-if="course.level">·{{ course.level }}</span>
      </div>

      <!-- 价格 -->
      <div class="text-lg font-semibold text-gray-900">
        US${{ course.price }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      thumbnail: '',
      title: '',
      instructor: '',
      rating: 0,
      ratingCount: 0,
      totalHours: 0,
      lectures: 0,
      level: '',
      price: 0,
    }),
  },
});

const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};
</script>

