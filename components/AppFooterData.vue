<script setup>
const footerData = {
  about: ["About", "Blog", "Terms", "Privacy", "Downloads"],
  products: ["Buy Crypto", "Spot Trading", "Futures Trading","Crypto Lending", "Referral", "Converter", "OTC Trading","GemSPACE"],
  services: ["Help center", "Submit a ticket", "Technical support", "Fees & VIP", "Official Verification Center","Solana (SOL) price"],
  prices: ["Bitcoin (BTC)", "Ethereum (ETH)", "Solana (SOL)", "Cardano (ADA)", "Dogecoin (DOGE)","Ripple (XRP) price",""],
  buy: ["Buy Bitcoin", "Buy Ethereum" , "Buy Cardano" , "Buy XRP","Buy Dogecoin","Buy Solana"],
  learn: ["What is the crypto exchange?", "How to buy crypto?"]
}
// ارسال داده‌ها به بیرون
defineExpose({ footerData })
</script>

<template>
  <slot :data="footerData" />
</template>