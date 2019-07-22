<template>
  <div>
  <div class="notification is-primary">
 Operaciones
</div>
<router-link  to="/Reportt">
     <a class="button is-primary">Ver Tabla</a>
</router-link>
    <Formulario/>
</div>
</template>
<script>
import Formulario from '@/components/Formulario.vue'
export default{
  name: 'Ops',
  components: {
   Formulario
  }
}
</script>
