<template>
  <section class="max-w-[1250px] mx-auto px-6 pb-32 relative">
    <div class="hidden xl:flex absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white dark:bg-gray-800 rounded-full shadow-xl items-center justify-center cursor-pointer z-10 border border-[var(--border-color)] hover:bg-[#1e2329] hover:text-white dark:hover:bg-[#f0b90b] transition-all group/nav">
      <i class="fa-solid fa-chevron-right text-lg"></i>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div v-for="(article, index) in articles" :key="index" class="article-card group">
        <span class="badge">{{ article.category }}</span>
        <h3 class="article-h3">{{ article.title }}</h3>
        <p class="article-p">{{ article.desc }}</p>
        <a href="#" class="read-more">
          Read More 
          <i class="fa-solid fa-arrow-right transition-transform group-hover:translate-x-2"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const articles = [
  {
    category: 'Education',
    title: 'What is Bitcoin?',
    desc: "Bitcoin (BTC) is the world's first decentralized cryptocurrency. Launched in 2009, it introduced blockchain technology to the world."
  },
  {
    category: 'Market',
    title: 'Bitcoin Market Momentum',
    desc: "By May 2025, the total crypto market cap reached $3.5 trillion, solidifying BTC's position as 'Digital Gold' for investors."
  }
]
</script>

<style scoped>
.article-card {
  @apply p-8 md:p-12 rounded-[32px] text-left transition-all duration-500 border;
  background-color: var(--card-bg);
  border-color: var(--border-color);
}

.article-card:hover {
  @apply -translate-y-2 shadow-2xl;
  border-color: rgba(240, 185, 11, 0.5);
}

.badge {
  @apply px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mb-6 inline-block;
  background-color: rgba(128, 128, 128, 0.1);
  color: var(--secondary-text);
}

.article-h3 { 
  @apply text-2xl md:text-3xl font-[850] mb-4 leading-tight; 
  color: var(--text-color);
}

.article-p { 
  @apply text-sm md:text-base leading-relaxed mb-8 opacity-80; 
  color: var(--secondary-text);
}

.read-more { 
  @apply font-bold text-sm md:text-base flex items-center gap-2 transition-opacity hover:opacity-80;
  color: #f0b90b;
}
</style>