<script setup lang="ts">
// The time
const time = computed(() => {
  return new Intl.DateTimeFormat(undefined, {
    hour: 'numeric',
    minute: 'numeric',
  }).format(new Date());
});

const screensData = computed(() => {
  return [
    {
      title: 'Pizza',
      items: [
        {
          image: '/pizzas/kavurmali.png',
          name: 'Kavurmalı Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Kavurma', 'Mantar', 'Soğan', 'Mix Biber Acısız'],
          price: 235
        },
        {
          image: '/pizzas/et-donerli.png',
          name: 'Et Dönerli Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Et Döner', 'Mantar', 'Soğan'],
          price: 235
        },
        {
          image: '/pizzas/karisik.png',
          name: 'Karışık Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Sucuk', 'Salam', 'Sosis', 'Mısır', 'Zeytin'],
          price: 225
        },
        {
          image: '/pizzas/vegan.png',
          name: 'Vegan Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Mantar', 'Soğan', 'Mix Biber Acısız', 'Domates', 'Zeytin', 'Mısır'],
          price: 225
        },
        {
          image: '/pizzas/chicken.png',
          name: 'Tavuklu Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Tavuk', 'Mantar', 'Soğan', 'Mix Biber Acısız'],
          price: 235
        }
      ]
    },
    {
      title: 'Pizza',
      items: [
        {
          image: '/pizzas/margherita.png',
          name: 'Margherita',
          ingredients: ['Pizza sosu', 'mozzarella'],
          price: 180
        },
        {
          image: '/pizzas/pepperoni.png',
          name: 'Sucuklu Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Sucuk'],
          price: 180
        },
        {
          image: '/pizzas/mushroom.png',
          name: 'Mantarlı Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Mantar'],
          price: 180
        },
        {
          image: '/pizzas/bugra.png',
          name: 'Buğra Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Sucuk', 'Mantar', 'Mısır', 'Zeytin', 'Jalapeno'],
          price: 210
        },
        {
          image: '/pizzas/ton-balikli.png',
          name: 'Ton Balıklı Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Ton Balığı', 'Mantar', 'Soğan', 'Mix Biber Acısız'],
          price: 235
        }
      ]
    },
    {
      title: 'Pizza',
      items: [
        {
          // image: 'https://via.placeholder.com/150',
          name: 'Bonfile Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Bonfile eti', 'Mantar', 'Soğan', 'Paprika'],
          price: 260
        },
        {
          // image: 'https://via.placeholder.com/150',
          name: 'Acılı Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Bonfile eti', 'Jalapeno', 'Mexican sos', 'Sarımsak', 'Mantar', 'Soğan'],
          price: 270
        },
        {
          image: '/pizzas/salad.png',
          name: 'Salat Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Et Döner', 'Soğan', 'Marul', 'Domates', 'Salatalık'],
          price: 250
        },
        {
          // image: 'https://via.placeholder.com/150',
          name: 'Etli Karışık Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Et Döner', 'Tavuk Döner', 'Mantar', 'Soğan',],
          price: 270
        },
        {
          image: '/pizzas/chicken.png',
          name: 'Berkin Pizza',
          ingredients: ['Pizza sosu', 'mozzarella', 'Tavuk', 'Mısır', 'Köri Baharatı'],
          price: 235
        }
      ]
    },
    {
      title: 'Burgers',
      items: [
        {
          image: '/burgers/dino-burger.png',
          name: 'Dino Burger',
          ingredients: ['110gr Dana Eti', 'Marul', 'Domates', 'Salatalık Turşusu', 'Burger Sos'],
          price: 0
        },
        {
          image: '/burgers/syxiot-burger.png',
          // Suggest a creative name for two patties burger
          name: 'Syxiot Burger',
          ingredients: ['2 x 110gr Dana Eti', 'Cheddar Peyniri', 'Marul', 'Domates', 'Salatalık Turşusu', 'Burger Sos'],
          price: 0
        },
        {
          image: '/burgers/shaoula-burger.png',
          name: 'Shaoula Burger',
          ingredients: ['3 x 110gr Dana Eti', 'Cheddar Peyniri', 'Marul', 'Domates', 'Salatalık Turşusu', 'Burger Sos'],
          price: 0
        }
      ]
    }
  ]
})
</script>

<template>
  <div class="grid visible" :style="`grid-template-columns: repeat(${screensData.length}, 1fr)`">
    <div v-for="(screen, id) in screensData" :key="id" class="bg-neutral-50 flex flex-col w-screen relative h-screen">
      <header class="flex items-center justify-between py-4 px-8 border-b border-neutral-200 bg-white">
        <div>
          <!-- Logo -->
          <div class="w-10 h-10 bg-neutral-200 rounded-lg ">
            <!-- <img src="/logo.png" alt="Logo" class="w-full h-full object-cover" /> -->
            <img src="/logo.jpg" alt="Logo" class="w-full h-full object-cover" />
          </div>
        </div>

        <div class="flex-1 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-red-500 uppercase title">
            {{ screen.title }}</h1>
        </div>

        <p class=" text-neutral-500 font-medium text-2xl">
          <!-- Time -->
          {{ time }}
        </p>
      </header>

      <!-- <main :class="`grid grid-cols-${screensData.length}`"> -->
      <main class="h-full">

        <!-- <template v-for="screen in screensData"> -->

        <section class="py-8 px-12  h-full relative flex justify-center flex-wrap gap-8">

          <span class="text-9xl font-bold text-red-500 text-center -rotate-90
          absolute top-1/2 left-18 transform -translate-y-1/2 -translate-x-1/2
          opacity-10 section-title">
            {{ screen.title }}
          </span>

          <!-- Items -->
          <template v-for="item in screen.items">
            <div class="flex basis-[30%] flex-col relative items-center">

              <div class="relative w-1/2 rounded-full  shadow-lg bg-white mb-4 aspect-square">
                <div v-if="item?.price && item?.price > 0" class="font-bold absolute -top-4 -left-4 rounded-full bg-neutral-9 text-white p-3 aspect-square flex items-center justify-center
                 font-bold text-xl z-10
                 ">
                  ₺{{ item?.price }}
                </div>
                <img v-if="item.image" :src="item.image" :alt="item.name"
                  class="w-full h-full object-cover rounded-full" />
              </div>

              <div>
                <h3 class=" text-4xl font-bold text-red-800">
                  {{ item.name }}</h3>
                <p class="text-neutral-600 text-lg font-medium">{{ item.ingredients
                  .map(ingredient => ingredient.charAt(0).toUpperCase() + ingredient.slice(1))
                  .join(', ') }}</p>
              </div>
            </div>
          </template>
        </section>
        <!-- </template> -->

      </main>

      <p class="text-neutral-5 font-medium absolute right-6 bottom-6">
        Powered by <span class="text-xl font-black text-black"
          style="font-family: Georgia, 'Times New Roman', Times, serif;">Shaoula</span>
      </p>
    </div>
  </div>
</template>

<style>
.title {
  font-family: 'Pacifico';
  font-weight: 900;
}

.section-title {
  font-family: 'Coiny';
  font-weight: 900;
}
</style>