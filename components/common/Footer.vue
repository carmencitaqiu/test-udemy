<template>
  <footer class="bg-gray-900 text-white">
    <!-- 顶部区域：教学推广 -->
    <div class="border-b border-gray-700 py-8 px-8">
      <div class="containermx-auto flex justify-between items-center">
        <div>
          <h3 class="text-xl font-bold mb-2">在线向全世界教学</h3>
          <p class="text-gray-400 text-sm">
            创建在线视频课程,普及到全球各地的学生并赚取收入
          </p>
        </div>
        <button class="border border-gray-600 text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
          在 Udemy 上授课
        </button>
      </div>
    </div>

    <!-- 主要内容区域 -->
    <div class="py-8 px-8">
      <div class="containermx-auto">
        <!-- 热门技能和认证 -->
        <div class="mb-8">
          <h3 class="text-lg font-bold mb-4">浏览热门技能和认证</h3>
          
          <div class="grid grid-cols-4 gap-8 mb-6">
            <!-- 按颁发者分列的认证 -->
            <div>
              <h4 class="text-sm font-semibold mb-3 text-gray-400">按颁发者分列的认证</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">Amazon Web Services (AWS) 认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">六西格玛认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">Microsoft 认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">Cisco 认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">Tableau 认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">查看所有认证</a></li>
              </ul>
            </div>

            <div>
            <h4 class="text-sm font-semibold mb-3">网页开发</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">网页开发</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">JavaScript</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">React JS</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Angular</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Java</a></li>
            </ul>
          </div>

          <!-- IT 认证 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">IT 认证</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Amazon AWS</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">AWS Certified Cloud Practitioner</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">AZ-900: Microsoft Azure Fundamentals</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">AWS Certified Solutions Architect - Associate</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Kubernetes</a></li>
            </ul>
          </div>

          <!-- 领导力 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">领导力</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">领导力</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">管理技能</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">项目管理</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">个人生产力</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">情绪智力</a></li>
            </ul>
          </div>

            

          </div>
        </div>

        <!-- 技能分类列 -->
        <div class="grid grid-cols-4 gap-6">
          <!-- 网页开发 -->


          <!-- 按技能分列的认证 -->
          <div>
              <h4 class="text-sm font-semibold mb-3 text-gray-400">按技能分列的认证</h4>
              <ul class="space-y-2">
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">网络安全认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">项目管理认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">云认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">数据分析认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">人力资源管理认证</a></li>
                <li><a href="#" class="text-sm text-gray-300 hover:text-white">查看所有认证</a></li>
              </ul>
            </div>

          

          <!-- 数据科学 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">数据科学</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">数据科学</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Python</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">机器学习</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">ChatGPT</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">深度学习</a></li>
            </ul>
          </div>

          <!-- 沟通 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">沟通</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">沟通技巧</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">演讲技巧</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">公众演讲</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">写作</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">PowerPoint</a></li>
            </ul>
          </div>

          <!-- 业务分析方法与智能 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">业务分析方法与智能</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Microsoft Excel</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">SQL</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Microsoft Power BI</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">数据分析</a></li>
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">业务分析</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部链接区域 -->
    <div class="border-t border-gray-700 py-6 px-8">
      <div class="containermx-auto">
        <div class="grid grid-cols-4 gap-8">
          <!-- 关于 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">关于</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">关于我们</a></li>
            </ul>
          </div>

          <!-- 了解 Udemy -->
          <div>
            <h4 class="text-sm font-semibold mb-3">了解 Udemy</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">获取应用程序</a></li>
            </ul>
          </div>

          <!-- Udemy for Business -->
          <div>
            <h4 class="text-sm font-semibold mb-3">Udemy for Business</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">Udemy Business</a></li>
            </ul>
          </div>

          <!-- 法律和辅助功能 -->
          <div>
            <h4 class="text-sm font-semibold mb-3">法律和辅助功能</h4>
            <ul class="space-y-2">
              <li><a href="#" class="text-sm text-gray-300 hover:text-white">无障碍声明</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer 组件逻辑（如果需要）
</script>

<style scoped>
/* 如需自定义样式可在此添加 */
</style>

