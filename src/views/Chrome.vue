<template lang="pug">
v-container
  v-layout
    v-row
      v-col.col-12.col-md-6
        AframeHero(v-on:aframeReady='onAframeReady' :content=`{
          pretitle: {text: 'Presenting', position: '-4 -1 -8'},
          title: {text: 'Handsfree Chrome', position: '-4.5 0 -9'}
        }`)
        div.text-center(style='position: relative; z-index: 3')
          h1.display-2.font-weight-bold.mb-5(:class="{invisible: isAframeReady}") Handsfree Chrome
          p
            <a href="https://github.com/handsfreejs/handsfree-chrome" class="mr-3"><img class="mr-1" src="https://img.shields.io/github/last-commit/handsfreejs/handsfree-chrome.svg"></a>
            <a href="https://github.com/handsfreejs/handsfree-chrome" class="mr-3"><img class="mr-1" src="https://img.shields.io/github/issues/handsfreejs/handsfree-chrome/bugs?label=bugs"></a>
            <a href="https://github.com/handsfreejs/handsfree-chrome"><img class="mr-1" src="https://img.shields.io/github/issues/handsfreejs/handsfree-chrome/request?label=requests"></a>

          p
            small With support from the <a href="https://www.cmu.edu/cfa/studio/index.html">STUDIO for Creative Inquiry</a>, <a href="https://glitch.com/@handsfreejs">Glitch.com</a>, the <a href="https://youtu.be/CJDpF4xUieY?t=58">School of AI</a>, and you!
          p.subheading.font-weight-regular.text-left Browse the web, watch videos, play games, do work, use social media, and more handsfree on <a href="https://www.google.com/chrome/">Google Chrome</a> 👋
          p
            small Powered by:
          p
            a(href="https://github.com/jeeliz/jeelizWeboji")
              img(src="https://jeeliz.com/wp-content/uploads/2018/01/LOGO_JEELIZ_BLUE.png" height=30)
        
      v-col.col-12.col-md-6(style="position: relative; z-index: 3")
        v-card
          v-card-title Sign up for our announcement email!
          v-card-text.body-1
            p The Handsfree Chrome Extension is currently in the works. <strong>Sign up below to get notified of when the extension is ready!</strong>
            EmailSignup

        v-card.mt-5.primary
          v-card
            v-card-title Support us on Patreon
            v-card-text.body-1
              p The Handsfree Chrome Extension is <a href="https://github.com/handsfreejs/handsfree-chrome">free and open sourced</a> but by supporting us on Patreon you can unlock access to custom actions, custom dashboards, access to priority support, and more!
            v-card-actions
              v-btn.primary(block href='https://patreon.com/handsfreejs') Support us on Patreon

  .my-spread
    v-row
      v-col.col-12.col-md-6.col-lg-4
        v-card.mt-5.primary
          v-card
            v-card-title Browse the web
            v-card-text
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">More work on the Handsfree Chrome Extension! Here&#39;s what it looks like inside YouTube, including:<br><br>- Scrolling<br>- Clicking on videos<br>- Starting/stopping them<br>- Liking videos/comments<br>- Changing video size<br><br>Day 12 of <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> and <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> <a href="https://t.co/1L0cWrw6u4">pic.twitter.com/1L0cWrw6u4</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1204905957563588608?ref_src=twsrc%5Etfw">December 11, 2019</a></blockquote>

      v-col.col-12.col-md-6.col-lg-4
        v-card.mt-5.primary
          v-card
            v-card-title Use Social Media
            v-card-text
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Got the Handsfree Chrome Extension started! Here&#39;s me controlling the red pointer with my face to change my Twitter theme from Dark Mode to Light Mode<br><br>Day 10 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/3jDrM8eTP9">pic.twitter.com/3jDrM8eTP9</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1204270154256801792?ref_src=twsrc%5Etfw">December 10, 2019</a></blockquote>

      v-col.col-12.col-md-6.col-lg-4
        v-card.mt-5.primary
          v-card
            v-card-title Play Games
            v-card-text
              <blockquote class="twitter-tweet"><p lang="en" dir="ltr">What if you could control your desktop with your face?<br><br>In this experiment I play Candy Crush handsfree by moving my mouse with my head and smirk to click. This uses Robot.js to control the desktop mouse. Code <br>+ tutorial soon!<br><br>Day 11 of <a href="https://twitter.com/hashtag/100DaysofMLCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofMLCode</a> and <a href="https://twitter.com/hashtag/100DaysofCode?src=hash&amp;ref_src=twsrc%5Etfw">#100DaysofCode</a> <a href="https://t.co/FVZ2IQRAwz">pic.twitter.com/FVZ2IQRAwz</a></p>&mdash; Oz Ramos (@HeyOzRamos) <a href="https://twitter.com/HeyOzRamos/status/1197722565646540800?ref_src=twsrc%5Etfw">November 22, 2019</a></blockquote>

    v-layout
      v-row.my-spread
        v-col.col-12.col-md-6.offset-md-3
          v-card
            v-card-title Sign up for our announcement email!
            v-card-text.body-1
              p The Handsfree Chrome Extension is currently in the works. <strong>Sign up below to get notified of when the extension is ready!</strong>
              EmailSignup
</template>

<script>
import AframeHero from '@/components/AframeHero'
import EmailSignup from '@/components/EmailSignup'

export default {
  components: { AframeHero, EmailSignup },

  data: () => ({
    isAframeReady: false
  }),

  mounted() {
    this.$store.dispatch('loadScripts', [
      'https://platform.twitter.com/widgets.js'
    ])
  },

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