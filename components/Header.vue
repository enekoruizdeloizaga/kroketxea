<script setup lang="ts">
  // const locales = ['EU', 'ES']

  const { locales, setLocale } = useI18n()

  const availableLocales = computed(() => {
    return locales.value.map(i => i.code.toUpperCase())
  })
  const selectedLocale = ref(availableLocales.value[0])
  watch(selectedLocale, (val) => {
    setLocale(val.toLowerCase())
  })

  console.log(selectedLocale.value)

  // Menu
  const open = ref(false)

  // Color mode
  const colorMode = useColorMode()
  const changeColor = () => {
    colorMode.value = colorMode.value === 'light' ? 'dark' : 'light'
  }

</script>

<template>
  <header class="fixed top-0 left-0 right-0 w-full z-50 backdrop-blur-lg transition ">
    <div class="w-full h-16 px-10 max-w-7xl mx-auto flex items-center justify-between">
      <div>
        <img src="/img/logo_small.png" width="25"/>
      </div>
      <div class="gap-20 items-center h-full text-xs font-semibold hidden sm:flex">
        <ULink to="#gu">{{ $t('titGu') }}</ULink>
        <ULink to="#kroketak">{{ $t('titKroketak') }}</ULink>
        <ULink to="#nola-frijitu">{{ $t('titFrijitu') }}</ULink>
        <ULink to="#eskaindu">{{ $t('titEskaindu') }}</ULink>
        <UButton size="sm" to="whatsapp://send?phone=+34638947316&abid=++34638947316/" :ui="{ rounded: 'rounded-full' }" color="orange">{{ $t('titEskatu') }}</UButton>
      </div>
      <div class="flex items-center gap-2">
        <div>
          <USelectMenu :ui="{ rounded: 'rounded-full', background: 'bg-transparent' }" :uiMenu="{ width: 'w-20' }" size="xs" v-model="selectedLocale" :options="availableLocales" />
        </div>
        <UModal v-model="open" fullscreen :transition="false">
          <UCard
            :ui="{
              base: '',
              rounded: '',
              divide: 'divide-y divide-gray-100 dark:divide-gray-800',
              body: {
                base: 'grow'
              },
              ring: '',
              shadow: ''
            }"
          >
            <template #header>
              <div class="px-6 flex items-center justify-between mx-auto px-1">
                <!-- Logo -->
                <img src="/img/logo_small.png" width="25"/>
                <!-- Close button -->
                <UButton aria-label="Logo" color="gray" variant="ghost" square icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="open = false" />
              </div>
            </template>
            <div class="flex flex-col gap-3 px-6 py-4">
              <UButton icon="i-heroicons-users" color="gray" variant="ghost" to="#gu" @click="open = false">Gu</UButton>
              <UButton icon="i-heroicons-clipboard" color="gray" variant="ghost" to="#kroketak" @click="open = false">Kroketak</UButton>
              <UButton icon="i-heroicons-fire" color="gray" variant="ghost" to="#nola-frijitu" @click="open = false">Nola frijitu</UButton>
              <UButton icon="i-heroicons-building-storefront" color="gray" variant="ghost" to="#eskaindu" @click="open = false">Zer eskaintzen dugu?</UButton>
              <UButton icon="i-heroicons-chat-bubble-left-right" color="gray" variant="ghost" to="whatsapp://send?phone=+34638947316&abid=++34638947316/" @click="open = false">Eskatu</UButton>
              <UDivider class="py-2"></UDivider>
              <div>
                <UButton variant="ghost" 
                :color="colorMode.value === 'light' ? 'orange' : 'gray'" 
                size="xs" 
                :icon="colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
                @click="changeColor" 
                :ui="{ rounded: 'rounded-full' }">
              </UButton>              </div>
            </div>
          </UCard>
        </UModal>
        <UButton
          class="sm:hidden"
          aria-label="Desplegar menú"
          @click="open = true"
          icon="i-heroicons-bars-2-20-solid"
          color="white"
          variant="link"
        />
        <div class="hidden sm:flex pl-2">
          <UButton variant="ghost" 
            :color="colorMode.value === 'light' ? 'orange' : 'gray'" 
            size="xs" 
            :icon="colorMode.value === 'light' ? 'i-heroicons-sun' : 'i-heroicons-moon'" 
            @click="changeColor" 
            :ui="{ rounded: 'rounded-full' }"></UButton>
        </div>
      </div>
    </div>
  </header>
</template>