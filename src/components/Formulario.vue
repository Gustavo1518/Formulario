<template>
  <div class="form">
    <form>
      <div class="field">
        <label>Nombre</label>
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
               <option value="">Selecciona Edad</option>
              <option v-for="cato in catEdad" :key="cato.id" :value="cato.id">{{cato.valor}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Genero</label>
        <div class="control">
          <div class="select">
            <select v-model="genero">
              <option value="">Selecciona Genero</option>
              <option v-for="catoO in catG" :key="catoO.id" :value="catoO.id">{{catoO.valor}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="field">
        <label class="checkbox" for="checkbox">
          <input type="checkbox" id="checkbox" v-model="vacunas"/>
          {{ vacunas }}
          Todas las vacunas
        </label>
      </div>
      <button type="button" class="button is-primary" @click="agregar()">Guardar</button>
      <button type="button" class="button is-success" @click="todoMascotas(mascota)">Modificar</button>
      <button type="button" class="button is-warning" @click="cancelar()">cancelar</button>
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
      nombre: (this.$route.params.mascotas.nombre != undefined)?this.$route.params.mascotas.nombre:"",
      img: (this.$route.params.mascotas.img != undefined)?this.$route.params.mascotas.img:"",
      color: (this.$route.params.mascotas.color != undefined)?this.$route.params.mascotas.color:"",
      tamaño: "",
      peso:(this.$route.params.mascotas.peso != undefined)?this.$route.params.mascotas.peso:"",
      edad: (this.$route.params.mascotas.edad != undefined)?this.$route.params.mascotas.edad:"",
      genero: (this.$route.params.mascotas.genero != undefined)?this.$route.params.mascotas.genero:"",
      vacunas: null,
      catPeso: null,
      catEdad: null,
      catG: null,
      accion: (this.$route.params.mascotas != undefined)?"modificar":"agregar",
    };
  },
  updated(){
    console.log("updated Formulario");
    console.log(this);
    console.log(this.$router);
    console.log(this.$route.params);
  },
  beforeMount(){    
    this.getCatalogoPeso().then(response => {      
        this.catPeso = response.data;        
    });    
    this.getCatalogoEdad().then(response => {     
        this.catEdad = response.data;        
    });
    this.getCatalogoG().then(response => {     
        this.catG= response.data;        
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
        img: this.img,
        color: this.color,
        tamaño:this.tamaño,
        peso: this.peso,
        edad: this.edad,
        genero: this.genero,
        vacunas: false
      });
    },
    getCatalogoPeso() {
      return axios.get("http://localhost:3000/peso");
    },
     getCatalogoEdad() {
      return axios.get(" http://localhost:3000/edad");
    },
     getCatalogoG() {
      return axios.get(" http://localhost:3000/genero");
    }
  }
};
</script>