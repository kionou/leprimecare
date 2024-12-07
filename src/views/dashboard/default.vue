<template>
  <div>
    <Loading v-if="loading" style="z-index: 99999"></Loading>
    <!-- Page Header -->
    <div
      class="d-md-flex d-block align-items-center justify-content-between my-4 page-header-breadcrumb"
    >
      <h1 class="page-title fw-semibold fs-18 mb-0">Dashboard</h1>
      <div class="ms-md-1 ms-0">
        <nav>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item">
              <a href="javascript:void(0);">LePrimeCare</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Dashboard
            </li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Page Header Close -->

    <!-- Start::row-1 -->
    <div class="row">
      <div class="col-xxl-12 col-xl-12">
        <div class="row">
          <div class="col">
            <div class="card custom-card">
              <div class="card-body">
                <div class="d-flex align-items-top">
                  <div class="me-3">
                    <span class="avatar avatar-md p-2 bg-primary">
                      <svg
                        class="svg-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div
                      class="d-flex mb-1 align-items-top justify-content-between"
                    >
                      <h5 class="fw-semibold mb-0 lh-1">
                        {{ StatiticsOptions.nbre_employees }}
                      </h5>
                      <!-- <div class="text-danger fw-semibold"><i
                                                        class="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div> -->
                    </div>
                    <p
                      v-if="loggedInUser.role_id === 3"
                      class="mb-0 fs-10 op-7 text-muted fw-semibold"
                    >
                      SERVICES GIVING
                    </p>
                    <p v-else class="mb-0 fs-10 op-7 text-muted fw-semibold">
                      TOTAL EMPLOYEES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card custom-card">
              <div class="card-body">
                <div class="d-flex align-items-top">
                  <div class="me-3">
                    <span class="avatar avatar-md p-2 bg-secondary">
                      <svg
                        class="svg-white"
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <rect fill="none" height="24" width="24" />
                        <g>
                          <path
                            d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z"
                          />
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div
                      class="d-flex mb-1 align-items-top justify-content-between"
                    >
                      <h5 class="fw-semibold mb-0 lh-1">
                        {{ StatiticsOptions.nbre_clients }}
                      </h5>
                      <!-- <div class="text-success fw-semibold"><i
                                                        class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div> -->
                    </div>
                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">
                      TOTAL CLIENTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card custom-card">
              <div class="card-body">
                <div class="d-flex align-items-top">
                  <div class="me-3">
                    <span class="avatar avatar-md p-2 bg-warning">
                      <svg
                        class="svg-white"
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div
                      class="d-flex mb-1 align-items-top justify-content-between"
                    >
                      <h5 class="fw-semibold mb-0 lh-1">
                        {{ StatiticsOptions.nbre_duties }}
                      </h5>
                      <!-- <div class="text-success fw-semibold"><i
                                                        class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div> -->
                    </div>
                    <p class="mb-0 fs-10 op-7 text-muted fw-semibold">
                      TOTAL DUTIES
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card custom-card">
              <div class="card-body">
                <div class="d-flex align-items-top">
                  <div class="me-3">
                    <span class="avatar avatar-md p-2 bg-success">
                      <svg
                        class="svg-white"
                        xmlns="http://www.w3.org/2000/svg"
                        enable-background="new 0 0 24 24"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        fill="#000000"
                      >
                        <g>
                          <rect fill="none" height="24" width="24" />
                        </g>
                        <g>
                          <g>
                            <path
                              d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z"
                            />
                            <path
                              d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z"
                            />
                            <polygon
                              points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85"
                            />
                          </g>
                        </g>
                      </svg>
                    </span>
                  </div>
                  <div class="flex-fill">
                    <div
                      class="d-flex mb-1 align-items-top justify-content-between"
                    >
                      <h5
                        v-if="loggedInUser.role_id === 3"
                        class="fw-semibold mb-0 lh-1"
                      >
                        {{ StatiticsOptions.nbre_days }}
                      </h5>
                      <h5 v-else class="fw-semibold mb-0 lh-1">
                        {{ StatiticsOptions.nbre_recrutement_attente }}
                      </h5>
                      <!-- <div class="text-success fw-semibold"><i
                                                        class="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div> -->
                    </div>
                    <p
                      v-if="loggedInUser.role_id === 3"
                      class="mb-0 fs-10 op-7 text-muted fw-semibold"
                    >
                      WORKING DAYS
                    </p>
                    <p v-else class="mb-0 fs-10 op-7 text-muted fw-semibold">
                      PENDING RECRUITMENT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--End::row-1 -->

    <!-- Start:: row-2 -->
    <div class="row">
      <div class="col-xl-12">
        <div class="card custom-card">
          <div
            class="card-header justify-content-between"
            style="background-color: #e5e7eb !important"
          >
            <div class="card-title text-uppercase mt-4">
              Recent Client That Care Has Been Given
            </div>
            <div class="d-sm-flex align-items-center">
              <div>
                <a
                  href="#"
                  class="btn btn-primary btn-block btn-xs me-3 mt-4 p-1 text-uppercase"
                  data-bs-toggle="modal"
                  data-bs-target="#employee_add_to_timesheet"
                >
                  Add new daily work
                </a>
              </div>

              <div class="input-groupe d-flex flex-column me-2">
                <label for="userpassword">Month & Year</label>
                <MazInput
                  v-model="month"
                  type="month"
                  color="info"
                  size="xs"
                  rounded-size="xs"
                />
              </div>
              <div class="input-groupe d-flex flex-column">
                <label for="userpassword">Week</label>
                <MazSelect
                  v-model="week"
                  name="can_work_night"
                  color="info"
                  :options="weeks"
                  size="xs"
                  rounded-size="xs"
                />
              </div>

              <div class="" style="position: relative">
                &nbsp;
                <div
                  class="mt-4 btn btn-sm btn-block text-white"
                  style="padding: 4px 5px !important ; background: #4dd70a"
                  @click="fetchClientEmployee()"
                >
                  <i class="ri-search-line"> </i> Search
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table text-nowrap table-bordered table-striped">
                <thead>
                  <tr>
                    <th scope="col">Client Names</th>
                    <th scope="col">Employee Names</th>
                    <th scope="col">Client Signature</th>
                    <th scope="col">Week Start</th>
                    <th scope="col">Week End</th>
                    <th scope="col">N° Duties</th>
                    <th scope="col">Year</th>
                    <th scope="col">Observation</th>
                    <th scope="col">Print Time Sheet</th>
                  </tr>
                </thead>
                <tbody v-if="paginatedItems.length === 0" class="">
                  <tr>
                    <td colspan="9">
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
                  <tr v-for="data in paginatedItems" :key="data.id">
                    <td>
                      <div class="d-flex align-items-center">
                        <div class="me-2 lh-1">
                          <span class="avatar avatar-sm" v-if="data.client">
                            <img
                              v-if="data.client.photo === null"
                              src="@/assets/img/client.png"
                              alt=""
                            />
                            <img v-else :src="data.client.photo" alt="" />
                          </span>
                        </div>
                        <div class="fs-14" v-if="data.client">
                          {{ data.client?.client_name }}
                        </div>
                      </div>
                    </td>
                    <td>
                      <span class="fw-semibold" v-if="data.employee">
                        {{ data.employee?.user?.Prenoms }}
                        {{ data.employee?.user?.Nom }}
                      </span>
                    </td>
                    <td>
  <button @click=" HandleIdSignature( data.client_id, data.start_date_of_week, data.end_date_of_week, data.employee?.id , signatureStates[`${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`])"
    class="btn btn-sm"
    data-bs-toggle="modal"
   
    :class="{
      'btn-danger': signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'undefined' || signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'no_observation',
      'btn-warning': signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'client_signed',
      'btn-success': signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'caregiver_signed' || signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'supervisor_signed'
    }"
    :disabled="
      signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'no_observation' ||
      signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'supervisor_signed'
    "
  >
    <i class="bi-badge-wc-fill">
      {{
        signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'no_observation'
          ? 'No Observation'
          : signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'undefined'
          ? 'Client Needs to Sign'
          : signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'client_signed'
          ? 'Caregiver Needs to Sign'
          : signatureStates[ `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`] === 'caregiver_signed'
          ? 'Supervisor Needs to Sign'
          : 'Completed'
      }}
    </i>
  </button>
