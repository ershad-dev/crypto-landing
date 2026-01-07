<template>
  <slot :faqs="faqs" />
</template>

<script setup>
const faqs = readonly([
  {
    question: "What is a cryptocurrency exchange?",
    answer: "A cryptocurrency exchange is a digital platform where you can buy, sell, and trade various digital currencies like Bitcoin, Ethereum, and other altcoins securely."
  },
  {
    question: "What products does Binance provide??",
    answer: "Binance offers a comprehensive suite of products including spot trading, futures trading, savings accounts, staking, NFT marketplace, and crypto lending services."
  },
  {
    question: "How to buy Bitcoin and other cryptocurrencies on Binance",
    answer: "You can buy Bitcoin and other cryptocurrencies by depositing funds via bank transfer, credit card, or other payment methods, then using the simple buy interface or spot trading platform."
  },
  {
    question: "How to track cryptocurrency prices",
    answer: "Track real-time cryptocurrency prices using Binance's advanced charting tools, price alerts, and market analysis features available on both web and mobile platforms."
  },
    {
    question: "How to trade cryptocurrencies on Binance",
    answer: "Trade cryptocurrencies by placing market orders, limit orders, or stop-limit orders on our spot, margin, or futures trading platforms with advanced charting and analysis tools."
  },
  {
    question: "How to earn from crypto on Binance",
    answer: "Earn passive income through Binance Earn products including staking, savings, liquidity mining, and Launchpool with rewards on 180+ cryptocurrencies."
  }

])
</script>