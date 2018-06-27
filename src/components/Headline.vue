<template>
  <h2><slot></slot></h2>
</template>

<script>
export default {
  name: 'Headline',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$primary-color: #304ffe;

h2 {
  color: $primary-color;
  font-size: 48px;
}

h3 {
  font-size: 24px;
}

</style>
