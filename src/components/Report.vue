<template>
  <div class="Report">
    <center>
    <table class="table">
      <tr>
        <th>Nombre</th>
        <th>Imagen</th>
        <th>Color</th>
        <th>Peso</th>
        <th>Edad</th>
        <th>Genero</th>
        <th>Todas Las Vacunas</th>
        <th>Opciones</th>
      </tr>
      <tr v-for=" mascota in  mascotas" :key="mascota.id">
        <td>{{ mascota.nombre }}</td>
        <td> <img :src="mascota.img" :alt="imgAlt" height="80" width="80"></td>
        <td>{{ mascota.color }}</td>
        <td>{{ mascota.peso }}</td>
        <td>{{ mascota.edad }}</td>
        <td>{{ mascota.genero }}</td>
        <td>{{ mascota.vacunas }}</td>
<router-link  to="/">
      <a class="button is-danger">Eliminar</a>
</router-link>
<router-link  to="/">
     <a class="button is-info">Normal</a>
</router-link>
      </tr>
    </table>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Report",
  data() {
    return {
      mascotas: null,
      imgAlt: "Parametro Alt"
    }
  },
  beforeMount() {
  this.getMascotas().then(response => {
     this.mascotas= response.data;
    });
  },
  methods: {
    getMascotas() {
      return axios.get("http://localhost:3000/mascotas");
    },
  }
};
</script>
<style>
.table {
  border: solid 5px rgb(27, 230, 179);
  text-align: center;
}
</style>
