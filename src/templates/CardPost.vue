<template>
  <Layout>
    <p class="text-center text-xl md:text-3xl xl:text-4xl">
      {{ cardDate }}
    </p>
    <HeaderOne>Happy birthday, {{ haverNames }}!</HeaderOne>
    <div v-for="wish in $page.cardPost.wishers" :key="wish.id">
      <p>{{ wish.message }}</p>
      <p>~ {{ wish.name }}</p>
    </div>
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  cardPost(id: $id) {
    carddate {
      month
      day
    }
    havers {
      id
      name
      date {
        day
        month
      }
    }
    wishers {
      id
      name
      message
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
  computed: {
    haverNames() {
      const havers = this.$page.cardPost.havers;

      // Supported everywhere except IE
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
      const lf = new Intl.ListFormat("en");

      let names = havers.map(function(haver) {
        return haver.name;
      });

      return lf.format(names);
    },
    cardDate() {
      const carddate = this.$page.cardPost.carddate;
      const year = new Date().getFullYear();
      const date = new Date(`${year}-${carddate.month}-${carddate.day}`);

      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      return date.toLocaleDateString("en-US", options);
    },
  },
};
</script>
