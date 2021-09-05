<template>
  <Layout class="bg-gray-200">
    <HeaderOne>Birthday Basher!</HeaderOne>

    <p>
      Welcome to the Birthday Basher. Navigate to your special string to see
      your birthday card.
    </p>

    <p>See all the data:</p>
    <code>{{ $page.cardposts }}</code>
  </Layout>
</template>

<page-query>
query Cardposts {
  cardposts: allCardPost {
    totalCount
    edges {
      node {
        carddate {
          month
          day
        }
        havers {
          id
          name
          date {
            month
            day
          }
        }
        wishers {
          id
          name
          message
        }
        path
      }
    }
  }
}
</page-query>

<script>
import HeaderOne from "@/components/HeaderOne.vue";

export default {
  components: {
    HeaderOne,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
