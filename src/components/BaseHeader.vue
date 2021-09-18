<template>
  <component :is="tag" class="text-center font-display" :class="classes">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    level: {
      type: Number,
      default: 1
    },
  },
  computed: {
    tag () {
      return `h${this.level}`
    },
    classes () {
      let classList = []
      switch (this.level) {
        case 1:
        default:
          return [
            'text-5xl',
            'md:text-7xl',
            'xl:text-8xl'
          ]

        case 2:
          return [
            'text-xl',
            'md:text-2xl',
            'xl:text-3xl'
          ]
      }
    }
  },
}
</script>
