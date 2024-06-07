<template>
  <div>
    <Loading v-if="loading" style="z-index: 99999"></Loading>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <h1 class="page-title fw-semibold fs-18 mb-0">Clients</h1>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">LePrimeCare</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Clients</li>
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
            <input
              type="text"
              class="form-control bg-light border-0"
              placeholder="Search Client"
              aria-describedby="search-member"
              v-model="control.name"
              @input="filterByName"
            />
            <button
              class="btn btn-light"
              type="button"
              id="search-contact-member"
            >
              <i class="ri-search-line text-muted"></i>
            </button>
          </div>

          <button
            class="btn btn-icon btn-primary ms-2" v-if="loggedInUser.role_id === 2"
            data-bs-placement="top"
            data-bs-title="Add Contact"
            data-bs-toggle="modal"
            data-bs-target="#add_client"
          >
            <i class="ri-add-line"> </i>
          </button>
        </div>
      </div>
    </div>

    <div v-if="paginatedItems.lenght === 0">No records</div>
    <div v-else class="row justify-content-center">
      <div class="col-xxl-12 col-xl-12">
        <div class="row" v-if="loggedInUser.role_id === 2">
          <div
            v-for="client in paginatedItems"
            :key="client.id"
            class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12"
          >
            <div class="card custom-card">
              <div class="card-body">
                <div class="text-center">
                  <span class="avatar avatar-xl avatar-rounded mb-3" >
                    <img v-if="client.photo === null"
                      src="@/assets/img/client.png"
                      alt=""
                      class="text-center"
                    />
                    <img v-else
                      :src="client.photo"
                      alt=""
                      class="text-center"
                    />
                  </span>
                </div>

                <p class="fw-semibold fs-18 mb-0 text-center" >
                  {{ client.client_name }}
                </p>
                <br />
                <span class="text-muted fs-15" >
                  <i class="ri-map-pin-add-line"></i>
                  {{ client.address || "Unknown" }}</span
                >
                <br />
                <span class="text-muted fs-15"  >
                  <i class="ri-home-wifi-fill"></i>
                  {{ client.state || "Unknown" }}</span
                >
                <br />
                <span class="text-muted fs-15"  >
                  <i class="ri-phone-fill"></i>
                  {{ client.phone || "Unknown" }}</span
                >
                <div v-if="client.employee !== null">
                  <br />  
                <span class="text-muted fs-15 bg-success p-2 text-center mt-1" >
                  
                  <i class="ri-user-fill"></i>
                    Assigned to  {{ client.employee.employee.user.Prenoms }} {{ client.employee.employee.user.Nom  }}
                  </span >

                    </div > 
                    <div v-else>
                      <br />
                <span class="text-muted fs-15  bg-warning p-2 text-center mt-1" >
                  
                  <i class="ri-user-fill me-1 "></i>
                  Not assigned 
                  </span >
                    </div>
               
                 
              </div>
              <div class="card-footer bg-gray-400" v-if="loggedInUser.role_id === 2">
                <div class="btn-list">
                  <button
                    class="btn btn-sm btn-icon btn-primary-light"
                    data-bs-toggle="modal"
                    data-bs-target="#update_client"
                    @click="HandleIdUpdate(client.id)"
                  >
                    <i class="ri-edit-line"></i>
                  </button>

                  <button
                    class="btn btn-sm btn-icon btn-danger-light"
                    @click="HandleIdDelete(client.id)"
                  >
                    <i class="ri-delete-bin-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="row" v-if="loggedInUser.role_id === 3">
          <div
            v-for="client in paginatedItems"
            :key="client.id"
            class="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12"
          >
            <div class="card custom-card">
              <div class="card-body">
                <div class="text-center">
                  <span class="avatar avatar-xl avatar-rounded mb-3" v-if="client.client">
                    <img v-if="client.client.photo === null"
                      src="@/assets/img/client.png"
                      alt=""
                      class="text-center"
                    />
                    <img v-else
                      :src="client.client.photo"
                      alt=""
                      class="text-center"
                    />
                  </span>
                </div>

                <p class="fw-semibold fs-18 mb-0 text-center" v-if="client.client">
                  {{ client.client.client_name }}
                </p>
                <br />
                <span class="text-muted fs-15" v-if="client.client">
                  <i class="ri-map-pin-add-line"></i>
                  {{ client.client.address || "Unknown" }}</span
                >
                <br />
                <span class="text-muted fs-15"  v-if="client.client">
                  <i class="ri-home-wifi-fill"></i>
                  {{ client.client.state || "Unknown" }}</span
                >
                <br />
                <span class="text-muted fs-15"  v-if="client.client">
                  <i class="ri-phone-fill"></i>
                  {{ client.client.phone || "Unknown" }}</span
                >   
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
              <b class="text-center">Add new client</b>
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
                        >Client Name <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.client_name"
                        color="info"
                        name="client_name"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step1.client_name.$error">{{
                        v$.step1.client_name.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['client_name']">
                        {{ resultError["client_name"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Address<span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.address"
                        color="info"
                        name="address"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step1.address.$error">{{
                        v$.step1.address.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['address']">
                        {{ resultError["address"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >State <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step1.state"
                        type="text"
                        color="info"
                        name="state"
                        size="sm"
                        rounded-size="sm"
                      />
                      <small v-if="v$.step1.state.$error">{{
                        v$.step1.state.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['state']">
                        {{ resultError["state"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Phone <span class="text-danger">*</span></label
                      >
                      <MazPhoneNumberInput
                        v-model="step1.phone"
                        size="sm"
                        rounded-size="sm"
                        show-code-on-list
                        :ignored-countries="['AC']"
                        defaultCountryCode="US"
                        update="results = $event"
                        :success="results?.isValid"
                      />
                      <small v-if="v$.step1.phone.$error">{{
                        v$.step1.phone.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['phone']">
                        {{ resultError["phone"] }}
                      </small>
                    </div>
                  </div>
                </div>

                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <div class="mb-3 position-relative">
                        <div class="input-groupe">
                          <label for="profil">File </label>
                          <input
                            type="file"
                            accept="image/*"
                            @change="handleFileUploadPhoto"
                            name="profil"
                            id="profil"
                            placeholder=""
                            :class="{ 'error-border': resultError['profil'] }"
                            @input="resultError['profil'] = false"
                          />
                        </div>
                      </div>
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

    <div
      class="modal fade effect-rotate-bottom"
      id="update_client"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
      ref="update_client"
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
              <b class="text-center">Update client</b>
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
                        >Client Name <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step2.client_name"
                        color="info"
                        name="client_name"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step2.client_name.$error">{{
                        v$.step2.client_name.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['client_name']">
                        {{ resultError["client_name"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Address<span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step2.address"
                        color="info"
                        name="address"
                        size="sm"
                        rounded-size="sm"
                        type="text"
                      />
                      <small v-if="v$.step2.address.$error">{{
                        v$.step2.address.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['address']">
                        {{ resultError["address"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >State <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step2.state"
                        type="text"
                        color="info"
                        name="state"
                        size="sm"
                        rounded-size="sm"
                      />
                      <small v-if="v$.step2.state.$error">{{
                        v$.step2.state.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['state']">
                        {{ resultError["state"] }}
                      </small>
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Phone <span class="text-danger">*</span></label
                      >
                      <MazPhoneNumberInput
                        v-model="step2.phone"
                        size="sm"
                        rounded-size="sm"
                        show-code-on-list
                        :ignored-countries="['AC']"
                        defaultCountryCode="US"
                        update="results = $event"
                        :success="results?.isValid"
                      />
                      <small v-if="v$.step2.phone.$error">{{
                        v$.step2.phone.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['phone']">
                        {{ resultError["phone"] }}
                      </small>
                    </div>
                  </div>
                </div>

                <div class="row mt-3 content-group">
                  <div class="col">
                    <div class="input-groupe">
                      <div class="mb-3 position-relative">
                        <div class="input-groupe">
                          <label for="profil">File </label>
                          <input
                            type="file"
                            accept="image/*"
                            @change="handleFileUploadPhoto"
                            name="profil"
                            id="profil"
                            placeholder=""
                            :class="{ 'error-border': resultError['profil'] }"
                            @input="resultError['profil'] = false"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mb-3">
                <div class="boutton">
                  <button class="" @click.prevent="submitUpdate('add_client')">
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
import Pag from "@/components/others/pagination.vue";
import Loading from "@/components/others/loading.vue";
import axios from "@/lib/axiosConfig";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import { successmsg } from "@/lib/modal.js";
import MazPhoneNumberInput from "maz-ui/components/MazPhoneNumberInput";
import Swal from "sweetalert2";
export default {
  components: {
    Loading,
    Pag,
    MazPhoneNumberInput,
  },
  computed: {
    loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
    totalPages() {
      return Math.ceil(this.ClientOptions.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.ClientOptions.slice(startIndex, endIndex);
    },
  },
  data() {
    return {
      loading: true,
      ClientOptions: [],
      data: [],
      currentPage: 1,
      itemsPerPage: 12,
      totalPageArray: [],
      control: { name: "" },
      resultError: {},
      profil: "",
      ToId: "",

      step1: {
        client_name: "",
        address: "",
        state: "",
        phone: "",
      },
      step2: {
        client_name: "",
        address: "",
        state: "",
        phone: "",
      },
      v$: useVuelidate(),
      error: "",
    };
  },
  validations: {
    step1: {
      client_name: { require },
      address: { require },
      state: { require },
      phone: { require },
    },
    step2: {
      client_name: { require },
      address: { require },
      state: { require },
      phone: { require },
    },
  },
  async mounted() {
    console.log("loggedInUser", this.loggedInUser);
    if (this.loggedInUser.role_id === 2) {
    await this.fetchClientsAll();
      
    }else if(this.loggedInUser.role_id === 3){
    await this.fetchClients();

    }
  },

  methods: {
    successmsg: successmsg,
    async fetchClientsAll() {
      try {
        const response = await axios.get('/clients', {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });

        console.log("responseclientenmploy", response.data);
        if (response.data.status === "success") {
          this.data = response.data.data;
          this.ClientOptions = this.data;
          console.log("this.DaysOptions", this.ClientOptions);
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
    async fetchClients() {
      try {
        const response = await axios.get(`/employees/assign-clients/${this.loggedInUser.id_user}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });

        console.log("responseclientenmploy", response.data);
        if (response.data.status === "success") {
          this.data = response.data.data;
          this.ClientOptions = this.data;
          console.log("this.DaysOptions", this.ClientOptions);
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

    handleFileUploadPhoto(event) {
      console.log("File input change");
      const file = event.target.files[0];
      console.log("handleFileUploadPhoto Selected file:", file);

      this.profil = file;
    },
    async submitClient(modalId) {
      this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
        this.loading = true;
        const formData = new FormData();
        formData.append("client_name", this.step1.client_name);
        formData.append("address", this.step1.address);
        formData.append("state", this.step1.state);
        formData.append("phone", this.step1.phone);
        formData.append("profil", this.profil);

        console.log(
          "data",
          this.step1.client_name,
          this.step1.address,
          this.step1.state,
          this.step1.phone,
          this.profil
        );

        try {
          const response = await axios.post("/clients", formData, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Réponse du téléversement :", response);
          if (response.data.status === "success") {
            this.closeModal(modalId);
            this.successmsg(
              "Client Created Successfully",
              " The new client has been successfully created!"
            );
            await this.fetchClientsAll();
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
    async HandleIdUpdate(id) {
      this.loading = true;

      try {
        const response = await axios.get(`/clients/detail/${id}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });

        // console.log("response", response);
        if (response.data.status === "success") {
          console.log("responsedata", response.data.data);
          let data = response.data.data;
          (this.step2.client_name = data.client_name),
            (this.step2.address = data.address),
            (this.step2.state = data.state),
            (this.step2.phone = data.phone),
            (this.profil = data.profil),
            (this.ToId = data.id);
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
    async submitUpdate(modalId) {
      this.v$.step2.$touch();

      if (this.v$.$errors.length == 0) {
        this.loading = true;

        const formData = new FormData();
        formData.append("client_name", this.step2.client_name);
        formData.append("address", this.step2.address);
        formData.append("state", this.step2.state);
        formData.append("phone", this.step2.phone);
        formData.append("profil", this.profil);

        console.log(
          "data",
          this.step2.client_name,
          this.step2.address,
          this.step2.state,
          this.step2.phone,
          this.profil
        );

        try {
          const response = await axios.put(`clients/${this.ToId}`, formData, {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`,
              "Content-Type": "multipart/form-data",
            },
          });
          console.log("Réponse du téléversement :", response);
          if (response.data.status === "success") {
            this.closeModal(modalId);
            this.successmsg(
              "Client Data Updated",
              " The client's data has been successfully updated!"
            );
            await this.fetchClientsAll();
          }
        } catch (error) {
          console.error("Erreur lors du téléversement :", error);

          if (
            error.response.data.message === "Vous n'êtes pas autorisé." ||
            error.response.status === 401
          ) {
            await this.$store.dispatch("auth/clearMyAuthenticatedUser");
            this.$router.push("/"); //a revoir
          } else {
            this.formatValidationErrors(error.response.data.errors);
            this.loading = false;
          }
        }
      } else {
        console.log("cest pas bon ", this.v$.$errors);
        this.loading = false;
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
    async HandleIdDelete(id) {
      // Affichez une boîte de dialogue Sweet Alert pour confirmer la suppression
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      });

      // Si l'utilisateur confirme la suppression
      if (result.isConfirmed) {
        this.ConfirmeDelete(id);
      }
    },
    async ConfirmeDelete(id) {
      this.loading = true;

      try {
        // Faites une requête pour supprimer l'élément avec l'ID itemId
        const response = await axios.delete(`/clients/${id}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`,
          },
        });
        console.log("Réponse de suppression:", response);
        if (response.data.status === "success") {
          this.loading = false;
          this.successmsg(
            "Client Deleted",
            " The client has been successfully deleted."
          );
          await this.fetchClientsAll();
        } else {
          console.log("error", response.data);
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
  },
};
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
  background-color: #fff;
}
.card.custom-card .card-footer {
  padding: 10px !important;
  text-align: center !important;
  background-color: #dbdfe1 !important;
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
