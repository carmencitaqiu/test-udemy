<template>
    <header class="bg-white shadow-sm z-1000 py-4">
      <!-- <nav class="container mx-auto px-4 py-4"> -->
        <div class="flex items-center justify-between px-4">
        <!-- 左侧：Logo + 分类 + 搜索框 -->
        <div class="flex items-center flex-1 space-x-4">
          <!-- Logo -->
          <a href="/" class="flex-shrink-0">
            <img src="/images/logo-udemy.svg" alt="Udemy" class="w-[91px] h-[34px]" />
          </a>

          <!-- 分类按钮 -->
          <button class="hidden lg:block text-sm text-gray-700 hover:text-[#A435F0] px-3 py-2 whitespace-nowrap">
            探索
          </button>

          <!-- 搜索框 -->
          <div class="hidden lg:flex flex-1 px-6">
            <div class="relative w-full">
              <input 
                type="text" 
                placeholder="搜索任何内容"
                class="w-full h-[46px] pl-12 pr-4 border border-gray-900 rounded-full text-sm focus:outline-none focus:border-gray-900"
              />
              <svg 
                class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600 cursor-pointer" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        <!-- 右侧：导航链接 + 图标 -->
        <div class="flex items-center space-x-2">
          <!-- 计划和定价 -->
          <a href="#" class="hidden xl:block text-sm text-gray-700 hover:text-[#A435F0] px-3 py-2 whitespace-nowrap">
            计划和定价
          </a>

          <!-- Udemy Business -->
          <a href="#" class="hidden xl:block text-sm text-gray-700 hover:text-[#A435F0] px-3 py-2 whitespace-nowrap">
            Udemy Business
          </a>

          <!-- 在 Udemy 上授课 -->
          <a href="#" class="hidden lg:block text-sm text-gray-700 hover:text-[#A435F0] px-3 py-2 whitespace-nowrap">
            在 Udemy 上授课
          </a>

          <!-- 我的学习 -->
          <a href="#" class="hidden lg:block text-sm text-gray-700 hover:text-[#A435F0] px-3 py-2 whitespace-nowrap">
            我的学习
          </a>

          <!-- 收藏 -->
          <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>

          <!-- 购物车 -->
          <button class="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </button>

          <!-- 通知 -->
          <button class="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- 用户头像 -->
          <button class="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>
      <!-- </nav> -->
    </header>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)
  const showMobileSearch = ref(false)
  
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 0
  }
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style scoped>
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.3s ease;
  }
  
  .slide-enter-from,
  .slide-leave-to {
    transform: translateX(-100%);
  }
  </style>