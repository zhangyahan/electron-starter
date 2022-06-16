<script setup lang="ts">
import { example } from '@/hybrid'

// not use await function
example().then((value) => {
  console.log(value)
})

</script>

<template>
  <div>hello world 123</div>
</template>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
