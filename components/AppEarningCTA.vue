<template>
  <section class="cta-section">
    <div class="cta-container">
      <div class="cta-content">
        <h2 class="cta-title">
          Start Earning Today
        </h2>
        <p class="cta-subtitle">
          Join millions of users and start trading with the most secure platform.
        </p>
      </div>

      <div class="shrink-0">
        <a href="#" class="btn-yellow cta-specific-btn">
          Sign Up Now
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta-section {
  @apply py-10 md:py-16 px-6 border-y mb-20 transition-colors duration-300;
  background-color: var(--table-hover);
  border-color: var(--border-color);
}

.cta-container {
  @apply max-w-[1250px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8;
}

.cta-content {
  @apply text-center md:text-left;
}

.cta-title {
  @apply text-2xl md:text-4xl font-[900] tracking-tight;
  color: var(--text-color);
}

.cta-subtitle {
  @apply mt-2 text-sm md:text-base;
  color: var(--secondary-text);
}

.cta-specific-btn {
  @apply px-10 py-4 text-base rounded-xl shadow-xl shadow-yellow-500/10 active:scale-95;
}

/* افکت هاور اختصاصی  */
.cta-specific-btn:hover {
  box-shadow: 0 10px 20px -5px rgba(240, 185, 11, 0.4);
}
</style>