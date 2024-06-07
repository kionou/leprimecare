<template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search" @input="search">
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">{{ user.Nom }}</li>
    </ul>
    <pagination
      :current-page="currentPage"
      :total-pages="totalPages"
      :fetch-data="fetchData"
    ></pagination>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from '@/components/others/paginationApi.vue';


export default {
  components: {
    Pagination
  },
  data() {
    return {
      users: [],
      currentPage: 1,
      totalPages: 0,
      searchQuery: ''
    };
  },
  mounted() {
    this.fetchData(this.currentPage);
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return user.Nom.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  },
  methods: {
    async fetchData(page) {
      try {
        const response = await axios.get(`https://api.leprimecare.care/api/users?page=${page}`);
        this.users = response.data.data.data;
        this.currentPage = response.data.data.current_page;
        this.totalPages = response.data.data.last_page;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    search() {
      this.currentPage = 1; // Reset to the first page when searching
      this.fetchData(this.currentPage);
    }
  }
};
</script>

<style>
/* Styles for pagination, input, and list items */
</style>

