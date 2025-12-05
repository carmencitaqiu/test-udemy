<template>
  <div class="w-full py-8 bg-gray-50 px-8">
    <div class="flex gap-8">
      <!-- 左侧：说明文字 -->
      <div class="flex-1 max-w-md">
        <h2 class="text-2xl font-bold text-gray-900 mb-4">代码练习</h2>
        <p class="text-sm text-gray-700 leading-relaxed mb-6">
          本课程包括我们更新的代码练习, 因此您可以在学习过程中演练所掌握的技能。
        </p>
        <a href="#" class="text-sm text-purple-600 underline hover:text-purple-700">
          查看演示
        </a>
      </div>

      <!-- 右侧：代码编辑器界面图片 -->
      <div class="flex-1">
        <div class="bg-gray-100 rounded-lg overflow-hidden">
          <img 
            src="/images/intro.png" 
            alt="代码练习演示" 
            class="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 组件逻辑（如果需要）
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

