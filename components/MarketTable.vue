<template>
<div class="w-full">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
      <div class="flex gap-8 w-full sm:w-auto">
        <span class="text-lg font-bold pb-3 border-b-4 border-[#f0b90b] cursor-pointer" 
              style="color: var(--text-color);">
          Hot Futures
        </span>
        
        <span class="text-lg font-bold pb-3 cursor-pointer hover:text-[#f0b90b] transition-colors" 
              style="color: var(--secondary-text);">
          Newly Added
        </span>
      </div>

      <NuxtLink to="/markets" class="text-[#f0b90b] font-bold text-sm flex items-center gap-2 group">
        View More Market Data 
        <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
      </NuxtLink>
    </div>

    <div class="space-y-4">
      <div class="hidden md:grid grid-cols-[2fr_1.2fr_1.2fr_1fr_140px] px-8 text-sm font-bold uppercase tracking-wider"
           style="color: var(--secondary-text);">
        <span>Asset</span>
        <span>Price</span>
        <span>24h Volume</span>
        <span>Change</span>
        <span class="text-center">Action</span>
      </div>
   

      <div v-for="i in 6" :key="i" 
        class="grid grid-cols-2 md:grid-cols-[2fr_1.2fr_1.2fr_1fr_140px] items-center custom-card p-5 md:p-6 !translate-y-0 hover:!scale-[1.01] hover:!translate-x-2 hover:border-[#f0b90b] group"
      >
        <div class="flex items-center gap-4 col-span-2 md:col-span-1 mb-4 md:mb-0">
          <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.png" class="w-10 h-10 group-hover:rotate-12 transition-transform">
          <div class="flex flex-col">
            <span class="text-lg font-[850] force-text">BTC<small class="opacity-50 ml-1">/USDT</small></span>
            <span class="text-xs force-secondary font-semibold">Bitcoin</span>
          </div>
        </div>
        <div class="text-lg font-extrabold force-text">$117,651.89</div>
        <div class="hidden md:block text-sm font-semibold force-secondary">23,980,124.50 USDT</div>
        <div>
          <span :class="i % 2 === 0 ? 'text-up bg-emerald-500/10' : 'text-down bg-red-500/10'" class="px-3 py-2 rounded-xl text-sm inline-block">
            {{ i % 2 === 0 ? '+15.08%' : '-15.08%' }}
          </span>
        </div>
        <div class="col-span-2 md:col-span-1 mt-4 md:mt-0">
          <button class="btn-yellow w-full !py-2.5">Trade Now</button>
        </div>
      </div>
    </div>
  </div>
</template>