<template>
  <section class="py-16 md:py-24 bg-[var(--bg-color)] transition-colors duration-300">
    <div class="max-w-[1250px] mx-auto px-6 text-center">
      
      <h2 class="section-title">
        Advanced Crypto Trading Tools for Faster, Smarter Transactions
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="(tool, index) in tools" :key="index" class="tool-card group">
          <div class="gold-icon-container">25X</div>
          <h4 class="tool-title">{{ tool.title }}</h4>
          <p class="tool-desc">{{ tool.desc }}</p>
          
          <div class="tool-footer border-[var(--border-color)]">
            <span v-if="tool.badge" class="leverage-badge">{{ tool.badge }}</span>
            <a href="#" class="action-link">
              {{ tool.actionText }} 
              <i class="fa-solid fa-chevron-right text-[10px] ml-1 transition-transform group-hover:translate-x-1"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

const tools = [
  {
    title: "Trade Over 400+ Cryptocurrencies Instantly",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    actionText: "Trade",
    badge: null
  },
  {
    title: "Futures Trading with Up to 100x Leverage",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    actionText: "Trade",
    badge: "30x max leverage"
  },
  {
    title: "Earn Passive Income with Staking & Lending",
    desc: "Trade Bitcoin, Ethereum, and other perpetual swap contracts with up to 100x leverage on Poloniex Futures.",
    actionText: "Earn money",
    badge: null
  }
]
</script>

<style scoped>

.section-title {
  @apply text-3xl md:text-4xl font-[900] mb-16 leading-tight tracking-tight max-w-3xl mx-auto;
  color: var(--text-color);
}

.tool-card {
  background-color: var(--card-bg);
  @apply border border-[var(--border-color)] 
         rounded-[32px] p-10 text-left flex flex-col min-h-[420px]
         transition-all duration-300 hover:-translate-y-4 hover:shadow-2xl;
  box-shadow: 0 10px 30px -15px var(--shadow);
}

.tool-card:hover {
  border-color: #f0b90b; 
}

.gold-icon-container {
  @apply text-4xl font-[1000] mb-8 inline-block transition-transform duration-300 group-hover:scale-110 select-none;
  background: linear-gradient(135deg, #e6b94d 0%, #fff3a6 50%, #b8860b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.15));
}

.tool-title {
  @apply text-xl font-[850] mb-4 leading-snug;
  color: var(--text-color);
}

.tool-desc {
  @apply text-sm leading-relaxed mb-auto opacity-90;
  color: var(--secondary-text);
}

.tool-footer {
  @apply flex justify-between items-center mt-8 pt-6 border-t;
}

.action-link {
  @apply text-[#f0b90b] font-bold text-sm transition-all hover:opacity-80 flex items-center gap-1;
}

.leverage-badge {
  @apply text-[11px] font-bold px-3 py-1.5 bg-gray-100 dark:bg-gray-800/50 rounded-lg uppercase tracking-wider;
  color: var(--text-color);
}
</style>