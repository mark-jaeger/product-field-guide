<template>
  <div class="guide">
    <select v-model="currentStepId">
      <option
       v-bind:key="step.data.id" 
       v-for="step in steps" 
       v-bind:value="step.id">
        {{ PrismicDOM.RichText.asText(step.data.title) }}
      </option>
    </select>
  </div>
</template>

<script>
// @ is an alias to /src
const Prismic = require('prismic-javascript')
const PrismicDOM = require('prismic-dom')
const currentStepId = null

export default {
  name: 'home',
  data() {
    return {
      Prismic,
      PrismicDOM,
      steps: [],
      currentStepId
    };
  },
  methods: {
    loadSteps() {
      const $this = this;

      Prismic.getApi(this.$prismicApiEndpoint, { accessToken: this.$prismicAccessToken }).then(api => api.query(
        Prismic.Predicates.at('document.type', 'step'),
        { orderings: '[my.step.step_number]' },
      )).then((response) => {
        $this.steps = response.results;
        this.currentStepId = response.results[0].id
      }, (err) => {
        console.log('Something went wrong: ', err);
        return [];
      });
    },
  },
  beforeMount() {
    this.loadSteps();
  },
};
</script>
