<template>
  <div v-if="value !== undefined">
    <input v-model="value.name" />
    <button @click="setValue('from value prop');">set text</button>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("mounted");
  },
  created() {
    console.log("created: " + this.value);
    if (this.value === undefined) {
      this.setValue("tada!");
    }
  },
  props: {
    // value: {
    //   default: () => {
    //     return { name: "blankName" };
    //   },
    //   type: Object
    // }
    value: { type: Object }
  },
  watch: {
    value: function(val) {
      console.log(val);
    }
  },
  methods: {
    setValue(val) {
      this.$emit("input", { name: val });
    }
  }
};
</script>
