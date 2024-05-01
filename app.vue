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
  
  <Head>
    <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet">
  </Head>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

</template>
