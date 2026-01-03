<script setup>
const footerData = {
  about: ["About", "Blog", "Terms", "Privacy", "Downloads"],
  products: ["Buy Crypto", "Spot Trading", "Futures Trading", "Referral", "Converter", "OTC Trading"],
  services: ["Help center", "Submit a ticket", "Technical support", "Fees & VIP", "Verification"],
  prices: ["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "Cardano (ADA)", "Dogecoin (DOGE)"],
  buy: ["Buy Bitcoin", "Buy Ethereum"],
  learn: ["What is exchange?", "How to buy?"]
}
// ارسال داده‌ها به بیرون
defineExpose({ footerData })
</script>

<template>
  <slot :data="footerData" />
</template>