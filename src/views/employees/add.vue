<template>
     <div>
    <Loading v-if="loading"></Loading>
    <div class="btnForms ">
            <img src="../../assets/img/logo.png" alt="">
            <h3  >RECRUITMENT FORM</h3>
          </div>
          <div  style=" padding-top:100px;">
            <div class="generastep" >
      <div class="stepper">
        <div class="stepper-progress">
          <div class="stepper-progress-bar" :style="'width:' + stepperProgress"></div>
        </div>
  
        <div
          class="stepper-item"
          :class="{ current: currentStep == item, success: currentStep > item }"
          v-for="item in 6"
          :key="item"
          @click="goToStep(item)"
        >
          <div class="stepper-item-counter">
            <img
              class="icon-success"
              src="https://www.seekpng.com/png/full/1-10353_check-mark-green-png-green-check-mark-svg.png"
              alt=""
            />
            <span class="number">
              {{ item }}
            </span>
          </div>
          <span class="stepper-item-title"> Step {{ item }} </span>
        </div>
      </div>
    </div>
  
    <div class="error text-center" v-if="this.error">{{ error }} <br /></div>
    <div  class="container-fluid" style="margin-top: 48px" >
     
      <form class="form"  style="position:relative">
        <div class="btn-list" style="position:relative" v-if="currentStep === 4">
          <div class="bouttons" style="position:relative">
        <div class="boutton"  style=" position:fixed;  float:right;  right: 0%; z-index:99999" @click="AddformData" >Add</div>
        </div>
          </div>

          <div class="btn-list" style="position:relative" v-if="currentStep === 5">
          <div class="bouttons" style="position:relative">
        <div class="boutton"  style=" position:fixed;  float:right;  right: 0%; z-index:99999" @click="AddformReferences" >Add</div>
        </div>
          </div>
        <!-- Étape 1 -->
        <div v-if="currentStep === 1">
          <div class="form-container">
            <!-- debut infos genral -->
            <div class="content">
              <p class="titre">Personal Information</p>
              <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
  <label for="userpassword">First Name <span class="text-danger">*</span></label>
  <MazInput  v-model="step1.first_name" type="text"  color="info" name="nom"   size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step1.first_name.$error">{{ v$.step1.first_name.$errors[0].$message}}</small>
