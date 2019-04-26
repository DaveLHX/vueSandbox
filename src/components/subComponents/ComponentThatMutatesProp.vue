<template>
  <div>
    <input type="text" v-model="value" />
    <button @click="setValue">set text</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    }
  },
  methods: {
    setValue() {
      this.value = "from mutates prop";
    }
  }
};
</script>
