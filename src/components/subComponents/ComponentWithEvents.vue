<template>
  <div>
    <input type="text" v-model="childrenText" />
    <button @click="setValue">set text</button>
  </div>
</template>

<script>
export default {
  props: {
    parentText: {
      type: String
    }
  },
  methods: {
    setValue() {
      this.childrenText = "from with events";
    }
  },
  data() {
    return {
      childrenText: this.parentText
    };
  },
  watch: {
    parentText(e) {
      this.childrenText = e;
    },
    childrenText(e) {
      this.$emit("update:parentText", e);
    }
  }
};
</script>
