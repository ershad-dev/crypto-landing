<template>
  <div class="site-container">
    <AppNavbar />

    <main>
      <HeroMain/>

      <AppStats />

      <MarketMain />

      <AppTradingTools />

      <AppDownload />

      <AppTrustMain />

      <AppEarningMain />

      <AppFaqMain />
    </main>

    <AppFooterMain />
  </div>
</template>



<style>
/* استایل‌های سراسری برای یکپارچگی کل پروژه */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, sans-serif;
}

body {
  background-color: #ffffff;
  color: #1e2329;
  line-height: 1.5;
  overflow-x: hidden;
}

html {
  scroll-behavior: smooth;
}

/* جلوگیری از چسبیدن بخش‌ها در صورت نبود مارجین داخلی */
main > section, 
main > div {
  width: 100%;
}
</style>