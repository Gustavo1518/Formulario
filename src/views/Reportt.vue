<template>
  <div>
    <div class="notification is-primary">
      <!-- router-link nos permite no cargar la pagina -->
      <router-link to="/">
        <a class="button is-danger">Agregar</a>
      </router-link>
    </div>
    <!-- llamamos al componente report por medio de su etiqueta que contiene su mismo nombre -->
    <Report />
  </div>
</template>
<script>
// lo primero que debemos hacer es importar el componente que pensamos llamar
import Report from "@/components/Report.vue";
/* export default con el nombre de nuestra vista, y components con el nombre del componente
que pensamos llamar*/
export default {
  name: "Reportt",
  components: {
    Report
  }
};
</script>
