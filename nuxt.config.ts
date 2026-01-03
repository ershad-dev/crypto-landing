export default defineNuxtConfig({
  // تاریخ سازگاری
  compatibilityDate: '2026-01-02',

  // ۱. فعال‌سازی اسکن خودکار کامپوننت‌ها
  components: {
    dirs: [
      {
        path: '~/components',
        pathPrefix: false,
      },
    ],
  },

  // ۲. معرفی فایل CSS برای پردازش توسط Tailwind (تغییر کرد)
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        // ۳. فونت‌ها و آیکون‌ها (فایل main.css از اینجا حذف شد)
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
      ]
    }
  },

  // ۴. تنظیمات سرور و پورت
  devServer: {
    port: 3001
  },

  // ۵. تنظیمات Vite برای جلوگیری از خطای WebSocket
  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3001
      }
    }
  },

  // ۶. فعال‌سازی ماژول تیلویند
  modules: ['@nuxtjs/tailwindcss']
})