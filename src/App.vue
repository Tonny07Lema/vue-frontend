<template>
  <div id="app">
    <Employee />
    <Nota />
  </div>

</template>

<script>
import Employee from './components/Employee.vue'
import Nota from './components/Nota.vue'

export default {
  name: 'App',
  components: {
    Employee,
    Nota
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
