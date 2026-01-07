<template>
  <section class="stats-section">
    <div class="max-w-[1400px] mx-auto px-4">
      
      <h2 class="stats-main-title">
        Why US?
      </h2>
      
      <div class="stats-card-wrapper">
        <div 
          v-for="(stat, index) in stats" 
          :key="index" 
          class="stat-group"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.desc }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// استفاده از readonly برای داده‌های ثابت ایده خوبی است
const stats = readonly([
  { value: '2,334,894', desc: 'registered users' },
  { value: '+700 Coins', desc: 'Newest coins' },
  { value: '+1,876', desc: '24h Trading pairs' },
  { value: '$10.67 Billion', desc: '24h Trading volume' }
])
</script>

<style scoped>
.stats-section {
  @apply py-16 md:py-24 transition-colors duration-500;
  background-color: var(--bg-color);
}

.stats-main-title {
  @apply text-4xl md:text-5xl font-medium text-center mb-10 md:mb-16 tracking-tight;
  color: var(--text-color);
}

.stats-card-wrapper {
  /* تنظیم گرید در موبایل و فلکس در دسکتاپ */
  @apply grid grid-cols-2 lg:flex lg:flex-nowrap justify-around items-center 
         py-8 md:py-16 w-full rounded-2xl md:rounded-[32px] 
         transition-all duration-500;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
}

.stat-group {
  @apply text-center py-8 px-4 transition-all duration-300 cursor-default flex flex-col items-center;
}

/* مدیریت خطوط جداکننده در موبایل بدون استفاده از nth-child پیچیده */
@media (max-width: 1023px) {
  .stat-group {
    @apply border-b border-gray-100/10;
    border-color: var(--border-color);
  }
  .stat-group:nth-child(odd) {
    @apply border-r;
  }
  .stat-group:nth-last-child(-n+2) {
    @apply border-b-0;
  }
}

.stat-value {
  @apply text-xl sm:text-2xl md:text-3xl font-bold mb-2 transition-colors duration-300;
  color: var(--text-color);
}

.stat-label {
  @apply text-sm md:text-base font-medium;
  color: var(--secondary-text);
}

/* افکت هوور فقط برای دسکتاپ جهت تمیزی UX */
@media (min-width: 1024px) {
  .stat-group:hover {
    @apply -translate-y-2;
  }
  .stat-group:hover .stat-value {
    color: #f0b90b; /* رنگ زرد برند */
  }
}
</style>