<template>
  <div class="flex flex-col gap-6" >
    <div class="flex md:hidden items-center gap-8 mb-2 px-2 border-b" style="border-color: var(--border-color)">
      <div 
        v-for="type in types" 
        :key="type"
        @click="activeTab = type"
        class="relative pb-3 cursor-pointer transition-all"
      >
        <span 
          class="text-lg font-[500] transition-colors"
          :class="activeTab === type ? 'text-active' : 'text-inactive'"
        >
          Top 3 {{ type }}
        </span>
        <div 
          v-if="activeTab === type"
          class="absolute -bottom-[1px] left-0 w-full h-[3px] bg-[#D7A81C] rounded-full"
        ></div>
      </div>
    </div>

    <div class="flex flex-col"> 
      <div 
        v-for="type in types" 
        :key="type" 
        class="custom-card p-6 md:p-8 !translate-y-0"
        :class="{ 'hidden md:block': activeTab !== type }"
      >
        <h3 class="hidden md:block text-xl font-[400] force-text mt-[23px] mb-6 ">Top 3 {{ type }}</h3>
        
        <div class="space-y-6">
          <div 
            v-for="coin in (type === 'Gainers' ? gainersList : losersList)" 
            :key="coin.symbol" 
            class="flex justify-between items-center group cursor-pointer hover:translate-x-2 transition-transform"
          >
            <div class="flex items-center gap-4">
              <img 
                :src="`https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/${coin.symbol.toLowerCase()}.png`" 
                class="w-8 h-8 rounded-full shadow-sm"
                @error="(e) => e.target.src = 'https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/generic.png'"
              >
              <div class="flex flex-col">
                <span class="font-[500] force-text text-[15px] md:text-base leading-tight">
                  {{ coin.symbol }}
                </span>
                <span class="text-[11px] text-gray-500 md:hidden">{{ coin.name }}</span>
              </div>
            </div>

            <div class="text-right">
              <span class="block font-[700] force-text text-sm md:text-base mb-1">
                ${{ coin.price }}
              </span>
              <span 
                :class="coin.change >= 0 ? 'text-[#0ecb81]' : 'text-[#f6465d]'" 
                class="font-bold text-xs md:text-sm"
              >
                {{ coin.change >= 0 ? '+' : '' }}{{ coin.change }}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const types = ['Losers', 'Gainers']
const activeTab = ref('Losers')

const gainersList = ref([
  { symbol: 'BTC', name: 'Bitcoin', price: '118,896.89', change: 2.45 },
  { symbol: 'ETH', name: 'Ethereum', price: '4,896.89', change: 2.87 },
  { symbol: 'ADA', name: 'Cardano', price: '1,252.89', change: 1.15 }
])

const losersList = ref([
  { symbol: 'ADA', name: 'Cardano', price: '1,252.89', change: -0.18 },
  { symbol: 'SOL', name: 'Solana', price: '152.89', change: -1.42 },
  { symbol: 'ACA', name: 'Acala', price: '0.89', change: -4.16 }
])
</script>

<style scoped>
.custom-card {
  @apply rounded-[24px] border transition-all duration-300 w-full;
  /* استفاده از متغیر به جای رنگ ثابت */
  background-color: var(--card-bg); 
  border-color: var(--border-color);
  margin-bottom: 16px; 
}

.force-text {
  color: var(--text-color);
}

/* رنگ متن تب‌های موبایل */
.text-active {
  color: var(--text-color);
}
.text-inactive {
  color: var(--secondary-text);
  opacity: 0.6;
}

@media (min-width: 768px) {
  .custom-card {
    display: block !important;
    margin-top: 12px; 
    margin-bottom: 0;
  }

  .custom-card:first-child {
    margin-top: 80px;
  }
}
</style>