<template lang="pug">
  v-app
    v-navigation-drawer.d-print-none(v-model='sidebar.main' app)
      v-layout(column fill-height)
        v-list(dense)
          v-list-item(:to='{name: "Home"}' exact)
            v-list-item-action
              v-icon mdi-home
            v-list-item-content Home
          v-list-item(:to='{name: "SmileTiles"}')
            v-list-item-action
              v-icon mdi-emoticon-excited-outline
            v-list-item-content Smile Tiles
          v-list-item(:to='{name: "YouTube360"}')
            v-list-item-action
              v-icon mdi-youtube
            v-list-item-content YouTube 360
          v-list-item(:to='{name: "Emojify"}')
            v-list-item-action
              v-icon mdi-face-recognition
            v-list-item-content Emojify
          //- v-list-item(:to='{name: "1stPerson"}')
          //-   v-list-item-action
          //-     v-icon mdi-google-street-view
          //-   v-list-item-content 1st Person View
          v-list-item(:to='{name: "FacePaint"}')
            v-list-item-action
              v-icon mdi-brush
            v-list-item-content Face Paint
          v-list-item(:to='{name: "VirtualKeyboard"}')
            v-list-item-action
              v-icon mdi-keyboard
            v-list-item-content Virtual Keyboard
          //- v-list-item(:to='{name: "Desktop"}')
          //-   v-list-item-action
          //-     v-icon mdi-laptop
          //-   v-list-item-content Desktop Control

        v-spacer

        v-list
          v-list-item.primary(:to='{name: "Chrome"}')
            v-list-item-action
              v-icon(style='color: #1e1e3f') mdi-google-chrome
            v-list-item-content(style='color: #1e1e3f')
              strong Chrome Extension

        v-list
        div(:class='{hidden: !isFeedVisible}')
          div(ref='debuggerTarget')
        v-list.handsfree-hide-show-when-stopped(dense)
          v-list-item
            v-list-item-content(@click='toggleDebugger')
              v-btn(block)
                v-icon mdi-webcam
                span.ml-2(v-if='isFeedVisible') Hide debug feed
                span.ml-2(v-else) Show debug feed
          
    v-app-bar(app)
      v-app-bar-nav-icon.mr-3.d-print-none(@click.stop="sidebar.main = !sidebar.main")
      div.d-flex.align-center
        div(style='width: 60px')
          TensorMonkey.mr-3.ozramos-tensormonkey-mini(height='40px' perspective='5000px')
        h1.title Handsfree.js<small style='font-size: 16px'>.org</small>
      v-spacer
      v-btn(v-if='isTracking' color='error' @click='stopWebcam') Stop Webcam
      v-btn(v-else color='primary' @click='startWebcam') Start Webcam
    v-content
      router-view
</template>

<script>
import TensorMonkey from '@/components/TensorMonkey'
import { mapState } from 'vuex'

export default {
  components: { TensorMonkey },

  computed: mapState(['isTracking', 'sidebar']),

  data: () => ({
    isFeedVisible: false
  }),

  mounted() {
    // Setup handsfree
    window.Handsfree.libSrc = '/'
    this.$store.commit('set', [
      'handsfree',
      new window.Handsfree({
        debugger: {
          target: this.$refs.debuggerTarget
        }
      })
    ])
    window.App = this
    window.handsfree = this.$store.state.handsfree

    // Toggle sidebar (show on desktop, hide on mobile)
    // @fixem this stopped working with $nextTick
    setTimeout(() => {
      this.$store.commit('set', [
        'sidebar.main',
        this.$vuetify.breakpoint.lgAndUp
      ])
    }, 10)
  },

  methods: {
    startWebcam() {
      this.$store.dispatch('startTracking')
    },

    stopWebcam() {
      this.$store.dispatch('stopTracking')
    },

    /**
     * Toggles the debugger
     */
    toggleDebugger() {
      if (this.isFeedVisible) {
        this.isFeedVisible = false
        window.handsfree.hideDebugger()
      } else {
        this.isFeedVisible = true
        window.handsfree.showDebugger()
      }
    }
  }
}
</script>