</td>

                    <td>
                      <span class="">{{ data.start_date_of_week }} </span>
                    </td>
                    <td>
                      <span class="">{{ data.end_date_of_week }} </span>
                    </td>
                    <td class="text-center">
                      <span>{{ data.service_given }} </span>
                    </td>
                    <td>
                      <span class="">{{ data.annee }}</span>
                    </td>
                    <td>
                      <span class="">
                        <button
                          @click="
                            HandleId(
                              data.client_id,
                              data.start_date_of_week,
                              data.end_date_of_week ,
                              data.employee?.id
                            )
                          "
                          class="btn btn-sm"
                          data-bs-toggle="modal"
                          data-bs-target="#employee_add_observation"
                          :disabled="
                            signatureStates[
                              `${data.client_id}_${data.start_date_of_week}_${data.end_date_of_week}`
                            ] === 'supervisor_signed'
                          "
                        >
                          <i class="bi-exclamation-triangle text-danger"></i>
                          <span style="font-size: 13px">Click to add</span>
                        </button>
                      </span>
                    </td>
                    <td>
                      <span class="">
                        <a
                          target="_blank"
                          :href="fetchPrint(data)"
                          class="d-flex align-items-center"
                        >
                          <img
                            src="@/assets/img/pdf-icon.png"
                            alt="excel format"
                            style="width: 30px"
                          />
                          Download</a
                        >
                      </span>
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
    </div>
    <!-- End:: row-2 -->

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
                        >Client <span class="text-danger">*</span></label
                      >
                      <MazSelect v-model="step1.client_id" color="info"   size="xs"
                        rounded-size="xs"
                        :options="ClientOptions"
                            search v-slot="{ option }" >
                            <div class="flex items-center"
                              style="padding-top: 0.5rem; padding-bottom: 0.5rem; width: 100%; gap: 1rem"
                              @click="handleOptionClickEmployeeid(option)">
  
                              {{ option.label }}
  
                            </div>
  
                          </MazSelect>
                      <!-- <MazSelect
                        v-model="step1.client_id"
                        color="info"
                        name="client_id"
                        size="xs"
                        rounded-size="xs"
                        :options="ClientOptions"
                        search
                      /> -->
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
                  <button
                    class=""
                    @click.prevent="
                      submitDailyWork('employee_add_to_timesheet')
                    "
                  >
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

    <div
      class="modal fade effect-rotate-bottom"
      id="employee_add_observation"
      tabindex="-1"
      aria-hidden="true"
      data-bs-backdrop="static"
      ref="employee_add_observation"
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
                >Add Observation to client weekly attended services</b
              >
            </h2>
          </div>
          <div class="modal-body px-4">
            <div>
              <div
                class="row gy-2 justify-content-center"
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
                        >Client <span class="text-danger">*</span></label
                      >
                      <MazSelect
                        v-model="step2.client_id"
                        color="info"
                        name="nom"
                        size="xs"
                        rounded-size="xs"
                        :options="ClientOptions"
                        search
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="input-groupe">
                      <label for="userpassword"
                        >Week Date Start
                        <span class="text-danger">*</span></label
                      >
                      <MazInput
                        v-model="step2.week_start"
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
                        v-model="step2.week_end"
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
                        >Observations <span class="text-danger">*</span></label
                      >
                      <div class="form-ckeditor">
                        <ckeditor
                          v-model="step2.observations"
                          :editor="editor"
                          :config="options"
                        ></ckeditor>
                      </div>

                      <small v-if="v$.step2.observations.$error">{{
                        v$.step2.observations.$errors[0].$message
                      }}</small>
                      <small v-if="resultError['observations']">
                        {{ resultError["observations"] }}
                      </small>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="boutton">
                    <button
                      class=""
                      @click="SubmitObersation('employee_add_observation')"
                    >
                      Save Observation
                    </button>
                  </div>
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

    <div class="modal fade effect-rotate-bottom" id="client_add_signature" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static"  ref="client_add_signature">
      <div class="modal-dialog modal-dialog-centered ">
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
            <b class="text-center"  > Client Signature On timesheet</b>
            </h2>
          </div>
          <div class="modal-body px-4">
            <div>
              <div
                class="row gy-2 justify-content-center"
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
                      <label for="userpassword" >Client Signature goes here<span class="text-danger">*</span></label>
                      <canvas
                      ref="clientCanvas"
                      @mousedown="startDrawing('clientCanvas', $event)"
                      @mousemove="draw('clientCanvas', $event)"
                      @mouseup="stopDrawing('clientCanvas')"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="boutton">
                    <button class="" @click="SubmitSignature('client_add_signature', '', 'clientCanvas')"> Save Observation </button>
                  </div>
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
              <button class="btn btn-primary" @click="clearCanvas('clientCanvas')">
                Effacer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal fade effect-rotate-bottom" id="caregive_add_signature" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static"  ref="caregive_add_signature">
      <div class="modal-dialog modal-dialog-centered ">
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
            <b class="text-center" > Employee Signature On timesheet</b>
            </h2>
          </div>
          <div class="modal-body px-4">
            <div>
              <div
                class="row gy-2 justify-content-center"
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
                      <label for="userpassword" >Employee Signature goes here <span class="text-danger">*</span></label>
                      <canvas
                      ref="employeeCanvas"
                      @mousedown="startDrawing('employeeCanvas', $event)"
                      @mousemove="draw('employeeCanvas', $event)"
                      @mouseup="stopDrawing('employeeCanvas')"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="boutton">
                    <button class=""  @click="SubmitSignature('caregive_add_signature' ,'EMP' , 'employeeCanvas')"> Save Observation </button>
      
                  </div>
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
              <button class="btn btn-primary" @click="clearCanvas">
                Effacer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade effect-rotate-bottom" id="supervisor_add_signature" tabindex="-1"  aria-hidden="true" data-bs-backdrop="static"  ref="supervisor_add_signature">
      <div class="modal-dialog modal-dialog-centered ">
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

            <b class="text-center" > Supervisor Signature On timesheet </b>
            </h2>
          </div>
          <div class="modal-body px-4">
            <div>
              <div
                class="row gy-2 justify-content-center"
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

                      <label for="userpassword"  >Supervisor Signature goes here<span class="text-danger">*</span></label>
                      <canvas
                      ref="supervisorCanvas"
                      @mousedown="startDrawing('supervisorCanvas', $event)"
                      @mousemove="draw('supervisorCanvas', $event)"
                      @mouseup="stopDrawing('supervisorCanvas')"
                      ></canvas>
                    </div>
                  </div>
                </div>
                <div class="row mb-3">
                  <div class="boutton">
                    <button class=""  @click="SubmitSignature('supervisor_add_signature', 'SUP' , 'supervisorCanvas')"> Save Observation </button>
                  </div>
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
              <button class="btn btn-primary" @click="clearCanvas">
                Effacer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "@/lib/axiosConfig";
