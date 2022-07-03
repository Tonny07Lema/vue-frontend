<template>
  <div id="app">
    <Employee />
    <Nota />
  </div>

</template>


<script>
import Nota from './components/Nota.vue'

export default {
  name: 'AppN',
  components: {
    Nota
  }
}
</script>

<style>
#appN {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>