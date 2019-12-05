<template lang="pug">
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
    a-entity(position="-3.75 -1 -6" rotation="5 0 0")
      a-entity(rotation="0 0 5" position="0 2 0.2" text-geometry="value: Presenting; font: #dawningFont; bevelEnabled: true; bevelSize: 0.025; bevelThickness: 0.025; curveSegments: 12; size: .5; height: 0;" material="color:lavenderblush; metalness:1; roughness: 0; sphericalEnvMap: #pink;")
    a-entity(position="-3.5 0 -6" text-geometry="value: Handsfree.js; font: #exoItalicFont; style: italic; size: 0.7; weight: bold; height: 0;" material="shader: flat; color: white")
    a-entity(position="-3.5 0 -6" text-geometry="value: Handsfree.js; font: #exoItalicFont; style: italic; size: 0.7; weight: bold; height: 0; bevelEnabled: true; bevelSize: 0.04; bevelThickness: 0.04; curveSegments: 1" material="shader: flat; color: white; transparent: true; opacity: 0.4")

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
</template>

<script>
import { TweenMax } from 'gsap/all'
let rotation = { x: 0, y: 0, z: 0 }

export default {
  mounted() {
    let component = this

    /**
     * "Look around" the aframe
     */
    window.Handsfree.use('aframe.hero', {
      onFrame({ head }) {
        TweenMax.to(rotation, 500 / 1000, {
          x: -head.rotation[0] + 0.20944,
          y: -head.rotation[1],
          z: head.rotation[2]
        })

        component.$refs.camera.object3D.rotation.x = rotation.x
        component.$refs.camera.object3D.rotation.y = rotation.y
        component.$refs.camera.object3D.rotation.z = rotation.z

        // Animate the floor moving
        component.$refs.floor.object3D.position.z -= 0.1
        if (component.$refs.floor.object3D.position.z < -100)
          component.$refs.floor.object3D.position.z = 0
      }
    })

    this.$refs.aframe.addEventListener('loaded', this.onAframeReady)
  },

  beforeDestroy() {
    window.Handsfree.disable('aframe.hero')
    this.$refs.aframe.removeEventListener('loaded', this.onAframeReady)
  },

  methods: {
    onAframeReady() {
      this.$emit('aframeReady')
    }
  }
}
</script>