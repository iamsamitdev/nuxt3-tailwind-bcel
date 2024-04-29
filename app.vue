<script setup>

  useHead({
    title: 'Nuxt 3 Tailwind CSS',
    meta: [
      {
        name: 'description',
        content: 'Nuxt 3 Tailwind CSS'
      },
      {
        name: 'keywords',
        content: 'Nuxt 3, Tailwind CSS'
      }
    ]
  })

</script>

<template>
  <!-- <div>
    <h1 class="
      text-green-700 
      text-4xl border 
      border-red-600 
      m-4 
      p-4 
      animate-bounce
      hover:bg-red-900 
      hover:text-white
      dark:text-green
      light:text-blue
    ">
      <Icon name="uil:github" color="green" />
      Hello Nuxt 3 Tailwind CSS
  </h1>
  </div> -->

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
