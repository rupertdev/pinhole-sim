<template>
  <div id="simContainer">
    <div class="toolbar">
      <div><label>Ideal Pinhole Diameter: </label><input v-model.number="idealPinholeDiameter" type="number" value="0.5" name="pinholeDiameter" min="0.0" max="10" step="0.01"></div>
      <div><label>Ideal Focal Length: </label><input v-model.number="idealFocalLength" type="number" value="0.5" name="pinholeDiameter" min="0" max="1000" step="1"></div>
      <div><label>Pinhole Diameter: </label><input type="number" value="0.5" name="pinholeDiameter" min="0.0" max="10" step="0.1"></div>
      <div><label>Pinhole Diameter: </label><input type="number" value="0.5" name="pinholeDiameter" min="0.0" max="10" step="0.1"></div>
      <div><label>Pinhole Diameter: </label><input type="number" value="0.5" name="pinholeDiameter" min="0.0" max="10" step="0.1"></div>
      
    </div>
    <canvas id="simCanvas"></canvas>
  </div>
</template>

<script>
import paper from 'paper';

export default {
  name: 'PinholeSim',
  props: {
    msg: String
  },
  data: function() {
    return {
      simPaper: paper,
      idealPinholeDiameter: 0.5,
      idealFocalLength: 100,
      lightWavelength: 0.00055,
      cConstant: 1.8
    }
  },
  computed: {
    focalLength: function() {
      return Math.pow((this.idealPinholeDiameter / 0.03679), 2)
    },
    optimalDiameter: function() {
      return this.cConstant * Math.sqrt(this.focalLength * this.lightWavelength)
    },
    optimalFocalLength: function() {
      return Math.pow(this.idealPinholeDiameter / this.cConstant, 2) / this.lightWavelength
    },
    imageDiameter: function() {
      return this.idealFocalLength * 1.92
    },
    fStop: function() {
      return Math.ceil(this.idealFocalLength / this.idealPinholeDiameter)
    },
  },
  mounted: function() {
    var canvas = document.getElementById('simCanvas');
    this.simPaper.setup(canvas);
		this.simPaper.view.draw();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.toolbar {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-area: 1 / 2;
}

#simCanvas {
  height: inherit;
  width: 100%;
  grid-area: 2/2;
}

#simContainer {
  display: grid;
  grid-template-columns: minmax(1%, 10%) minmax(80%, 98%) minmax(1%, 10%);
  grid-template-rows: 1fr 80%;
}

input {
  max-width: 50px;
}
</style>
