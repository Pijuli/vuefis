<template>
  <div
    class="ValuePointerBox text-center rounded"
    :class="getDirection"
  >
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'ValuePointerBox',
  props: {
    value: {
      type: Number,
      required: true, 
    },
    direction: {
      type: String,
      validator: v => ['left', 'right', 'down'].includes(v),
      required: true,
    },
  },
  computed: {
    getDirection() {
      return `ValuePointerBox--${this.direction}`
    },
  },
}
</script>

<style lang="scss" scoped>
.ValuePointerBox {
  position: relative;
  background-color: black;
  color: white;
  border: 2px solid white;
  font-size: 25px;
  line-height: 26px;
}

.ValuePointerBox:after {
  content: "";
  position: absolute;
  border-style: solid;
  
  display: block;
  width: 0;
  z-index: 1;
}

.ValuePointerBox:before {
  content: "";
  position: absolute;
  border-style: solid;
  
  display: block;
  width: 0;
  z-index: 2;
}

.ValuePointerBox--down:after {
  border-color: #FFF transparent;
  bottom: -9px;
  left: calc(50% - 9px);
  border-width: 9px 9px 0;
}

.ValuePointerBox--down:before {
  border-color: #000 transparent;
  bottom: -6px;
  left: calc(50% - 7px);
  border-width: 7px 7px 0;
}

.ValuePointerBox--right:after {
  border-color: transparent #FFF;
  bottom: calc(50% - 9px);
  right: -9px;
  border-width: 9px 0 9px 9px;
}

.ValuePointerBox--right:before {
  border-color: transparent #000;
  bottom: calc(50% - 7px);
  right: -6px;
  border-width: 7px 0 7px 7px;
}

.ValuePointerBox--left:after {
  border-color: transparent #FFF;
  bottom: calc(50% - 9px);
  left: -9px;
  border-width: 9px 9px 9px 0;
}

.ValuePointerBox--left:before {
  border-color: transparent #000;
  bottom: calc(50% - 7px);
  left: -6px;
  border-width: 7px 7px 7px 0;
}
</style>
