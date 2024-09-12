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
  },
  {
    titulo: 'Ahate konfita eta datilak',
    img: { src: '/img/kroketak/pato.jpg' }
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
  },
  {
    titulo: 'Confit de Pato y Dátiles',
    img: { src: '/img/kroketak/pato.jpg' }
  }]

  definePageMeta({
    colorMode: 'dark',
  })

</script>

<template>

  <!-- Hero -->
  <div class="h-screen flex items-center justify-center sticky blurred-bottom brightness-100 dark:brightness-50 opacity-20 dark:opacity-40 z-0">
    <div class="absolute inset-0 h-full bg-gradient-to-t from-slate-50 dark:from-slate-900"></div>
  </div>
  <div class="absolute h-[80vh] w-screen flex items-center justify-center z-10 top-20">
    <img src="/img/logo_small.png" width="100 md:150" />
  </div>

  <!-- Gu -->
  <div id="gu" class="px-10 max-w-7xl mx-auto pb-24">
    <div class="sm:max-w-7xl sm:-ml-36 ml-0 mt-10 rotate-[180deg] bg-gradient-to-r from-[#fdba74] dark:from-[#7c2d12] to-[#334ba94d] dark:to-[#334ba94d] w-full shrink-0 absolute blur-[200px] rounded-full h-56 md:h-80 lg:h-96"></div>
    <div class="flex flex-col py-10">
      <div class="flex flex-col sm:flex-row gap-12 w-full bg-slate-50/90 p-8 dark:border dark:border-slate-800 dark:bg-slate-900/75 rounded-xl z-10 items-center">
        <div class="flex justify-center pb-8">
          <UAvatar
            size="md"
            src="/img/gu.png"
            alt="Gu"
            :ui="{ size: { md: 'h-28 w-28' } }"
          />
        </div>
        <div class="font-medium">
          <p class="sm:text-xl text-slate-700 dark:text-slate-300">
            {{ $t('gu1') }}
            <br/>
            <br/>
            {{ $t('gu2') }}
          </p>
          <div class="pt-5 w-full text-right text-md">
            <div class="text-orange-500 font-medium">
              Iñaki {{ $t('eta') }} Xabat
            </div>
            <div class="text-slate-500">
              Kroketxea
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Kroketak -->
  <div id="kroketak" class="px-10 max-w-7xl mx-auto h-full flex items-center sm:py-16">
    <div class="md:flex items-center gap-4 w-full">
      <div class="w-full md:w-5/12 flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('titKroketak') }}</h1>
          <p class="sm:text-xl text-slate-400">{{ $t('subKroketak') }}</p>
        </div>
        <div>
          <UButton size="lg" :ui="{ rounded: 'rounded-full' }" color="orange" variant="solid">{{ $t('btnKroketak') }}</UButton>
        </div>
      </div>
      <div data-aos-duration="500" class="w-full md:w-7/12 pt-10 px-10 md:px-32">
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
        <div class="flex flex-col w-full dark:border dark:border-slate-800 dark:bg-slate-900">
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
  <div id="nola-frijitu" class="px-10 max-w-7xl mx-auto h-full flex flex-col sm:flex-row sm:flex-row-reverse items-center py-16 sm:py-32 gap-8 sm:gap-28">
    <div class="flex flex-col gap-3">
      <h1 class="text-5xl sm:text-6xl font-bold">{{ $t('titFrijitu') }}</h1>
      <p class="sm:text-xl text-slate-400">{{ $t('subFrijitu') }}</p>
    </div>
    <div class="w-full gap-4 sm:gap-14 flex flex-col">
      <div data-aos="fade-right" data-aos-duration="900">
        <Card 
          icon="i-heroicons-sun"
          :title="$t('itemFrikitu.titDesizoztu')"
          :description="$t('itemFrikitu.subDesizoztu')"
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="900">
        <Card 
          icon="i-heroicons-fire"
          :title="$t('itemFrikitu.titFrijitu')"
          :description="$t('itemFrikitu.subFrijitu')"
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="900">
        <Card 
          icon="i-heroicons-clock"
          :title="$t('itemFrikitu.titPaus')"
          :description="$t('itemFrikitu.subPaus')"
        />
      </div>
      <div data-aos="fade-right" data-aos-duration="900">
        <Card 
          icon="i-heroicons-face-smile"
          :title="$t('itemFrikitu.titJan')"
          :description="$t('itemFrikitu.subJan')"
        />
      </div>
    </div>
  </div>

  <!-- Zer eskaintzen dugu? -->
  <div id="eskaindu" class="px-10 max-w-7xl mx-auto h-full flex flex-col items-center py-16 sm:py-16 gap-10">
    <div class="flex flex-col gap-3 text-center">
      <h1 class="text-5xl sm:text-6xl font-bold z-10">{{ $t('titEskaindu') }}</h1>
    </div>
    <div id="stardust" class="max-w-7xl mt-10 rotate-[170deg] bg-gradient-to-r from-[#ffedd5] dark:from-[#7c2d12] to-[#ffedd5] dark:to-[#334ba94d] w-full shrink-0 absolute blur-[300px] rounded-full h-56 md:h-96 lg:h-96"></div>
    <div class="flex flex-col sm:flex-row gap-10 sm:gap-20 items-center py-10">
      <div class="flex flex-col gap-2 sm:w-1/2 bg-slate-50/80 p-8 dark:border dark:border-slate-800 dark:bg-slate-900/75 rounded-xl z-10 min-h-56">
        <div>
          <UIcon name="i-heroicons-building-storefront" class="text-3xl mb-2 text-orange-500" />
          <p class="font-bold text-xl">{{ $t('titPar') }}</p>
        </div>
        <p class="text-slate-400 text-md">{{ $t('subPar') }}</p>
      </div>
      <div class="flex flex-col gap-2 sm:w-1/2 bg-slate-50/80 p-8 dark:border dark:border-slate-800 dark:bg-slate-900/75 rounded-xl z-10 min-h-56">
        <div>
          <UIcon name="i-heroicons-briefcase" class="text-3xl mb-2 text-orange-500" />
          <p class="font-bold text-xl">{{ $t('titPro') }}</p>
        </div>
        <p class="text-slate-400 text-md">{{ $t('subPro') }}</p>
      </div>
    </div>
  </div>

  <!-- Eskatu -->
  <div id="eskatu" class="px-10 max-w-7xl mx-auto h-full flex flex-col items-center py-16 mb-16 sm:mb-40 sm:py-16 gap-10">
    <div class="flex flex-col gap-3 text-center">
      <h1 class="text-5xl sm:text-7xl font-bold text-orange-500 dark:text-orange-400">{{ $t('titEskatu') }}</h1>
      <p class="sm:text-2xl text-slate-400 md:px-36">{{ $t('subEskatu') }}</p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 items-center">
      <div>
        <UButton :ui="{ rounded: 'rounded-full' }" label="638 947 316" color="gray" size="xl" to="whatsapp://send?phone=+34638947316&abid=++34638947316/">
          <template #leading>
            <UAvatar
              src="/img/whatsapp.png"
              size="2xs"
            />
          </template>
        </UButton>
      </div>
      <div>
        <UButton label="Pokopandegi 24, Donostia" color="gray" size="xl" variant="link" to="https://goo.gl/maps/Y3Ycc4UoyURaRp596" target="_blank">
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