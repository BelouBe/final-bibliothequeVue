<template lang="">
  <div class="ajout_container">
    <form class="info">
      <p class="titre">Ajouter un oeuvre</p>
      <span @click="closeAjout">X</span>
      <div class="item">
        <input type="text" placeholder="Categorie" v-model="categorie" />
        <input type="text" placeholder="Titre" v-model="titre" />
      </div>
      <div class="item">
        <p class="description">Description :</p>
        <input type="text" v-model="apropos" />
      </div>
      <div class="valider">
        <button @click="ajouter">Ajouter</button>
      </div>
    </form>
  </div>
</template>

<script>
import config from "@/types/config";
export default {
  data() {
    return {
      categorie: "",
      titre: "",
      apropos: "",
    };
  },
  methods: {
    closeAjout() {
      console.log(this.newBook);
      return this.$emit("return", null);
    },
    ajouter() {
      fetch(config + "/api/bookPhysique/create", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          titre: this.titre,
          categorie: this.categorie,
          apropos: this.apropos,
          etat: "disponible",
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.$emit("goToAccueil");
        });
    },
  },
  computed: {
    date() {
      const d = new Date();
      const day = d.getDate();
      const month = d.getMonth();
      const year = d.getFullYear();
      const date = year + "-" + month + "-" + year;
      return date;
    },
  },
};
</script>

<style scoped>
.ajout_container {
  position: relative;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  position: absolute;
  background-color: #253649;
  width: 40%;
  height: 80%;
  border-radius: 5%;
  box-shadow: 0px 0px 22px rgba(0, 0, 26, 0.158);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.description {
  font-size: 1.2rem;
}
.titre {
  padding: 0;
  color: white;
  font-size: 2rem;
}
.description {
  padding: 0;
  color: white;
  font-size: 1.2rem;
}
span {
  width: 30px;
  height: 30px;
  font-size: 1.5rem;
  color: white;
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
.item input {
  width: 200px;
  height: 40px;
  background-color: rgba(0, 0, 26, 0.158);
  border: none;
  text-align: center;
  color: white;
}
.item input:focus {
  box-shadow: 0px 0px 22px #309e3b;
  border: none;
}

button {
  width: 150px;
  height: 45px;
  border-radius: 20px/50px;
  color: #309e3b;
  font-size: larger;
  background: rgb(236, 236, 236);
  box-shadow: 0px 0px 22px #309e3b;
}
</style>
