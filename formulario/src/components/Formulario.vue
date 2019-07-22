<template>
  <div class="form">
    <form>
      <div class="field">
  <label>Nombre</label>
  <div class="control">
   <input class="input" type="text" placeholder="Nombre Del Animal">
  </div>
</div>
      <div class="field">
  <label>Imagen</label>
  <div class="control">
    <input class="input" type="text" placeholder="Foto Del Animal">
  </div>
</div>
   <div class="field">
  <label>Color</label>
  <div class="control">
    <input class="input" type="text" placeholder="Color Del Animal">
  </div>
</div>
   <div class="field">
  <label>Peso</label>
   <div class="control">
  <div class="select">
    <select>
      <option>Selecciona Peso</option>
      <option>1kg- 3kg</option>
      <option>5kg- 7kg</option>
      <option>8kg- 10kg</option>
      <option>10kg- 15kg</option>
      <option>15kg- 20kg</option>
      <option>20kg- 25kg</option>
    </select>
  </div>
</div>
</div>
   <div class="field">
  <label>Edad</label>
  <div class="control">
  <div class="select">
    <select>
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
    <select>
      <option>Selecciona Genero</option>
      <option>Macho</option>
      <option>Hembra</option>
    </select>
  </div>
</div>
</div>
   <div class="field">
  <label class="checkbox">
  <input type="checkbox">
 Todas Las Vacunas
</label>
</div>
<router-link  to="/Reportt">
     <a class="button is-primary">Guardar</a>
</router-link>
    </form>
  </div>
</template>
<style>
.form{
  border: solid 5px rgb(27, 230, 179);
  width: 50%;
}
div > label{
  color: black;
}
</style>