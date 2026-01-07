<template>
  <section class="market-main-section">
    <div class="max-w-[1400px] mx-auto px-4 md:px-10">
      
      <header class="market-header">
        <h2 class="market-title flex justify-center ">
          Live Cryptocurrency Prices Market Data
        </h2>
        <p class="market-subtitle flex justify-center">
          Top Gainers Today
        </p>
      </header>

      <div class="market-grid-layout">
        
        <div class="market-table-container">
          <MarketTable />
        </div>

        <aside class="market-sidebar">
          <MarketSideLists />
        </aside>

      </div>
    </div>
  </section>
</template>

<style scoped>
.market-main-section {
  @apply py-16  transition-colors duration-500 -mt-20;
  background-color: var(--bg-color);
}

.market-header {
  @apply mb-10 text-center md:text-left;
}

.market-title {
  @apply text-3xl md:text-4xl font-[500] tracking-tight;
  color: var(--text-color);
  
}

.market-subtitle {
  @apply text-base md:text-lg mt-2 transition-colors duration-300;
  color: var(--secondary-text);
}

/* مدیریت گرید برای نمایش بهینه در دسکتاپ و موبایل */
.market-grid-layout {
  @apply grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-10 items-start;
}

.market-table-container {
  @apply overflow-hidden;
}

.market-sidebar {
  @apply flex flex-col gap-8;
}

/* افکت ملایم برای ورود به بخش مارکت */
.market-main-section {
  animation: slideUpFade 0.6s ease-out;
}

@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>