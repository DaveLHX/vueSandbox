<template>
  <div id="app">
    <div>
      <p>no child component</p>
      <input type="text" v-model="value.text" />
    </div>
    <hr />
    <div>
      <p>Sync with data field and event (WORKS)</p>
      <child-component :parentText.sync="value.text" />

      <p>Equivalent with data field and event (WORKS)</p>
      <child-component
        :parentText="value.text"
        @update:parentText="e => (value.text = e)"
      />

      <p>No data field with value property (WORKS)</p>
      <value-prop-events v-model="value.text" />

      <p>No data field with named property (WORKS)</p>
      <named-prop-events :textValue.sync="value.text" />
    </div>
    <hr />
    <div>
      <p>Sync with prop (DOES NOT WORKS)</p>
      <child-component-mutates :value.sync="value.text" />
      <child-component-mutates v-model="value.text" />
    </div>

    <p>Object with default value for undefined</p>
    <with-object v-model="value.myObject" />
    {{ value.myObject }}
  </div>
</template>

<script>
import ChildComponent from "@/components/subComponents/ComponentWithEvents";
import NamedPropEvents from "@/components/subComponents/NamedPropEvents";
import ValuePropEvents from "@/components/subComponents/ValuePropEvents";
import WithObject from "@/components/subComponents/ValuePropEventsWithObject";
import ChildComponentMutates from "@/components/subComponents/ComponentThatMutatesProp";

export default {
  name: "PropertyMutation",

  components: {
    ChildComponent,
    NamedPropEvents,
    ValuePropEvents,
    WithObject,
    ChildComponentMutates
  },
  props: {
    value: {
      default: () => {
        return { text: "hello" };
      },
      type: Object
    }
  }
};
</script>

<style scroped>
p {
  margin-block-end: 2px;
  font-weight: bold;
}
</style>
