<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="end">
          <v-col cols="4">
            <date-picker @date-changed="getRepositories"></date-picker>
          </v-col>
        </v-row>

        <v-row class="flex-column" justify="center">
          <v-col
            v-if="repositories.length"
            cols="12"
            md="6"
            align-self="center"
          >
            <repository-card
              v-for="repository in repositories"
              :key="repository.id"
              :name="repository.name"
              :description="repository.description"
              :stars="repository.stargazers_count"
              :issues="repository.open_issues"
              :username="repository.owner.login"
              :avatar-url="repository.owner.avatar_url"
              :created-at="repository.created_at"
            >
            </repository-card>
            <v-card v-intersect="loadMoreRepositories"></v-card>
          </v-col>
          <v-col v-else cols="12" md="6" align-self="center">
            <v-alert type="success">Please Select a Date</v-alert>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import GithubRepositories from "./api/GithubRepositories";

import RepositoryCard from "./components/RepositoryCard.vue";
import DatePicker from "./components/DatePicker.vue";
export default {
  name: "App",

  components: {
    RepositoryCard,
    DatePicker,
  },

  data: () => ({
    repositories: [],
    page: 1,
    date: "",
  }),

  methods: {
    initParams(date) {
      this.date = date;
      this.page = 1;

    },

    async getRepositories(date) {
      this.initParams(date);

      let response = await GithubRepositories.getPage(this.date, this.page);
      this.repositories = response.data.items;
    },

    async loadMoreRepositories() {
      this.page++;

      let response = await GithubRepositories.getPage(this.date, this.page);

      this.repositories = [...this.repositories, ...response.data.items];
    },
  },
};
</script>
