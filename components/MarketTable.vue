<template>
  <div class="market-section-root">
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
      <NuxtLink to="/markets" class="more-link">
        View More <i class="fa-solid fa-angle-right icon-arrow text-[10px]"></i>
      </NuxtLink>
    </div>

    <div class="coins-list">
      <div 
        v-for="(coin, index) in hotCoins" 
        :key="coin.symbol" 
        class="coin-row group"
      >
        <div class="flex items-center gap-3.5 md:gap-5 flex-1 md:flex-none">
          <div class="icon-wrapper">
            <img 
              :src="getIconUrl(coin.symbol)" 
              class="coin-icon" 
              :alt="coin.symbol"
              @error="handleImageError"
            >
          </div>
          <div class="flex flex-col">
            <div class="flex items-center gap-1.5">
              <span class="symbol-text">{{ coin.symbol }}</span>
              <span class="text-[10px] opacity-40 font-bold hidden md:inline">/USDT</span>
              <i v-if="index < 3" class="fa-solid fa-fire text-[#f0b90b] text-[11px]"></i>
            </div>
            <span class="name-text">{{ coin.name }}</span>
          </div>
        </div>

        <div class="flex flex-col md:block text-right md:text-left">
          <span class="price-text">${{ coin.price }}</span>
            <span :class="['change-text md:hidden mt-0.5', coin.change >= 0 ? 'up' : 'down']">
              {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
            </span>
        </div>

        <div class="hidden md:block volume-text">
          {{ coin.volume }} USDT
        </div>

        <div class="hidden md:block">
          <span :class="['desktop-change-tag', coin.change >= 0 ? 'up' : 'down']">
            {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
          </span>
        </div>

        <div class="flex justify-end items-center min-w-[60px] md:min-w-[100px]">
          <button class="md:hidden trade-link-mobile">trade</button>
          <button class="hidden md:block btn-yellow-sm">Trade</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref('futures')
const tabs = [
  { id: 'futures', label: 'Hot Futures' },
  { id: 'new', label: 'New Listing' }
]

const hotCoins = readonly([
  { symbol: 'BTC', name: 'Bitcoin', price: '118,896.89', change: -1.08, volume: '2.4B' },
  { symbol: 'ETH', name: 'Ethereum', price: '4,896.89', change: 2.87, volume: '1.1B' },
  { symbol: 'ADA', name: 'Cardano', price: '1,252.89', change: -0.18, volume: '450M' },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: 0.18, volume: '890M' },
  { symbol: 'ACA', name: 'Acala', price: '0.89', change: 4.16, volume: '12M' },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: 0.18, volume: '890M' },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: 0.18, volume: '890M' },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: 0.18, volume: '890M' },
])

const getIconUrl = (symbol) => `https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${symbol.toLowerCase()}.png`
const handleImageError = (e) => { 
  e.target.src = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png' 
}
</script>

<style scoped>
.market-section-root {
  @apply w-full max-w-[1400px] mx-auto transition-all duration-500 py-4;
}

.card-header {
  @apply flex justify-between items-center mb-6 px-2;
}

/* --- استایل بردر دور جدول با پشتیبانی از تم --- */
.coins-list {
  border: 1px solid var(--border-color); /* بردر داینامیک */
  background-color: var(--card-bg); /* تغییر خودکار از لایت به دارک */
  @apply rounded-[24px] overflow-hidden transition-colors duration-500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
}

.tabs-container {
  @apply flex gap-6 md:gap-10;
}

.tab-item {
  @apply font-[400] cursor-pointer pb-2 text-[18px] md:text-[22px] transition-all leading-tight;
  color: var(--secondary-text);
}

.active-tab {
  @apply border-b-[3px];
  color: var(--text-color);
  border-color: #f0b90b; /* رنگ زرد ثابت برای تب فعال */
}

.more-link {
  @apply text-gray-500 text-[15px] font-bold flex items-center gap-1 transition-all hover:text-black dark:hover:text-white;
}
.more-link:hover { @apply gap-2; }

.coin-row {
  @apply flex justify-between md:grid md:grid-cols-[2fr_1.2fr_1.2fr_1fr_100px] items-center 
         py-5 px-6 transition-all border-b;
  border-color: var(--border-color); /* بردر ردیف‌ها */
}

.coin-row:last-child {
  border-bottom: none;
}

.coin-row:hover {
  background-color: var(--hover-bg); /* استفاده از رنگ هوور تم */
}

.coin-icon {
  @apply w-9 h-9 md:w-10 md:h-10 transition-transform duration-300 group-hover:rotate-12;
}

.symbol-text {
  @apply font-[400] text-[16px] md:text-[18px];
  color: var(--text-color);
}

.name-text {
  @apply text-[12px] md:text-sm font-medium;
  color: var(--secondary-text);
}

.price-text {
  @apply font-[400] text-[16px] md:text-[18px];
  color: var(--text-color);
}

.volume-text {
  @apply text-sm font-semibold;
  color: var(--secondary-text);
}

/* استایل درصد تغییرات (ثابت بماند چون رنگ سیگنالی است) */
.change-text { @apply text-[13px] font-bold; }
.change-text.up, .desktop-change-tag.up { @apply text-[#0ecb81]; }
.change-text.down, .desktop-change-tag.down { @apply text-[#f6465d]; }

.desktop-change-tag {
  @apply font-bold text-base;
}

.trade-link-mobile {
  @apply text-[#D7A81C] text-[16px] font-bold lowercase hover:opacity-70;
}

.btn-yellow-sm {
  @apply text-[#D7A81C] font-extrabold text-base transition-all hover:opacity-80 active:scale-95 bg-transparent p-0 border-none;
}
</style>