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
                Employee
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Page Header Close -->

                               <div class="contact-header mb-3 bg-gray-400 py-2 px-1">
                                    <div class="d-sm-flex d-block align-items-center justify-content-between">
                                        <div class="h5 fw-semibold mb-0"></div>
                                        <div class="d-flex mt-sm-0 mt-2 align-items-center">
                                            <div class="input-group">
                                                <input type="text" class="form-control bg-light border-0" placeholder="Search Employee" aria-describedby="search-member" v-model="control.name" @input="filterByName" >
                                                <button class="btn btn-light" type="button" id="search-contact-member"><i class="ri-search-line text-muted"></i></button>
                                            </div>
                                           
                                            <button class="btn btn-icon btn-primary ms-2" 
                                             data-bs-placement="top"
                                              data-bs-title="Add Contact"
                                              data-bs-toggle="modal"
                                               data-bs-target="#employee_add_to_timesheet"
                                              >
                                                <i class="ri-add-line">
                                                    </i></button>
                                        </div>
                                    </div>
                                </div> 

                                <div v-if="paginatedItems.length === 0"  class="noresul">  No records </div>

                                <div v-else class="row justify-content-center">
                                    <div class="col-xxl-12 col-xl-12">
                                       
                                        <div class="row">
                                            <div v-for="client in paginatedItems" :key="client.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card ">
                                                    <div class="card-body text-center">
                                                         <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded mb-3 ">
                                                            <img v-if="client.user.profile === null" src="@/assets/img/client.png" alt="" class="text-center">
                                                            <img v-else :src="client.user.profile" alt="" class="text-center">
                                                        </span>
                                                         </div>
                                                     
                                                        <p class="fw-semibold fs-18 mb-0 text-center">{{ client.user.Prenoms }} {{ client.user.Nom }}</p>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-map-pin-add-line"></i> {{ client.age || 'Unknown' }}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-mail-line"></i> {{ client.user.email || 'Unknown'}}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-phone-fill"></i> {{ client.phone || 'Unknown'}}</span>
                                                    </div>
                                                    <div class="card-footer">
                                                        <div class="btn-list">
                                                            <router-link :to="{ name: 'employee-details', params: { id: client.id }}" class="btn btn-sm btn-icon btn-success-light btn-wave">
                                                                <i class="ri-eye-line"></i>
                                                            </router-link>
                                                            <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                                <i class="ri-edit-line"></i>
                                                            </button>
 
                                                            <button class="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                                <i class="ri-delete-bin-line"></i>
                                                            </button>
                                                            <button class="btn btn-sm  btn-primary-light " data-bs-toggle="modal" data-bs-target="#Assign_client" @click="HandleId(client.user_id)">
                                                            
                                                              <i class="ri-user-line"></i>
                                                               Assign a client
                                                            </button>

                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
              <div class="col-lg-12">
                <div class="container_pagination">
                  <Pag
                    :current-page="currentPage"
                    :total-pages="totalPages"
                    @page-change="updateCurrentPage"
                  />
                </div>
              </div>
                                      </div>
                                    </div>
                                   
                                </div>

                             

                   <div
      class="modal fade effect-rotate-bottom"
      id="Assign_client"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
      ref="Assign_client"
    >
      <div class="modal-dialog modal-dialog-centered modal-mx">
        <div class="modal-content">
          <div
            class="modal-header float-start text-center justify-content-center"
            style="background-color: rgb(0, 77, 134); padding-bottom: 10px"
          >
            <h2
              class="modal-title text-white text-center"
              id="mail-ComposeLabel"
              style="font-size: 22px !important"
            >
              <b class="text-center"
                >Assign clients</b
              >
            </h2>
          </div>
          <div class="modal-body px-4">
            <div>
              <div
                class="d-flex gy-2 justify-content-center flex-column px-3"
                style="
                  border-width: 1px;
                  border-style: solid;
                  border-radius: 6px;
                  border-color: rgb(0, 77, 134);
                "
              >
              <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Clients list
                        <span class="text-danger">*</span></label
                      >
                      <MazSelect
                        v-model="step1.ClientAssign"
                        color="info"
                        name="duties_id"
                        size="xs"
                        rounded-size="xs"
                        :options="ClientOptions"
                        multiple
                        search
                      />
                      <small v-if="v$.step1.ClientAssign.$error">{{ v$.step1.ClientAssign.$errors[0].$message}}</small>
                     
                      <small v-if="resultError['client']">
                        {{ resultError["client"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Frequency
                        <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.frequency"
                        color="info"
                        name="duties_id"
                        size="xs"
                        rounded-size="xs"
                       type="number"
                      />
                     <small v-if="v$.step1.frequency.$error">{{ v$.step1.frequency.$errors[0].$message}}</small>
                     
                      <small v-if="resultError['frequency']">
                        {{ resultError["frequency"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row ">
                <div class="boutton">
                  <button
                    class=""
                    @click.prevent="
                    submitAssign('Assign_client')
                    "
                  >
                    Save 
                  </button>
                </div>
              </div>
            <div class="btn-group ms-auto my-3">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>    
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>         
    </div>
</template>
<script>
import Pag from "@/components/others/pagination.vue";
import Loading from "@/components/others/loading.vue";
import axios from '@/lib/axiosConfig'
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import {successmsg} from "@/lib/modal.js"
export default {
    components: {
    Loading,
    Pag, 
  },
  computed: {
    loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
    totalPages() {
      return Math.ceil(this.EmployeeOptions.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.EmployeeOptions.slice(startIndex, endIndex);
    },
  
  },
  data(){
    return{
        loading: true,
        ClientOptions: [],
        EmployeeOptions: [],
        data:[],
      currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [],
      control: { name: '',},
      resultError: {},
      IdEmployee:"",
    

      step1: {
        ClientAssign:[],
        frequency: "",
        
      },
      v$: useVuelidate(),
      error: "",

    }
  },
  validations: {
    step1: {
      ClientAssign: { require },
      frequency: { require },
      
    },
   
  },
  async mounted() {
    console.log("loggedInUser", this.loggedInUser);
    await this.fetchEmployees();
    await this.fetchClients();

  },

  methods:{
    successmsg:successmsg,
    async fetchEmployees() {
      try {
        const response = await axios.get( '/employees',
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          }
        );

         console.log("responseclientenmploy", response.data);
        if (response.data.status === "success") {
            this.data  = response.data.data;
              this.EmployeeOptions = this.data

          this.loading =  false
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
    async fetchClients() {
      try {
        const response = await axios.get( '/clients',
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          }
        );

        // console.log("responseclientenmploy", response.data);
        if (response.data.status === "success") {
            response.data.data;
              this.ClientOptions = response.data.data.map((client) => ({
            label: client.client_name,
            value: client.id
          }));
          // console.log("this.DaysOptionsyy", this.ClientOptions);
          this.loading =  false
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
    HandleId(id ){this.IdEmployee = id},

    async submitAssign(modalId) {
      this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
    
        this.loading = true;
        let data = {
          employee_id: this.IdEmployee,
          client: this.step1.ClientAssign,
          frequency:this.step1.frequency
         
        };

        console.log("data", data);

        try {
          const response = await axios.post("/employees/assign-clients", data, {
            headers: { Authorization: `Bearer ${this.loggedInUser.token}` }
          });
          console.log("Réponse du téléversement :", response);
          if (response.data.status === "success") {
            this.closeModal(modalId);
            await this.fetchEmployees();

            this.successmsg(
              "Clients Assigned Successfully",
              " The clients have been successfully assigned to the selected employee."
            );
          } else {
          }
        } catch (error) {
          console.log("response.login", error);

          this.loading = false;
          if (error.response.data.status === "error") {
            return (this.error = error.response.data.message);
          } else {
            this.formatValidationErrors(error.response.data.errors);
          }
        }
      } else {
        console.log("error", this.v$.$errors);
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
      return this.EmployeeOptions.slice(startIndex, endIndex);
    },
    closeModal(modalId) {
      let modalElement = this.$refs[modalId];
      modalElement.classList.remove("show");
      modalElement.style.display = "none";
      document.body.classList.remove("modal-open");
      let modalBackdrop = document.querySelector(".modal-backdrop");
      if (modalBackdrop) {
        modalBackdrop.parentNode.removeChild(modalBackdrop);
      }
    },
    async formatValidationErrors(errors) {
      const formattedErrors = {};

      for (const field in errors) {
        const errorMessages = errors[field]; // Liste complète des messages d'erreur
        console.log(" errorMessages", errorMessages, typeof errorMessages);

        const concatenatedError = errorMessages.join(", "); // Concaténer les messages d'erreur
        console.log(
          " concatenatedError",
          concatenatedError,
          typeof concatenatedError
        );

        formattedErrors[field] = concatenatedError; // Utilisez le nom du champ comme clé
      }

      this.resultError = formattedErrors; // Stockez les erreurs dans un objet

      // Maintenant, this.resultError est un objet où les clés sont les noms des champs
      console.log("resultError", this.resultError);
    },
    filterByName() {
this.currentPage = 1;
if (this.control.name !== null) {
   const tt = this.control.name;
  const  searchValue = tt.toLowerCase()
  this.EmployeeOptions =this.data.filter(user => {
    const Email = user.user.email || '';
    const Prenom = user.user.Prenoms || '';
    const Nom = user.user.Nom || '';
    const Address = user.address || '';
  
    return Nom.toLowerCase().includes(searchValue) || Prenom.toLowerCase().includes(searchValue) || Email.toLowerCase().includes(searchValue) || Address.toLowerCase().includes(searchValue) ;
  });

} else {
this.EmployeeOptions = [...this.data];
 
}

},
  }
}
</script>
<style lang="css" scoped>
    .container_pagination {
    width: auto;
    text-align: end;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    box-shadow: rgba(99, 99, 99, 0.1) 0px 2px 8px 0px;
    margin: 5px;
    background-color:#fff;

}
.card.custom-card .card-footer{

    padding:10px !important;
    text-align:center !important;
    /* background-color:#b1ed92 !important; */
}
</style>