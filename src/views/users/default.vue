<template >
  <div>
      <Loading v-if="loading" style="z-index: 99999"></Loading>
  <!-- Page Header -->
  <div
    class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
  >
    <h1 class="page-title fw-semibold fs-18 mb-0">Users Managments</h1>
    <div class="ms-md-1 ms-0">
      <nav>
        <ol class="breadcrumb mb-0">
          <li class="breadcrumb-item">
            <a href="javascript:void(0);">LePrimeCare</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
              Users Managments
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
                            <input type="text" class="form-control bg-light border-0" placeholder="Search user managment" aria-describedby="search-member" v-model="control.name" @input="filterByName" >
                            <button class="btn btn-light" type="button" id="search-contact-member"><i class="ri-search-line text-muted"></i></button>
                        </div>
                        
                        <button class="btn btn-icon btn-primary ms-2" 
                          data-bs-placement="top"
                          data-bs-title="Add Contact"
                          data-bs-toggle="modal"
                            data-bs-target="#add_client"
                          >
                            <i class="ri-add-line">
                                </i></button>
                    </div>
                </div>
            </div> 

            <div class="col-xl-12">
            <div class="card custom-card">
                <div class="card-header justify-content-between">
                    <div class="card-title">
                          Users Managments list
                    </div>
                    
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table text-nowrap table-hover border table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="row" class="ps-4">N°</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address Email</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody v-if="filteredUsers.length === 0" >
                              <tr>
                                <td colspan="18">
                                  <div
                                    class="badge bg-info-transparent"
                                    style="width: 100%; font-size: 25px"
                                  >
                                    No records found
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <tbody v-else>
                                <tr v-for="(data , index) in filteredUsers" :key="data.id">
                                    <th scope="row" class="ps-4">{{ index + 1 }}</th>
                                    <td>
                                    
                                      <div class="d-flex align-items-center fw-semibold">
                                              <span class="avatar avatar-sm me-2 avatar-rounded">
                                                  <img v-if="data.profile === null" src="@/assets/img/client.png" alt="img">
                                                  <img v-else :src="data.profile" alt="img">
                                              </span>{{ data.Prenoms }} {{ data.Nom }}
                                          </div>
                                      
                                    </td>
                                  
                                    <td>
                                        
                                        <span v-if="data.roles.length !== 0"  class="">{{ data.roles[0].name }}</span>
                                        
                                    </td>
                                    
                                    <td>
                                        
                                        <span   class="">{{ data.Whatsapp || 'Unknown' }}</span>
                                        
                                    </td>
                                    <td>
                                        
                                        <span   class="">{{ data.email || 'Unknown' }}</span>
                                        
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <button  class="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"  data-bs-toggle="modal"  data-bs-target="#update_client" @click="HandleIdUpdate(data.id)"><i class="ri-edit-line"></i></button>
                                          
                                        </div>
                                    </td>
                                </tr>
                                

                                
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="row">
<div class="col-lg-12">
<div class="container_pagination">
<pagination
:current-page="currentPage"
:total-pages="totalPages"
:fetch-data="fetchData"
></pagination>
</div>
</div>
                  </div>
                </div>
            </div>
        </div>     

         <div
      class="modal fade effect-rotate-bottom"
      id="add_client"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
      ref="add_client"
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
              <b class="text-center">Add new user</b>
            </h2>
          </div>
          <div class="modal-body px-4">
            <div
              class="row gy-2 justify-content-center"
              style="
                border-width: 1px;
                border-style: solid;
                border-radius: 6px;
                border-color: rgb(0, 77, 134);
              "
            >
              <div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Name <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.Nom"
                        color="info"
                        name="Nom"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step1.Nom.$error">{{
                        v$.step1.Nom.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['Nom']">
                        {{ resultError["Nom"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Last Name<span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.Prenoms"
                        color="info"
                        name="Prenoms"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step1.Prenoms.$error">{{
                        v$.step1.Prenoms.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['Prenoms']">
                        {{ resultError["Prenoms"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Address Email <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.email"
                        type="text"
                        color="info"
                        name="email"
                        size="sm"
                        rounded-size="sm"
                      />
                      <small v-if="v$.step1.email.$error">{{
                        v$.step1.email.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['email']">
                        {{ resultError["email"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Phone <span class="text-danger">*</span></label
                      >
                      <MazPhoneNumberInput
                        v-model="step1.Whatsapp"
                        size="sm"
                        rounded-size="sm"
                        show-code-on-list
                        :ignored-countries="['AC']"
                        defaultCountryCode="US"
                        update="results = $event"
                        :success="results?.isValid"
                      />
                      <small v-if="v$.step1.Whatsapp.$error">{{
                        v$.step1.Whatsapp.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['Whatsapp']">
                        {{ resultError["Whatsapp"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Password <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.password"
                        color="info"
                        name="password"
                        size="sm"
                        rounded-size="sm"
                        type="password"
                      />
                      <small v-if="v$.step1.password.$error">{{
                        v$.step1.password.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['password']">
                        {{ resultError["password"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Confirm PAssword<span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.password_confirmation"
                        color="info"
                        name="password_confirmation"
                        size="sm"
                        rounded-size="sm"
                        type="password"
                      />
                      <small v-if="v$.step1.password_confirmation.$error">{{
                        v$.step1.password_confirmation.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['password_confirmation']">
                        {{ resultError["password_confirmation"] }}
                      </small>
                      <small v-if="!validatePasswordsMatch()">Passwords do not match.</small>
                    </div>
                  </div>
                </div>

                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Role<span class="text-danger">*</span></label
                      >
                      <MazSelect
                        v-model="step1.role"
                        color="info"
                        name="role"
                        size="sm"
                        rounded-size="sm"
                        :options="choix"
                       
                      />
                      <small v-if="v$.step1.role.$error">{{
                        v$.step1.role.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['role']">
                        {{ resultError["role"] }}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="boutton">
                  <button class="" @click.prevent="submitClient('add_client')">
                    Save
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
import Pagination from '@/components/others/paginationApi.vue';
import Loading from "@/components/others/loading.vue";
import axios from '@/lib/axiosConfig'
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import {successmsg} from "@/lib/modal.js"
import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
import Swal from 'sweetalert2'
export default {
  components: {
  Loading,
  Pagination, 
  MazPhoneNumberInput
},
computed: {
  loggedInUser() {
    return this.$store.getters["auth/myAuthenticatedUser"];
  },
  filteredUsers() {
  
// if (this.searchValue !== null) {
//  const tt = this.searchValue;
// const  searchValues = tt.toLowerCase()
// this.ClientOptions =this.data.filter(user => {
//   const Nom = user.Nom || '';
//   const Prenom = user.Prenoms || '';
//   const Email = user.email || '';
 
//   return Nom.toLowerCase().includes(searchValues) || Prenom.toLowerCase().includes(searchValues) || Email.toLowerCase().includes(searchValues) ;
// });
// }
      return this.ClientOptions.filter(user => {
        return user.Nom.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }

},
data(){
  return{
    loading: true,
    ClientOptions: [],
    data:[],
    currentPage: 1,
      totalPages: 0,
      searchQuery: '',
    control: { name: '',},
    resultError: {},
    photo:"",
    ToId:"",
    choix: [
          { label: "Admin", value: 2 },
          { label: "Care give", value: 3 },
        ],
    step1: {
        Nom: "",
        Prenoms: "",
        email: "",
        Whatsapp: "",
        password:"",
        password_confirmation:"",
        role:"",
      },
      step2: {
        Nom: "",
        Prenoms: "",
        email: "",
        Whatsapp: "",
        password:"",
        password_confirmation:"",
        role:"",
      },
    v$: useVuelidate(),
    error: "",

  }
},
validations: {
  step1: {
      Nom: { require },
      Prenoms: { require },
      email: { require },
      Whatsapp: { require },
      password:{require},
      password_confirmation:{require},
      role:{require},
    },
    step2: {
      Nom: { require },
      Prenoms: { require },
      email: { require },
      Whatsapp: { require },
      password:{require},
      password_confirmation:{require},
      role:{require},
    },
 
 
},
async mounted() {
  console.log("loggedInUser", this.loggedInUser);
  await this.fetchData(this.currentPage);

},

methods:{
  successmsg:successmsg,
   validatePasswordsMatch() {
     return this.step1.password === this.step1.password_confirmation;
    },
 
  async fetchData(page) {
    this.loading = true
    try {
      const response = await axios.get( `/users?page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        }
      );

      console.log("responseclienteschools-level", response.data);
      if (response.data.status === "success") {
          this.data  = response.data.data.data ;
            this.ClientOptions = this.data
            this.currentPage = response.data.data.current_page;
        this.totalPages = response.data.data.last_page;
        console.log("this.DaysOptions", this.ClientOptions);
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
  
  search() {
      this.currentPage = 1; // Reset to the first page when searching
      this.fetchData(this.currentPage);
    },


async submitClient(modalId) {
    this.v$.step1.$touch();
    if (this.v$.$errors.length == 0) {
      this.loading = true;
     let data = {

      Nom:this.step1.Nom,
      Prenoms:this.step1.Prenoms,
      email:this.step1.email,
      Whatsapp:this.step1.Whatsapp,
      password:this.step1.password,
      password_confirmation:this.step1.password_confirmation,
      role:this.step1.role,
     }
     

      console.log("data",data );

      try {
        const response = await axios.post("/register/system-user", data, {
          headers: { Authorization: `Bearer ${this.loggedInUser.token}` ,
         
        }
        });
        console.log("Réponse du téléversement :", response);
        if (response.data.status === "success") {
          this.closeModal(modalId);
          this.successmsg(
            "User Created Successfully",
            " The new user has been successfully created!"
          );
          await this.fetchData(this.currentPage);
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
async  HandleIdUpdate(id){
  this.loading = true;

    try {
      const response = await axios.get(`/duties-services/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${this.loggedInUser.token}`
        }
      });

      // console.log("response", response);
      if (response.data.status === "success") {
        console.log("responsedata", response.data.data);
        let data =  response.data.data
        this.step2.duty_name = data.duty_name,
        this.step2.descriptions = data.descriptions,
      
        this.ToId = data.id
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
  async  submitUpdate(modalId){
 
 this.v$.step2.$touch();


  if (this.v$.$errors.length == 0) {
  
     this.loading = true;
     let data = {

          duty_name:this.step2.duty_name,
          descriptions:this.step2.descriptions,
          id:this.ToId
          }


          console.log("data",data );

    try {
      const response = await axios.put(`/duties-services/${this.ToId}`,data, {
        headers: {
         
          Authorization: `Bearer ${this.loggedInUser.token}`,
          'Content-Type': 'multipart/form-data'
        },
      });
      console.log("Réponse du téléversement :", response);
      if (response.data.status === "success") {
        this.closeModal(modalId);
          this.successmsg(
            "Client Data Updated",
            " The client's data has been successfully updated!"
          );
          await this.fetchData();
       
        
      } 
    } catch (error) {
      console.error("Erreur lors du téléversement :", error);
     
      if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
            await this.$store.dispatch('auth/clearMyAuthenticatedUser');
          this.$router.push("/");  //a revoir
        }
   else{
     this.formatValidationErrors(error.response.data.errors);
     this.loading = false;

   }
    }
  } else {
    console.log("cest pas bon ", this.v$.$errors);
    this.loading = false;

  }
 },

  
  async HandleIdDelete(id) {
   // Affichez une boîte de dialogue Sweet Alert pour confirmer la suppression
   const result = await Swal.fire({
    title: 'Are you sure?',
    text: 'You won\'t be able to revert this!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, cancel!',
    reverseButtons: true
   });

   // Si l'utilisateur confirme la suppression
   if (result.isConfirmed) {
     this.ConfirmeDelete(id);
   }
       },
       async ConfirmeDelete(id) {
        this.loading = true
       
       try {
         // Faites une requête pour supprimer l'élément avec l'ID itemId
         const response = await axios.delete(`/duties-services/${id}`, {
           headers: {
             Authorization: `Bearer ${this.loggedInUser.token}`,
             
 
           },
 
 
         });
         console.log('Réponse de suppression:', response);
         if (response.data.status === 'success') {
           this.loading = false
           this.successmsg(
            "Client Deleted",
            " The client has been successfully deleted."
          );
          await this.fetchData();
 
         } else {
           console.log('error', response.data)
           this.loading = false
         }
       } catch (error) {
         console.error('Erreur lors de la suppression:', error);
        
         if (error.response.data.message==="Vous n'êtes pas autorisé." || error.response.status === 401) {
              await this.$store.dispatch('auth/clearMyAuthenticatedUser');
            this.$router.push("/");  //a revoir
          }
         
       }
 
     },
  filterByName() {
this.currentPage = 1;
if (this.control.name !== null) {
 const tt = this.control.name;
const  searchValue = tt.toLowerCase()
this.ClientOptions =this.data.filter(user => {
  const Nom = user.Nom || '';
  const Prenom = user.Prenoms || '';
  const Email = user.email || '';
 
  return Nom.toLowerCase().includes(searchValue) || Prenom.toLowerCase().includes(searchValue) || Email.toLowerCase().includes(searchValue) ;
});

} else {
this.ClientOptions = [...this.data];

}

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
  background-color:#dbdfe1 !important;
}

.input-groupe input,
.form-select {
  width: 100%;
  border-radius: 0.1rem !important;
  border: 1px solid #17a4ba;
  outline: 0;
  padding: 8px;
  color: rgb(3, 3, 5);
}

.input-groupe input:focus {
  border-color: var(--color-primary);
}
</style>