<template >
  <div>
    <RouterView />
  </div>
</template>




<script>
 
  import "@/assets/libs/choices.js/public/assets/scripts/choices.min.js"
  import "@/assets/js/main.js"
  import  "@/assets/libs/bootstrap/css/bootstrap.min.css"
  import "@/assets/css/styles.min.css" 
  import "@/assets/css/icons.css" 
  import "@/assets/libs/node-waves/waves.min.css"  
  import "@/assets/libs/simplebar/simplebar.min.css" 
  import "@/assets/libs/flatpickr/flatpickr.min.css"
  import "@/assets/libs/@simonwep/pickr/themes/nano.min.css"
  import "@/assets/libs/choices.js/public/assets/styles/choices.min.css"
  import "@/assets/libs/@popperjs/core/umd/popper.min.js"
  import "@/assets/libs/bootstrap/js/bootstrap.bundle.min.js"
  // import "@/assets/js/defaultmenu.min.js"
  // import "@/assets/libs/node-waves/waves.min.js"
  // import "@/assets/js/sticky.js"
  // import "@/assets/libs/simplebar/simplebar.min.js"
  // import "@/assets/js/simplebar.js"
  // import "@/assets/libs/@simonwep/pickr/pickr.es5.min.js"
  import "@/assets/libs/apexcharts/apexcharts.min.js"
  // import "@/assets/js/ecommerce-dashboard.js"
  // import "@/assets/js/custom-switcher.min.js"
  // import "@/assets/js/custom.js"

  
 
  //  import "@/assets/libs/swiper/swiper-bundle.min.js"
  //  import "@/assets/js/authentication.js"
  //  import "@/assets/js/show-password.js"
  //  import "@/assets/js/authentication-main.js"
   import "@/assets/css/icons.min.css"
  //  import "@/assets/libs/swiper/swiper-bundle.min.css"
 
    // import "@/assets/libs/particles.js/particles.js"
    // import "@/assets/js/error.js"





  export default {
  name:'App',
  watch: {
    created() {
    
    },
    $route(to,) {
      const name = to.name.toLowerCase()
      const title = name 
        // ? `${name} (${to.href.split('/')[2].toLowerCase()})`
        // : name
      document.title = `LePrimeCare - ${title}`

      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  },
  
}
</script>
<style lang="css" scoped>
  
</style>