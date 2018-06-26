<template>
  <div class="home">
    <headline>
        Product Field<br>
        Step-by-Step Guide
    </headline>
    <p>This Online guide takes you from blank canvas to understanding your product step-by-step.</p>
    <p>The guide usually takes about <strong>2 hours</strong>.</p>
    <p>There is no registration necessary. But if you want to pause and come back, we can send you a link that gets you to where you left off.</p>
    <p><strong>Resume link via E-Mail:</strong></p>
    <div><input class="email" v-model="email" placeholder="E-Mail"/></div>
    <div>
        <button v-on:click="start">Start now</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Headline from '../components/Headline.vue';

export default {
  name: 'home',
  props: {
    email: "",
    subscribe: true
  },
  components: {
    headline: Headline
  },
  methods: {
    start: function(){
      this.$router.push('guide');
    }
  }
}
</script>

<style scoped lang="sass">
.email
  width: 100%
</style>
