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
          <center>
            <th>Opciones</th>
          </center>
        </tr>
        <tr v-for=" (mascota, index) in  mascotas" :key="mascota.id">
          <td>{{ index }} {{ mascota.nombre }}</td>
          <td>
            <img :src="mascota.img" :alt="imgAlt" height="80" width="80" />
          </td>
          <td>{{ mascota.color }}</td>
          <td>{{ mascota.peso }}</td>
          <td>{{ mascota.edad }}</td>
          <td>{{ mascota.genero }}</td>
          <td>{{ mascota.vacunas }}</td>
          <button class="button is-danger" @click="eliminar(mascota.id)">Eliminar</button>
          <button class="button is-link" @click="todoMascotas(mascota)">Modificar</button>
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
    };
  },
  beforeMount() {
    this.getMascotas().then(response => {
      this.mascotas = response.data;
    });
  },
  methods: {
    getMascotas() {
      return axios.get("http://localhost:3000/mascotas");
    },
    todoMascotas(mascotas) {
      console.log(mascotas);
      this.$router.push({ name: "Ops", params: { mascotas } });
    },
    eliminar(id) {
      axios.delete("http://localhost:3000/mascotas/" + id)
      .then(response => {
        this.getMascotas().then(response => {
          this.mascotas = response.data;
        });
        console.log(response);
      });
    }
  }
};
</script>
<style>
.table {
  border: solid 5px rgb(27, 230, 179);
  text-align: center;
}
</style>
