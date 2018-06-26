<template>
  <div>
    <select>
      <option v-for="step in steps">
        {{ PrismicDOM.RichText.asText(step.data.title) }}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'GuideNavigation',
  props: {
      steps: Array,
      PrismicDOM: Object,
      Prismic: Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
