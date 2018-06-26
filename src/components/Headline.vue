<template>
  <h2><slot></slot></h2>
</template>

<script>
export default {
  name: 'Headline',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h2
    font-size: 48px
    color: blue

h3
    font-size: 24px
</style>
