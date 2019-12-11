<template lang="pug">
  div(style='width: 190px; height: 190px; margin: auto; position: relative').text-left
    div#aframe-scene-wrap(:class='{invisible: !isAframeReady}')
      a-scene#aframe-scene(ref='aframe' embedded)
        a-assets
          img(id="pink" src="https://img.gs/bbdkhfbzkk/stretch/http://i.imgur.com/1hyyIUi.jpg" crossorigin="anonymous")
          img(src="https://img.gs/bbdkhfbzkk/stretch/https://i.imgur.com/25P1geh.png" id="grid" crossorigin="anonymous")
          img(src="https://img.gs/bbdkhfbzkk/2048x1024,stretch/http://i.imgur.com/WMNH2OF.jpg" id="chrome" crossorigin="anonymous")
          img(id="sky" src="https://img.gs/bbdkhfbzkk/2048x2048,stretch/http://i.imgur.com/WqlqEkq.jpg" crossorigin="anonymous")
          a-asset-item(id="dawningFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2FdawningOfANewDayRegular.typeface.json?1490305922844")
          a-asset-item(id="exoFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2Black.typeface.json?1490305922150")
          a-asset-item(id="exoItalicFont" src="https://cdn.glitch.com/c719c986-c0c5-48b8-967c-3cd8b8aa17f3%2Fexo2BlackItalic.typeface.json?1490305922725")

        //- Text
        a-entity(:position='content.pretitle.position' rotation="5 0 0")
          a-entity(rotation="0 0 5" position="0 2 0.2" :text-geometry="`value: ${content.pretitle.text}; font: #dawningFont; bevelEnabled: true; bevelSize: 0.025; bevelThickness: 0.025; curveSegments: 12; size: .5; height: 0;`" material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;")
        a-entity(:position="content.title.position" :text-geometry="`value: ${content.title.text}; font: #exoItalicFont; style: italic; size: 0.7; weight: bold; height: 0;`" material="shader: flat; color: white")
        a-entity(:position="content.title.position" :text-geometry="`value: ${content.title.text}; font: #exoItalicFont; style: italic; size: 0.7; weight: bold; height: 0; bevelEnabled: true; bevelSize: 0.04; bevelThickness: 0.04; curveSegments: 1`" material="shader: flat; color: white; transparent: true; opacity: 0.4")

        //- Floor
        a-entity(ref="floor" geometry="primitive: plane; width: 10000; height: 10000;" rotation="-90 0 0" material="src: #grid; repeat: 10000 10000; transparent: true;metalness:0.6; roughness: 0.4; sphericalEnvMap: #sky;")

        //- Lights
        a-entity(light="color: #ccccff; intensity: 1; type: ambient;" visible="")
        a-entity(light="color: ffaaff; intensity: 1.5" position="5 5 5")
        a-entity(light="color: white; intensity: 0.5" position="-5 5 15")
        a-entity(light="color: white; type: ambient;")

        //- Sky
        a-sky(src="#sky" rotation="0 -90 0")
        a-entity(ref='camera' position='0 1.5 0')
          a-entity(camera)

    canvas#tensormonkey-fireworks(ref='canvas' width=500 height=500)
    TensorMonkey.ozramos-tensormonkey-animated-slowly(@click='startFireworks' height='150px' perspective='400px')
</template>

<script>
import { TweenMax } from 'gsap/all'
import TensorMonkey from '@/components/TensorMonkey'
import anime from 'animejs/lib/anime.es.js'
import { mapState } from 'vuex'

let rotation = { x: 0, y: 0, z: 0 }

export default {
  components: { TensorMonkey },

  computed: mapState(['isTracking']),

  props: ['content'],

  data: () => ({
    anime: null,

    isAframeReady: false,
    shouldReloop: true,
    floorSpeed: 0.01,

    titleBlock: {}
  }),

  watch: {
    isTracking() {
      this.startFireworks()
    }
  },

  mounted() {
    let component = this

    /**
     * Setup animejs fireworks
     */
    const ctx = this.$refs.canvas.getContext('2d')
    this.anime = anime({
      duration: Infinity,
      update: () => {
        ctx.clearRect(0, 0, this.$refs.canvas.width, this.$refs.canvas.height)
      }
    })

    /**
     * Loop background
     */
    // Animate the floor moving
    this.animateFloor(true)

    /**
     * "Look around" the aframe
     */
    window.Handsfree.use('aframe.hero', {
      onFrame({ head }) {
        if (!component.$refs.camera) return

        component.floorSpeed = 0.1

        TweenMax.to(rotation, 500 / 1000, {
          x: -head.rotation[0] + 0.20944,
          y: -head.rotation[1],
          z: head.rotation[2]
        })

        component.$refs.camera.object3D.rotation.x = rotation.x
        component.$refs.camera.object3D.rotation.y = rotation.y
        component.$refs.camera.object3D.rotation.z = rotation.z
      }
    })

    this.$refs.aframe.addEventListener('loaded', this.onAframeReady)
  },

  beforeDestroy() {
    window.Handsfree.disable('aframe.hero')
    this.shouldReloop = false
    this.$refs.aframe.removeEventListener('loaded', this.onAframeReady)
    this.anime.pause()
  },

  methods: {
    onAframeReady() {
      this.isAframeReady = true
      this.$emit('aframeReady')
    },

    /**
     * Scrolls the floor away from user
     */
    animateFloor(shouldReloop) {
      if (!this.$refs.floor) return

      this.$refs.floor.object3D.position.z -= this.floorSpeed
      if (this.$refs.floor.object3D.position.z < -100)
        this.$refs.floor.object3D.position.z = 0

      if (shouldReloop) {
        requestAnimationFrame(() => this.animateFloor(true))
      }
    },

    /**
     * Shoots fireworks
     */
    startFireworks() {
      const ctx = this.$refs.canvas.getContext('2d')

      this.animateFireworks(250, 250, ctx)
      anime({ duration: 250 }).finished.then()
    },

    /**
     * Animate fireworks
     */
    animateFireworks(x, y, ctx) {
      var circle = this.createCircle(x, y, ctx)
      var particules = []
      for (var i = 0; i < 250; i++) {
        particules.push(this.createParticle(x, y, ctx))
      }
      anime
        .timeline()
        .add(
          {
            targets: particules,
            x: function(p) {
              return p.endPos.x
            },
            y: function(p) {
              return p.endPos.y
            },
            radius: 0.1,
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: this.renderParticle
          },
          0
        )
        .add(
          {
            targets: circle,
            radius: anime.random(80, 160),
            lineWidth: 0,
            alpha: {
              value: 0,
              easing: 'linear',
              duration: anime.random(600, 800)
            },
            duration: anime.random(1200, 1800),
            easing: 'easeOutExpo',
            update: this.renderParticle,
            offset: 0
          },
          0
        )
    },

    createCircle(x, y, ctx) {
      var p = {}
      p.x = x
      p.y = y
      p.color = '#FFF'
      p.radius = 0.1
      p.alpha = 0.5
      p.lineWidth = 6
      p.draw = function() {
        ctx.globalAlpha = p.alpha
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
        ctx.lineWidth = p.lineWidth
        ctx.strokeStyle = p.color
        ctx.stroke()
        ctx.globalAlpha = 1
      }
      return p
    },

    createParticle(x, y, ctx) {
      const colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']

      var p = {}
      p.x = x
      p.y = y
      p.color = colors[anime.random(0, colors.length - 1)]
      p.radius = anime.random(16, 32)
      p.endPos = this.setParticleDirection(p)
      p.draw = function() {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true)
        ctx.fillStyle = p.color
        ctx.fill()
      }
      return p
    },

    setParticleDirection(p) {
      var angle = (anime.random(0, 360) * Math.PI) / 180
      var value = anime.random(50, 180)
      var radius = [-1, 1][anime.random(0, 1)] * value
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle)
      }
    },

    renderParticle(anim) {
      for (var i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw()
      }
    }
  }
}
</script>

<style lang="sass">
#tensormonkey-fireworks
  position: absolute
  width: 800px
  height: 800px
  top: -300px
  left: -300px
  z-index: 1

#aframe-scene-wrap
  position: absolute
  width: 800px
  height: 800px
  top: -300px
  left: -300px
  z-index: 0
  overflow: hidden
  border-radius: 100%
  opacity: 1
  transition: opacity 0.5s ease

  &.invisible
    opacity: 0

  &:after
    content: ""
    display: block
    width: 100%
    height: 100%
    background: radial-gradient(ellipse at center, rgba(30,30,63,0) 0%,rgba(30,30,63,1) 70%,rgba(30,30,63,1) 100%)
    border-radius: 50%
    position: absolute
    top: 0
    left: 0

#aframe-scene
  width: 100%
  height: 100%
</style>
