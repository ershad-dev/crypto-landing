<template>
  <div class="price-card-root">
    
    <div class="card-header">
      <div class="tabs-container">
        <span 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-item', { 'active-tab': activeTab === tab.id }]"
        >
          {{ tab.label }}
        </span>
      </div>
      <a href="#" class="more-link">
        More <i class="fa-solid fa-angle-right icon-arrow"></i>
      </a>
    </div>

    <div class="coins-list">
      <div 
        v-for="coin in hotCoins" 
        :key="coin.symbol" 
        class="coin-row group"
      >
        <div class="flex items-center gap-3">
          <div class="icon-wrapper">
            <img 
              :src="getIconUrl(coin.symbol)" 
              class="coin-icon" 
              :alt="coin.symbol"
              @error="handleImageError"
            >
          </div>
          <div class="flex flex-col">
            <span class="symbol-text">{{ coin.symbol }}</span>
            <span class="name-text">{{ coin.name }}</span>
          </div>
        </div>

        <div class="flex flex-col text-right">
          <span class="price-text">${{ coin.price }}</span>
          <span :class="['change-text', coin.change >= 0 ? 'up' : 'down']">
            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// مدیریت تب‌ها
const activeTab = ref('futures')
const tabs = [
  { id: 'futures', label: 'Hot Futures' },
  { id: 'new', label: 'New Listing' }
]

// داده‌های ارزها
const hotCoins = readonly([
  { symbol: 'BTC', name: 'Bitcoin', price: '118,896.89', change: -1.08 },
  { symbol: 'ETH', name: 'Ethereum', price: '4,896.89', change: -2.87 },
  { symbol: 'ADA', name: 'Cardano', price: '1,252.89', change: -0.18 },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: 0.18 },
  { symbol: 'ACA', name: 'Acala', price: '0.89', change: 4.16 }
])

// توابع مدیریت تصویر
const getIconUrl = (symbol) => `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${symbol.toLowerCase()}.png`
const handleImageError = (e) => { 
  e.target.src = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png' 
}
</script>

<style scoped>
.price-card-root {
  @apply p-6 w-full max-w-[420px] mx-auto lg:mr-0 shadow-2xl rounded-[24px] transition-all duration-500;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
}

.card-header {
  @apply flex justify-between items-center mb-6;
}

.tabs-container {
  @apply flex gap-5;
}

.tab-item {
  @apply font-bold cursor-pointer pb-1 text-[15px] transition-all;
  color: var(--secondary-text);
}

.active-tab {
  @apply border-b-2;
  color: var(--text-color);
  border-color: var(--accent-hover);
}

.more-link {
  @apply text-[var(--accent-hover)] text-sm font-bold flex items-center gap-1 transition-all;
}
.more-link:hover { @apply gap-2; }

.coins-list { @apply space-y-1; }

.coin-row {
  @apply flex justify-between items-center p-3 -mx-2 rounded-xl cursor-pointer transition-all;
}
.coin-row:hover {
  background-color: var(--table-hover);
}

.coin-icon {
  @apply w-8 h-8 transition-transform duration-300 group-hover:scale-110;
}

.symbol-text {
  @apply font-bold;
  color: var(--text-color);
}

.name-text {
  @apply text-xs;
  color: var(--secondary-text);
}

.price-text {
  @apply font-bold;
  color: var(--text-color);
}

.change-text {
  @apply text-xs font-medium;
}
.change-text.up { @apply text-green-500; }
.change-text.down { @apply text-red-500; }

.icon-arrow { @apply transition-transform; }
</style>