<small v-if="resultError['first_name']"> {{ resultError["first_name"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
  <label for="userpassword">Last Name <span class="text-danger">*</span></label>
  <MazInput  v-model="step1.last_name" type="text"  color="info" name="prenom"   size="sm" rounded-size="sm" />

</div>
<small v-if="v$.step1.last_name.$error">{{ v$.step1.last_name.$errors[0].$message}}</small>
<small v-if="resultError['last_name']"> {{ resultError["last_name"] }} </small>
</div>
<div class="col">
    <div class="input-groupe">
      <label for="userpassword">Cell Phone Number <span class="text-danger">*</span></label>
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
    </div>
 
    <small v-if="resultError['phone']"> {{ resultError["phone"] }} </small>
  </div>

                </div>
              <div class="row mb-3 mt-3 content-group">
                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword"> Address Email <span class="text-danger">*</span></label>
                <MazInput  v-model="step1.email" type="email"  color="info" name="email"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step1.email.$error">{{ v$.step1.email.$errors[0].$message}}</small>
                <small v-if="resultError['email']"> {{ resultError["email"] }} </small>
               </div>
                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Present Address <span class="text-danger">*</span></label>
                <MazInput  v-model="step1.address" type="text"  color="info" name="address"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step1.address.$error">{{ v$.step1.address.$errors[0].$message}}</small>
                <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
               </div>
               <div class="col">
                <div class="input-groupe">

                  <label for="userpassword">Age <span class="text-danger">*</span></label>
                 <MazInput  v-model="step1.age" type="number" min="0" color="info" name="age"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step1.age.$error">{{ v$.step1.age.$errors[0].$message}}</small>
                <small v-if="resultError['age']"> {{ resultError["age"] }} </small>
               </div>

              

               </div>
               <div class="row mb-3 mt-3 content-group">
             
               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Social Security <span class="text-danger">*</span></label>
                <MazInput  v-model="step1.social_security"  @input="formatInput"  color="info" name="social_security"   size="sm" rounded-size="sm"  placeholder="XXX-XX-XXXX" />
                </div>
                <small v-if="v$.step1.social_security.$error">{{ v$.step1.social_security.$errors[0].$message}}</small>
                <small v-if="resultError['social_security']"> {{ resultError["social_security"] }} </small>
               </div>
                  <div class="col">
                  <div class="input-groupe">
                  <label for="userpassword">Number street city state zip <span class="text-danger">*</span></label>
                  <MazInput  v-model="step1.number_street_city_state_zip" type="text"  color="info"  name="number_street_city_state_zip" size="sm" rounded-size="sm" />
                  </div>
                  <small v-if="v$.step1.number_street_city_state_zip.$error">{{ v$.step1.number_street_city_state_zip.$errors[0].$message}}</small>
                  <small v-if="resultError['number_street_city_state_zip']"> {{ resultError["number_street_city_state_zip"] }} </small>
                  </div>
              </div>

               <p class="titre">Availability</p>
              <div class="row mb-3 mt-3 content-group">

                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Position Applied for Agency <span class="text-danger">*</span></label>
                <MazInput  v-model="step1.position_applied_agency" type="text"  color="info" name="position_applied_agency"   size="sm" rounded-size="sm" />

                </div>
                <small v-if="v$.step1.position_applied_agency.$error">{{ v$.step1.position_applied_agency.$errors[0].$message}}</small>
                <small v-if="resultError['position_applied_agency']"> {{ resultError["position_applied_agency"] }} </small>
               </div>
               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">How many hours can you work weekly? <span class="text-danger">*</span></label>
                 <MazInput  v-model="step1.weekly_available_hours" type="number" min="0" color="info" name="weekly_available_hours"   size="sm" rounded-size="sm" />

                </div>
                <small v-if="v$.step1.weekly_available_hours.$error">{{ v$.step1.weekly_available_hours.$errors[0].$message}}</small>
                <small v-if="resultError['weekly_available_hours']"> {{ resultError["weekly_available_hours"] }} </small>
               </div>

               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Can you work nights? <span class="text-danger">*</span></label>   
                  <MazSelect  label="Select" v-model="step1.can_work_night"  name="can_work_night"  color="info" :options="choix"  size="sm" rounded-size="sm" search />     
                     </div>
                <small v-if="v$.step1.can_work_night.$error">{{ v$.step1.can_work_night.$errors[0].$message}}</small>
                <small v-if="resultError['can_work_night']"> {{ resultError["can_work_night"] }} </small>
               </div>

             

               </div>

               <div class="row mb-3 mt-3 content-group">

       
<div class="col">
<div class="input-groupe">
<label for="userpassword">Number pref </label>
<MazInput  v-model="step1.number_pref" type="text"  color="info"  name="number_pref" size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step1.number_pref.$error">{{ v$.step1.number_pref.$errors[0].$message}}</small>
<small v-if="resultError['number_pref']"> {{ resultError["number_pref"] }} </small>
</div>

<div class="col">
<div class="input-groupe">
<label for="userpassword">How long  <span class="text-danger">*</span></label>
<MazInput  v-model="step1.how_long" type="number"  color="info"  name="how_long" size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step1.how_long.$error">{{ v$.step1.how_long.$errors[0].$message}}</small>
<small v-if="resultError['how_long']"> {{ resultError["how_long"] }} </small>
</div>


              </div>
            
             <div class="row mb-3 mt-3 content-group">
              <div class="btn-list" style="position:relative" >
          <div class="bouttons" style="position:relative">
        <div class="boutton"   style="max-width: 34px; width: 100%;padding: 6px; margin-top: 20px; display: flex;
                    flex-direction: column;  align-items: center; justify-content: center; right: -45.5%; top: 38px; position: relative; z-index:1000" @click="AddformDataDays" ><i  class="ri-add-line"></i></div>
        </div>
          </div>
          <div  class="row mb-3 mt-3 content-group" v-for="(day, index) in step1.DaysHours" :key="day.id">
            <div class="col">
          <div class="input-groupe">
          <label for="userpassword">Days Available to Work <span class="text-danger">*</span></label>
          <MazSelect 
           label="Select" 
           v-model="day.day_id"
            name="day_id"  
            listPosition="left" 
            color="info"
             :options="DaysOptions" 
              size="sm" 
              rounded-size="sm" 
               v-slot="{ option }"
             search > 
             <div class="flex items-center" style="  width: 100%;  gap: 1rem; " @click="clearError(index, 'day_id')">
                      {{ option.label }}
                    </div>
                  </MazSelect>  
          </div>
          <small v-if="errors.step1.DaysHours && errors.step1.DaysHours[index] && errors.step1.DaysHours[index].day_id">{{ errors.step1.DaysHours[index].day_id }}</small>
          <small v-if="resultError['DaysHours']"> {{ resultError["DaysHours"] }} </small>
          </div>

          <div class="col   d-flex align-items-center">
          <div class="input-groupe w-100 me-2">
             <div >
              <label for="userpassword">Hours Available to Work <span class="text-danger">*</span></label>
          <MazInput  v-model="day.available_hour" type="time"  color="info" @input="clearError(index, 'available_hour')"  name="day.available_hour" size="sm" rounded-size="sm" />
          </div>
          <small v-if="errors.step1.DaysHours && errors.step1.DaysHours[index] && errors.step1.DaysHours[index].available_hour">{{ errors.step1.DaysHours[index].available_hour }}</small>
          <small v-if="resultError['DaysHours']"> {{ resultError["DaysHours"] }} </small>
             </div>
             <div class="btn-list mt-8">
              <div class="bouttons" style="position:relative;">
        <div class="boutton"   style=" padding:6px 10px !important ; background:red;margin-top:0 !important" @click="deleteRowDays(index)" ><i class="ri-delete-bin-line"></i></div>
        </div>
            <!-- <a aria-label="anchor"  @click="deleteRowDays(index)" href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-light"><i class="ri-delete-bin-line"></i></a> -->
        </div>
          </div>
          </div>
         
         
           
              </div>

               <div class="row mb-3 mt-3 content-group">

       
        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Date Available to Start <span class="text-danger">*</span></label>
        <MazInput  v-model="step1.date_available_to_start" type="date"  color="info"  name="date_available_to_start" size="sm" rounded-size="sm"  :min="minDate" />
        </div>
        <small v-if="v$.step1.date_available_to_start.$error">{{ v$.step1.date_available_to_start.$errors[0].$message}}</small>
        <small v-if="resultError['date_available_to_start']"> {{ resultError["date_available_to_start"] }} </small>
        </div>

        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Employment desired  <span class="text-danger">*</span></label>
        <MazSelect  label="Select" v-model="step1.full_part_both" name="full_part_both"   listPosition="left" color="info" :options="HonorairesOptions"  size="sm" rounded-size="sm" search />     
        </div>
        <small v-if="v$.step1.full_part_both.$error">{{ v$.step1.full_part_both.$errors[0].$message}}</small>
        <small v-if="resultError['full_part_both']"> {{ resultError["full_part_both"] }} </small>
        </div>


               </div>
           
            </div>
            <!-- fin infos genral -->

          </div>
          <div class="btnForm py-3 d-flex items-center justify-content-end">
            <button class="btnLogin" :disabled="isButtonDisabled" @click.prevent="nextStep">
              Next
            </button>
          </div>
        </div>
  
        <!-- Étape 2 -->
        <div v-if="currentStep === 2">
            <div class="form-container">
            <!-- debut infos genral -->
            <div class="content">
              <p class="titre">Education</p>
              <div class="row mb-3 mt-3 content-group">

                <!-- <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Type of School <span class="text-danger">*</span></label>
                <MazInput  v-model="step2.type_school" type="text"  color="info" name="type_school"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step2.type_school.$error">{{ v$.step2.type_school.$errors[0].$message}}</small>
                <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
               </div> -->
               <div class="col">
<div class="input-groupe">
  <label for="userpassword">School Level <span class="text-danger">*</span></label>
  <MazSelect  label="Select" v-model="step2.school_level_id"  name="school_level_id"  listPosition="left" color="info" :options="LevelIdOptions"  size="sm" rounded-size="sm" search />   
</div>
<small v-if="v$.step2.school_level_id.$error">{{ v$.step2.school_level_id.$errors[0].$message}}</small>
<small v-if="resultError['school_level_id']"> {{ resultError["school_level_id"] }} </small>
</div>
               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">School Name <span class="text-danger">*</span></label>
                <MazInput  v-model="step2.school_name" type="text"  color="info" name="school_name"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step2.school_name.$error">{{ v$.step2.school_name.$errors[0].$message}}</small>
                <small v-if="resultError['school_name']"> {{ resultError["school_name"] }} </small>
               </div>
               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">School Location <span class="text-danger">*</span></label>
                <MazInput  v-model="step2.school_location" type="text"  color="info" name="school_location"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step2.school_location.$error">{{ v$.step2.school_location.$errors[0].$message}}</small>
                <small v-if="resultError['school_location']"> {{ resultError["school_location"] }} </small>
               </div>

               </div>

               <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
  <label for="userpassword">School Email Address <span class="text-danger">*</span></label>
  <MazInput  v-model="step2.school_email_address" type="email"  color="info" name="email"   size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step2.school_email_address.$error">{{ v$.step2.school_email_address.$errors[0].$message}}</small>
<small v-if="resultError['school_email_address']"> {{ resultError["school_email_address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
  <label for="userpassword">Number of Years in School <span class="text-danger">*</span></label>
  <MazInput  v-model="step2.number_of_year_school" type="number" min="0" color="info" name="number_of_year_school"   size="sm" rounded-size="sm" />


</div>
<small v-if="v$.step2.number_of_year_school.$error">{{ v$.step2.number_of_year_school.$errors[0].$message}}</small>
<small v-if="resultError['number_of_year_school']"> {{ resultError["number_of_year_school"] }} </small>
</div>


</div>

     <p class="titre">Licenses and Insurance</p>
             
    <div class="row mb-3 mt-3 content-group">

      <div class="col">
        <div class="input-groupe">
        <label for="userpassword">What is your means of transportation to work? <span class="text-danger">*</span></label>
        <MazSelect  label="Select" v-model="step2.means_transportation"  name="means_transportation"  listPosition="left" color="info" :options="TransportOptions"  size="sm" rounded-size="sm" search />   
        </div>
        <small v-if="v$.step2.means_transportation.$error">{{ v$.step2.means_transportation.$errors[0].$message}}</small>
        <small v-if="resultError['means_transportation']"> {{ resultError["means_transportation"] }} </small>
        </div>

        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Driver Licence <span class="text-danger">*</span></label>
        <MazSelect  label="Select" v-model="step2.driver_licence"  name="driver_licence"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
        </div>
        <small v-if="v$.step2.driver_licence.$error">{{ v$.step2.driver_licence.$errors[0].$message}}</small>
        <small v-if="resultError['driver_licence']"> {{ resultError["driver_licence"] }} </small>
        </div>
       
     </div>
     <div class="row mb-3 mt-3 content-group" v-if="step2.driver_licence === true">
      <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Driver Licence Number <span class="text-danger">*</span></label>
        <MazInput  v-model="step2.driver_licence_number" type="text"  color="info" name="driver_licence_number"   size="sm" rounded-size="sm" />
        </div>
        <small v-if="v$.step2.driver_licence_number.$error">{{ v$.step2.driver_licence_number.$errors[0].$message}}</small>
        <small v-if="resultError['driver_licence_number']"> {{ resultError["driver_licence_number"] }} </small>
        </div>
        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Driver Licence Issue State <span class="text-danger">*</span></label>
        <MazSelect  label="Select" v-model="step2.driver_licence_issue_state"  name="driver_licence_issue_state"  listPosition="left" color="info" :options="DrivingOptions"  size="sm" rounded-size="sm" search />   
        </div>
        <small v-if="v$.step2.driver_licence_issue_state.$error">{{ v$.step2.driver_licence_issue_state.$errors[0].$message}}</small>
        <small v-if="resultError['driver_licence_issue_state']"> {{ resultError["driver_licence_issue_state"] }} </small>
        </div>
        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Driver Licence Expiration Date <span class="text-danger">*</span></label>
        <MazInput  v-model="step2.driver_licence_expiration_date" type="date" name="driver_licence_expiration_date" color="info"   size="sm" rounded-size="sm" />
        </div>
        <small v-if="v$.step2.driver_licence_expiration_date.$error">{{ v$.step2.driver_licence_expiration_date.$errors[0].$message}}</small>
        <small v-if="resultError['driver_licence_expiration_date']"> {{ resultError["driver_licence_expiration_date"] }} </small>
        </div>
    </div>

     <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
  <label for="userpassword">Current Insurance <span class="text-danger">*</span></label>
  <MazSelect  label="Select" v-model="step2.current_insurance" name="current_insurance"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   

</div>
<!-- <small v-if="v$.step2.current_insurance.$error">{{ v$.step2.current_insurance.$errors[0].$message}}</small> -->
<small v-if="resultError['current_insurance']"> {{ resultError["current_insurance"] }} </small>
</div>
<div class="col" v-if="this.step2.current_insurance === true">
<div class="input-groupe">
  <!-- <label for="userpassword">File <span class="text-danger">*</span></label> -->
  <div class="mb-3 position-relative">
               <div class="input-groupe">
                <label for="FileInsurance">File Insurance</label>
                 <input
                  type="file"
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx"
                   @change="handleFileUploadInsurance"
                  name="FileInsurance"
                  id="FileInsurance"
                  placeholder=""
                 
                  :class="{ 'error-border': resultError['FileInsurance'] }"
                  @input="resultError['FileInsurance'] = false"
                />
              </div>
                     </div>
  <!-- <MazInput  v-model="selectfile" type="file"  color="info" name="selectfile"   size="sm" rounded-size="sm" /> -->
</div>
</div>


     </div>

     <div class="row mb-3 mt-3 content-group">

      <div class="col">
<div class="input-groupe">
  <label for="userpassword">Insurance Copy Submitted <span class="text-danger">*</span></label>
  <MazSelect  label="Select" v-model="step2.insurance_copy_submitted" name="insurance_copy_submitted"  listPosition="left" color="info" :options="chois"  size="sm" rounded-size="sm" search />   

</div>
<small v-if="v$.step2.insurance_copy_submitted.$error">{{ v$.step2.insurance_copy_submitted.$errors[0].$message}}</small>
<small v-if="resultError['insurance_copy_submitted']"> {{ resultError["insurance_copy_submitted"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
  <label for="userpassword">Insurance Policy Number <span class="text-danger">*</span></label>
  <MazInput  v-model="step2.insurance_policy" type="text"  color="info" name="insurance_policy"   size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step2.insurance_policy.$error">{{ v$.step2.insurance_policy.$errors[0].$message}}</small>
<small v-if="resultError['insurance_policy']"> {{ resultError["insurance_policy"] }} </small>
</div>


     </div>
           
            </div>
            <!-- fin infos genral -->

          </div>
          <div class="btnForm py-3 d-flex items-center justify-content-between">
            <button class="btnLogin" @click.prevent="prevStep">Previous</button>
            <button class="btnLogin" @click.prevent="nextStep">Next</button>
          </div>
        </div>
  
        <!-- Étape 3 -->
        <div v-if="currentStep === 3">
            <div class="form-container">
            <!-- debut infos genral -->
            <div class="content">
              <p class="titre">Driving history</p>
              <div class="row mb-3 mt-3 content-group">

                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Any Accident During Past Year ? <span class="text-danger">*</span></label>
                  <MazSelect  label="Select" v-model="step3.any_accident_during_past_year" name="any_accident_during_past_year"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
                </div>
                <small v-if="v$.step3.any_accident_during_past_year.$error">{{ v$.step3.any_accident_during_past_year.$errors[0].$message}}</small>
                <small v-if="resultError['any_accident_during_past_year']"> {{ resultError["any_accident_during_past_year"] }} </small>
               </div>
               <div class="col" v-if="step3.any_accident_during_past_year === true">
                <div class="input-groupe">
                  <label for="userpassword">Accident Count <span class="text-danger">*</span></label>
                   <MazInput  v-model="step3.accident_count" type="number" min="0" color="info" name="accident_count"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step3.accident_count.$error">{{ v$.step3.accident_count.$errors[0].$message}}</small>
                <small v-if="resultError['accident_count']"> {{ resultError["accident_count"] }} </small>
               </div>
              

               </div>

               <div class="row mb-3 mt-3 content-group">

            <div class="col">
            <div class="input-groupe">
            <label for="userpassword">Moving Violation Past Three Years ? <span class="text-danger">*</span></label>
            <MazSelect  label="Select" v-model="step3.moving_violation_past_three_year"  name="moving_violation_past_three_year" listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
            </div>
            <small v-if="v$.step3.moving_violation_past_three_year.$error">{{ v$.step3.moving_violation_past_three_year.$errors[0].$message}}</small>
            <small v-if="resultError['moving_violation_past_three_year']"> {{ resultError["moving_violation_past_three_year"] }} </small>
            </div>
            <div class="col" v-if="step3.moving_violation_past_three_year === true">
            <div class="input-groupe">
            <label for="userpassword">Moving Violation Count <span class="text-danger">*</span></label>
            <MazInput  v-model="step3.moving_violation_count" type="number" min="0" color="info" name="moving_violation_count"   size="sm" rounded-size="sm" />
            </div>
            <small v-if="v$.step3.moving_violation_count.$error">{{ v$.step3.moving_violation_count.$errors[0].$message}}</small>
            <small v-if="resultError['moving_violation_count']"> {{ resultError["moving_violation_count"] }} </small>
            </div>

        </div>

     <p class="titre">Criminal history</p>
             
    <div class="row mb-3 mt-3 content-group">

        <div class="col">
        <div class="input-groupe">
        <label for="userpassword">Have you ever been convicted of a crime? <span class="text-danger">*</span></label>
        <MazSelect  label="Select" v-model="step3.convicted_crime" name="convicted_crime"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
        </div>
        <small v-if="v$.step3.convicted_crime.$error">{{ v$.step3.convicted_crime.$errors[0].$message}}</small>
        <small v-if="resultError['convicted_crime']"> {{ resultError["convicted_crime"] }} </small>
        </div>
     </div>

     <div class="row mb-3 mt-3 content-group" v-if="step3.convicted_crime === true">

<div class="col">
<div class="input-groupe">
<label for="userpassword">Crime Description <span class="text-danger">*</span></label>
<MazTextarea  v-model="step3.crime_description" type="text" min="0" color="info" name="crime_description"   size="sm" rounded-size="sm" />
</div>
<small v-if="v$.step3.crime_description.$error">{{ v$.step3.crime_description.$errors[0].$message}}</small>
<small v-if="resultError['crime_description']"> {{ resultError["crime_description"] }} </small>
</div>
</div>

            </div>
            <!-- fin infos genral -->

          </div>
  
          <div class="btnForm py-3 d-flex items-center justify-content-between">
            <button class="btnLogin" @click.prevent="prevStep">Previous</button>
            <button class="btnLogin" @click.prevent="nextStep">Next</button>

          </div>
        </div>


          <!-- Étape 4 -->
    <div v-if="currentStep === 4">
      <div class="form-container">
        <div class="content" v-for="(experience, index) in step4.experiences" :key="index">
          <div class="titres1">
            <div class="titres">
              <p class="titre">Employment History</p>
              <span class="nombre">{{ index + 1 }}</span>
            </div>
            <div class="btn-list">
              <!-- <a aria-label="anchor" @click="deleteRow(index)" href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-light"><i class="ri-delete-bin-line"></i></a> -->
              <div class="bouttons" style="position:relative;">
              <div class="boutton"   style=" padding:6px 10px !important ; background:red;margin-top:0 !important" @click="deleteRow(index)" ><i class="ri-delete-bin-line"></i></div>
              </div>
            </div>
          
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="employer_name">Name <span class="text-danger">*</span></label>
                <MazInput v-model="experience.employer_name" type="text" color="info" name="employer_name" size="sm" rounded-size="sm"  @input="clearErrorExp(index, 'employer_name')"/>
                <small v-if="errors.step4.experiences[index]?.employer_name">{{ errors.step4.experiences[index].employer_name }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="name_of_last">Name of Last <span class="text-danger">*</span></label>
                <MazInput v-model="experience.name_of_last" type="text" color="info" name="name_of_last" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'name_of_last')" />
                <small v-if="errors.step4.experiences[index]?.name_of_last">{{ errors.step4.experiences[index].name_of_last }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="phone">Phone Number <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="experience.phone" size="sm" rounded-size="sm" show-code-on-list :ignored-countries="['AC']" defaultCountryCode="US" update="results = $event" :success="results?.isValid"  />
                <small v-if="errors.step4.experiences[index]?.phone">{{ errors.step4.experiences[index].phone }}</small>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="city_state_zip">City, State, Zip code <span class="text-danger">*</span></label>
                <MazInput v-model="experience.city_state_zip" type="text" color="info" name="city_state_zip" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'city_state_zip')" />
                <small v-if="errors.step4.experiences[index]?.city_state_zip">{{ errors.step4.experiences[index].city_state_zip }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="salary">Pay or Salary <span class="text-danger">*</span></label>
                <MazInputPrice v-model="experience.salary" currency="USD" locale="en-US" :min="0" color="info" name="salary" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'salary')" />
                <small v-if="errors.step4.experiences[index]?.salary">{{ errors.step4.experiences[index].salary }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="supervisor">Supervisor <span class="text-danger">*</span></label>
                <MazInput v-model="experience.supervisor" type="text" color="info" name="supervisor" size="sm" rounded-size="sm"  @input="clearErrorExp(index, 'supervisor')"/>
                <small v-if="errors.step4.experiences[index]?.supervisor">{{ errors.step4.experiences[index].supervisor }}</small>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="last_job_title">Your last job title <span class="text-danger">*</span></label>
                <MazInput v-model="experience.last_job_title" type="text" color="info" name="last_job_title" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'last_job_title')" />
                <small v-if="errors.step4.experiences[index]?.last_job_title">{{ errors.step4.experiences[index].last_job_title }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="employment_date_begin">Start date <span class="text-danger">*</span></label>
                <MazInput v-model="experience.employment_date_begin" type="date" color="info" name="employment_date_begin" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'employment_date_begin')" />
                <small v-if="errors.step4.experiences[index]?.employment_date_begin">{{ errors.step4.experiences[index].employment_date_begin }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="employment_date_end">Finish date <span class="text-danger">*</span></label>
                <MazInput v-model="experience.employment_date_end" type="date" :min="experience.employment_date_begin" color="info" name="employment_date_end" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'employment_date_end')" />
                <small v-if="errors.step4.experiences[index]?.employment_date_end">{{ errors.step4.experiences[index].employment_date_end }}</small>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="reason">Reason for leaving (be specific) <span class="text-danger">*</span></label>
                <MazTextarea v-model="experience.reason" type="text" color="info" name="reason" size="sm" rounded-size="sm" @input="clearErrorExp(index, 'reason')" />
                <small v-if="errors.step4.experiences[index]?.reason">{{ errors.step4.experiences[index].reason }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="btnForm py-3 d-flex items-center justify-content-between">
          <button class="btnLogin" @click.prevent="prevStep">Previous</button>
          <button class="btnLogin" @click.prevent="nextStep">Next</button>
        </div>
      </div>
    </div>

    <!-- Étape 5 -->
    <div v-if="currentStep === 5">
      <div class="form-container">
        <div class="content" v-for="(reference, index) in step5.references" :key="index">
          <div class="titres1">
            <div class="titres">
              <p class="titre">Reference</p>
              <span class="nombre">{{ index + 1 }}</span>
            </div>
            <!-- <div class="btn-list">
              <a aria-label="anchor" @click="deleteRowReferences(index)" href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-light"><i class="ri-delete-bin-line"></i></a>
            </div> -->
            <div class="btn-list">
              <div class="bouttons" style="position:relative;">
              <div class="boutton"   style=" padding:6px 10px !important ; background:red;margin-top:0 !important" @click="deleteRowReferences(index)" ><i class="ri-delete-bin-line"></i></div>
              </div>
            </div>
          </div>
          <div class="row mb-3 mt-3 content-group">
            <div class="col">
              <div class="input-groupe">
                <label for="name">Name <span class="text-danger">*</span></label>
                <MazInput v-model="reference.name" type="text" color="info" name="name" size="sm" rounded-size="sm" @input="clearErrorRef(index, 'name')" />
                <small v-if="errors.step5.references[index]?.name">{{ errors.step5.references[index].name }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="position">Position <span class="text-danger">*</span></label>
                <MazInput v-model="reference.position" type="text" color="info" name="position" size="sm" rounded-size="sm" @input="clearErrorRef(index, 'position')"/>
                <small v-if="errors.step5.references[index]?.position">{{ errors.step5.references[index].position }}</small>
              </div>
            </div>
            
          </div>

          <div class="row mb-3 mt-3 content-group">
           
            <div class="col">
              <div class="input-groupe">
                <label for="company_address">Company Address <span class="text-danger">*</span></label>
                <MazInput v-model="reference.company_address" type="text" color="info" name="company_address" size="sm" rounded-size="sm" @input="clearErrorRef(index, 'company_address')"/>
                <small v-if="errors.step5.references[index]?.company_address">{{ errors.step5.references[index].company_address }}</small>
              </div>
            </div>
            <div class="col">
              <div class="input-groupe">
                <label for="phone">Phone Number <span class="text-danger">*</span></label>
                <MazPhoneNumberInput v-model="reference.phone" size="sm" rounded-size="sm" show-code-on-list :ignored-countries="['AC']" defaultCountryCode="US" update="results = $event" :success="results?.isValid"  />
                <small v-if="errors.step5.references[index]?.phone">{{ errors.step5.references[index].phone }}</small>
              </div>
            </div>
          </div>
        </div>
        <div class="btnForm py-3 d-flex items-center justify-content-between">
          <button class="btnLogin" @click.prevent="prevStep">Previous</button>
          <button class="btnLogin" @click.prevent="nextStep">Next</button>
        </div>
      </div>
    </div>

         <!-- Étape 6 -->
         <div v-if="currentStep === 6">
            <div class="form-container">
            <!-- debut infos genral -->
            <div class="content">
              <p class="titre">Skills </p>
              <div class="row mb-3 mt-3 content-group">

                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Type Skill <span class="text-danger">*</span></label>
                  <MazSelect  label="Select" v-model="step6.type_skill" name="type_skill"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
                                    
                </div>
                <small v-if="v$.step6.type_skill.$error">{{ v$.step6.type_skill.$errors[0].$message}}</small>
                <small v-if="resultError['type_skill']"> {{ resultError["type_skill"] }} </small>
               </div>
               <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Computer Skills <span class="text-danger">*</span></label>
                  <MazSelect  label="Select" v-model="step6.computer_skill" name="computer_skill"  listPosition="left" color="info" :options="choix"  size="sm" rounded-size="sm" search />   
                </div>
                <small v-if="v$.step6.computer_skill.$error">{{ v$.step6.computer_skill.$errors[0].$message}}</small>
                <small v-if="resultError['computer_skill']"> {{ resultError["computer_skill"] }} </small>
               </div>
              
              

               </div>

               <div class="row mb-3 mt-3 content-group">

                <div class="col">
                <div class="input-groupe">
                  <label for="userpassword">Other Skills <span class="text-danger">*</span></label>
                  <MazTextarea  v-model="step6.other_skills" type="text"  color="info" name="other_skills"   size="sm" rounded-size="sm" />
                </div>
                <small v-if="v$.step6.other_skills.$error">{{ v$.step6.other_skills.$errors[0].$message}}</small>
                <small v-if="resultError['other_skills']"> {{ resultError["other_skills"] }} </small>
               </div>

               </div>


            </div>
            <!-- fin infos genral -->

          </div>
  
          <div class="btnForm py-3 d-flex items-center justify-content-between">
            <button class="btnLogin" @click.prevent="prevStep">Previous</button>
            <button class="btnLogin" @click.prevent="nextStep">Finish</button>
          </div>
        </div>
       
      
      </form>
          </div>
 
         </div>
</div>

  </template>
  <script>
  
 
  import useVuelidate from "@vuelidate/core";
  import { require, lgmin, lgmax, ValidNumeri } from "@/functions/rules";
  import { useToast } from "vue-toastification";
  import Loading from '@/components/others/loading.vue';
  import axios from '@/lib/axiosConfig.js'
  import MazPhoneNumberInput from 'maz-ui/components/MazPhoneNumberInput'
  import Swal from 'sweetalert2'

  
  export default {
    name: "Componentlogin",
    setup() {
   const toast = useToast();
   return { toast }
 },
    components: { Loading , MazPhoneNumberInput},
    computed: {
      
      stepperProgress() {
        return (100 / 5) * (this.currentStep - 1) + "%";
      },
      minDate() {
      // Cette fonction retourne la date d'aujourd'hui au format YYYY-MM-DD
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0');
      const day = String(today.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    }
    
    },
    data() {
      return {
        
        loading: false,
        userData:'',
       
        currentStep: 1,
        error: "",
        resultError: {},
        DaysOptions:[],
        HonorairesOptions:[],
        LevelIdOptions:[],
        DrivingOptions:[],
        TransportOptions:[],
        FileInsurance:"",
        errors: {
        step1: { DaysHours: [] },
        step4: { experiences: [] },
        step5: { references: [] }
      },
      errorsphone: {
        step1: {
          phone: null
        }
      },
      results: null,
      
     
        choix: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],

        chois: [
          { label: "Yes", value: true },
          { label: "No", value: false },
        ],
        
        v$: useVuelidate(),
        step1: {
            first_name: "",
            last_name: "",
            phone: "",

            email:"",
            address: "",
            age: "",
            social_security: "",

            number_street_city_state_zip:"",

            position_applied_agency:"",
            weekly_available_hours:"",
            can_work_night:"",

            number_pref:"",
            how_long:"",

            DaysHours:[{
              day_id:'',
            available_hour:'',

            }],

            date_available_to_start:null, 
            full_part_both:"",    
      },
      step2: {

        type_school: "",
        school_name: "",
        school_location: "",

        school_email_address:"",
        number_of_year_school:"",
        school_level_id:"",

        means_transportation:"",
        driver_licence:"",

        driver_licence_number:"", 
        driver_licence_issue_state:"",     
        driver_licence_expiration_date:null, 

        current_insurance:"",    
        insurance_policy:"",    
        insurance_copy_submitted: false,    
},
    step3: {

    any_accident_during_past_year: false,
    accident_count: "",

    moving_violation_past_three_year: false,
    moving_violation_count:"",

    convicted_crime:false,
    crime_description:"",

       
},
   step4:{
   experiences: [
  {

    employer_name: "",
    name_of_last: "",
    phone:"",
    salary: "",
    city_state_zip:"",
    supervisor:"",
    last_job_title:"",
    employment_date_begin:null,
    employment_date_end:null,
    reason:"",

}
],
   } ,
step5:{
  references: [
  {
    name: "",
    position:"",
    company_address: "",
    phone:"",
}
],
},


step6: {

  type_skill: false,
  computer_skill: false,
  other_skills:"",

},
       
      };
    },
    validations: {
      step1: {
            first_name: {require},
            last_name: {require},
            phone: {require},

            email:{require},
            address: {require},
            age: {require},
            social_security: {require },

            number_street_city_state_zip:{require},


            position_applied_agency:{require},
            weekly_available_hours:{require},
            can_work_night:{require},

            number_pref:{ValidNumeri},
            how_long:{require},

            DaysHours: {
          $each: {
            day_id: { require},
            available_hour: { require },
          }
        },
            date_available_to_start:{require}, 

           date_available_to_start:{require}, 
            full_part_both:{require},    
      },
      step2: {

type_school: {},
school_name:{require},
school_location:{require},
school_email_address:{},
number_of_year_school:{require},
school_level_id:{require},
means_transportation:{require},
driver_licence:{require},
driver_licence_number:{},
driver_licence_issue_state:{},
driver_licence_expiration_date:{},
insurance_policy:{},
insurance_copy_submitted:{}
   
},
step3: {

any_accident_during_past_year: {},
accident_count: {},

moving_violation_past_three_year: {},
moving_violation_count:{},

convicted_crime:{},
crime_description:{},


},
step4:{
    employers: [
  {

    employer_name: {},
    name_of_last: {},
    phone:{},
    salary: {},
    city_state_zip:{},
    supervisor:{},
    last_job_title:{},
employment_date_begin:{},
employment_date_end:{},
reason:{},


 
}
],
   } ,
   step5:{
  references: [
  {

    name: {},
    position:{},

    company_address: {},
    phone:{},
}
],
},

  step6: {

    type_skill: {},
    computer_skill: {},
  other_skills:{},

  },
   

     
    },
    methods: {
    
   
    clearErrorExp(index, field) {
      
      if (this.errors.step4.experiences[index]) {
        this.errors.step4.experiences[index][field] = null;
      }
    },
    clearError(index, field) {
        
      if (this.errors.step1.DaysHours[index]) {
        this.errors.step1.DaysHours[index][field] = null;
      }
    },
    clearErrorRef(index, field) {
      
      if (this.errors.step5.references[index]) {
        this.errors.step5.references[index][field] = null;
      }
    },
      formatInput(event) {
        const input = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        let formatted = '';
  
        if (input.length > 0) {
          formatted += input.substring(0, 3); // First 3 digits
        }
        if (input.length >= 4) {
          formatted += '-' + input.substring(3, 5); // Next 2 digits
        }
        if (input.length >= 6) {
          formatted += '-' + input.substring(5, 9); // Last 4 digits
        }
  
        this.step1.social_security = formatted;
      },
      redirect(){

        window.location.href = 'https://www.leprimecare.com'
      },
      swaaa(){
        Swal.fire({
  title: "Recruitment information has been successfully submitted",
  text: "A return will be made to you after processing, thank you",
  icon: "success",
  showCancelButton: false,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "OK"
}).then((result) => {
  if (result.isConfirmed) {
    this.redirect()
    
  }
});
      },
      AddformData() {
    this.step4.experiences.push({

name_employer: '',
address_employer: "",
phone_employer:"",

state_employer: "",
salary_employer:"",
supervisor_employer:"",

date_employer:"",

title_employer:"",
start_date_employer:"",
finish_date_employer:"",

reason_employer:"",


 
}
);
  },

  deleteRow(index) {
  
    if(index !== 0){
      this.step4.experiences.splice(index, 1);
    }
},
AddformDataDays() {
    this.step1.DaysHours.push({ day_id:'', available_hour:'',});
  },

  deleteRowDays(index) {
   
    if(index !== 0){
      this.step1.DaysHours.splice(index, 1);
    }
},
AddformReferences() {
    this.step5.references.push({ name: "", position: "", company_address: "", phone: "",});
  },

  deleteRowReferences(index) {
  
    if(index !== 0){
      this.step5.references.splice(index, 1);
    }
},
collectStepData(step) {
    let stepData = {};
  

// Collecter les données des étapes précédentes
for (let i = 1; i < step; i++) {
    const previousStepData = this.collectStepData(i);
    Object.assign(stepData, previousStepData);
}
    
    switch (step) {
        case 1:
            stepData = {
              
              ...stepData,

              first_name: this.step1.first_name,
              last_name: this.step1.last_name,
              phone: this.step1.phone,
              address: this.step1.address,
              email:this.step1.email,
              age: this.step1.age,
              social_security: this.step1.social_security,
              number_street_city_state_zip: this.step1.number_street_city_state_zip,
              position_applied_agency: this.step1.position_applied_agency,
              weekly_available_hours: this.step1.weekly_available_hours,
              can_work_night: this.step1.can_work_night,
              number_pref: this.step1.number_pref,
              how_long: this.step1.how_long,

              DaysHours: this.step1.DaysHours,

              date_available_to_start: this.step1.date_available_to_start,
              full_part_both: this.step1.full_part_both,
            };
            break;
        case 2:
            stepData = {
              ...stepData,
              type_school: this.step2.type_school,
              school_name: this.step2.school_name,
              school_location: this.step2.school_location,
              school_email_address: this.step2.school_email_address,
              number_of_year_school: this.step2.number_of_year_school,
              school_level_id: parseInt(this.step2.school_level_id),
              means_transportation: this.step2.means_transportation,
              driver_licence: this.step2.driver_licence,
              driver_licence_number: this.step2.driver_licence_number,
              driver_licence_issue_state: this.step2.driver_licence_issue_state,
              driver_licence_expiration_date: this.step2.driver_licence_expiration_date,
              current_insurance: this.step2.current_insurance,
              insurance_policy: this.step2.insurance_policy,
              insurance_copy_submitted: this.step2.insurance_copy_submitted,
              FileInsurance: this.FileInsurance,

            };
            break;

            case 3:
            stepData = {
              ...stepData,
              any_accident_during_past_year:this.step3.any_accident_during_past_year ,
              accident_count: parseInt(this.step3.accident_count)  ,
              moving_violation_past_three_year: this.step3.moving_violation_past_three_year,
              moving_violation_count:parseInt(this.step3.moving_violation_count) ,
              convicted_crime: this.step3.convicted_crime,
              crime_description: this.step3.crime_description,
 
            };
            break;
            case 4:
            stepData = {
              ...stepData,
                experiences:this.step4.experiences
            };
            break;
            case 5:
            stepData = {
              ...stepData,
              references:this.step5.references
         
        
            };
            break;
            case 6:
            stepData = {
              ...stepData,
              type_skill:this.step6.type_skill,
              computer_skill:this.step6.computer_skill,
              other_skills:this.step6.other_skills,
         
        
            };
            break;
        // Ajoutez des cas pour chaque étape du formulaire
        default:
            break;
    }
    
    return stepData;
},
    
  
      async nextStep() {   
        try {
          let isValid = false;

        if (this.currentStep === 1) {
        isValid = this.validateStep1();
      } else if (this.currentStep === 4) {
        isValid = this.validateStep4();
      } else if (this.currentStep === 5) {
        isValid = this.validateStep5();
      } else {
        isValid = true; 
      }
   
        this.v$[`step${this.currentStep}`].$touch();
        if (this.v$.$errors.length === 0 && isValid) {
          if( this.currentStep === 6){
               this.loading = true
                const stepData = this.collectStepData(this.currentStep);
                  console.log(stepData);
                  localStorage.setItem('tempLeprimecare', JSON.stringify(stepData));
                  const response = await this.registeremployeeData(stepData) 
                  console.log('responseenregistrement',response)
                  if(response.status === "success"){
                  this.loading = false
                    this.swaaa()
                    localStorage.removeItem('tempLeprimecare')

                  }else{
                  this.loading = false

                  }
          }else{
            const stepData = this.collectStepData(this.currentStep);
                 
                  localStorage.setItem('tempLeprimecare', JSON.stringify(stepData))
                this.currentStep++;
              window.scrollTo({ top: 0, behavior: "smooth" });
          
           
          }
        } else {
            // Afficher un message d'erreur à l'utilisateur
            console.log("Le formulaire contient des erreurs");
             console.log("errroor222", this.v$.$errors);
            window.scrollTo({ top: 0, behavior: "smooth" });
                   this.loading = false;
        }

       
    } catch (error) {
        // Gérer les erreurs
        console.log("errroor222", this.v$.$errors);

        console.error("Une erreur s'est produite :", error);
        console.log("errroor222", this.v$.$errors);
        

        window.scrollTo({ top: 0, behavior: "smooth" });
         this.loading = false;
    }
      },
      async nextStep1() {
    try {
        // Valider les données de l'étape actuelle
        this.v$[`step${this.currentStep}`].$touch();
        if (this.v$.$errors.length === 0) {
          
            console.log('stepData', this.currentStep);
            this.loading = true;
            if( this.currentStep === 5){
              
               const stepData = this.collectStepData(this.currentStep);
                console.log(stepData);
                  const response = await this.updateMpmeDonnees(stepData) 
                  console.log('eee',response);
                  if (response === true) {
                    this.loading = false;
                    this.confirmDelete()
                
                  } else {
                      console.error("Erreur lors de l'envoi des données :", response);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      this.loading = false;
                  }

            }else if(this.currentStep === 4 || this.currentStep === 5){
                  
                  const stepData = this.collectStepData(this.currentStep);
                  console.log(stepData);
                  localStorage.setItem('tempLeprimecare', JSON.stringify(stepData))
                  const response = await this.updateMpmeDonnees(stepData) 
                  console.log('eee',response);
                  if (response === true) {
                      this.currentStep++;
                      window.scrollTo({ top: 0, behavior: "smooth" });
                   this.loading = false;
                  } else {
                      console.error("Erreur lors de l'envoi des données :", response);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      this.loading = false;
                  }
            }else{
              const stepData = this.collectStepData(this.currentStep);
                  console.log(stepData);
                  localStorage.setItem('tempLeprimecare', JSON.stringify(stepData));
                  const response = await this.registeremployeeData(stepData) 
                  console.log('eee',response);
                  if (response === true) {
                      this.currentStep++;
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      this.loading = false;
                  } else {
                      console.error("Erreur lors de l'envoi des données :", response);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                      this.loading = false;
                  }

            }

            


        } else {
            // Afficher un message d'erreur à l'utilisateur
            console.log("Le formulaire contient des erreurs");
            window.scrollTo({ top: 0, behavior: "smooth" });
                   this.loading = false;
        }
    } catch (error) {
        // Gérer les erreurs
        console.error("Une erreur s'est produite :", error);
        window.scrollTo({ top: 0, behavior: "smooth" });
         this.loading = false;
    }
},
async registeremployeeData(employeeData) {
    try {
        const response = await axios.post('/employees', employeeData);

        console.log("response", response);
        if (response.data.status === 'success') {
          
            return response.data;
        } else {
            console.error("Erreur lors de la mise à ", response.data); 
            // Passer à l'étape suivante si l'erreur n'est pas liée à l'étape en cours
            this.error = "An error has occurred. Please try again later";
            return false;
        }
    } catch (error) {
      console.error("Erreur lors de la mise à ", error.response.data.errors);

   
          if(error.response.data.errors){
            const errorKeys = Object.keys(error.response.data.errors);
            const currentStepFields = Object.keys(employeeData);
            const isCurrentStepError = errorKeys.some(key => currentStepFields.includes(key));

            if (isCurrentStepError === true) {
                // Passer à l'étape suivante si l'erreur n'est pas liée à l'étape en cours
                this.formatValidationErrors(error.response.data.errors);
              return false;

            }else{
              return true;
            }
          }
          else{

            if (error.response) {
                
            } else {
                // Afficher les erreurs à l'utilisateur
                this.formatValidationErrors(error.response.data.errors);
                this.loading = false;
            }
          }

    }
},
  
prevStep() {
        if (this.currentStep > 1) {
          this.currentStep--;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      },
  
      goToStep(step) {
    this.currentStep = step;
  },
      async fetchDays() {
      try {
       
        const response = await axios.get('/working-days');;

        if (response.data.status === 'success') {
          this.DaysOptions = response.data.data.map((day) => ({
              label:day. name,
              value: day.id,
            }));
         
        }
       
      } catch (error) {
        console.log("Erreur lors de la mise à jour des données MPME guinee :", error);
      
        
      }
    },
    async fetchHonoraires() {
      try {
       
        const response = await axios.get('/employees/detail/honoraires/emp');

      
        if (response.data.status === 'success') {
          this.HonorairesOptions = response.data.data.map((el) => ({
              label:el,
              value: el,
            }));
        
        }
       
      } catch (error) {
        console.log("Erreur lors de la mise à jour des données MPME guinee :", error);
      
        
      }
    },
    async fetchLevelID() {
      try {
       
        const response = await axios.get('/schools-level');;

       
        if (response.data.status === 'success') {
          this.LevelIdOptions = response.data.data.map((level) => ({
              label:level.name,
              value: level.id,
            }));
          
        }
       
      } catch (error) {
        console.log("Erreur lors de la mise à jour des données MPME guinee :", error);
      
        
      }
    },
    async fetchDrivingState() {
      try {
       
        const response = await axios.get('/driving-issue-states');;

     
        if (response.data.status === 'success') {
          this.DrivingOptions = response.data.data.map((level) => ({
              label:level.name,
              value: level.id,
            }));
     
        }
       
      } catch (error) {
        console.log("Erreur lors de la mise à jour des données MPME guinee :", error);
      
        
      }
    },

    async fetchTransportation() {
      try {
       
        const response = await axios.get('/means-transportation');;

       
        if (response.data.status === 'success') {
          this.TransportOptions = response.data.data.map((level) => ({
              label:level.name,
              value: level.id,
            }));
         
        }
       
      } catch (error) {
        console.log("Erreur lors de la mise à jour des données MPME guinee :", error);
      
        
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

      // Maintenant, this.resultError est un objet où les clés sont les noms des champs
    
      for (let key in this.resultError) {
  if (this.resultError.hasOwnProperty(key)) {
    // Construire le message d'erreur avec le nom du champ (clé) et son message (valeur)
    let errorMessage = `${key}: ${this.resultError[key]}`;
    // Afficher le toast pour chaque erreur
    this.triggerToast(errorMessage);
  }
}
    },
    triggerToast(errorMessage) {
    this.toast.error(errorMessage, {
    position: "top-right",
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: "mdi mdi-alert-circle-outline", // Modifier l'icône pour une icône d'erreur
    rtl: false,
    className: 'toast-error'
  });
},
handleFileUploadInsurance(event) {
    console.log("File input change");
    const file = event.target.files[0];
    console.log("handleFileUploadInsurance Selected file:", file);
    
    this.submitFile(file )

  },
 
async submitFile(file ){
  const formData = new FormData();
formData.append('Fichier',file);


try {
const response = await axios.post('/recruitment/insurance/upload' , formData, {
     headers: { 
     
            'Content-Type': 'multipart/form-data'
    }});
  console.log('Réponse du téléversement :', response);
  if (response.data.status === "success") { 
        this.FileInsurance = response.data.data.url
       
       

       } else {

       }
 } catch (error) {
 console.log('response.login', error); 

 this.loading = false
 if (error.response.data.status === "error") {
 return this.error = error.response.data.message

 } else {
   this.formatValidationErrors(error.response.data.errors);
 }

  } 


},

validateStep1() {
      let isValid = true;
      this.errors.step1 = { DaysHours: [] };
      this.step1.DaysHours.forEach((day, index) => {
        const dayErrors = {};
        if (!day.day_id) {
          dayErrors.day_id = 'Day is required';
          isValid = false;
        }
        if (!day.available_hour) {
          dayErrors.available_hour = 'Hour is required';
          isValid = false;
        }
        this.errors.step1.DaysHours[index] = dayErrors;
      });

      return isValid;
    },
    validateStep4() {
      let isValid = true;
      this.errors.step4 = { experiences: [] };

      this.step4.experiences.forEach((experience, index) => {
        const experienceErrors = {};
        if (!experience.employer_name) {
          experienceErrors.employer_name = 'Employer name is required';
          isValid = false;
        }
        if (!experience.name_of_last) {
          experienceErrors.name_of_last = 'Name of last is required';
          isValid = false;
        }
        if (!experience.phone) {
          experienceErrors.phone = 'Phone number is required';
          isValid = false;
        }
        if (!experience.salary) {
          experienceErrors.salary = 'Salary is required';
          isValid = false;
        }
        if (!experience.city_state_zip) {
          experienceErrors.city_state_zip = 'City, State, Zip code is required';
          isValid = false;
        }
        if (!experience.supervisor) {
          experienceErrors.supervisor = 'Supervisor is required';
          isValid = false;
        }
        if (!experience.last_job_title) {
          experienceErrors.last_job_title = 'Last job title is required';
          isValid = false;
        }
        if (!experience.employment_date_begin) {
          experienceErrors.employment_date_begin = 'Start date is required';
          isValid = false;
        }
        if (!experience.employment_date_end) {
          experienceErrors.employment_date_end = 'Finish date is required';
          isValid = false;
        }
        if (!experience.reason) {
          experienceErrors.reason = 'Reason for leaving is required';
          isValid = false;
        }
        this.errors.step4.experiences[index] = experienceErrors;
      });

      return isValid;
    },
    validateStep5() {
      let isValid = true;
      this.errors.step5 = { references: [] };

      this.step5.references.forEach((reference, index) => {
        const referenceErrors = {};
        if (!reference.name) {
          referenceErrors.name = 'Name is required';
          isValid = false;
        }
        if (!reference.position) {
          referenceErrors.position = 'Position is required';
          isValid = false;
        }
        if (!reference.company_address) {
          referenceErrors.company_address = 'Company address is required';
          isValid = false;
        }
        if (!reference.phone) {
          referenceErrors.phone = 'Phone number is required';
          isValid = false;
        }
        this.errors.step5.references[index] = referenceErrors;
      });

      return isValid;
    },

storeUserDataLocal(userData) {
  if(userData.experiences === undefined){
this.step4.experiences = this.step4.experiences
  }else{
this.step4.experiences = userData.experiences

  }
  console.log('userDataexperethis',this.step4.experiences)

this.step1.first_name = userData.first_name;
this.step1.last_name = userData.last_name;
this.step1.phone = userData.phone;
this.step1.address = userData.address;
this.step1.email = userData.email;
this.step1.age = userData.age;
this.step1.social_security = userData.social_security;
this.step1.number_street_city_state_zip = userData.number_street_city_state_zip;
this.step1.position_applied_agency = userData.position_applied_agency;
this.step1.weekly_available_hours = userData.weekly_available_hours;
this.step1.can_work_night = userData.can_work_night;
this.step1.number_pref = userData.number_pref;
this.step1.how_long = userData.how_long;
this.step1.DaysHours = userData.DaysHours;
this.step1.date_available_to_start = userData.date_available_to_start;
this.step1.full_part_both = userData.full_part_both;



this.step2.type_school = userData.type_school;
this.step2.school_name = userData.school_name;
this.step2.school_location = userData.school_location;
this.step2.school_email_address = userData.school_email_address;
this.step2.number_of_year_school = userData.number_of_year_school;
this.step2.school_level_id = userData.school_level_id;
this.step2.means_transportation = userData.means_transportation;
this.step2.driver_licence = userData.driver_licence;
this.step2.driver_licence_number = userData.driver_licence_number;
this.step2.driver_licence_issue_state = userData.driver_licence_issue_state;
this.step2.driver_licence_expiration_date = userData.driver_licence_expiration_date;
this.step2.current_insurance = userData.current_insurance;
this.step2.insurance_policy = userData.insurance_policy;
this.step2.insurance_copy_submitted = userData.insurance_copy_submitted;

this.step3.any_accident_during_past_year = userData.any_accident_during_past_year;
this.step3.accident_count = parseInt(userData.accident_count) ;

this.step3.moving_violation_past_three_year = userData.moving_violation_past_three_year;
this.step3.moving_violation_count = userData.moving_violation_count;
this.step3.convicted_crime = userData.convicted_crime;
this.step3.crime_description = userData.crime_description;





this.step6.type_skill = userData.type_skill;
this.step6.computer_skill = userData.computer_skill;
this.step6.other_skills = userData.other_skills;


// ... Lier d'autres propriétés de la même manière
},
      
     

    },
    async mounted() {
   
 
   const localStorageUserData = localStorage.getItem('tempLeprimecare') || null;
   if(localStorageUserData !== null){
    const userDataString = JSON.parse(localStorageUserData)
           this.userData = userDataString
            this.storeUserDataLocal(userDataString);
           console.log("UserData:",userDataString );
   }
   
   try {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      
      await Promise.all([
       this.fetchDays(),
       this.fetchHonoraires(),
       this.fetchLevelID(),
       this.fetchDrivingState(),
       this.fetchTransportation(),
      

       
      ]);
      
    } catch (error) {
      console.error("Erreur lors du chargement des données:", error);
    }
       
       
    },
  };
  </script>
  
  <style lang="css" scoped>
  .error {
    /* border: 1px solid red; */
    max-width: 1140px;
    margin: 40px auto;
    padding: 10px;
    color: red;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
 
  
  .error-border {
    border: 2px solid red !important; /* Bordure rouge en cas d'erreur */
    border-radius: 0.5rem !important;
  }
  
  .profil1 {
    /* border: 2px solid red; */
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    font-size: 25px;
    position: absolute;
    top: -41px;
    cursor: pointer;
    background-color: var(--color-primary);
    color: #fff;
  }
  
  .profil1:hover {
    border: 2px solid var(--color-primary);
    background-color: #fff;
    color: var(--color-primary);
    cursor: pointer;
  }
  
  .profil {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    margin: 0 auto;
    max-width: 1140px;
    padding-right: 76px;
  }
  
  .form-container {
    /* width: 700px; */
    max-width: 1140px;
    margin: 0 auto;
    /* border-radius: 0.75rem; */
    background-color: white;
    padding: 1rem;
    color: black;
    /* max-height: 550px; */
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    /* border: 1px solid red; */
  }
  
  .form .content {
    border: 1px solid rgb(201, 209, 217);
    margin: 10px 0;
    padding: 10px;
  }
  
  .title {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
  
  .form {
    margin-top: 1.5rem;
  }
  
  .input-groupe {
    margin-top: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .input-groupe label {
    display: block;
    color: #000;
    margin-bottom: 4px;
  }
  
  .titre {
    display: block;
    color: rgba(156, 163, 175, 1);
    margin-bottom: 4px;
    font-size: 12px;
    width: fit-content;
    border: 1px solid #4dd70a;
    padding: 1px 5px;
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
  
  .form-select:focus {
    border-color: var(--color-primary);
    outline: 0;
    box-shadow: 0 0 0 0 rgba(101, 113, 255, 0.25);
  }
  
  .signup a:hover {
    text-decoration: underline var(--color-primary);
  }
  
  .sign {
    display: block;
    width: 100%;
    background-color: var(--color-secondary);
    padding: 0.75rem;
    text-align: center;
    color: black;
    border: none;
    border-radius: 0.375rem;
    font-weight: 600;
    margin-top: 50px;
  }
  
  .signup {
    text-align: center;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgba(156, 163, 175, 1);
  }
  
  
  .btnForm {
    max-width: 1140px;
    margin: 20px auto;
    background-color: white;
    padding: 1rem;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  
  .btnLogin {
    padding: 1em 3em;
    font-size: 12px;
    font-weight: 500;
    color: #fff;
    background-color:var(--primary-color);
    border: none;
    border-radius: 45px;
  
    cursor: pointer;
    outline: none;
  }
  
  .btnLogin:hover {
    background-color: #fff;
    border: 1px solid var(--primary-color);
    color:#000;
  }
  
  .generastep {
    background-color: #fff;
    max-width: 1140px;
    margin: 10px auto;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  }
  
  .tx-green-1 {
    color: #75cc65;
    font-weight: 600;
  }
  
  .wrapper-stepper {
    background-color: #fff;
    padding: 60px;
    border-radius: 32px;
    box-shadow: rgba(0, 0, 0, 0.09);
  }
  
  .stepper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 660px;
    position: relative;
    z-index: 0;
    /* margin-bottom: 24px; */
  }
  
  .stepper-progress {
    position: absolute;
    background-color: #c5c5c5;
    height: 2px;
    z-index: -1;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  
  .stepper-progress-bar {
    position: absolute;
    left: 0;
    height: 100%;
    width: 0%;
    background-color: #47c00b;
    transition: all 500ms ease;
  }
  
  .stepper-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #c5c5c5;
    transition: all 500ms ease;
    cursor:pointer;
  }
  
  .stepper-item-counter {
    height: 35px;
    width: 35px;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-radius: 100%;
    border: 2px solid #c5c5c5;
    position: relative;
  }
  
  .stepper-item-counter .icon-success {
    position: absolute;
    opacity: 0;
    transform: scale(0);
    width: 18px;
    transition: all 500ms ease;
  }
  
  .stepper-item-counter .number {
    font-size: 15px;
    transition: all 500ms ease;
  }
  
  .stepper-item-title {
    position: absolute;
    font-size: 15px;
    bottom: -39px;
    width: 71px;
    display: flex;
    justify-content: center;
  }
  
  .stepper-item.success .stepper-item-counter {
    border-color: #75cc65;
    background-color: #c8ebc1;
    color: #fff;
    font-weight: 600;
  }
  
  .stepper-item.success .stepper-item-counter .icon-success {
    opacity: 1;
    transform: scale(1);
  }
  
  .stepper-item.success .stepper-item-counter .number {
    opacity: 0;
    transform: scale(0);
  }
  
  .stepper-item.success .stepper-item-title {
    color: #75cc65;
  }
  
  .stepper-item.current .stepper-item-counter {
    border-color: #75cc65;
    background-color: #75cc65;
    color: #fff;
    font-weight: 600;
  }
  
  .stepper-item.current .stepper-item-title {
    color: #818181;
  }
  
  .supp {
    font-size: 15px;
    font-weight: 500;
    color: #fff;
    border: none;
    border-radius: 45px;
    z-index: 3;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
  }
  
  .supp:hover {
    background-color: #fff;
  }
  
  .profile-pic {
    color: transparent;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 0.3s ease;
  }
  
  .profile-pic input {
    display: none;
  }
  
  .profile-pic img {
    position: absolute;
    object-fit: cover;
    width: 80%;
    height: 100%;
    box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.35);
    z-index: 0;
    border-radius: 50%;
    border: 1px solid var(--color-primary);
  }
  
  .profile-pic .-label {
    cursor: pointer;
    height: 165px;
    width: 230px;
  }
  
  .profile-pic:hover .-label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 10000;
    color: #fafafa;
    transition: background-color 0.2s ease-in-out;
  
    margin-bottom: 0;
  }
  
  .profile-pic span {
    display: inline-flex;
    padding: 0.2em;
    height: 2em;
  }
  
  /* Upload Area */
  .upload-area {
    width: 100%;
    /* max-width: 25rem; */
    background-color: rgb(255, 255, 255);
    border: 2px solid var(--color-secondary);
    border-radius: 24px;
    padding: 2rem 1.875rem 5rem 1.875rem;
    /* margin: 0.625rem; */
    text-align: center;
  }
  
  .upload-area--open {
    /* Slid Down Animation */
    animation: slidDown 500ms ease-in-out;
  }
  
  .upload-area__title {
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 0.3125rem;
  }
  
  .upload-area__paragraph {
    font-size: 0.9375rem;
    color: rgb(196, 195, 196);
    margin-top: 0;
  }
  
  .upload-area__tooltip {
    position: relative;
    color: var(--color-secondary);
    cursor: pointer;
    transition: color 300ms ease-in-out;
  }
  
  .upload-area__tooltip:hover {
    color: var(--clr-blue);
  }
  
  .upload-area__tooltip-data {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -125%);
    min-width: max-content;
    background-color: rgb(255, 255, 255);
    color: rgb(63, 134, 255);
    border: 1px solid var(--color-secondary);
    padding: 0.625rem 1.25rem;
    font-weight: 500;
    opacity: 0;
    visibility: hidden;
    transition: none 300ms ease-in-out;
    transition-property: opacity, visibility;
  }
  
  .upload-area__tooltip:hover .upload-area__tooltip-data {
    opacity: 1;
    visibility: visible;
  }
  
  /* Drop Zoon */
  .upload-area__drop-zoon {
    position: relative;
    height: 11.25rem;
    /* 180px */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px dashed var(--color-secondary);
    border-radius: 15px;
    margin-top: 2.1875rem;
  
    transition: border-color 300ms ease-in-out;
  }
  
  
  @media screen and (max-width: 768px) {
    .form-container {
      width: 700px;
      max-width: 100%;
    }
  
    .content-group {
      display: flex;
      flex-direction: column;
    }
  
    .profil1{
  
      top:-26px;
    }
  
    .upload-area__title{
  
      font-size:1.6rem;
    }
  }
  .titres1{

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

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

@media screen and (max-width: 775px){

  .titres{

width: 67%;
justify-content: flex-start;
}

.titres .nombre{
margin-left:5px;
}
}



.btnForms {
    width: 100%;
    background-color: white;
    padding:10px;
    color: black;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    position:fixed;
    display:flex; 
    z-index:100;
  }


  .btnForms img{
   
    height:80px;
 
  }

  .btnForms h3{
    position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);

  }

  @media screen and (max-width: 991px){
    .btnForms {
      justify-content: space-between;
    align-items: center;
  }


  .btnForms h3{
    position:relative;
    top: 0;
    left: 0;
    transform: none;

  }
  }

  @media screen and (max-width: 600px){
   
  .btnForms img{
    
    height:60px;
   
 
  }

  .btnForms h3{
   font-size:20px;

  }
  }
  @media screen and (max-width: 600px){
   
   .btnForms {
     
    flex-direction:column;
    
  
   }
 
   }

  .m-select {
    width: 100%;
  
}

.m-input{   
    width: 100%;
  
}

.m-phone-number-input{
  width: 100%;

}
.m-select-list-item{

  padding-top: 0 !important;
    padding-bottom: 0 !important;
}
  </style>
  