<template>
    <div>
   <Loading v-if="loading"></Loading>
   <div class="btnForms  d-flex items-center justify-content-start">
           <img src="../../assets/img/logo.png" alt="">
           <h3 style="margin-left:250px">RECRUITMENT FORM</h3>
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
         v-for="item in 5"
         :key="item"
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
 
   <div class="error" v-if="this.error">{{ error }} <br /></div>
   <div  class="container-fluid" style="margin-top: 48px" >
     
     <form class="form"  >
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
 <v-text-field v-model="step1.first_name" density="compact"   :counter="10" label="Enter First Name here" name="first_name"     color="primary" type="text" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step1.first_name.$error">{{ v$.step1.first_name.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
 <label for="userpassword">Last Name <span class="text-danger">*</span></label>
 <v-text-field v-model="step1.last_name" density="compact"  :counter="10" label="Enter Last Name here" name="last_name"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step1.last_name.$error">{{ v$.step1.last_name.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
 <label for="userpassword">Cell Phone Number <span class="text-danger">*</span></label>
 <v-text-field v-model="step1.phone" density="compact"  :counter="10" label="Enter Cell Phone Number here" name="tel"   color="blue-grey-lighten-2" type="tel" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step1.phone.$error">{{ v$.step1.phone.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>

</div>
             <div class="row mb-3 mt-3 content-group">

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Present Address <span class="text-danger">*</span></label>
                 <v-text-field v-model="step1.address" density="compact"  :counter="10" label="Enter address here" name="address"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step1.address.$error">{{ v$.step1.address.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Age <span class="text-danger">*</span></label>
               <v-text-field v-model="step1.age" density="compact"  :min="0" label="Enter Age here" name="age"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 

               </div>
               <small v-if="v$.step1.age.$error">{{ v$.step1.age.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Social Security <span class="text-danger">*</span></label>
                 <v-text-field v-model="step1.social_security" density="compact"  :counter="10" label="Enter Social Security number here" name="social"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step1.social_security.$error">{{ v$.step1.social_security.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>

              </div>

              <p class="titre">Availability</p>
             <div class="row mb-3 mt-3 content-group">

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Position Applied for Agency <span class="text-danger">*</span></label>
                 <v-text-field v-model="step1.position_applied_agency"  :counter="10"  density="compact" label="Enter  here" name="position"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step1.position_applied_agency.$error">{{ v$.step1.position_applied_agency.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">How many hours can you work weekly? <span class="text-danger">*</span></label>
               <v-text-field v-model="step1.work_weekly" density="compact"  :min="0" label="Enter Age here" name="work_weekly"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 

               </div>
               <small v-if="v$.step1.work_weekly.$error">{{ v$.step1.work_weekly.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>

              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Can you work nights? <span class="text-danger">*</span></label>
                 <v-select  v-model="step1.can_work_night" density="compact" 
                 label="Select" :items=choix     item-title="label" item-value="value" variant="outlined"  color="primary" ></v-select>        
                    </div>
               <small v-if="v$.step1.can_work_night.$error">{{ v$.step1.can_work_night.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>

            

              </div>

              <div class="row mb-3 mt-3 content-group">

       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Days/Hours Available to Work <span class="text-danger">*</span></label>
       <v-select  v-model="step1.weekly_available_hours" density="compact"   label="Select" :items=days  multiple    item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 
       </div>
       <small v-if="v$.step1.weekly_available_hours.$error">{{ v$.step1.weekly_available_hours.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Date Available to Start <span class="text-danger">*</span></label>
       <v-text-field v-model="step1.date_available_to_start" density="compact"  :min="0" label="Enter  here" name="date_available_to_start"   color="blue-grey-lighten-2" type="date" hide-details required variant="outlined" ></v-text-field> 

       <!-- <v-date-input  clearable label="Date input" density="compact" v-model="step1.date_available_to_start"  color="blue-grey-lighten-2" variant="outlined"></v-date-input> -->
       </div>
       <small v-if="v$.step1.date_available_to_start.$error">{{ v$.step1.date_available_to_start.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>

       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Employment desired  <span class="text-danger">*</span></label>
       <v-select  clearable label="Select" density="compact" :items=employment v-model="step1.employment_desired" item-title="label" item-value="value"  color="blue-grey-lighten-2" variant="outlined"></v-select>
       </div>
       <small v-if="v$.step1.employment_desired.$error">{{ v$.step1.employment_desired.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
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

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Type of School <span class="text-danger">*</span></label>
                 <v-text-field v-model="step2.type_school" density="compact"  :counter="10" label="Enter here" name="school"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step2.type_school.$error">{{ v$.step2.type_school.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">School Name <span class="text-danger">*</span></label>
                 <v-text-field v-model="step2.school_name" density="compact"  :counter="10" label="Enter here" name="school_name"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step2.school_name.$error">{{ v$.step2.school_name.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">School Location <span class="text-danger">*</span></label>
                 <v-text-field v-model="step2.school_location" density="compact"  :counter="10" label="Enter  here" name="location"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
               </div>
               <small v-if="v$.step2.school_location.$error">{{ v$.step2.school_location.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>

              </div>

              <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
 <label for="userpassword">School Email Address <span class="text-danger">*</span></label>
 <v-text-field v-model="step2.school_email_address" density="compact"  :counter="10" label="Enter Address Email here" name="email"   color="blue-grey-lighten-2" type="email" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step2.school_email_address.$error">{{ v$.step2.school_email_address.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
 <label for="userpassword">Number of Years in School <span class="text-danger">*</span></label>
 <v-text-field v-model="step2.number_of_year_school" density="compact"  :min="0" label="Enter  here" name="level"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 

 <!-- <v-number-input v-model="step2.number_of_year_school" :reverse="false"  density="compact"  controlVariant="default"  :hideInput="false" ninset label="Enter here"  :min="0" name="work_weekly"   hide-details  variant="outlined" ></v-number-input> -->

</div>
<small v-if="v$.step2.number_of_year_school.$error">{{ v$.step2.number_of_year_school.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
 <label for="userpassword">School Level <span class="text-danger">*</span></label>
 <v-text-field v-model="step2.school_level_id" density="compact"  :counter="10" label="Enter  here" name="level"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step2.school_level_id.$error">{{ v$.step2.school_level_id.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>

</div>

    <p class="titre">Licenses and Insurance</p>
            
   <div class="row mb-3 mt-3 content-group">

     <div class="col">
       <div class="input-groupe">
       <label for="userpassword">What is your means of transportation to work? <span class="text-danger">*</span></label>
       <v-text-field v-model="step2.transportation_to_work" density="compact"  :counter="10" label="Enter  here" name="driver_licence"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
       </div>
       <small v-if="v$.step2.transportation_to_work.$error">{{ v$.step2.transportation_to_work.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>

       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Driver Licence <span class="text-danger">*</span></label>
       <!-- <v-text-field v-model="step2.driver_licence" density="compact"  :counter="10" label="Enter  here" name="driver_licence"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>  -->
       <v-select  v-model="step2.driver_licence" density="compact" 
                 label="Select" :items=choix     item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select>   
       </div>
       <small v-if="v$.step2.driver_licence.$error">{{ v$.step2.driver_licence.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
      
    </div>
    <div class="row mb-3 mt-3 content-group" v-if="step2.driver_licence === true">
     <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Driver Licence Number <span class="text-danger">*</span></label>
       <v-text-field v-model="step2.driver_licence_number" density="compact"   label="Enter here" name="licence_number"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
     <!-- <v-number-input v-model="step2.driver_licence_number" :reverse="false"  density="compact"  controlVariant="default"  :hideInput="false" ninset label="Enter here"  :min="0" name="work_weekly"   hide-details  variant="outlined" ></v-number-input> -->

       </div>
       <small v-if="v$.step2.driver_licence_number.$error">{{ v$.step2.driver_licence_number.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Driver Licence Issue State <span class="text-danger">*</span></label>
       <v-text-field v-model="step2.driver_licence_issue_state" density="compact"  :counter="10" label="Enter  here" name="Weekly"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
       </div>
       <small v-if="v$.step2.driver_licence_issue_state.$error">{{ v$.step2.driver_licence_issue_state.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Driver Licence Expiration Date <span class="text-danger">*</span></label>
       <!-- <v-text-field v-model="step2.driver_licence_expiration_date" density="compact"  :counter="10" label="Enter here" name="date"   color="blue-grey-lighten-2" type="date" hide-details required variant="outlined" ></v-text-field>  -->
       <v-date-input  clearable label="Date input" density="compact" v-model="step2.driver_licence_expiration_date"  color="blue-grey-lighten-2" variant="outlined"></v-date-input>

       </div>
       <small v-if="v$.step2.driver_licence_expiration_date.$error">{{ v$.step2.driver_licence_expiration_date.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
   </div>

    <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
 <label for="userpassword">Current Insurance <span class="text-danger">*</span></label>
 <v-text-field v-model="step2.current_insurance" density="compact"  :counter="10" label="Enter  here" name="current"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step2.current_insurance.$error">{{ v$.step2.current_insurance.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
 <label for="userpassword">Insurance Policy Number <span class="text-danger">*</span></label>
 <v-text-field v-model="step2.insurance_policy" density="compact"  :counter="10" label="Enter  here" name="policy"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
</div>
<small v-if="v$.step2.insurance_policy.$error">{{ v$.step2.insurance_policy.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>

<div class="col">
<div class="input-groupe">
 <label for="userpassword">Insurance Copy Submitted <span class="text-danger">*</span></label>
 <!-- <v-text-field v-model="step2.insurance_copy_submitted" density="compact"  :counter="10" label="Enter  here" name="copy"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>  -->
 <v-select  v-model="step2.insurance_copy_submitted" density="compact" 
                 label="Select" :items=choix     item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 
</div>
<small v-if="v$.step2.insurance_copy_submitted.$error">{{ v$.step2.insurance_copy_submitted.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
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
                 <!-- <v-text-field v-model="step3.any_accident_during_past_year" density="compact"  :counter="10" label="Enter here" name="accident"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> -->
                 <v-select  v-model="step3.any_accident_during_past_year" density="compact" 
                 label="Select" :items=choix     item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 
               </div>
               <small v-if="v$.step3.any_accident_during_past_year.$error">{{ v$.step3.any_accident_during_past_year.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col" v-if="step3.any_accident_during_past_year === true">
               <div class="input-groupe">
                 <label for="userpassword">Accident Count <span class="text-danger">*</span></label>
                 <v-text-field v-model="step3.accident_count" density="compact"  :min="0" label="Enter here" name="accident_count"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 
                <!-- <v-number-input v-model="step3.accident_count" :reverse="false"  density="compact"  controlVariant="default"  :hideInput="false" ninset label="Enter here"  :min="0" name="work_weekly"   hide-details  variant="outlined" ></v-number-input> -->

               </div>
               <small v-if="v$.step3.accident_count.$error">{{ v$.step3.accident_count.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
             

              </div>

              <div class="row mb-3 mt-3 content-group">

           <div class="col">
           <div class="input-groupe">
           <label for="userpassword">Moving Violation Past Three Years ? <span class="text-danger">*</span></label>
           <!-- <v-text-field v-model="step3.moving_violation_past_three_year" density="compact"  :counter="10" label="Enter  here" name="years"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> -->
           <v-select  v-model="step3.moving_violation_past_three_year" density="compact" 
                 label="Select" :items=choix   item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 
           </div>
           <small v-if="v$.step3.moving_violation_past_three_year.$error">{{ v$.step3.moving_violation_past_three_year.$errors[0].$message}}</small>
           <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
           </div>
           <div class="col" v-if="step3.moving_violation_past_three_year === true">
           <div class="input-groupe">
           <label for="userpassword">Moving Violation Count <span class="text-danger">*</span></label>
           <v-text-field v-model="step3.moving_violation_count" density="compact"  :counter="10" label="Enter here" name="number"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 
           <!-- <v-number-input v-model="step3.moving_violation_count" :reverse="false"  density="compact"  controlVariant="default"  :hideInput="false" ninset label="Enter here"  :min="0" name="work_weekly"   hide-details  variant="outlined" ></v-number-input> -->

           </div>
           <small v-if="v$.step3.moving_violation_count.$error">{{ v$.step3.moving_violation_count.$errors[0].$message}}</small>
           <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
           </div>

       </div>

    <p class="titre">Criminal history</p>
            
   <div class="row mb-3 mt-3 content-group">

       <div class="col">
       <div class="input-groupe">
       <label for="userpassword">Have you ever been convicted of a crime? <span class="text-danger">*</span></label>
       <!-- <v-text-field v-model="step3.convicted_crime" density="compact"  :counter="10" label="Enter  here" name="convicted_crime"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>  -->
       <v-select  v-model="step3.convicted_crime"  density="compact" 
                 label="Select" :items=choix  item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 
       </div>
       <small v-if="v$.step3.convicted_crime.$error">{{ v$.step3.convicted_crime.$errors[0].$message}}</small>
       <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
       </div>
    </div>

    <div class="row mb-3 mt-3 content-group" v-if="step3.convicted_crime === true">

<div class="col">
<div class="input-groupe">
<label for="userpassword">Crime Description <span class="text-danger">*</span></label>
<v-textarea v-model="step3.crime_description"  :counter="10" label="Enter here" name="crime_description"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-textarea> 
</div>
<small v-if="v$.step3.crime_description.$error">{{ v$.step3.crime_description.$errors[0].$message}}</small>
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
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
           <!-- debut infos genral -->

           <div class="content" v-for="(employer, index) in employers" :key="employers.id" >
             <div class="titres1">
                <div class="titres">
             <p class="titre">Employment History</p>  
               <span class="nombre"> {{index + 1}} </span>
             </div>
          <div class="btn-list">
             <a aria-label="anchor" style=" font-size: 18px; display: flex;  align-items: center; justify-content: center; width: 35px;height: 35px; position: fixed;  top: 41%;   left: 50%;" @click="AddformData" href="javascript:void(0);" class="btn btn-sm btn-icon btn-info-light"><i class="ri-add-line"></i></a>
         </div>
               <div class="btn-list">
                 <a aria-label="anchor"  @click="deleteRow(index)" href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-light"><i class="ri-delete-bin-line"></i></a>
             </div>
             </div>
            
             <div class="row mb-3 mt-3 content-group">

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Name <span class="text-danger">*</span></label>
                 <v-text-field v-model="employer.name_employer" density="compact"  :counter="10" label="Enter here" name="accident"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>
               
               </div>
               <!-- <small v-if="v$.employer.name_employer.$error">{{ v$.employer.name_employer.$errors[0].$message}}</small> -->
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Address <span class="text-danger">*</span></label>
                 <v-text-field v-model="employer.address_employer" density="compact"  :counter="10" label="Enter here" name="accident_count"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 
            

               </div>
               <!-- <small v-if="v$.employer.address_employer.$error">{{ v$.employer.address_employer.$errors[0].$message}}</small> -->
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Phone Number <span class="text-danger">*</span></label>
                 <v-text-field v-model="employer.phone_employer" density="compact"  :counter="10" label="Enter here" name="accident_count"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field> 

               </div>
               <!-- <small v-if="v$.employer.phone_employer.$error">{{ v$.employer.phone_employer.$errors[0].$message}}</small> -->
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
             

              </div>

              <div class="row mb-3 mt-3 content-group">

           <div class="col">
           <div class="input-groupe">
           <label for="userpassword">City,State,Zip code <span class="text-danger">*</span></label>
           <v-text-field v-model="employer.state_employer" density="compact"  :counter="10" label="Enter  here" name="years"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>
         
           </div>
           <!-- <small v-if="v$.employer.state_employer.$error">{{ v$.employer.state_employer.$errors[0].$message}}</small> -->
           <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
           </div>
           <div class="col">
           <div class="input-groupe">
           <label for="userpassword">Pay or Salary <span class="text-danger">*</span></label>
           <v-text-field v-model="employer.salary_employer" density="compact"  :counter="10" label="Enter here" name="salary_employer"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 

           </div>
           <!-- <small v-if="v$.employer.salary_employer.$error">{{ v$.employer.salary_employer.$errors[0].$message}}</small> -->
           <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
           </div>
           <div class="col">
           <div class="input-groupe">
           <label for="userpassword">Supervisor <span class="text-danger">*</span></label>
           <v-text-field v-model="employer.supervisor_employer" density="compact"  :counter="10" label="Enter here" name="supervisor_employer"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field> 

           </div>
           <!-- <small v-if="v$.employer.supervisor_employer.$error">{{ v$.employer.supervisor_employer.$errors[0].$message}}</small> -->
           <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
           </div>

              </div>

            

    <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
<label for="userpassword">Employment dates <span class="text-danger">*</span></label>
<v-textarea v-model="employer.date_employer"  :counter="10" label="Enter here" name="date_employer"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-textarea> 
</div>
<!-- <small v-if="v$.employer.date_employer.$error">{{ v$.employer.date_employer.$errors[0].$message}}</small> -->
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
    </div>

    <div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
<label for="userpassword">Your last job title <span class="text-danger">*</span></label>
<v-text-field v-model="employer.title_employer" density="compact"  :counter="10" label="Enter  here" name="years"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>

</div>
<!-- <small v-if="v$.employer.title_employer.$error">{{ v$.employer.title_employer.$errors[0].$message}}</small> -->
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
<label for="userpassword">Start date <span class="text-danger">*</span></label>
<!-- <v-text-field v-model="employer.moving_violation_count" density="compact"  :counter="10" label="Enter here" name="number"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field>  -->
<v-date-input  clearable label="Date input" density="compact" v-model="employer.start_date_employer"  color="blue-grey-lighten-2" variant="outlined"></v-date-input>


</div>
<!-- <small v-if="v$.employer.start_date_employer.$error">{{ v$.employer.start_date_employer.$errors[0].$message}}</small> -->
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>
<div class="col">
<div class="input-groupe">
<label for="userpassword">Finish date <span class="text-danger">*</span></label>
<!-- <v-text-field v-model="employer.moving_violation_count" density="compact"  :counter="10" label="Enter here" name="number"   color="blue-grey-lighten-2" type="number" hide-details required variant="outlined" ></v-text-field>  -->
<v-date-input  clearable label="Date input" density="compact" v-model="employer.finish_date_employer"  color="blue-grey-lighten-2" variant="outlined"></v-date-input>


</div>
<!-- <small v-if="v$.employer.finish_date_employer.$error">{{ v$.employer.finish_date_employer.$errors[0].$message}}</small> -->
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
</div>

  </div>



<div class="row mb-3 mt-3 content-group">

<div class="col">
<div class="input-groupe">
<label for="userpassword">Reason for leaving (be specific) <span class="text-danger">*</span></label>
<v-textarea v-model="employer.reason_employer"  :counter="10" label="Enter here" name="reason_employer"   color="blue-grey-lighten-2"  hide-details required variant="outlined" ></v-textarea> 
</div>
<!-- <small v-if="v$.employer.reason_employer.$error">{{ v$.employer.reason_employer.$errors[0].$message}}</small> -->
<small v-if="resultError['address']"> {{ resultError["address"] }} </small>
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

        <!-- Étape 5 -->
        <div v-if="currentStep === 5">
           <div class="form-container">
           <!-- debut infos genral -->
           <div class="content">
             <p class="titre">Skills </p>
             <div class="row mb-3 mt-3 content-group">

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Type Skill <span class="text-danger">*</span></label>
                 <v-text-field v-model="step4.type_skill" density="compact"  :counter="10" label="Enter here" name="accident"   color="blue-grey-lighten-2" type="text" hide-details required variant="outlined" ></v-text-field>
               
               </div>
               <small v-if="v$.step4.type_skill.$error">{{ v$.step4.type_skill.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
              <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Computer Skills <span class="text-danger">*</span></label>
                 <v-select  v-model="step4.computer_skill" density="compact" 
                 label="Select" :items=choix     item-title="label" item-value="value" variant="outlined"  color="blue-grey-lighten-2" ></v-select> 

               </div>
               <small v-if="v$.step4.computer_skill.$error">{{ v$.step4.computer_skill.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
              </div>
             
             

              </div>

              <div class="row mb-3 mt-3 content-group">

               <div class="col">
               <div class="input-groupe">
                 <label for="userpassword">Other Skills <span class="text-danger">*</span></label>
                 <v-textarea v-model="step4.other_skills" density="compact"  :counter="10" label="Enter here" name="accident_count"   color="blue-grey-lighten-2"  hide-details required variant="outlined" ></v-textarea> 

               </div>
               <small v-if="v$.step4.other_skills.$error">{{ v$.step4.other_skills.$errors[0].$message}}</small>
               <small v-if="resultError['address']"> {{ resultError["address"] }} </small>
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
 
 export default {
   name: "Componentlogin",
   components: { },
   computed: {
     
     stepperProgress() {
       return (100 / 4) * (this.currentStep - 1) + "%";
     },
   
   },
   data() {
     return {
       loading: true,
       PostLogo: false,
       msgsuccess: false,
       DemandeAide: false,
       msg: false,
       imagesTypes: ["jpeg", "png", "svg", "gif"],
       currentStep: 1,
       error: "",
       resultError: {},
     
    
       choix: [
         { label: "Yes", value: true },
         { label: "No", value: false },
       ],
       days: [
         { label: "Monday",     value: "Monday" },
         { label: "Tuesday",    value: "Tuesday" },
         { label:  "Wednesday",  value: "Wednesday" },
         { label:  "Thursday",   value: "Thursday" },
         { label:  "Friday",     value: "Friday" },
         { label:  "Saturday",   value: "Saturday" },
         { label:  "Sunday",     value: "Sunday" },
       ],
       employment: [
         { label: "FULL-TIME ONLY ",     value: "FULL-TIME ONLY " },
         { label: "PART-TIME ONLY",    value: "PART-TIME ONLY" },
         { label:  "FULL-OR PART-TIME",  value: "FULL-OR PART-TIME" },
         
       ],
     
      
       v$: useVuelidate(),
       step1: {
           first_name: "",
           last_name: "",
           phone: "",

           address: "",
           age: "",
           social_security: "",

           position_applied_agency:"",
           work_weekly:"",
           can_work_night:"",

           weekly_available_hours:[],
           date_available_to_start:null, 
           employment_desired:"",    
     },
     step2: {

       type_school: "",
       school_name: "",
       school_location: "",

       school_email_address:"",
       number_of_year_school:"",
       school_level_id:"",

       transportation_to_work:"",
       driver_licence:"",

       driver_licence_number:"", 
       driver_licence_issue_state:"",     
       driver_licence_expiration_date:null, 

       current_insurance:"",    
       insurance_policy:"",    
       insurance_copy_submitted:"",    
},
   step3: {

   any_accident_during_past_year: "",
   accident_count: "",

   moving_violation_past_three_year: "",
   moving_violation_count:"",

   convicted_crime:"",
   crime_description:"",

      
},
employers: [
 {

name_employer: "",
address_employer: "",
phone_employer:"",

state_employer: "",
salary_employer:"",
supervisor_employer:"",

date_employer:"",

title_employer:"",
start_date_employer:null,
finish_date_employer:null,

reason_employer:"",



}
],

step4: {

 type_skill: "",
 computer_skill: "",

other_skills:"",







},

 
 
      
     };
   },
   validations: {
     step1: {
           first_name: {require},
           last_name: {},
           phone: {},

           address: {},
           age: {},
           social_security: {},

           position_applied_agency:{},
           work_weekly:{},
           can_work_night:{},

           weekly_available_hours:{},
           date_available_to_start:{}, 
           employment_desired:{},    
     },
     step2: {

   type_school: {},
   school_name: {},
   school_location: {},

   school_email_address:{},
   number_of_year_school:{},
   school_level_id:{},

   transportation_to_work:{},
   driver_licence:{},

   driver_licence_number:{}, 
   driver_licence_issue_state:{},     
   driver_licence_expiration_date:null, 

   current_insurance:{},    
   insurance_policy:{},    
   insurance_copy_submitted:{},    
   },
   step3: {

   any_accident_during_past_year: {},
   accident_count: {},

   moving_violation_past_three_year: {},
   moving_violation_count:{},

   convicted_crime:{},
   crime_description:{},


   },

     step4: {

       type_skill: {},
       computer_skill: {},

     other_skills:{},

     },
   },
   methods: {
     AddformData() {
   this.employers.push({

name_employer: "",
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
   console.log(index);
   if(index !== 0){
     this.employers.splice(index, 1);
   }
},
   
 
     async nextStep() {
       try {
       // Valider les données de l'étape actuelle
       this.v$[`step${this.currentStep}`].$touch();
       if (this.v$.$errors.length === 0) {
            this.currentStep++;
             window.scrollTo({ top: 0, behavior: "smooth" });
           console.log('stepData', this.currentStep);
         

           


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
 
     prevStep() {
       if (this.currentStep > 1) {
         this.currentStep--;
         window.scrollTo({ top: 0, behavior: "smooth" });
       }
     },
 
  
     
    

   },
   async mounted() {
   
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       });
      
      
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
 .aider {
   text-align: center;
   color: var(--color-primary);
   cursor: pointer;
   margin-bottom: 0 !important;
   font-weight: bold;
 }
 
 .aider:hover {
   color: var(--color-secondary);
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
   border-radius: 0.5rem !important;
   border: 2px solid rgb(125, 121, 100);
   outline: 0;
   padding: 14px;
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
  
   z-index:100;
 }
 .btnForms img{
  
   height:80px;

 }

 .v-text-field--outlined >>> fieldset {
 border-color: rgba(192, 0, 250, 0.986) !important;
}
 </style>
 