<template>
  <div class="flex items-start justify-between gap-4 py-3 border-b border-gray-200 cursor-pointer">
    <!-- 左侧：课程缩略图 -->
    <div class="flex-shrink-0">
      <img
        :src="course.thumbnail"
        :alt="course.title"
        class="w-16 h-16 object-cover border border-gray-200 border-solid rounded-sm"
      />
    </div>

    <!-- 中间：课程信息 -->
    <div class="flex-1 max-w-80">
      <!-- 课程标题 -->
      <h3 class="text-base font-bold text-gray-900 mb-2 line-clamp-2">
        {{ course.title }}
      </h3>

      <!-- 课程元信息 -->
      <div class="flex flex-wrap items-center gap-3 mb-2">
        <!-- 高级标签 -->
        <CommonTag label="高级" type="advanced" />

        <!-- 总时长 -->
        <span class="text-sm text-gray-600">总共 {{ course.totalHours }} 小时</span>

        <!-- 更新日期 -->
        <span class="text-sm text-gray-600">更新日期 {{ course.updateDate }}</span>
      </div>
    </div>
    <CommonStar :rating="course.rating" />

    <div class="flex items-center gap-1 text-sm text-gray-600">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
      <span>{{ formatNumber(course.students) }}</span>
    </div>

    <!-- 右侧：价格和收藏按钮 -->
    <div class="flex-shrink-0 flex flex-col items-end gap-3">
      <!-- 价格 -->
      <div class="text-md font-medium text-gray-900">US${{ course.price }}</div>
    </div>
    <button
      @click="toggleFavorite"
      :class="[
        'w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors',
        isFavorite
          ? 'border-udemy-purple bg-udemy-purple-50'
          : 'border-gray-300 hover:border-gray-400',
      ]"
    >
      <svg
        :class="[
          'w-5 h-5 transition-colors',
          isFavorite ? 'text-udemy-purple fill-current' : 'text-gray-400',
        ]"
        :fill="isFavorite ? 'currentColor' : 'none'"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  course: {
    type: Object,
    required: true,
    default: () => ({
      thumbnail: '',
      title: '',
      isAdvanced: false,
      totalHours: 0,
      updateDate: '',
      rating: 0,
      students: 0,
      price: 0,
    }),
  },
});

const isFavorite = ref(false);

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};

// 格式化数字（添加千位分隔符）
const formatNumber = (num) => {
  return num.toLocaleString('en-US');
};
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
