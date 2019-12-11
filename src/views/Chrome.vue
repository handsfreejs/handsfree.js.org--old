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
            p Those are the goals anyways, the extension is in the works! <strong>Sign up below to get notified of when the extension is ready.</strong>

            form.mt-5(action='https://handsfree.us4.list-manage.com/subscribe/post?u=68fc2805161cded43e4f479fb&amp;id=d3a6b8610f' method='post')
              v-text-field(filled type='email' name='EMAIL' label='Enter your email')
                template(v-slot:append-outer)
                  v-btn.primary(type='submit' name='subscribe' value='Subscribe') Notify me!
              <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_68fc2805161cded43e4f479fb_d3a6b8610f" tabindex="-1" value=""></div>

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