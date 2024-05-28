<template>
    <div>
      <label for="formattedInput">Entrée formatée:</label>
      <MazInput
        id="formattedInput"
        v-model="formattedValue"
        @input="formatInput"
        placeholder="XXX-XX-XXXX"
      />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formattedValue: ''
      };
    },
    methods: {
      formatInput(event) {
        const input = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        let formatted = '';
  
        if (input.length > 0) {
          formatted += input.substring(0, 3); // First 3 digits
        }
        if (input.length >= 4) {
          formatted += ' - ' + input.substring(3, 5); // Next 2 digits
        }
        if (input.length >= 6) {
          formatted += ' - ' + input.substring(5, 9); // Last 4 digits
        }
  
        this.formattedValue = formatted;
      }
    }
  };
  </script>
  
  <style>
  /* Ajoutez des styles CSS ici si nécessaire */
  </style>
  