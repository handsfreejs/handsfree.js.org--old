<template lang="pug">
  div(style='position: relative; height: 100%')
    #scene-wrap(ref='sceneWrap')
      canvas(ref='sceneMain')
    v-container
      v-row
        v-col.col-12.col-lg-4
          v-card
            v-card-title Trippycuts
            v-card-text
              p This demo explores <code>handsfree.body</code> to clone copies of yourself in the scene!
              h3.mb-3 How to
              p Move around the feed to leave a clone of yourself on that spot
</template>

<script>
export default {
  mounted() {
    const handsfree = window.handsfree

    // Configure models
    handsfree.model.head.enabled = false
    handsfree.model.bodypix.enabled = true
    handsfree.model.bodypix.method = 'segmentPerson'
    handsfree.model.bodypix.debugMethod = 'toMask'
    window.Handsfree.disable('head.pointer')
    handsfree.reload()

    // Create a plugin to handle our trippycuts
    const $scene = this.$refs.sceneMain
    // const ctx = this.$refs.sceneMain.getContext('2d')
    window.Handsfree.use('body.trippycuts', {
      onUse(context) {
        $scene.width = context.debugger.video.width
        $scene.height = context.debugger.video.height
      },

      onFrame({ body, model }) {
        if (!body.segmentation.length) return

        model.bodypix.sdk.drawMask(
          $scene,
          handsfree.debugger.video,
          model.bodypix.sdk.toMask(body.segmentation),
          1,
          0,
          0
        )
      }
    })
  },

  beforeDestroy() {
    const handsfree = window.handsfree

    handsfree.model.head.enabled = true
    handsfree.model.bodypix.enabled = false

    window.Handsfree.enable('head.pointer')
    window.Handsfree.disable('body.trippycuts')

    handsfree.reload()
  }
}
</script>

<style lang="sass">
#scene-wrap, #scene-wrap canvas
  position: absolute
  height: 100%
  width: 100%

#scene-wrap canvas
  transform: scale(-1, 1)
</style>