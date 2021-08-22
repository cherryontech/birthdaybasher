<template>
  <div>
    <h1>Happy birthday, {{ haverNames }}!</h1>

    <div v-for="wish in $page.cardPost.wishers" :key="wish.id">
      <p>{{ wish.message }}</p>
      <p>~ {{ wish.name }}</p>
    </div>
  </div>
</template>

<page-query>
query ($id: ID!) {
  cardPost(id: $id) {
    havers {
      id
      name
      date
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
export default {
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
  },
};
</script>
