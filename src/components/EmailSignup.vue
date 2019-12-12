<template lang="pug">
  form.mt-5(action='https://handsfree.us4.list-manage.com/subscribe/post?u=68fc2805161cded43e4f479fb&amp;id=d3a6b8610f' method='post')
    v-text-field(filled type='email' name='EMAIL' label='Enter your email')
      template(v-slot:append-outer)
        v-btn.primary(type='submit' name='subscribe' value='Subscribe') Notify me!
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_68fc2805161cded43e4f479fb_d3a6b8610f" tabindex="-1" value=""></div>
</template>

<script>
export default {}
</script>