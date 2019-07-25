<template>
  <div>
    <div class="notification is-primary">
      <router-link to="/Reportt">
        <a class="button is-danger">Ver Tabla</a>
      </router-link>
    </div>

    <Formulario />
  </div>
</template>
<script>
import Formulario from "@/components/Formulario.vue";
export default {
  name: "Ops",
  components: {
    Formulario
  }
};
</script>
