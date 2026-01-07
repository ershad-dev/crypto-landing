<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">
          Start Earning Today
        </h2>
      </div>

      <div class="cta-action">
        <a href="#" class="btn-yellow-flat">
          Sign Up
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  @apply py-10 md:py-12 px-6 -mt-[210px] transition-colors duration-500;
  background-color: var(--card-bg); /* یا var(--bg-color) بسته به دیزاین شما */
}

.cta-container {
  @apply max-w-[1200px] mx-auto flex flex-col items-center justify-center gap-5;
}

.cta-title {
  @apply text-2xl md:text-3xl font-bold tracking-tight;
  color: var(--text-color);
  line-height: 1.2;
}

.btn-yellow-flat {
  @apply px-10 py-2.5 text-base font-bold rounded-lg transition-all duration-200 inline-block;
  background-color: #fcd535;
  color: #1e2329; /* متن دکمه زرد همیشه تیره می‌ماند */
}

.btn-yellow-flat:hover {
  @apply shadow-lg;
  background-color: #f0b90b;
}

@media (max-width: 640px) {
  .cta-section {
    @apply py-8;
  }
  .cta-title {
    @apply text-xl;
  }
}
</style>