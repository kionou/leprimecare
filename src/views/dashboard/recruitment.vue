<template >
    <div>
        <Loading v-if="loading" style="z-index: 99999"></Loading>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <h1 class="page-title fw-semibold fs-18 mb-0">Pending Recruitment</h1>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">LePrimeCare</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
                Pending Recruitment
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
                                                <input type="text" class="form-control bg-light border-0" placeholder="Search " aria-describedby="search-member" v-model="control.name" @input="filterByName" >
                                                <button class="btn btn-light" type="button" id="search-contact-member"><i class="ri-search-line text-muted"></i></button>
                                            </div>
                                           
                                            <a  href="https://recruitment.leprimecare.care/" target="_blank" class="btn btn-icon btn-primary ms-2" 
                                             data-bs-placement="top"
                                              data-bs-title="Add Contact"
                                             
                                              >
                                                <i class="ri-add-line">
                                                    </i></a>
                                        </div>
                                    </div>
                                </div> 

                                
                                <div v-if="paginatedItems.length === 0"  class="noresul">
                                  
                                           No records
                                </div>
                                <div v-else class="row justify-content-center">
                                    <div class="col-xxl-12 col-xl-12">
                                       
                                        <div class="row">
                                            <div v-for="client in paginatedItems" :key="client.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card ">
                                                    <div class="card-body text-center">
                                                         <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded mb-3 ">
                                                            <img src="@/assets/img/client.png" alt="" class="text-center">
                                                        </span>
                                                         </div>
                                                     
                                                        <p class="fw-semibold fs-18 mb-0 text-center">{{ client.first_name || 'Unknown'}} {{ client.last_name || 'Unknown'}}</p>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-map-pin-add-line"></i> {{ client.age || 'Unknown' }}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-mail-line"></i> {{ client.address || 'Unknown'}}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-phone-fill"></i> {{ client.phone || 'Unknown'}}</span>  
                                                        <div v-if="client.RecruitmentStatus !== null">
                                                          <br />  
                                                        <span class="text-muted fs-15 bg-success p-2 text-center mt-1" v-if="client.RecruitmentStatus === 'ACCEPTED'" >
                                                          
                                                          <i class="ri-user-fill"></i>
                                                              {{ client.RecruitmentStatus }}
                                                          </span >
                                                          <span class="text-white fs-15 bg-danger  p-2 text-center mt-1" v-else >
                                                          
                                                          <i class="ri-user-fill"></i>
                                                              {{ client.RecruitmentStatus }}
                                                          </span >

                                                        </div > 
                                                        <div v-else>
                                                              <br />
                                                        <span class="text-muted fs-15  bg-warning p-2 text-center mt-1" >
                                                          
                                                          <i class="ri-user-fill me-1 "></i>
                                                          On hold 
                                                          </span >
                                                        </div>
                                                    </div>
                                                    <div class="card-footer bg-success">
                                                        <div class="btn-list">
                                                          <router-link :to="{ name: 'employee-details', params: { id: client.id }}" class="btn btn-sm btn-icon btn-primary btn-wave">
                                                                <i class="ri-eye-line"></i>
                                                            </router-link>
                                                            <button class="btn btn-sm  btn-success" @click="HandleId(client.id , 'ACCEPTED')">
                                                              <i class="ri-user-line"></i>
                                                              Accept 
                                                            </button>
 
                                                          

                                                            <button class="btn btn-sm  btn-danger "  @click="HandleId(client.id ,'REJECTED')"
                                                              :disabled="client.RecruitmentStatus === 'REJECTED'"
                                                            >
                                                            
                                                            <i class="ri-user-line"></i>
                                                             Reject 
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

      
                           
    </div>
</template>
<script>
import Pag from "@/components/others/pagination.vue";
import Loading from "@/components/others/loading.vue";
import axios from '@/lib/axiosConfig'
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import {successmsg} from "@/lib/modal.js"
import Swal from 'sweetalert2'
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
      return Math.ceil(this.PendingOptions.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.PendingOptions.slice(startIndex, endIndex);
    },
  
  },
  data(){
    return{
        loading: true,
        PendingOptions: [],
        data:[],
      currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [],
      control: { name: '',},
      resultError: {},

    
      v$: useVuelidate(),
      error: "",

    }
  },
  validations: {
   
   
  },
  async mounted() {
    console.log("loggedInUser", this.loggedInUser);
    await this.fetchemployeePending();

  },

  methods:{
    successmsg:successmsg,
    async fetchemployeePending() {
      try {
        const response = await axios.get( '/employees/pending',
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
            },
          }
        );

        console.log("responseclientenmploy", response.data);
        if (response.data.status === "success") {
            console.log("this.DaysOptions398", response.data);
       

             this.data  = response.data.data;
              this.PendingOptions =  this.data
          console.log("this.DaysOptions", this.PendingOptions);
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
    async HandleId(id , response) {
      console.log('id',id , response)
      // Affichez une boîte de dialogue Sweet Alert pour confirmer la suppression
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, confirm it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      // Si l'utilisateur confirme la suppression
      if (result.isConfirmed) {
        this.ConfirmeCandidate(id , response);
      }
    },
    async ConfirmeCandidate(id , response) {
      this.loading = true;
      let data = {
        employee:id,
        status:response
      }

      try {
        // Faites une requête pour supprimer l'élément avec l'ID itemId
        const response = await axios.post('/employees/status-change', data, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
        console.log("Réponse de suppression:", response);
        if (response.data.status === "success") {
          this.loading = false;
        console.log("Réponse de :", response.data.data.RecruitmentStatus);
        if(response.data.data.RecruitmentStatus === "ACCEPTED"){
          this.successmsg(
            "Candidate accepted",
            " The candidate has been successfully accepted."
          );
          await this.fetchemployeePending();
        }else{
          this.successmsg(  
            "Candidate rejected",
            " The candidate has been successfully rejected."
          );
          await this.fetchemployeePending();
        }

         
        } else {
          this.loading = false;
        }
      } catch (error) {
        console.error("Erreur lors de la suppression:", error);

        if (
          error.response.data.message === "Vous n'êtes pas autorisé." ||
          error.response.status === 401
        ) {
          await this.$store.dispatch("auth/clearMyAuthenticatedUser");
          this.$router.push("/"); //a revoir
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
      return this.PendingOptions.slice(startIndex, endIndex);
    },
    filterByName() {
this.currentPage = 1;
if (this.control.name !== null) {
   const tt = this.control.name;
  const  searchValue = tt.toLowerCase()
  this.PendingOptions =this.data.filter(pending => {
    const Nom = pending.first_name || '';
    const Last = pending.last_name || '';
    const Address = pending.address || '';
    const State = pending.email || '';
    return Nom.toLowerCase().includes(searchValue) || Address.toLowerCase().includes(searchValue) || State.toLowerCase().includes(searchValue) || Last.toLowerCase().includes(searchValue);
  });

} else {
this.PendingOptions = [...this.data];
 
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