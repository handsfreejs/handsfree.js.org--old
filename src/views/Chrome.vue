<template lang="pug">
v-container
  v-layout
    v-row
      v-col.col-12.col-md-6
        AframeHero(v-on:aframeReady='onAframeReady' :content=`{
          pretitle: {text: 'Presenting', position: '-4 -1 -8'},
          title: {text: 'Handsfree Chrome', position: '-4.5 0 -9'}
        }`)
        div.text-center(style='position: reative; z-index: 3')
          h1.display-2.font-weight-bold.mb-5(:class="{invisible: isAframeReady}") Handsfree Chrome
        
      v-col.col-12.col-md-6
        v-card
          v-card-title The Handsfree Chrome Extension 
          v-card-text.body-1
            p Browse the web, watch videos, play games, do work, use social media, and more handsfree 👋
            p Those are the goals anyways, the Chrome Extension is in the works! <strong>Sign up below to get notified of its release</strong>, <a href="https://github.com/handsfreejs/handsfree-chrome">star it on GitHub</a>, and <a href="https://twitter.com/heyozramos">follow me on Twitter @heyozramos</a>
          v-card-actions
            v-text-field(filled label='Enter your email')
              template(v-slot:append-outer)
                v-btn.primary Let me know!

    //- v-row.my-spread
    //-   v-col.col-12
</template>

<script>
import AframeHero from '@/components/AframeHero'

export default {
  components: { AframeHero },

  data: () => ({
    isAframeReady: false
  }),

  methods: {
    /**
     * Called after aframe is ready
     */
    onAframeReady() {
      setTimeout(() => {
        this.isAframeReady = true
      }, 1000)
    }
  }
}
</script>