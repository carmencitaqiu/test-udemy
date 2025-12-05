<template>
  <div class="w-full py-8">
    <!-- 要求部分 -->
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-gray-900 mb-4">要求</h2>
      <div>
        <ul class="space-y-3 list-disc list-inside">
          <li
            v-for="(requirement, index) in requirements"
            :key="index"
            class="text-sm text-gray-900 leading-relaxed"
          >
            {{ requirement }}
          </li>
        </ul>
      </div>
    </div>

    <!-- 描述部分 -->
    <div>
      <h2 class="text-2xl font-bold text-gray-900 mb-4">描述</h2>
      <div class="relative">
        <div
          ref="descriptionRef"
          :class="[
            'text-sm text-gray-900 leading-relaxed transition-all duration-300',
            isExpanded ? '' : 'line-clamp-8'
          ]"
        >
          <p class="mb-4">
            Welcome to the 100 Days of Code - The Complete Python Pro Bootcamp, the <strong>only course you need</strong> to learn to code with Python. With over 500,000 <strong>5 STAR reviews</strong> and a 4.8 average, my courses are some of the <strong>HIGHEST RATED</strong> courses in the history of Udemy!
          </p>
          <p class="mb-4 font-bold">
            100 days, 1 hour per day, learn to build 1 project per day, this is how you master Python.
          </p>
          <p class="mb-4">
            At 60+ hours, this Python course is without a doubt the <strong>most comprehensive</strong> Python course available anywhere online. Even if you have <strong>zero</strong> programming experience, this course will take you from <strong>beginner to professional</strong>. Here's why:
          </p>
          <ul class="mb-4 list-disc list-inside">
            <li>The course is taught by the <strong>lead instructor</strong> at the App Brewery, London's <strong>best in-person programming Bootcamp.</strong></li>
          </ul>
          <p v-if="isExpanded" class="mb-4">
            This comprehensive course is designed to take you from absolute beginner to Python professional. You'll learn by building real-world projects, from simple scripts to complex applications. Each day, you'll work on a new project that reinforces the concepts you've learned.
          </p>
          <p v-if="isExpanded" class="mb-4">
            By the end of this course, you'll have built 100 different projects, each teaching you something new about Python programming. You'll understand data structures, algorithms, web development, data science, machine learning, and much more.
          </p>
        </div>

        <!-- 显示更多/更少按钮 -->
        <button
          v-if="showToggleButton"
          @click="toggleExpand"
          class="mt-3 text-sm text-purple-600 hover:text-purple-700 flex items-center gap-1 transition-colors duration-200"
        >
          <span>{{ isExpanded ? '显示更少' : '显示更多' }}</span>
          <svg
            :class="[
              'w-4 h-4 transition-transform duration-200',
              isExpanded ? 'transform rotate-180' : ''
            ]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const requirements = ref([
  "No programming experience needed - I'll teach you everything you need to know",
  "A 64-bit Mac or PC computer with 4GB of memory and access to the internet",
  "No paid software required - I'll teach you how to use PyCharm, Jupyter Notebooks and Google Colab",
  "I'll walk you through, step-by-step how to get all the software installed and set up"
])

const isExpanded = ref(false)
const descriptionRef = ref(null)
const showToggleButton = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

// 检查内容是否超过行数限制，决定是否显示按钮
const checkContentLines = () => {
  if (descriptionRef.value) {
    // 临时移除 line-clamp 限制来获取完整内容
    const originalClass = descriptionRef.value.className
    descriptionRef.value.classList.remove('line-clamp-8')
    
    // 计算实际行数
    const lineHeight = parseFloat(getComputedStyle(descriptionRef.value).lineHeight)
    const fullHeight = descriptionRef.value.scrollHeight
    const actualLines = Math.ceil(fullHeight / lineHeight)
    
    // 恢复原始类名
    descriptionRef.value.className = originalClass
    
    // 如果实际行数超过 8 行，显示按钮
    showToggleButton.value = actualLines > 8
  }
}

onMounted(() => {
  // 等待 DOM 渲染完成后检查
  nextTick(() => {
    checkContentLines()
  })
})
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

