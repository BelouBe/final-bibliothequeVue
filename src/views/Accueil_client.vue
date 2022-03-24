import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { DefineComponent from 'vue';

<template lang="html">
  <div class="corps">
    <div class="colonne-1">
      <router-link to="" class="colonne-1-element">
        <img class="icon-nav" src="../assets/zara/bookshelf_icon-icons.com_54414.png">
        <h1>Bibliothèque numérique</h1>
      </router-link>
      <router-link to="" class="colonne-1-element">
        <img class="icon-nav" src="../assets/zara/Books_icon-icons.com_76879.png">
        <h1>Emprunt</h1>
      </router-link>
      <router-link to="/profil" class="colonne-1-element">
        <img class="icon-nav" src="../assets/zara/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png">
        <h1>Profil</h1>
      </router-link>
    </div>
    <div class="colonne-2">
      <div class="recherche-comp">
        <form class="recherche">
          <input type="text" placeholder="Entrer un titre">
          <img class="icon-nav" src="../assets/zara/searchmagnifierinterfacesymbol1_79893.png">
        </form>
        <form class="recherche-2">
          <select>
              <option>Catégorie 1</option>
              <option>Catégorie 2</option>
              <option>Catégorie 3</option>
          </select>
        </form>
      </div>
      <br><br>
      <div class="card">
        <img class="icon-livre" src="../assets/logo.png"> 
        <div>
          <h3 class="statut-livre">Statut du livre</h3>
          <h1 class="titre-livre">Titre du livre</h1>
          <h2 class="auteur-livre">Auteur</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};


</script>
<style lang="css">

.corps {
  padding: 0;
  margin: 0;
  height: 100vh;
  display: flex;
  justify-content: space-between;
}

.icon-nav {
  width: 40px;
  height: 40px;
}

.colonne-1 {
  display: flex;
  flex-basis: 1;
  flex-direction: column;
}
.colonne-1-element {
  display: flex;
  margin: 10px;
  padding: 0px 20px;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;
  background: #f0f2f5;
  color: black;
  transition: color .2s;
  padding: 5px;
}

.colonne-1-element h1 {
 font-size: 1rem;
}

.colonne-1-element img {
 margin-right: 10px ;
}

.colonne-1-element:hover {
  background: #e4e6eb;  
  color: black;
}

.colonne-2 {
  padding: 10px;
  flex: 3;
}

.colonne-2 img {
  border-radius: 10px;
   margin-right: 20px;
}

.colonne-2 input, select {
  border-radius: 10px;
}

.recherche img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
}

.card {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.card img {
  margin: 0 auto;
  width: 200px;
  height: 200px;
}

.recherche-comp {
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 10px;

}

</style>
