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
                                                <input type="text" class="form-control bg-light border-0" placeholder="Search Client" aria-describedby="search-member" v-model="control.name" @input="filterByName" >
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

                                
                                <div v-if="paginatedItems.lenght === 0">
                                           No records
                                </div>
                                <div v-else class="row justify-content-center">
                                    <div class="col-xxl-12 col-xl-12">
                                       
                                        <div class="row">
                                            <div v-for="client in paginatedItems" :key="client.id" class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                                <div class="card custom-card ">
                                                    <div class="card-body">
                                                         <div class="text-center">
                                                            <span class="avatar avatar-xl avatar-rounded mb-3 ">
                                                            <img src="@/assets/img/client.png" alt="" class="text-center">
                                                        </span>
                                                         </div>
                                                     
                                                        <p class="fw-semibold fs-18 mb-0 text-center">{{ client.first_name || 'Unknown'}} {{ client.last_name || 'Unknown'}}</p>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-map-pin-add-line"></i> {{ client.age || 'Unknown' }}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-mail-line"></i> {{ client.address || 'Unknown'}}</span>    <br>
                                                        <span class="text-muted fs-15"> <i class="ri-phone-fill"></i> {{ client.phone || 'Unknown'}}</span>
                                                    </div>
                                                    <div class="card-footer bg-gray-400">
                                                        <div class="btn-list">
                                                            <button class="btn btn-sm btn-icon btn-success-light btn-wave">
                                                                <i class="ri-eye-line"></i>
                                                            </button>
                                                            <button class="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                                <i class="ri-edit-line"></i>
                                                            </button>
 
                                                            <button class="btn btn-sm btn-icon btn-danger-light btn-wave">
                                                                <i class="ri-delete-bin-line"></i>
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
      id="employee_add_to_timesheet"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
      ref="employee_add_to_timesheet"
    >
      <div class="modal-dialog modal-dialog-centered modal-lg">
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
                >Add newly attended service to employee timesheet</b
              >
            </h2>
          </div>
          <div class="modal-body px-4">
            <div class="row gy-2 justify-content-center"
                style="
                  border-width: 1px;
                  border-style: solid;
                  border-radius: 6px;
                  border-color: rgb(0, 77, 134);
                ">
              <div >
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Client <span class="text-danger">*</span></label
                      >
                      <MazSelect
                        v-model="step1.client_id"
                        color="info"
                        name="client_id"
                        size="xs"
                        rounded-size="xs"
                        :options="PendingOptions"
                        search
                      />
                      <small v-if="v$.step1.client_id.$error">{{
                        v$.step1.client_id.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['client']">
                        {{ resultError["client"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Day Service is Given<span class="text-danger"
                          >*</span
                        ></label
                      >
                      <MazSelect
                        v-model="step1.day_id"
                        color="info"
                        name="day_id"
                        size="xs"
                        rounded-size="xs"
                        :options="DaysOptions"
                        search
                      />
                      <small v-if="v$.step1.day_id.$error">{{
                        v$.step1.day_id.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['day_id']">
                        {{ resultError["day_id"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Week Date Start
                        <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.week_start"
                        type="date"
                        color="info"
                        name="nom"
                        size="xs"
                        rounded-size="xs"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Week Date End <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.week_end"
                        type="date"
                        color="info"
                        name="prenom"
                        size="xs"
                        rounded-size="xs"
                        disabled
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Time In <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.time_in"
                        type="time"
                        color="info"
                        name="time_in"
                        size="xs"
                        rounded-size="xs"
                      />
                      <small v-if="v$.step1.time_in.$error">{{
                        v$.step1.time_in.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['time_in']">
                        {{ resultError["time_in"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Time Out <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.time_out"
                        type="time"
                        color="info"
                        name="time_out"
                        size="xs"
                        rounded-size="xs"
                      />
                      <small v-if="v$.step1.time_out.$error">{{
                        v$.step1.time_out.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['time_out']">
                        {{ resultError["time_out"] }}
                      </small>
                    </div>
                  </div>
                </div>

                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Given Services/duties
                        <span class="text-danger">*</span></label
                      >
                      <MazSelect
                        v-model="step1.duties_id"
                        color="info"
                        name="duties_id"
                        size="xs"
                        rounded-size="xs"
                        :options="DutiesOptions"
                        multiple
                        search
                      />
                      <small v-if="v$.step1.duties_id.$error">{{
                        v$.step1.duties_id.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['duty_take_id']">
                        {{ resultError["duty_take_id"] }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
              <div class="boutton">
                <button class="" @click.prevent="submitDailyWork('employee_add_to_timesheet')">
                  Save To TimeSheet
                </button>
              </div>
            </div>
            </div>
         
            <br />
            <div class="modal-footer">
              <div class="btn-group ms-auto">
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

      step1: {
        client_id: "",
        day_id: "",
        time_in: "",
        time_out: "",
        duties_id: [],
      },
      v$: useVuelidate(),
      error: "",

    }
  },
  validations: {
    step1: {
      client_id: { require },
      day_id: { require },
      time_in: { require },
      time_out: { require },
      duties_id: { require },
    },
   
  },
  async mounted() {
    console.log("loggedInUser", this.loggedInUser);
    await this.fetchemployeePending();

  },

  methods:{
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
       

            // this.data  = response.data;
              this.PendingOptions = response.data.data
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
//     filterByName() {
// this.currentPage = 1;
// if (this.control.name !== null) {
//    const tt = this.control.name;
//   const  searchValue = tt.toLowerCase()
//   this.PendingOptions =this.data.filter(pending => {
//     const Nom = pending.first_name || '';
//     const Address = pending.address || '';
//     const State = pending.email || '';
//     return Nom.toLowerCase().includes(searchValue) || Address.toLowerCase().includes(searchValue) || State.toLowerCase().includes(searchValue);
//   });

// } else {
// this.PendingOptions = [...this.data];
 
// }

// },
  }
}
</script>
<style lang="css">
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
    background-color:#dbdfe1 !important;
}
</style>