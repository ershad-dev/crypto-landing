    <template>
    <div class="flex flex-col gap-6">
        <div v-for="type in ['Losers', 'Gainers']" :key="type" class="custom-card p-8 !translate-y-0">
        <h3 class="text-xl font-[850] force-text mb-6">Top 3 {{ type }}</h3>
        <div class="space-y-6">
            <div v-for="j in 3" :key="j" class="flex justify-between items-center group cursor-pointer hover:translate-x-2 transition-transform">
            <div class="flex items-center gap-4">
                <img :src="type === 'Losers' ? 'https://cryptologos.cc/logos/ethereum-eth-logo.png' : 'https://cryptologos.cc/logos/solana-sol-logo.png'" class="w-8 h-8">
                <span class="font-black force-text">{{ type === 'Losers' ? 'ETH' : 'SOL' }}</span>
            </div>
            <div class="text-right">
                <span class="block font-black force-text text-sm">$4,896.2</span>
                <span :class="type === 'Losers' ? 'text-red-500' : 'text-emerald-500'" class="font-bold text-xs">
                {{ type === 'Losers' ? '-2.8%' : '+5.6%' }}
                </span>
            </div>
            </div>
        </div>
        </div>
    </div>
    </template>