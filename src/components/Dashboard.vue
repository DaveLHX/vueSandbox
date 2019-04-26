<template>
  <div>
    <ul>
      <router-link tag="li" to="/Reactvity">
        <h3>Reactivity example</h3>
        <p>
          Simple example to demonstrate the ease of adding reactivity to a page
        </p>
      </router-link>
      <router-link tag="li" to="/ReactvityWithComponents">
        <h3>Reactivity with components example</h3>
        <p>
          Simple example to demonstrate the ease of adding reactivity to a page
        </p>
      </router-link>
      <router-link tag="li" to="/PropertyMutation">
        <h3>Property Mutation example</h3>
        <p>The does and donts of mutating props</p>
      </router-link>
         <router-link tag="li" to="/ErroHandling2">
        <h3>ErrorHandling</h3>
        <p></p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dashboard"
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
div {
  text-align: left;
}

ul {
  list-style-type: none;
  width: 300px;
}

h3 {
  font: bold 20px/1.5 Helvetica, Verdana, sans-serif;
}

li img {
  float: left;
  margin: 0 15px 0 0;
}

li p {
  font: 200 12px/1.5 Georgia, Times New Roman, serif;
}

li {
  padding: 10px;
  overflow: auto;
}

li:hover {
  background: #eee;
  cursor: pointer;
}
</style>
