<template>
  <div class="footer-links-grid">
    
    <div v-for="(links, category) in nav" :key="category" class="footer-col">
      <h4 class="col-title">{{ formatTitle(category) }}</h4>
      <ul class="col-list">
        <li v-for="link in links" :key="typeof link === 'string' ? link : link.name">
          <a :href="typeof link === 'string' ? '#' : link.url">
            {{ typeof link === 'string' ? link : link.name }}
          </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
const props = defineProps(['nav'])


const formatTitle = (key) => {
  const titles = {
    about: 'About Us',
    products: 'Products',
    services: 'Services',
    prices: 'Crypto Prices',
    buy: 'Buy Crypto',
    learn: 'Learn'
  }
  return titles[key] || key
}
</script>

<style scoped>
.footer-links-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-16;
}

.col-title {
  @apply text-sm font-[900] mb-6 uppercase tracking-wider transition-colors duration-300;
  color: var(--text-color);
}

.col-list { 
  @apply space-y-3; 
}

.col-list a {
  @apply text-[13px] transition-all duration-200 block;
  color: var(--secondary-text);
}

.col-list a:hover {
  @apply translate-x-1;
  color: var(--accent-hover);
}

/* بهینه‌سازی برای نمایش بهتر در موبایل */
@media (max-width: 640px) {
  .footer-links-grid {
    @apply gap-x-6 gap-y-10;
  }
}
</style>