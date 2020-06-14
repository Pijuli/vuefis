<template>
  <hr :class="borderGrayWeight" class="my-2">
</template>

<script>
export default {
  name: 'Divider',
  props: {
    borderWeight: { type: String, default: '500' },
  },
  computed: {
    borderGrayWeight () {
      return `border-gray-${this.borderWeight}`
    },
  },
}
</script>
