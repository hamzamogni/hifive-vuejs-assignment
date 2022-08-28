import Api from "./Api";

export default {
  async getPage(date, page = 1) {
    return await Api().get(
      `/repositories?q=created:>${date}&sort=stars&order=desc&page=${page}`
    );
  },
};
