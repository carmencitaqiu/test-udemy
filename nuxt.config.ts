export default defineNuxtConfig({
  compatibilityDate: '2025-12-03',
  devtools: { enabled: true },
  // 需要添加 CSS 文件引入
  css: ['~/assets/css/main.css'],
  // modules: [
  //   '@nuxtjs/tailwindcss'
  // ],
  
  // Vite 配置（可选，Nuxt 3 默认已使用 Vite）
  vite: {
    // 如果需要自定义 Vite 配置，可以在这里添加
    // 例如：配置代理、插件、别名等
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: 'http://localhost:3001',
    //       changeOrigin: true
    //     }
    //   }
    // },
    // resolve: {
    //   alias: {
    //     '@': '/src'
    //   }
    // }
  },
  
  app: {
    head: {
      title: 'Test Italy',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Vue3 + Nuxt + Tailwind CSS 项目' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      // 其他 postcss 插件
    },
  }
})

