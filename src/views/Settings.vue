<template lang="pug">
v-container
  v-layout
    v-row
      v-col.col-12.col-md-6
        v-card
          v-card-title Click Gesture
          v-card-text.body-1
            p Choose which part of your face to use for clicking
            v-select(:items='gestureItems' v-model='selectedGesture')
          v-card-text.body-1
            p Set the threshold before a click is registered
            v-slider(min=0 max=1 step=0.05 v-model='gestureThreshold')
              template(v-slot:append)
                v-text-field(v-model='gestureThreshold' type='number' style='width: 60px')
</template>

<script>
export default {
  watch: {
    selectedGesture(gesture) {
      for (let i = 0; i < 11; i++) {
        window.Handsfree.plugins.head.click.config.morphs[i] = 0
      }
      window.Handsfree.plugins.head.click.config.morphs[
        gesture
      ] = this.gestureThreshold
    },

    gestureThreshold(threshold) {
      window.Handsfree.plugins.head.click.config.morphs[
        this.selectedGesture
      ] = threshold
    }
  },

  /**
   * Set values to whatever is configured in Handsfree
   */
  mounted() {
    const morphs = window.Handsfree.plugins.head.click.config.morphs
    const mainMorph = Object.keys(morphs)[0]

    this.selectedGesture = +mainMorph
    this.gestureThreshold = morphs[mainMorph]
  },

  data: () => ({
    gestureItems: [
      { value: 0, text: 'Smile right' },
      { value: 1, text: 'Smile left' },
      { value: 2, text: 'Left eyebrow down' },
      { value: 3, text: 'Right eyebrow down' },
      { value: 4, text: 'Left eyebrow up' },
      { value: 5, text: 'Right eyebrow up' },
      { value: 6, text: 'Open mouth' },
      { value: 7, text: 'Pursed lips' },
      { value: 8, text: 'Right eye close' },
      { value: 9, text: 'Left eye close' },
      { value: 10, text: 'Upper lip up' }
    ],

    selectedGesture: 0,
    gestureThreshold: 0.5
  })
}
</script>