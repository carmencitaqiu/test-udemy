<template>
  <div class="w-full py-8 border border-gray-200 border-solid mt-24 px-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">您将会学到</h2>
    
    <div class="grid grid-cols-2 gap-x-8 gap-y-4">
      <!-- 左列 -->
      <div class="space-y-4">
        <div
          v-for="(item, index) in leftColumnItems"
          :key="index"
          class="flex items-start gap-3"
        >
          <div class="flex-shrink-0 mt-0.5">
            <svg class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
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
            <svg class="w-5 h-5 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
            </svg>
          </div>
          <p class="text-sm text-gray-900 leading-relaxed">{{ item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 左列学习成果
const leftColumnItems = ref([
  'You will master the Python programming language by building 100 unique projects over 100 days.',
  'You will be able to program in Python professionally.',
  'Create a portfolio of 100 Python projects to apply for developer jobs.',
  'Be able to use Python for data science and machine learning.',
  'Build GUIs and Desktop applications with Python.'
])

// 右列学习成果
const rightColumnItems = ref([
  'You will learn automation, game, app and web development, data science and machine learning all using Python.',
  'You will learn Selenium, Beautiful Soup, Request, Flask, Pandas, NumPy, Scikit Learn, Plotly, and Matplotlib.',
  'Be able to build fully fledged websites and web apps with Python.',
  'Build games like Blackjack, Pong and Snake using Python.'
])
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

