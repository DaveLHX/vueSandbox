<template>
  <div>
    <input :value="textValue" v-on:input="setValue($event.target.value);" />
    <button @click="setValue('from named prop');">set text</button>
  </div>
</template>

<script>
export default {
  props: {
    textValue: {
      type: String
    }
  },
  methods: {
    setValue(val) {
      this.$emit("update:textValue", val);
    }
  }
};
</script>
