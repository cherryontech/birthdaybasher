<template>
  <Layout>
    <BaseDate>
      {{ cardDate }}
    </BaseDate>
    <BaseHeader>Happy birthday, {{ haverNames }}!</BaseHeader>
    <div v-for="wish in $page.cardPost.wishers" :key="wish.id">
      <BaseParagraph>{{ wish.message }}</BaseParagraph>
      <BaseHeader :level="2">~ {{ wish.name }}</BaseHeader>
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
import BaseHeader from '@/components/BaseHeader.vue'
import BaseParagraph from '@/components/BaseParagraph.vue'
import BaseDate from '@/components/BaseDate.vue'

export default {
  components: {
    BaseDate,
    BaseHeader,
    BaseParagraph
  },
  computed: {
    haverNames () {
      const havers = this.$page.cardPost.havers

      // Supported everywhere except IE
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/ListFormat
      const lf = new Intl.ListFormat('en')

      let names = havers.map(function (haver) {
        return haver.name
      })

      return lf.format(names)
    },
    cardDate () {
      const carddate = this.$page.cardPost.carddate
      const year = new Date().getFullYear()
      const date = new Date(`${year}-${carddate.month}-${carddate.day}`)

      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>