import Loading from "@/components/others/loading.vue";
import Pag from "@/components/others/pagination.vue";
import useVuelidate from "@vuelidate/core";
import { require, lgmin, lgmax, ValidEmail } from "@/functions/rules";
import { successmsg } from "@/lib/modal.js";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
export default {
  components: {
    Loading,
    Pag,
    ckeditor: CKEditor.component
  },
  data() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    return {
      canvasData: {
        clientCanvas: { drawing: false, x: 0, y: 0 },
        employeeCanvas: { drawing: false, x: 0, y: 0 },
        supervisorCanvas: { drawing: false, x: 0, y: 0 },
      },
     
      loading: true,
      StatiticsOptions: "",
      currentYear: currentYear,
      currentMonth: currentMonth,
      IdObservation: "",
      employeeId:"",
      signatureClient:"",
      signatureSupervisor:"",
      signatureObservation:"",
      signatureCare:"",
      week_start_All: "",
      week_end_All: "",
      week: "All",
      month: "",
      data: [],
      resultError: {},
      DaysOptions: [],
      ClientOptions: [],
      currentPage: 1,
      itemsPerPage: 10,
      totalPageArray: [],
      ClientEmployeeOptions: [],
      signatureStates: {},
      DutiesOptions: [],
      week_start: "",
      week_end: "",
      clientId:"",
      step1: {
        client_id: "",
        day_id: "",
        week_start: "",
        week_end: "",
        time_in: "",
        time_out: "",
        duties_id: []
      },
      step2: {
        client_id: "",
        week_start: "",
        week_end: "",
        observations: ""
      },

      weeks: [
        { label: "Week 1", value: 1 },
        { label: "Week 2", value: 2 },
        { label: "Week 3", value: 3 },
        { label: "Week 4", value: 4 },
        { label: "All", value: "All" }
      ],
      v$: useVuelidate(),
      error: "",

      editor: ClassicEditor,

      plugins: [
        "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
        "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
        "save table contextmenu directionality emoticons template paste textcolor"
      ],
      toolbar:
        "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
      options: {
        height: 500,
        style_formats: [
          { title: "Bold text", inline: "b" },
          { title: "Red text", inline: "span", styles: { color: "#ff0000" } },
          { title: "Red header", block: "h1", styles: { color: "#ff0000" } },
          { title: "Example 1", inline: "span", classes: "example1" },
          { title: "Example 2", inline: "span", classes: "example2" },
          { title: "Table styles" },
          { title: "Table row 1", selector: "tr", classes: "tablerow1" }
        ]
      }
    };
  },
  validations: {
    step1: {
      client_id: { require },
      day_id: { require },
      week_start: { require },
      week_end: { require },
      time_in: { require },
      time_out: { require },
      duties_id: { require }
    },
    step2: {
      client_id: { require },
      week_start: { require },
      week_end: { require },
      observations: { require }
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters["auth/myAuthenticatedUser"];
    },
    totalPages() {
      return Math.ceil(this.ClientEmployeeOptions.length / this.itemsPerPage);
    },
    paginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.ClientEmployeeOptions.slice(startIndex, endIndex);
    }
  },
  async mounted() {
   
    await this.fetchStatitics();
    await this.fetchClientEmployee();
    await this.fetchDays();
    await this.fetchClients();
    await this.setWeekDates();
    await this.fetchDuties();
    await this.loadSignatureStates();
  },

  methods: {
    successmsg: successmsg,
    async fetchStatitics() {
      try {
        const response = await axios.get("/statistics/admin", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`
          }
        });

      ;
        if (response.data.status === "success") {
         
          this.StatiticsOptions = response.data.data;
          this.loading = false;
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
        

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

    async fetchClientEmployee() {
    
      this.loading = true;

      try {
        const response = await axios.get("/clients-care-gives", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`
          },
          params: {
            // month:`${this.currentYear}-${this.currentMonth}`,
            month: this.month,
            week: this.week
          }
        });

      
        if (response.data.status === "success") {
        
          this.ClientEmployeeOptions = response.data.data.data;
          await this.loadSignatureStates();

          this.loading = false;
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
         

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
    async fetchDays() {
      try {
        const response = await axios.get("/working-days");
      

        if (response.data.status === "success") {
          const currentDate = new Date();
          const currentDayIndex = (currentDate.getDay() + 6) % 7;
     

          const currentDayOption = {
            label: response.data.data[currentDayIndex].name,
            value: response.data.data[currentDayIndex].id
          };
       

          this.DaysOptions = response.data.data.map((day) => ({
            label: day.name,
            value: day.id
          }));

          // Insérer le jour actuel en première position dans les options de sélection
          //   this.DaysOptions.unshift(currentDayOption);

          // Sélectionner automatiquement le jour actuel
          this.step1.day_id = currentDayOption.value;

         
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
      }
    },

    async fetchClients() {
      try {
        const response = await axios.get(
          `/employees/assign-clients/list/${this.loggedInUser.id}`,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`
            }
          }
        );

        if (response.data.status === "success") {
          
          this.ClientOptions = response.data.data?.map((client) => ({
            label: client.client?.client_name,
            value: client?.client_id,
            id:client?.employee_id
          }));
         
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
         

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
    async fetchDuties() {
      try {
        const response = await axios.get("/duties-services", {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`
          }
        });

        
        if (response.data.status === "success") {
          this.DutiesOptions = response.data.data.map((client) => ({
            label: client.duty_name,
            value: client.id
          }));
         
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
       

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
    setWeekDates() {
      const currentDate = new Date();
      const currentDay = currentDate.getDay(); // Numéro du jour de la semaine (0 pour dimanche, 1 pour lundi, etc.)
      const diff = currentDay - 1; // Différence entre le jour actuel et le lundi (0 pour lundi, -1 pour dimanche, etc.)
      const firstDay = new Date(currentDate); // Cloner la date actuelle pour la modifier
      firstDay.setDate(firstDay.getDate() - diff); // Définir le premier jour de la semaine (lundi)

      const lastDay = new Date(firstDay); // Cloner la date du premier jour
      lastDay.setDate(lastDay.getDate() + 6); // Ajouter 6 jours pour obtenir le dernier jour de la semaine (dimanche)

      // Formater les dates au format YYYY-MM-DD pour les champs d'entrée
      this.week_start = firstDay.toISOString().slice(0, 10);
      this.week_end = lastDay.toISOString().slice(0, 10);

      this.step1.week_start = firstDay.toISOString().slice(0, 10);
      this.step1.week_end = lastDay.toISOString().slice(0, 10);
    },

    startDrawing(canvasRef, event) {
      const canvas = this.canvasData[canvasRef];
      canvas.drawing = true;
      canvas.x = event.offsetX;
      canvas.y = event.offsetY;
    },
    draw(canvasRef, event) {
      const canvas = this.canvasData[canvasRef];
      if (canvas.drawing) {
        const ctx = this.$refs[canvasRef].getContext("2d");
        ctx.beginPath();
        ctx.moveTo(canvas.x, canvas.y);
        canvas.x = event.offsetX;
        canvas.y = event.offsetY;
        ctx.lineTo(canvas.x, canvas.y);
        ctx.stroke();
      }
    },
    stopDrawing(canvasRef) {
      this.canvasData[canvasRef].drawing = false;
    },
    clearCanvas(canvasRef) {
      const ctx = this.$refs[canvasRef].getContext("2d");
      const canvasElement = this.$refs[canvasRef];
      ctx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    },
    
    updateCurrentPage(pageNumber) {
      this.currentPage = pageNumber;
      window.scrollTo({
        top: 0,
        behavior: "smooth" // Utilisez 'auto' pour un défilement instantané
      });
    },
    updatePaginatedItems() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;

      const endIndex = startIndex + this.itemsPerPage;
      return this.ClientEmployeeOptions.slice(startIndex, endIndex);
    },
    handleOptionClickEmployeeid(value){
      this.employeeId = value.id

    },
    async submitDailyWork(modalId) {
      this.v$.step1.$touch();
      if (this.v$.$errors.length == 0) {
        this.loading = true;
        let data = {
          employee_id: this.employeeId,
          client: this.step1.client_id,
          day_id: this.step1.day_id,
          start_date_of_week: this.step1.week_start,
          end_date_of_week: this.step1.week_end,
          time_in: this.step1.time_in,
          time_out: this.step1.time_out,
          duty_take_id: this.step1.duties_id
        };
      
        try {
          const response = await axios.post("/employees/timesheets", data, {
            headers: { Authorization: `Bearer ${this.loggedInUser.token}` }
          });
         
          if (response.data.status === "success") {
            this.closeModal(modalId);
            this.successmsg(
              "New Daily Work Added",
              " The new daily work has been successfully added! It is now ready to be performed."
            );
            await this.fetchClientEmployee();
          } else {
          }
        } catch (error) {
        

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
    async SubmitSignature(modalId ,type , canvasRef) {
      this.loading = true;
      
      const canvasElement = this.$refs[canvasRef];
      const canvasData = canvasElement.toDataURL();
      const formData = new FormData();

      
      if (type === null ||  type === '') {
        formData.append("id", this.IdObservation);
      formData.append("SignatureC", canvasData);
     
      } else {
        formData.append("id", this.IdObservation);
      formData.append("SignatureC", canvasData);
      formData.append("type", type);
      }
     

      try {
        const response = await axios.post(
          "/employees/observations/timesheet/signature",
          formData,
          {
            headers: { Authorization: `Bearer ${this.loggedInUser.token}` }
          }
        );
  
        if (response.data.status === "success") {
          this.closeModal(modalId);
          if (type === 'EMP') {
            this.successmsg(
              "Signature Recorded",
              "Your signature has been successfully recorded! It has been saved and is now on file."
            );
          } else if (type === 'SUP') {
            this.successmsg(
              "Signature Recorded",
              "Your signature has been successfully recorded! It has been saved and is now on file."
            );
          } else {
            this.successmsg(
              "Signature Recorded",
              "The patient's signature has been successfully recorded! It has been saved and is now on file."
            );
          }

          
          await this.fetchClientEmployee();
        } else {
        }
      } catch (error) {
      

        this.loading = false;
        if (error.response.data.status === "error") {
          return (this.error = error.response.data.message);
        } else {
          this.formatValidationErrors(error.response.data.errors);
        }
      }
    },
    async SubmitObersation(modalId) {
      this.v$.step2.$touch();
      if (this.v$.$errors.length == 0) {
        this.loading = true;
        let data = {
          employee_id: this.employeeId,
          client_id: this.step2.client_id,
          start_date_of_week: this.step2.week_start,
          end_date_of_week: this.step2.week_end,
          observations: this.step2.observations
        };

        try {
          const response = await axios.post("/employees/observations", data, {
            headers: { Authorization: `Bearer ${this.loggedInUser.token}` }
          });
      
          if (response.data.status === "success") {
            this.closeModal(modalId);
            this.successmsg(
              "Observation added successfully!",
              "The observation has been added successfully! Details have been saved and are now available for viewing."
            );
            await this.fetchClientEmployee();
          } else {
          }
        } catch (error) {
   

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

    async formatValidationErrors(errors) {
      const formattedErrors = {};

      for (const field in errors) {
        const errorMessages = errors[field]; // Liste complète des messages d'erreur
     

        const concatenatedError = errorMessages.join(", "); // Concaténer les messages d'erreur
       

        formattedErrors[field] = concatenatedError; // Utilisez le nom du champ comme clé
      }

      this.resultError = formattedErrors; // Stockez les erreurs dans un objet

      
    },

    fetchPrint(data) {
      return `https://api.leprimecare.care/api/print-timesheet?employee_id=${data.employee_id}&client_id=${data.client_id}&start_date_of_week=${data.start_date_of_week}&end_date_of_week=${data.end_date_of_week}`;
    },
    async HandleId(id, week_start, week_end ,employee_id) {
      
      this.step2.client_id = id;
      this.step2.week_start = week_start;
      this.step2.week_end = week_end;
      this.fetchClientObservation(id, week_start, week_end ,employee_id);
    },
    async HandleIdSignature(id, week_start, week_end , employee_id , modal) {

      if(modal === 'undefined'){
      this.fetchClientSignature(id, week_start, week_end ,employee_id);

        const modal = new bootstrap.Modal(document.getElementById('client_add_signature'));
        modal.show();

      }else if(modal === 'client_signed'){
        this.fetchClientSignature(id, week_start, week_end ,employee_id);
        const modal = new bootstrap.Modal(document.getElementById('caregive_add_signature'));
        modal.show();
      }else{
        this.fetchClientSignature(id, week_start, week_end ,employee_id);
        const modal = new bootstrap.Modal(document.getElementById('supervisor_add_signature'));
        modal.show();

      }

    },
    async fetchClientDetail(id) {
      this.loading = true;

      try {
        const response = await axios.get(`/clients/detail/${id}`, {
          headers: {
            Authorization: `Bearer ${this.loggedInUser.token}`
          }
        });

       
        if (response.data.status === "success") {
        

          this.loading = false;
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
        

          if (
            error.response.data.message === "Vous n'êtes pas autorisé." ||
            error.response.status === 401
          ) {
            await this.$store.dispatch("auth/clearMyAuthenticatedUser");
            this.$router.push("/login"); //a revoir
          }
        } else {
          this.formatValidationErrors(error.response.data.errors);
          this.loading = false;
          return false;
        }
      }
    },
    async fetchClientObservation(id, week_start, week_end ,employee_id) {
      

      this.loading = true;

      try {
        const response = await axios.get(
          `/employees/observations/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`
            },
            params: {
              employee_id: employee_id,
              client_id: id,
              start_date_of_week: week_start,
              end_date_of_week: week_end
            }
          }
        );
          this.employeeId = employee_id
        ;

        
        if (response.data.data === undefined) {
          ;

          this.step2.observations = "";
          this.loading = false;
        } else {
          
          this.step2.observations = response.data.data.observations;
          this.loading = false;
        }
      } catch (error) {
       
        if (error.response.data.status === "error") {
         

          if (
            error.response.data.message === "Vous n'êtes pas autorisé." ||
            error.response.status === 401
          ) {
            await this.$store.dispatch("auth/clearMyAuthenticatedUser");
            this.$router.push("/login"); //a revoir
          }
        } else {
          this.formatValidationErrors(error.response.data.errors);
          this.loading = false;
          return false;
        }
      }
    },
    async fetchClientSignature(id, week_start, week_end , employee_id) {
     

      this.loading = true;

      try {
        const response = await axios.get(
          `/employees/observations/detail/${id}`,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`
            },
            params: {
              employee_id: employee_id,
              client_id: id,
              start_date_of_week: week_start,
              end_date_of_week: week_end
            }
          }
        );

      
       
        this.loading = false;

        //  return response.data.data;
        if (response.data.data === undefined) {
          this.loading = false;
          // return false;
          // Aucune signature trouvée, retourne false
        } else {
          this.IdObservation = response.data.data.id;
          this.loading = false;
          return true; // Signature trouvée, retourne true
        }
      } catch (error) {
        console.log(
          "Erreur lors de la mise à jour des données MPME guinee :",
          error
        );
        if (error.response.data.status === "error") {
         

          if (
            error.response.data.message === "Vous n'êtes pas autorisé." ||
            error.response.status === 401
          ) {
            await this.$store.dispatch("auth/clearMyAuthenticatedUser");
            this.$router.push("/login"); //a revoir
          }
        } else {
          this.formatValidationErrors(error.response.data.errors);
          this.loading = false;
          return false;
        }
      }
    },
    async loadSignatureStates() {
      // Assurez-vous que `paginatedItems` est disponible et contient les éléments à vérifier
      for (let item of this.paginatedItems) {
        await this.checkSignatureState(
          item.client_id,
          item.start_date_of_week,
          item.end_date_of_week,
          item.employee?.id
        );
      }
    },
    async checkSignatureState(client_id, start_date_of_week, end_date_of_week ,employee_id) {
      try {
        const response = await axios.get(
          `/employees/observations/detail/${client_id}`,
          {
            headers: {
              Authorization: `Bearer ${this.loggedInUser.token}`
            },
            params: {
              employee_id: employee_id,
              client_id: client_id,
              start_date_of_week: start_date_of_week,
              end_date_of_week: end_date_of_week
            }
          }
        );

        const key = `${client_id}_${start_date_of_week}_${end_date_of_week}`;
         this.signatureClient = response.data?.data?.Signature_client
         this.signatureCare = response.data?.data?.Signature_care_giver
         this.signatureObservation = response.data?.data?.observations
         this.signatureSupervisor = response.data?.data?.Signature_supervisor

        if (response.data.data === undefined || !response.data.data?.observations) {
  // Aucune observation ou données (désactivé et danger)
  this.signatureStates[key] = "no_observation"; // Bouton danger désactivé
} else if (response.data.data?.observations && 
           !response.data.data?.Signature_client) {
  // Observation présente mais le client n'a pas signé (rouge actif)
  this.signatureStates[key] = "undefined"; // Bouton danger actif
} else if (response.data.data?.Signature_client && 
           !response.data.data?.Signature_care_giver && 
           !response.data.data?.Signature_supervisor) {
  // Le client a signé mais pas l'employé (orange actif)
  this.signatureStates[key] = "client_signed"; // Bouton warning actif
} else if (response.data.data?.Signature_care_giver && 
           !response.data.data?.Signature_supervisor) {
  // L'employé a signé mais pas le superviseur (vert actif)
  this.signatureStates[key] = "caregiver_signed"; // Bouton success actif
} else if (response.data.data?.Signature_supervisor) {
  // Le superviseur a signé (vert désactivé)
  this.signatureStates[key] = "supervisor_signed"; // Bouton success désactivé
} else {
  // Aucun autre cas (fallback)
  this.signatureStates[key] = "no_observation";
}
        this.loading = false;
      } catch (error) {
        console.error(
          "Erreur lors de la vérification de la signature :",
          error
        );
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
    }
  }
};
</script>
<style lang="css" scoped>
canvas {
  border: 2px solid #000;
}

.ck.ck-editor__editable_inline > :last-child {
  min-height: 300px !important;
  height: auto !important ;
}
/* .table td, .table th{
  text-align:center !important;
} */

.card.custom-card .card-header {
  padding: 10px 15px !important;
}
</style>
