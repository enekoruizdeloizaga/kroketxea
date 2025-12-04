<script setup lang="ts">
  definePageMeta({
    colorMode: 'light',
  })

  useSeoMeta({
    title: 'Kroketxea',
    ogTitle: 'Kroketxea',
    description: 'Eskuz egindako kroketak',
    ogDescription: 'Eskuz egindako kroketak'
  })
</script>

<template>
  <Snow />
  <div class="bg-slate-50 dark:bg-slate-950">
    <Header />
      <NuxtPage class="mb-48"/>
    <Footer />
  </div>
</template>
