

<template lang="html">
  <div class="corps">
      <div class="navigation">
        <img class="icon-ispm" src="../assets/sandratra/logo-ispm.png">
        <div class="div-liens">
          <router-link to="" class="div-liens-element">
            <img class="icon-nav" src="../assets/zara/Books_icon-icons.com_76879.png">
            <h1>Emprunt</h1>
          </router-link>
          <router-link to="/profil" class="div-liens-element">
            <img class="icon-nav" src="../assets/zara/avatar_face_man_boy_profile_smiley_happy_people_icon_181659.png">
            <h1>Profil</h1>
          </router-link>
        </div>
        <div class="div-recherche">
          <form class="recherche">
            <input type="text" placeholder="Entrer un titre">
            <img class="icon-nav" src="../assets/zara/searchmagnifierinterfacesymbol1_79893.png">
          </form>
          <button style="margin-top : 5px">Déconnexion</button>
        </div>
      </div>
      <br>
      <div class="card">
        <!-- <img class="icon-livre" src="../assets/logo.png">  -->
        <div>
            <!-- <h3 class="statut-livre">Statut du livre</h3>
            <h1 class="titre-livre">Titre du livre</h1>
            <h2 class="auteur-livre">Auteur</h2> -->
            <livre_emprunt/>
        </div>
      </div>
    </div>
    
</template>
<script lang="ts">
import livre_emprunt from '../components/zara/livre_emprunt.vue'

export default {
  components: {
    livre_emprunt
  },

};


</script>
<style lang="css">

.icon-ispm {
  width: 130px;
}

.icon-nav {
  width: 50px;
}
.corps {
  padding: 0;
  margin: 0;
  height: 100vh;
}

.navigation {
 display: flex;
 align-items: flex-start;
 justify-content: space-between;
 position: sticky;
 top: 0;
 background-color: white;
 margin-bottom: 12px;
 z-index: 1;
}

.div-liens {
  display: flex;
  flex-basis: 1;
  flex-direction: row;
}
.div-liens-element {
  display: flex;
  margin: 10px;
  padding: 0px 60px;
  border-radius: 10px;
  align-items: center;
  text-decoration: none;
  background: #f0f2f5;
  color: black;
  transition: color .2s;

}

.div-liens-element h1 {
 font-size: 1rem;
}

.div-liens-element img {
 margin-right: 10px ;
}

.div-liens-element:hover {
  background: #e4e6eb;  
  color: black;
}

.colonne-2 {
  padding: 10px;
  flex: 3;
}

.colonne-2 input, select {
  border-radius: 10px;
}

.recherche img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
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

.div-recherche {
  display: flex;
  justify-content: flex-end;
  background: white;
  padding: 10px;
  flex-direction: column; 

}

</style>
