<template>
  <div class="footer-links-grid">
    <div 
      v-for="(links, category) in nav" 
      :key="category" 
      class="footer-col"
      :class="{ 'is-active': activeCategory === category }"
    >
      <h4 class="col-title" @click="activeCategory = activeCategory === category ? null : category">
        {{ formatTitle(category) }}
        <span class="mobile-arrow md:hidden">
          <i class="fa-solid fa-chevron-down transition-transform duration-300"></i>
        </span>
      </h4>

      <transition name="expand">
        <ul v-show="activeCategory === category" class="col-list mobile-only">
          <li v-for="link in links" :key="typeof link === 'string' ? link : link.name">
            <a :href="typeof link === 'string' ? '#' : link.url">
              {{ typeof link === 'string' ? link : link.name }}
            </a>
          </li>
        </ul>
      </transition>

      <ul class="col-list desktop-only">
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
import { ref } from 'vue'
const props = defineProps(['nav'])
const activeCategory = ref(null)

const formatTitle = (key) => {
  const titles = {
    about: 'About Us', products: 'Products', services: 'Services',
    prices: 'Crypto Prices', buy: 'Buy Crypto', learn: 'Learn'
  }
  return titles[key] || key
}
</script>

<style scoped>
.footer-links-grid {
  /* تنظیم روی 6 ستون برای قرارگیری در یک خط */
  @apply grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-4 mb-16 w-full;
}

.footer-col {
  @apply border-b border-gray-100/10 md:border-none last:border-none;
}

.col-title {
  @apply text-[13px] font-[900] py-4 md:py-0 md:mb-6 uppercase tracking-wider flex justify-between items-center cursor-pointer md:cursor-default;
  color: var(--text-color);
  white-space: nowrap;
}

.col-list {
  @apply space-y-3 pb-4 md:pb-0 overflow-hidden;
}

.col-list a {
  @apply text-[13px] transition-all duration-200 block py-1 md:py-0 text-[#848e9c] hover:text-[#f0b90b];
  white-space: nowrap;
}

.desktop-only { @apply hidden md:block; }
.mobile-only { @apply md:hidden; }
.is-active .mobile-arrow i { @apply rotate-180; }

.expand-enter-active, .expand-leave-active { transition: all 0.3s ease; max-height: 400px; }
.expand-enter-from, .expand-leave-to { max-height: 0; opacity: 0; }
</style>