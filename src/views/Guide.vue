<template>
  <div class="guide">
    <GuideNavigation
      v-bind:steps="steps"
      v-bind:Prismic="Prismic"
      v-bind:PrismicDOM="PrismicDOM"></GuideNavigation>

  </div>
</template>

<script>
// @ is an alias to /src
import GuideStep from '@/components/GuideStep.vue';
import GuideNavigation from '@/components/GuideNavigation.vue';

const Prismic = require('prismic-javascript');
const PrismicDOM = require('prismic-dom');

export default {
  name: 'home',
  data() {
    return {
      Prismic,
      PrismicDOM,
      steps: [],
    };
  },
  methods: {
    loadSteps() {
      const $this = this;

      Prismic.getApi(this.$prismicApiEndpoint, { accessToken: this.$prismicAccessToken }).then(api => api.query(
        Prismic.Predicates.at('document.type', 'step'),
        { orderings: '[product.price desc]' },
      )).then((response) => {
        console.log('Results: ', response.results);
        $this.steps = response.results;
      }, (err) => {
        console.log('Something went wrong: ', err);
        return [];
      });
    },
  },
  components: {
    GuideStep,
    GuideNavigation,
  },
  beforeMount() {
    this.loadSteps();
  },
};
</script>
