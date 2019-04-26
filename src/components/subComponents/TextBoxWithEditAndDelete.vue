<template>
  <div v-if="value !== undefined">
    <input v-if="isEdit" type="text" v-model="value.name" />
    <span v-else> {{ value.name }} </span>
    <button v-if="!isEdit" @click="$emit('edit', value);">edit</button>
    <button @click="$emit('delete', value);">delete</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object
    },
    isEdit: false
  }
};
</script>

<style></style>
