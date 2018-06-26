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
      const apiEndpoint = 'https://product-field-guide.cdn.prismic.io/api/v2';
      const apiToken = 'MC5XeU8yMUNRQUFHQ05UcXhZ.ae-_ve-_ve-_vXtOBO-_vR3vv71GLe-_ve-_vVdC77-9de-_vWDvv71pXXMqCe-_ve-_ve-_vVFD77-9';


      const $this = this;

      Prismic.getApi(apiEndpoint, { accessToken: apiToken }).then(api => api.query(
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
