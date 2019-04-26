<template>
  <div class="home">
    <button @click="basicError">default</button>
    <button @click="assyncError">Async</button>
    <button @click="promiseError">Promise</button>
    <br>https://github.com/vuejs/vue/issues/6430
    <p>errorHandler cannot catch errors thrown asynchronously, similar to how try... catch cannot do that. You are responsible for anything thrown from within a Promise chain.</p>
    <p>first part seems to not be true anymore: 'errorHandler cannot catch errors thrown asynchronously'</p>
  </div>
</template>

<script>
import Vue from "vue";

Vue.config.errorHandler = function(err, vm, info) {
  console.log("errorHandler");
  throw err;
  // alert(err);
};
console.log(window);
//the following dont work.
window.onerror = function(message, source, lineno, colno, error) {
  console.log("window.onerror");
  // alert('Exception: ', error);
};

window.addEventListener("error", function(event) {
  console.log("errror listener");
});
window.addEventListener("unhandledrejection", e => {
  console.log("unhandledrejection");
  // Vue.config.errorHandler.call(this, e.reason, this, e.type);
});
window.onwheel = function() {
  console.log("wheel");
  // alert('Exception: ', error);
};
export default {
  name: "errorHandling",
  created() {
    console.log("created");
  },
  data() {
    return {};
  },
  errorCaptured(err, vm, info) {
    console.log("errorCaptured");
    // alert(err);
  },
  methods: {
    async assyncError() {
      console.log("in asyncError");
      throw new Error("this was an async error");
    },
    basicError() {
      console.log("in basicError");
      throw new Error("this was a basic error");
    },
    promiseError() {
      new Promise((resolve, reject) => {
        console.log("start the promise");
        resolve();
      }).then(() => {
        console.log("in the then");
        throw new Error("Something failed");
      });
    }
  }
};
</script>


