<template>
  <section class="stats-section">
    <div class="max-w-[1400px] mx-auto">
      
      <h2 class="stats-main-title">
        Why <span class="text-accent">US?</span>
      </h2>
      
      <div class="stats-card-wrapper">
        <div 
          v-for="(stat, index) in stats" 
          :key="index" 
          class="stat-group group"
        >
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.desc }}</div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
// داده‌های آمار سایت (ثابت)
const stats = readonly([
  { value: '2,334,894', desc: 'registered users' },
  { value: '+700 Coins', desc: 'Newest coins' },
  { value: '+1,876', desc: '24h Trading pairs' },
  { value: '$10.67 Billion', desc: '24h Trading volume' }
])
</script>

<style scoped>
.stats-section {
  @apply py-16 md:py-24 transition-colors duration-500 px-4;
  background-color: var(--bg-color);
}

.stats-main-title {
  @apply text-4xl md:text-5xl font-[900] text-center mb-12 tracking-tight;
  color: var(--text-color);
}

.text-accent {
  color: var(--accent-hover);
}

.stats-card-wrapper {
  @apply flex flex-wrap lg:flex-nowrap justify-around items-center py-12 md:py-16 px-6 
         rounded-[32px] border transition-all duration-500;
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

.stat-group {
  @apply flex-1 min-w-[200px] text-center px-4 py-6 lg:py-0 
         relative transition-all duration-300 cursor-default hover:-translate-y-2;
}

.stat-value {
  @apply text-3xl md:text-4xl font-extrabold mb-3 transition-colors duration-300;
  color: var(--text-color);
}

.stat-group:hover .stat-value {
  color: var(--accent-hover);
}

.stat-label {
  @apply text-sm font-semibold uppercase tracking-widest transition-colors duration-300;
  color: var(--secondary-text);
}

/* خطوط جداکننده عمودی در دسکتاپ */
@media (min-width: 1024px) {
  .stat-group:not(:last-child)::after {
    content: "";
    @apply absolute right-0 top-1/4 h-1/2 w-[1px];
    background-color: var(--border-color);
  }
}
</style>