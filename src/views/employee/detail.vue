<template >
    <div>
      <Loading v-if="loading" style="z-index: 99999"></Loading>
      <!-- Page Header -->
      <div
        class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
      >
        <h1 class="page-title fw-semibold fs-18 mb-0">Employee</h1>
        <div class="ms-md-1 ms-0">
          <nav>
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a href="javascript:void(0);">LePrimeCare</a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Employee-details
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <DetailUser :data="data"></DetailUser>
    </div>
  </template>
  <script>
  import axios from "@/lib/axiosConfig";
  import Loading from "@/components/others/loading.vue";
  import DetailUser from "@/components/profil/DetailUser.vue"
  export default {
    props: ["id"],
    components: {
      Loading,
      DetailUser,
    },
    computed: {
      loggedInUser() {
        return this.$store.getters["auth/myAuthenticatedUser"];
      },
    },
  
    data() {
      return {
        loading: true,
        data: "",
      };
    },
  
    async mounted() {
      console.log("loggedInUser", this.loggedInUser);
      await this.fetchEmployeeDetail();
    },
  
    methods: {
      async fetchEmployeeDetail() {
        try {
          const response = await axios.get(`employees/detail/${this.id}`, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          });
  
          console.log("responseclientenmploy", response.data);
          if (response.data.status === "success") {
            this.data = response.data.data;
            this.loading = false;
          }
        } catch (error) {
          console.log(
            "Erreur lors de la mise à jour des données MPME guinee :",
            error
          );
          if (error.response.data.status === "error") {
            console.log("aut", error.response.data.status === "error");
  
            if (
              error.response.data.message === "Vous n'êtes pas autorisé." ||
              error.response.status === 401
            ) {
              await this.$store.dispatch("auth/clearMyAuthenticatedUser");
              this.$router.push("/"); //a revoir
            }
          } else {
            this.formatValidationErrors(error.response.data.errors);
            this.loading = false;
            return false;
          }
        }
      },
  
      updateCurrentPage(pageNumber) {
        this.currentPage = pageNumber;
        window.scrollTo({
          top: 0,
          behavior: "smooth", // Utilisez 'auto' pour un défilement instantané
        });
      },
      updatePaginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  
        const endIndex = startIndex + this.itemsPerPage;
        return this.ClientOptions.slice(startIndex, endIndex);
      },
      filterByName() {
        this.currentPage = 1;
        if (this.control.name !== null) {
          const tt = this.control.name;
          const searchValue = tt.toLowerCase();
          this.ClientOptions = this.data.filter((user) => {
            const Nom = user.client_name || "";
            const Address = user.address || "";
            const State = user.state || "";
            return (
              Nom.toLowerCase().includes(searchValue) ||
              Address.toLowerCase().includes(searchValue) ||
              State.toLowerCase().includes(searchValue)
            );
          });
        } else {
          this.ClientOptions = [...this.data];
        }
      },
    },
  };
  </script>
  <style lang="css" scoped>
  .titres{

width: 22%;
display: flex;
justify-content: space-evenly;
align-items: flex-start;
}

.titres .nombre{

color:#fff;
background-color:var(--primary-color);
border-radius:50%;
padding: 1px 7px;
font-size: 13px;
z-index: 10; 
}
  </style>
  