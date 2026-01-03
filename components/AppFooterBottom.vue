<template>
  <div class="footer-bottom-container">
    
    <div class="social-links">
      <a v-for="social in socialMedia" :key="social.icon" :href="social.link" class="social-icon">
        <i :class="social.icon"></i>
      </a>
    </div>

    <div class="copyright-text">
      © 2026 Developed by <span class="author-name">Ershad Khademii</span>
    </div>

    <div class="legal-links">
      <a href="#" class="legal-item">Cookie Policy</a>
      <a href="#" class="legal-item">User Agreement</a>
    </div>

  </div>
</template>

<script setup>
// مدیریت داده‌ها در اسکریپت
const socialMedia = [
  { icon: 'fa-brands fa-instagram', link: '#' },
  { icon: 'fa-brands fa-telegram', link: '#' },
  { icon: 'fa-brands fa-x-twitter', link: '#' },
  { icon: 'fa-brands fa-youtube', link: '#' }
]
</script>

<style scoped>
.footer-bottom-container {
  @apply flex flex-col md:flex-row justify-between items-center gap-6 py-8 border-t transition-colors duration-300;
  border-color: var(--border-color);
}

/* بخش شبکه‌های اجتماعی */
.social-links {
  @apply flex gap-6 text-xl;
  color: var(--secondary-text);
}

.social-icon {
  @apply transition-all duration-300 hover:scale-110;
}

.social-icon:hover {
  color: var(--accent-hover);
}

/* متن کپی‌رایت */
.copyright-text {
  @apply text-[13px];
  color: var(--secondary-text);
}

.author-name {
  @apply font-extrabold transition-colors duration-300;
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

/* بهینه‌سازی برای موبایل */
@media (max-width: 768px) {
  .footer-bottom-container {
    @apply text-center;
  }
}
</style>