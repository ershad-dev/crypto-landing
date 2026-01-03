<template>
  <slot :faqs="faqs" />
</template>

<script setup>
const faqs = readonly([
  {
    question: "What is a cryptocurrency exchange?",
    answer: "A cryptocurrency exchange is a digital marketplace where you can buy and sell assets like Bitcoin, Ethereum, and other digital currencies."
  },
  {
    question: "How safe is my investment?",
    answer: "Security is our priority. We use multi-tier architecture, 2FA, and cold storage for 95% of assets to ensure maximum protection."
  },
  {
    question: "What are the trading fees?",
    answer: "Our fees are among the lowest in the industry, starting at 0.1% for spot trading. Holders of our native token get extra discounts."
  },
  {
    question: "Can I trade on mobile?",
    answer: "Absolutely. Our platform is fully optimized for mobile, with dedicated apps available for both iOS and Android users."
  }
])
</script>