<template>
  <div>
    <Loading v-if="loading" style="z-index: 99999"></Loading>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <h1 class="page-title fw-semibold fs-18 mb-0">Profil</h1>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">LePrimeCare</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                Profil
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Page Header Close -->
    <nav
          class="nav nav-style-6 nav-pills mb-3 nav-justified d-sm-flex d-block"
          role="tablist"
        >
          <a
            class="nav-link active"
            data-bs-toggle="tab"
            role="tab"
            aria-current="page"
            href="#generale"
            aria-selected="false"
            >General</a
          >
          <a
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            href="#info"
            aria-selected="true"
            >Information Complet </a
          >
          <a
            class="nav-link"
            data-bs-toggle="tab"
            role="tab"
            href="#password"
            aria-selected="true"
            >Password </a
          >
          
        </nav>
        <div class="tab-content">
              <div class="tab-pane active text-muted" id="generale" role="tabpanel">
              <General></General>
              </div>
              <div class="tab-pane text-muted" id="info" role="tabpanel">
                <Detail :data="data"></Detail>
                
              </div>
            
              <div class="tab-pane text-muted" id="password" role="tabpanel">
                <Password></Password>
                
              </div>
              
          </div>
  </div>
     
  </template>
  
  <script>

  import Loading from '@/components/others/loading.vue';
  import General from '../../components/profil/general.vue';
  import Password from '../../components/profil/password.vue';
  import Detail from '@/components/profil/DetailUser.vue';
  import axios from '@/lib/axiosConfig';
    
  export default {
    components: {
     
      Loading,
      General,
      Password,
      Detail
    },
    data() {
      return {
        loading: false,
        data:""
      
       
      }
    },
    computed: {
      loggedInUser() {
        return this.$store.getters['auth/myAuthenticatedUser'];
      },
     
    },
    async mounted() {
      console.log("uusers", this.loggedInUser);
      await this.fetchEmployeeDetail()
      
    },
    methods: {
      async fetchEmployeeDetail() {
        try {
          const response = await axios.get(`employees/detail/${this.loggedInUser.id_user}`, {
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
    }
  }
  </script>
  
  <style lang="" scoped>
    /* Ajoutez vos styles ici si nécessaire */
  </style>
  