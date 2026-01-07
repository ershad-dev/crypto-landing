<template>
  <div class="footer-bottom-container">
    
    <div class="social-links">
      <a v-for="social in socialMedia" 
         :key="social.icon" 
         :href="social.link" 
         class="social-icon"
         target="_blank">
        <i :class="social.icon"></i>
      </a>
    </div>

    <div class="copyright-text">
      © 2026 Developed by <span class="author-name">Ershad Khademii</span>
    </div>

    <div class="legal-links">
      <a v-for="legal in legalLinks" 
         :key="legal.text" 
         :href="legal.link" 
         class="legal-item">
        {{ legal.text }}
      </a>
    </div>

  </div>
</template>

<script setup>
const socialMedia = [
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-telegram', link: '#' },
  { icon: 'fa-brands fa-x-twitter', link: '#' },
  { icon: 'fa-brands fa-youtube', link: '#' }
]

const legalLinks = [
  { text: 'Cookie Policy', link: '#' },
  { text: 'User Agreement', link: '#' }
]
</script>

<style scoped>
.footer-bottom-container {
  /* تنظیم تراز و فاصله با رعایت رنگ بردر تم */
  @apply flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t transition-colors duration-500 -mt-[70px];
  border-color: var(--border-color);
}

/* آیکون‌های اجتماعی */
.social-links {
  @apply flex gap-6 text-xl;
  color: var(--secondary-text);
}

.social-icon {
  @apply transition-all duration-300 hover:scale-110 hover:text-[var(--text-color)];
}

/* استایل متن‌ها */
.copyright-text {
  @apply text-[13px] transition-colors duration-500;
  color: var(--secondary-text);
}

.author-name {
  @apply font-black; /* استفاده از فونت سنگین برای تاکید */
  color: var(--text-color);
}

/* لینک‌های قانونی */
.legal-links {
  @apply flex gap-6 text-[13px];
  color: var(--secondary-text);
}

.legal-item {
  @apply transition-colors duration-300 hover:text-[var(--text-color)];
}

/* بهینه‌سازی ریسپانسیو */
@media (max-width: 768px) {
  .footer-bottom-container {
    @apply py-10; /* فاصله بیشتر در موبایل برای خوانایی */
  }
}
</style>