<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :return-value.sync="date"
    transition="scale-transition"
    offset-y
    min-width="auto"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="date"
        label="Choose a Date"
        prepend-icon="mdi-calendar"
        readonly
        v-bind="attrs"
        v-on="on"
      ></v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      scrollable
      :max="new Date().toISOString()"
    >
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
      <v-btn text color="primary" @click="dateChanged"> OK </v-btn>
    </v-date-picker>
  </v-menu>
</template>
<script>
export default {
  data: () => ({
    menu: false,
    date: "",
  }),

  methods: {
    dateChanged() {
      this.$refs.menu.save(this.date);

      this.$emit("date-changed", this.date);
    },
  },
};
</script>
