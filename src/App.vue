<template>
  <div id="app">
      <nav>
        <div class="title">
          Pinhole Simulator
        </div>
      </nav>
      <div class="content">
        <PinholeSim></PinholeSim>
      </div>
  </div>
</template>

<script>
import PinholeSim from './components/PinholeSim.vue'

export default {
  name: 'app',
  components: {
    PinholeSim
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* margin-top: 60px; */
}
nav {
    padding: 0;
    background: #e0f0fa;
}
  
.title {
    padding: 0.7em .8em;
    font-weight: bold;
    font-size: 1.2rem;
}

.content {
  align-content: center;
}

</style>
