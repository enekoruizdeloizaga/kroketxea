<script setup lang="ts">

  const { locale } = useI18n()

  const colorMode = useColorMode()

  const itemsEU = [{
    titulo: 'Urdaiazpiko iberikoa',
    img: { src: '/img/kroketak/urdaiazpikoa.jpg' }
  }, {
    titulo: 'Espinaka',
    img: { src: '/img/kroketak/espinaca.jpg' }
  }, {
    titulo: 'Bakailaoa',
    img: { src: '/img/kroketak/bakailaoa.jpg' }
  }, {
    titulo: 'Haragi pikantea',
    img: { src: '/img/kroketak/haragi.jpg' }
  },
  {
    titulo: 'Muskuilu betea',
    img: { src: '/img/kroketak/muskuilu.jpg' }
  },
  {
    titulo: 'Txipiroiak tintan',
    img: { src: '/img/kroketak/txipi.jpg' }
  },
  {
    titulo: 'Idiazabal eta tipula karamelizatua',
    img: { src: '/img/kroketak/idiazabal.jpg' }
  },
  {
    titulo: 'Zeraingo gazta urdina',
    img: { src: '/img/kroketak/zerain.jpg' }
  },
  {
    titulo: 'Porru konfitatua eta otarrainxka',
    img: { src: '/img/kroketak/langos.jpg' }
  },
  {
    titulo: 'Trufa eta Goenaga krema',
    img: { src: '/img/kroketak/trufa.jpg' }
  }]

  const itemsES = [{
    titulo: 'Jamón Ibérico',
    img: { src: '/img/kroketak/urdaiazpikoa.jpg' }
  }, {
    titulo: 'Espinaca',
    img: { src: '/img/kroketak/espinaca.jpg' }
  }, {
    titulo: 'Bacalao',
    img: { src: '/img/kroketak/bakailaoa.jpg' }
  }, {
    titulo: 'Picante de Carne',
    img: { src: '/img/kroketak/haragi.jpg' }
  },
  {
    titulo: 'Mejillón Relleno',
    img: { src: '/img/kroketak/muskuilu.jpg' }
  },
  {
    titulo: 'Chipirones en su tinta',
    img: { src: '/img/kroketak/txipi.jpg' }
  },
  {
    titulo: 'Idiazabal y Cebolla Caramelizada',
    img: { src: '/img/kroketak/idiazabal.jpg' }
  },
  {
    titulo: 'Queso Azul de Zerain',
    img: { src: '/img/kroketak/zerain.jpg' }
  },
  {
    titulo: 'Puerro confitado y langostino',
    img: { src: '/img/kroketak/langos.jpg' }
  },
  {
    titulo: 'Trufa y crema Goenaga',
    img: { src: '/img/kroketak/trufa.jpg' }
  }]

  const partners = [{
    name: 'Kroketxea',
    location: 'Donostia',
    link: 'https://maps.app.goo.gl/ojhMJEbNaWxjiypBA'
  }, {
    name: 'Lamia Kongatuak',
    location: 'Hernani',
    link: 'https://maps.app.goo.gl/fK9DSLcphqQ5UXm79'
  },
  {
    name: 'Lo de Juan',
    location: 'Aiete, Donostia',
    link: 'https://maps.app.goo.gl/gyyAe3u4AmPCHxNw8'
  },
  {
    name: 'Ortigala',
    location: 'Amara, Donostia',
    link: 'https://maps.app.goo.gl/nQhe5Pj6Y1sZPWeR6'
  },
  {
    name: 'J.M. Rekalde',
    location: 'Amara, Donostia',
    link: 'https://maps.app.goo.gl/2kWewrx4pLtmLA4v7'
  },
  {
    name: 'IKO',
    location: 'Igeldo, Donostia',
    link: 'https://maps.app.goo.gl/MpRMf3yFk7R9yX9B9'
  },
  {
    name: 'Petramora',
    location: 'Madrid | Online',
    link: 'https://petramora.com/collections/kroketxea'
  },
  {
    name: 'Basa',
    location: 'Durango',
    link: 'https://maps.app.goo.gl/pocdc7gMWFvqXsbq5'
  },
  {
    name: 'Carnes Rekarte',
    location: 'Irun',
    link: 'https://maps.app.goo.gl/JyGSJcHQTb6yxWME7'
  },
  {
    name: 'La Huerta Clandestina',
    location: 'Zaragoza',
    link: 'https://maps.app.goo.gl/76wwfpNrLEbCebUz6'
  }]

  definePageMeta({
    colorMode: 'dark',
  })

</script>

