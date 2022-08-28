<template>
  <v-card class="ma-3 pt-4 elevation-1" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="150">
        <v-img :src="avatarUrl"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-row class="ml-10">
          <v-chip class="mr-3">{{ issues }} issues</v-chip>
          <v-chip>{{ stars }} stars</v-chip>
        </v-row>
        <div class="text-overline mb-4"></div>
        <v-list-item-title class="text-h5 mb-1">
          {{ name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ description }} </v-list-item-subtitle>
        <p class="text-subtitle-2 mt-5">
          Created by @{{ username }} on {{ createdAt }}
        </p>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    name: String,
    description: String,
    stars: Number,
    issues: Number,
    username: String,
    avatarUrl: String,
    createdAt: String,
  },
};
</script>
