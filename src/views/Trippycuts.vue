<template lang="pug">
  v-container
    v-row
      v-col.col-12.col-lg-4
        v-card
          v-card-title Trippycuts
          v-card-text
            p This demo explores <code>handsfree.body</code> to clone copies of yourself in the scene!
            h3.mb-3 Move around the feed to leave a clone of yourself on that spot
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
    window.Handsfree.use('body.trippycuts', ({ body }) => {
      console.log(body)
    })
  },

  beforeDestroy() {
    const handsfree = window.handsfree

    handsfree.model.head.enabled = true
    handsfree.model.bodypix.enabled = false
    handsfree.reload()
    window.Handsfree.enable('head.pointer')
  }
}
</script>
