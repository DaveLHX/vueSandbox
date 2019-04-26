<template>
  <div>
    <input :value="value" v-on:input="setValue($event.target.value);" />
    <button @click="setValue('from value prop');">set text</button>
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
    setValue(val) {
      this.$emit("input", val);
    }
  }
};
</script>
