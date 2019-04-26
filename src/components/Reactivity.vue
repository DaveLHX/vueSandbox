<template>
  <div class="home">
    <button @click="addItem">add items</button>
    <button @click="clear">clear all</button>
    <div class="primaryList">
      <ul>
        <li
          v-for="item in items"
          v-bind:class="{ active: item === editedItem }"
          :key="item.id"
        >
          <input type="text" v-if="editedItem === item" v-model="item.name" />
          <span v-else> {{ item.name }} </span>
          <button @click="editItem(item);">edit</button>
          <button @click="deleteItem(item);">delete</button>
        </li>
      </ul>
    </div>

    <div class="DisplaySection">
      <label>Double click an item to edit</label>
      <span
        @dblclick="editItem(item);"
        v-for="item in items"
        v-bind:class="{ active: item === editedItem }"
        :key="item.id"
      >
        {{ item.id }} - {{ item.name }}
      </span>
      <span v-if="!hasItems"> Please add items to your list</span>
    </div>
    <div class="DisplaySection">
      <label>choose an item to edit</label>
      <span v-if="hasItems">
        <select v-model="editedItem">
          <!-- inline object literal -->
          <option v-for="item in items" :value="item" :key="item.id">
            {{ item.name }}
          </option>
        </select>
      </span>
      <span v-else> Please add items to your list</span>
      <span v-if="editedItem !== null">
        <input type="text" v-model="editedItem.name" />
      </span>
    </div>
    <div class="DisplaySection">
      <label>choose an item to edit</label>
      <span v-if="hasItems">
        <select v-model="editedItem">
          <!-- inline object literal -->
          <option v-for="item in items" :value="item" :key="item.id">
            {{ item.name }}
          </option>
        </select>
      </span>
      <span v-else> Please add items to your list</span>
      <span v-if="editedItem !== null">
        <input type="text" v-model="editedItem.name" />
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: "reactivity",
  created() {},
  data() {
    return {
      items: [],
      currentId: 1,
      editedItem: null
    };
  },
  computed: {
    hasItems() {
      return this.items.length > 0;
    }
  },
  methods: {
    clear() {
      this.editedItem = null;
      this.items = [];
    },
    addItem() {
      this.items.push({
        id: this.currentId,
        name: "This is item " + this.currentId
      });
      this.currentId += 1;
    },
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
      if (this.editedItem === item) {
        this.editedItem = null;
      }
    },
    editItem(item) {
      this.editedItem = item;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.primaryList ul {
  display: inline-block;
  width: auto;
  text-align: right;
}

.active {
  //background-color: orange;
}
input {
  background-color: #afff63;
  border: 1px solid #21b372;
  border-radius: 3px;
  padding: 2px;
}
.DisplaySection {
  background-color: #2f63a0;
  color: #7fccc9;
  padding: 5px;
  width: 300px;
  border-radius: 4px;
  border: solid 2px #0c2e56;
  display: inline-block;
  margin: 4px;
  vertical-align: top;
  text-align: left;
}
.DisplaySection > span {
  display: block;
  border: solid 1px #00bcff;
  border-radius: 5px;
  margin: 5px;
  font-size: 1.2rem;
  color: white;
  padding: 2px 6px;
}
.DisplaySection > span.active {
  background-color: #1b5190;
}

ul > li > * {
  margin: 4px;
}
.home > button {
  margin-right: 4px;
}
</style>
