// tailwind.config.js - 使用 module.exports
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'silver': 'rgba(194,233,235,1)',
        'purple-2': '#c0c4fc',
        'blue-3': '#5022c3',
        // Udemy 品牌紫色
        'udemy-purple': {
          DEFAULT: '#A435F0',
          '50': '#F5E6FF',
          '100': '#EACCFF',
          '200': '#D599FF',
          '300': '#C066FF',
          '400': '#AB33FF',
          '500': '#A435F0', // 主色
          '600': '#8B2ED6',
          '700': '#7227BC',
          '800': '#5920A2',
          '900': '#401988'
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '924px',
          xl: '960px',  // 从 1200px 再减少到 1160px
          '2xl': '1184px' // 从 1400px 再减少到 1360px
        }
      }
    },
  },
  plugins: [],
}