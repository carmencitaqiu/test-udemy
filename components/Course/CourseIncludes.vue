<template>
  <div class="w-full py-8">
    <!-- 浏览相关主题 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">浏览相关主题</h2>
      <div class="flex flex-wrap gap-3">
        <button
          v-for="(topic, index) in relatedTopics"
          :key="index"
          class="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200 text-sm text-gray-900"
        >
          {{ topic }}
        </button>
      </div>
    </div>

    <!-- 本课程包括 -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">本课程包括:</h2>
      <div class="grid grid-cols-2 gap-x-8 gap-y-4">
        <!-- 左列 -->
        <div class="space-y-4">
          <div
            v-for="(item, index) in leftColumnItems"
            :key="index"
            class="flex items-start gap-3"
          >
            <div class="flex-shrink-0 mt-0.5">
              <img src="/icons/check.svg" alt="check" class="w-5 h-5" />
            </div>
            <p class="text-sm text-gray-900 leading-relaxed">{{ item }}</p>
          </div>
        </div>

        <!-- 右列 -->
        <div class="space-y-4">
          <div
            v-for="(item, index) in rightColumnItems"
            :key="index"
            class="flex items-start gap-3"
          >
            <div class="flex-shrink-0 mt-0.5">
              <img src="/icons/check.svg" alt="check" class="w-5 h-5" />
            </div>
            <p class="text-sm text-gray-900 leading-relaxed">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 相关主题
const relatedTopics = ref(['Python', '编程语言', '开发'])

// 左列项目
const leftColumnItems = ref([
  '52 小时 长的随选视频',
  '23 个代码练习',
  '作业',
  '230 篇文章'
])

// 右列项目
const rightColumnItems = ref([
  '164 个可下载资源',
  '在移动设备和电视上观看',
  '结业证书'
])
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

