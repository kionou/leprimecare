<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Colonne 1</th>
          <th>Colonne 2</th>
          <!-- Ajoutez d'autres en-têtes de colonne ici -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.colonne1 }}</td>
          <td>{{ item.colonne2 }}</td>
          <!-- Ajoutez d'autres colonnes ici -->
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="fetchData(pagination.prev_page_url)" :disabled="!pagination.prev_page_url">Précédent</button>
      <button v-for="link in pagination.links" :key="link.label" @click="fetchData(link.url)" :disabled="link.active || !link.url">{{ link.label }}</button>
      <button @click="fetchData(pagination.next_page_url)" :disabled="!pagination.next_page_url">Suivant</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
      pagination: {
        current_page: 1,
        last_page: 1,
        prev_page_url: null,
        next_page_url: null,
        links: [],
      },
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData(url = 'https://api.leprimecare.care/api/clients-care-gives?page=1') {
      try {
        const response = await axios.get(url);
        const data = response.data.data;
        console.log('data',data)
        this.items = data.data;
        this.pagination = {
          current_page: data.current_page,
          last_page: data.last_page,
          prev_page_url: data.prev_page_url,
          next_page_url: data.next_page_url,
          links: data.links,
        };
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Ajoutez vos styles ici */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}

.pagination {
  margin-top: 20px;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
}
</style>
