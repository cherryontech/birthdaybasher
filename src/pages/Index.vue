<template>
  <Layout class="bg-gray-200">
    <BaseHeader>Birthday Basher!</BaseHeader>

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
import BaseHeader from "@/components/BaseHeader.vue";

export default {
  components: {
    BaseHeader,
  },
  metaInfo: {
    title: "Hello, world!",
  },
};
</script>
