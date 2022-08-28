# hifive_vuejs

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Explanation

- I have used Vuetify as a UI components library.
- DatePicker and RepositoryCard were implemented as separate components, this allows for separation of concerns and makes reusability of components possible.
- The DatePicker component emits an event whenever the user chooses a new date.
- The App component serves as the root component, it manages data flow between Repository Cards and DatePicker (listens to events emitted by date picker, fetches data from API, and then renders repositories).
- To detect when the user scrolls to the bottom of the page, we add an invisible card at the bottom of the feed, we then use the ```v-intersect``` directive offered by Vuetify and fetch the next page.
- The API was abstracted in a separate layer.
