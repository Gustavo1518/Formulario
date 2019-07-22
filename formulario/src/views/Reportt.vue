<template>
  <div>
    Vista Report
    <!-- router-link nos permite no cargar la pagina -->
    <router-link to="/" @click="agregar">
      <a class="button is-success">Agregar</a>
    </router-link>
    <!-- llamamos al componente report por medio de su etiqueta que contiene su mismo nombre -->
    <Report />
  </div>
</template>
<script>
// lo primero que debemos hacer es importar el componente que pensamos llamar
import Report from "@/components/Report.vue";
import axios from "axios";
/* export default con el nombre de nuestra vista, y components con el nombre del componente
que pensamos llamar*/
export default {
  name: "Reportt",
  components: {
    Report
  },
  methods: {
    agregar() {
      axios.post('http://localhost:3000/mascotas',
      {        
        "nombre": "firulais",
        "raza": "rottweiler",
        "img": "https://img2.freepng.es/20180509/gve/kisspng-rottweiler-dog-breed-puppy-beauceron-companion-dog-5af2d35ce65aa5.2942309315258632609435.jpg",
        "color": "negro",
        "tamaño": 4,
        "peso": 4,
        "edad": 1,
        "genero": 1,
        "vacunas": true
    })
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
      //this.router.push({ path: "/" });
    }
  }
};
</script>
