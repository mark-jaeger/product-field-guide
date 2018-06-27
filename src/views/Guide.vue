<template>
  <div class="guide">
    <section class="instructions">
      <nav>
        <select v-model="currentStepUid" v-on:change="changeStep">
            <option
            v-bind:key="step.data.uid"
            v-for="step in steps" f
            v-bind:value="step.uid">
              {{ PrismicDOM.RichText.asText(step.data.title) }}
            </option>
          </select>
      </nav>
      <section v-if="currentStep">
        <headline>{{ PrismicDOM.RichText.asText(currentStep.data.title) }}</headline>
        <div v-html="PrismicDOM.RichText.asHtml(currentStep.data.description)"></div>
      </section>
    </section>
    <section class="editor">
      <iframe class="editorFrame" src="https://docs.google.com/drawings/d/1x5Ic4oNpAdhoDqi-6TD6yZX0CnTSStxNEALlTFqHSEg/copy"></iframe>
    </section>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Headline from '@/components/Headline.vue';

  const Prismic = require('prismic-javascript')
  const PrismicDOM = require('prismic-dom')

  export default {
    name: 'home',
    data() {
      return {
        Prismic,
        PrismicDOM,
        steps: [],
        currentStepUid: null,
        currentStep: null
      };
    },
    methods: {
      loadSteps() {
        const $this = this;

        Prismic.getApi(this.$prismicApiEndpoint, {
          accessToken: this.$prismicAccessToken
        }).then(api => api.query(
          Prismic.Predicates.at('document.type', 'step'), {
            orderings: '[my.step.step_number]'
          },
        )).then((response) => {
          $this.steps = response.results;
          this.setStep(response.results[0].uid)
        }, (err) => {
          console.log('Something went wrong: ', err);
          return [];
        });
      },
      setStep(stepUid) {
        this.currentStepUid = stepUid

        Prismic.getApi(this.$prismicApiEndpoint, {
          accessToken: this.$prismicAccessToken
        }).then(api => api.getByUID(
          'step', stepUid
        )).then((response) => {
          this.currentStep = response
        }, (err) => {
          console.log('Something went wrong: ', err);
          return [];
        });
      },
      changeStep() {
        this.setStep(this.currentStepUid)
      }
    },
    components: {
      headline: Headline
    },
    beforeMount() {
      this.loadSteps();
    },
  };
</script>

<style lang="scss" scoped>
.guide {
  align-content: stretch;
  align-items: stretch;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.instructions {
  flex-grow: 0;
  flex-shrink: 0;
  height: 100%;
  padding: 2em;
  width: 20em;
}

.editor {
  flex-grow: 1;

  iframe {
    border: 0;
    height: 100%;
    width: 100%;
  }
}

</style>