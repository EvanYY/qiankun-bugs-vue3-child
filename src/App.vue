<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> -->
    is running
    {{ Math.random() }}
  </div>
  <!-- <router-view /> -->
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {
      console.log(
        '🚀 ~ file: App.vue ~ line 19 ~ onMounted ~ asd',
        window?.monaco
      )
    })
    return {}
  },
})
</script>

<style lang="less"></style>
