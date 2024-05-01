<script lang="ts" setup>

  // รับค่า params จาก URL
  const params = useRoute().params

  // Call API useWpApi
  const {data: posts, pending } = await useWpApi().getPost(params.slug as string)

  const post = (posts.value as Array<any>)?.[0]

  useHead({
    title: post?.title.rendered,
    meta: [
      {
        name: 'description',
        content: `${post?.excerpt.rendered}`,
      }
    ]
  })

</script>

<template>
  <section class="container px-4 py-10 mx-auto md:px-0 sm:py-4">
    <div v-if="post" class="sm:px-20">

      <!-- Title -->
      <h1 class="mb-5 text-3xl font-bold leading-snug text-center" v-html="post.title.rendered"></h1>

      <!-- Blog Meta -->
      <div class="flex-col justify-center gap-5 mb-10 md:flex-row">
        <span class="block md:inline text-primary-500">
          <b>Written by:</b> {{post._embedded["author"][0]?.name}}&nbsp;
        </span>
        <span class="text-primary-500"><b>Published:</b> {{ post.date }}</span>
      </div>

      <!-- Image -->
      <div class="h-[250px] sm:h-[500px] w-full rounded shadow-xl relative overflow-hidden mb-12"
      >
        <img
          :src="post._embedded['wp:featuredmedia'][0]?.source_url"
          :alt="post.title.rendered"
          class="absolute object-cover w-full h-full"
        />
      </div>

      <!-- Blog Content -->
      <div class="text-start" v-html="post.content.rendered"></div>

    </div>
  </section>
</template>

<style scoped></style>
