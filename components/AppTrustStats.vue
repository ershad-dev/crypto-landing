<template>
  <div class="mb-32">
    <h2 class="trust-header">
      Why Millions Trust <span class="text-accent">US?</span>
    </h2>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      <div v-for="(stat, index) in stats" :key="index" class="trust-item group">
        
        <div class="icon-box">
          <div v-if="stat.isSpecial" class="secure-logo-circle">
            <div class="diamond-shape"></div>
          </div>
          <i v-else :class="stat.icon" class="stat-icon-font"></i>
        </div>

        <h3 class="trust-h3">{{ stat.title }}</h3>
        <p class="trust-p">{{ stat.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const stats = readonly([
  { 
    icon: 'fa-solid fa-medal', 
    title: '24/7', 
    desc: 'Customer Support in 40 languages' 
  },
  { 
    isSpecial: true, 
    title: 'Secure and Stable', 
    desc: 'Advanced protection for your assets' 
  },
  { 
    icon: 'fa-solid fa-calendar-check', 
    title: '6 years with you', 
    desc: 'Reliable service since the beginning' 
  },
  { 
    icon: 'fa-solid fa-bolt', 
    title: 'Trade Fast', 
    desc: 'High-performance matching engine' 
  }
])
</script>

<style scoped>
.trust-header {
  @apply text-3xl md:text-4xl font-[900] mb-16 tracking-tight text-center;
  color: var(--text-color);
}

.text-accent {
  color: var(--accent-hover);
}

.trust-item {
  @apply flex flex-col items-center text-center cursor-default;
}

.icon-box {
  @apply h-20 flex items-center justify-center mb-6 text-[45px] transition-transform duration-300 group-hover:scale-110;
  color: var(--secondary-text);
}

.stat-icon-font {
  @apply transition-colors duration-300;
}
.trust-item:hover .stat-icon-font {
  color: var(--accent-hover);
}

.secure-logo-circle {
  @apply w-[52px] h-[52px] rounded-full flex items-center justify-center transition-colors duration-300;
  background-color: var(--secondary-text);
}

.trust-item:hover .secure-logo-circle {
  background-color: var(--accent-hover);
}

.diamond-shape {
  @apply w-3.5 h-3.5 bg-white rotate-45;
}

.trust-h3 {
  @apply text-xl font-[800] mb-3;
  color: var(--text-color);
}

.trust-p {
  @apply text-sm font-medium leading-relaxed max-w-[200px];
  color: var(--secondary-text);
}

/* بهینه‌سازی ریسپانسیو */
@media (max-width: 640px) {
  .trust-header { @apply text-2xl mb-10; }
  .icon-box { @apply mb-4 text-[38px]; }
}
</style>