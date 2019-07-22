<template>
  <div class="form">
    <form>
      <div class="field">
        <label>Nombreeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nombre Del Animal" v-model="nombre" />
        </div>
      </div>
      <div class="field">
        <label>Imagen</label>
        <div class="control">
          <input class="input" type="text" placeholder="Foto Del Animal" v-model="img" />
        </div>
      </div>
      <div class="field">
        <label>Color</label>
        <div class="control">
          <input class="input" type="text" placeholder="Color Del Animal" v-model="color" />
        </div>
      </div>
      <div class="field">
        <label>Peso</label>
        <div class="control">
          <div class="select">
            <select v-model="peso">
              <option value="">Selecciona Peso</option>
              <option v-for="cat in catPeso" :key="cat.id" :value="cat.id">{{cat.valor}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Edad</label>
        <div class="control">
          <div class="select">
            <select v-model="edad">              
              <option>Selecciona Edad</option>
              <option>1 año</option>
              <option>2 año</option>
              <option>3 año</option>
              <option>4 año</option>
              <option>5 año</option>
              <option>6 año</option>
              <option>7 año</option>
              <option>8 año</option>
              <option>9 año</option>
              <option>10 año</option>
              <option>11 año</option>
              <option>12 año</option>
              <option>13 año</option>
              <option>Mas..</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Genero</label>
        <div class="control">
          <div class="select">
            <select v-model="genero">
              <option>Selecciona Genero</option>
              <option>Macho</option>
              <option>Hembra</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="checkbox">
          <input type="checkbox" />
          Todas Las Vacunas
        </label>
      </div>
      <button type="button" class="button is-primary" @click="agregar()">Guardar</button>
    </form>    
  </div>
</template>
<style>
.form {
  border: solid 5px rgb(27, 230, 179);
  width: 50%;
}
div > label {
  color: black;
}
</style>
<script>
// lo primero que debemos hacer es importar el componente que pensamos llamar

import axios from "axios";
/* export default con el nombre de nuestra vista, y components con el nombre del componente
que pensamos llamar*/
export default {
  name: "Formulario",
  data() {
    return {
      nombre: "",
      raza: "",
      img: "",
      color: "",
      tamaño: "",
      peso: "",
      edad: "",
      genero: "",
      vacunas: null,
      catPeso: null
    };
  },
  updated(){
    console.log(this);
  },
  beforeMount(){    
    this.getCatalogoPeso().then(response => {      
        this.catPeso = response.data;        
    });    
  },
  methods: {
    agregar() {
      this.save()
        .then(response => {
          console.log(response);
          this.$router.push("/Reportt");
        })
        .catch(err => {
          alert("911->" + err);
        });
    },
    save() {
      return axios.post("http://localhost:3000/mascotas", {
        nombre: this.nombre,
        raza: "schnauzer",
        img: "https://www.vitake.net/wp-content/uploads/2017/01/asfas-1.jpg",
        color: "pimienta",
        tamaño: 1,
        peso: 1,
        edad: 1,
        genero: 2,
        vacunas: false
      });
    },
    getCatalogoPeso() {
      return axios.get("http://localhost:3000/peso");
    }
  }
};
</script>