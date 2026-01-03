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

  // ۲. معرفی فایل CSS برای پردازش توسط Tailwind 
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      link: [
        // ۳. فونت‌ها و آیکون‌ها 
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' }
      ]
    }
  },



  

  // ۶. فعال‌سازی ماژول تیلویند
  modules: ['@nuxtjs/tailwindcss']
})