<template>

  <div class="space-y-16">

    <!-- Hero -->
    <div class="h-screen flex items-center justify-center sticky blurred-bottom brightness-100 dark:brightness-50 opacity-20 dark:opacity-40 z-0">
      <div class="absolute inset-0 h-full bg-gradient-to-t from-slate-50 dark:from-slate-900"></div>
    </div>
    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500" class="absolute h-[80vh] w-full flex items-center justify-center z-10 top-20">
      <img src="/img/logo_small.png" width="100 md:150" class="hover:scale-110 transition-transform duration-300" />
    </div>

    <!-- Gu -->
    <div id="gu" class="px-10 max-w-6xl mx-auto pb-24">
      <div class="hidden sm:block sm:max-w-7xl sm:-ml-36 ml-0 mt-10 rotate-[180deg] bg-gradient-to-r from-[#fdba74] dark:from-[#7c2d12] to-[#334ba94d] dark:to-[#334ba94d] w-full shrink-0 absolute blur-[200px] rounded-full h-56 md:h-80 lg:h-96"></div>
      <div class="flex flex-col py-10">
        <div data-aos="fade-up" data-aos-duration="800" class="flex flex-col sm:flex-row gap-12 w-full bg-white sm:bg-slate-50/80 p-8 dark:border dark:border-slate-800 dark:bg-slate-900/50 rounded-xl z-10 items-center">
          <div class="flex flex-col justify-center items-center text-center">
            <p class="sm:text-xl text-slate-600 dark:text-slate-300">
              "{{ $t('gu1') }}"
            </p>
            <div class="flex gap-4 items-center justify-center pt-8 w-full text-md">
              <UAvatar
                size="2xl"
                src="/img/gu.png"
                alt="Gu"
                :ui="{ size: { md: 'h-28 w-28' } }"
                class="hover:scale-110 transition-transform duration-300"
              />
              <div>
                <p class="text-orange-500 text-xl">
                  Iñaki {{ $t('eta') }} Xabat
                </p>
                <p class="text-slate-400 text-md">
                  Kroketxea
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Kroketak -->
    <div id="kroketak" class="px-10 max-w-7xl mx-auto h-full flex items-center sm:py-16">
      <div class="md:flex items-center gap-4 w-full">
        <div data-aos="fade-right" data-aos-duration="800" class="w-full md:w-5/12 flex flex-col gap-6">
          <div class="flex flex-col gap-3">
            <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('titKroketak') }}</h1>
            <p class="sm:text-xl text-slate-400">{{ $t('subKroketak') }}</p>
          </div>
          <div>
            <UButton size="lg" :ui="{ rounded: 'rounded-full' }" color="orange" variant="solid" class="hover:scale-105 transition-transform duration-300">{{ $t('btnKroketak') }}</UButton>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200" class="w-full md:w-7/12 pt-10 md:px-32">
          <UCarousel
            v-slot="{ item }"
            :items="locale === 'eu' ? itemsEU : itemsES"
            :ui="{
              item: 'basis-full',
              container: 'rounded-xl'
            }"
            :prev-button="{
              color: 'gray',
              icon: 'i-heroicons-arrow-left-20-solid',
              class: '-left-12'
            }"
            :next-button="{
              color: 'gray',
              icon: 'i-heroicons-arrow-right-20-solid',
              class: '-right-12'
            }"
            arrows
            class="w-full px-2 mx-auto"
          >
          <div class="flex flex-col w-full dark:border bg-white dark:border-slate-800 dark:bg-slate-900 hover:shadow-lg transition-all duration-300">
            <img :src="item.img.src" class="w-full h-60 sm:h-96 object-cover rounded-t-xl" draggable="false">
            <div class="p-5">
              <p class="sm:text-2xl dark:text-slate-300">{{ item.titulo }}</p>
            </div>
          </div>
          </UCarousel>
        </div>
      </div>
    </div>

    <!-- Nola frijitu -->
    <div id="nola-frijitu" class="px-10 max-w-7xl mx-auto h-full flex flex-col sm:flex-row-reverse items-center py-16 sm:py-32 gap-8 sm:gap-28">
      <div class="flex flex-col gap-3">
        <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('titFrijitu') }}</h1>
        <p class="sm:text-xl text-slate-400">{{ $t('subFrijitu') }}</p>
      </div>
      <div class="w-full gap-4 sm:gap-14 flex flex-col">
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
          <Card 
            icon="i-heroicons-sun"
            :title="$t('itemFrikitu.titDesizoztu')"
            :description="$t('itemFrikitu.subDesizoztu')"
            class="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
          <Card 
            icon="i-heroicons-fire"
            :title="$t('itemFrikitu.titFrijitu')"
            :description="$t('itemFrikitu.subFrijitu')"
            class="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
          <Card 
            icon="i-heroicons-clock"
            :title="$t('itemFrikitu.titPaus')"
            :description="$t('itemFrikitu.subPaus')"
            class="hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
          <Card 
            icon="i-heroicons-face-smile"
            :title="$t('itemFrikitu.titJan')"
            :description="$t('itemFrikitu.subJan')"
            class="hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>

    <!-- Zer eskaintzen dugu? -->
    <div id="eskaindu" class="px-10 max-w-7xl mx-auto h-full flex flex-col items-center py-16 sm:py-16 gap-10">
      
      <div class="relative w-screen -mx-10 left-0 right-0 overflow-hidden">

        <!-- Línea brillante -->
        <div class="absolute w-[150%] -left-[25%] h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent dark:from-transparent dark:via-orange-500/50 dark:to-transparent opacity-70"></div>
        
        <!-- Efecto de luz -->
        <div class="absolute w-[150%] -left-[25%] h-32 bg-gradient-to-b from-[#fdba74]/10 via-orange-100/15 to-transparent dark:from-orange-500/15 dark:via-orange-800/15 dark:to-transparent"></div>

        <div class="flex flex-col gap-3 text-center pt-36">
          <h1 class="text-4xl sm:text-6xl font-bold z-10">{{ $t('titEskaindu') }}</h1>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center py-10">
        <div  class="flex flex-col gap-2 sm:w-1/2 bg-white p-8 dark:border dark:border-slate-800 dark:bg-slate-900/50 rounded-xl z-10 min-h-56 hover:shadow-lg transition-all duration-300">
          <div>
            <UIcon name="i-heroicons-building-storefront" class="text-3xl mb-2 text-orange-500 hover:scale-110 transition-transform duration-300" />
            <p class="font-bold text-xl">{{ $t('titPar') }}</p>
          </div>
          <p class="text-slate-400 text-md">{{ $t('subPar') }}</p>
        </div>
        <div  data-aos-delay="200" class="flex flex-col gap-2 sm:w-1/2 bg-white p-8 dark:border dark:border-slate-800 dark:bg-slate-900/50 rounded-xl z-10 min-h-56 hover:shadow-lg transition-all duration-300">
          <div>
            <UIcon name="i-heroicons-briefcase" class="text-3xl mb-2 text-orange-500 hover:scale-110 transition-transform duration-300" />
            <p class="font-bold text-xl">{{ $t('titPro') }}</p>
          </div>
          <p class="text-slate-400 text-md">{{ $t('subPro') }}</p>
        </div>
      </div>
      
      <div class="w-full flex text-left flex-col gap-2">
        <div>
          <UBadge size="lg" color="black">{{ $t('titPuntos') }}</UBadge>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-4 border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900/30 rounded-xl z-10">
          <NuxtLink v-for="(item, index) in partners" :to="item.link" no-rel target="_blank" 
            class="flex flex-col gap-1 hover:bg-slate-100 dark:hover:bg-slate-900/80 p-5 px-7 transition-all duration-300"
            :class="{
              'sm:border-r dark:border-slate-800': index % 4 < 3 || index === partners.length - 1,
              'sm:border-b dark:border-slate-800': index < partners.length - (partners.length % 4 || 4),
              'sm:border-t dark:border-slate-800': index >= 4,
              'sm:border-l dark:border-slate-800': index % 4 > 0,
              'border-b': true
            }"
          >
            <div class="flex justify-between items-center">
              <p class="font-bold text-base sm:text-xl">{{ item.name }}</p>
              <UIcon name="i-heroicons-arrow-top-right-on-square" class="dark:text-slate-400 hover:scale-110 transition-transform duration-300" />
            </div>
            <p class="text-slate-400 text-sm sm:text-md">{{ item.location }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Eskatu -->
    <div id="eskatu" class="px-10 max-w-7xl mx-auto h-full flex flex-col items-center py-16 mb-16 sm:mb-96 sm:py-16 gap-10">
      <div class="flex flex-col gap-3 text-center">
        <h1 class="text-5xl sm:text-7xl font-bold text-orange-500 dark:text-orange-400">{{ $t('titEskatu') }}</h1>
        <p class="sm:text-2xl text-slate-400 md:px-36">{{ $t('subEskatu') }}</p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 items-center">
        <div>
          <UButton icon="i-heroicons-phone-solid" :ui="{ rounded: 'rounded-full' }" label="638 947 316" color="gray" size="xl" to="tel:+34638947316" class="hover:scale-105 transition-transform duration-300" />
        </div>
        <div>
          <UButton label="Pokopandegi 24, Donostia" color="gray" size="xl" variant="link" to="https://goo.gl/maps/Y3Ycc4UoyURaRp596" target="_blank" class="hover:scale-105 transition-transform duration-300">
            <template #leading>
              <UAvatar
                src="/img/maps.png"
                size="2xs"
              />
            </template>
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .blurred-bottom {
     background-image: url(/img/imgFondo.webp);
     background-size: cover;
     background-position: center;
   }

  #stardust {
    background: linear-gradient(270deg,#9a3412,#334ba94d);
  }
</style>