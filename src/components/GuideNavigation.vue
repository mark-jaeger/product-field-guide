<template>
  <div>
    <select>
      <option
       v-bind:key="step.data.id" 
       v-for="step in steps" 
       v-bind:value="step.id"
       v-model="guideStep"
       >
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
    Prismic: Object,
  },
  data: function() {
    return {
      guideStep: false
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
