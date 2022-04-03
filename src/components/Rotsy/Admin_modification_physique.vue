<template lang="">
  <div class="modification_container">
    <div class="section_modification">
      <p class="title">Modification d'une oeuvre</p>
      <span @click="closeModif">X</span>
      <form class="infoItem">
        <div class="top_content">
          <div class="left">
            <div class="input_titre">
              <label for="titre">Titre :</label>
              <input type="text" v-model="titre" />
            </div>
            <div class="input_date">
              <label for="date">Date :</label>
              <input type="date" v-model="dateDeParution" />
            </div>
          </div>
          <div class="right">
            <p>Description :</p>
            <input type="text" v-model="apropos" />
          </div>
        </div>
        <button type="submit" @click="updateBook">Mette à jour</button>
      </form>
    </div>
  </div>
</template>

<script>
import config from "@/types/config";
export default {
  props: ["item"],

  data() {
    return {
      titre: this.item.titre,
      dateDeParution: this.item.dateDeParution,
      apropos: this.item.apropos,
    };
  },
  methods: {
    closeModif() {
      return this.$emit("closeSwall", null);
    },

    updateBook() {
      fetch(config + "/api/bookPhysique/update", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          id: this.item._id,
          newPhysicalBook: {
            ...this.item,
            titre: this.titre,
            dateDeParution: this.dateDeParution,
            apropos: this.apropos,
          },
        }),
      })
        .then((response) => response.json(response))
        .then((responseJson) => {
          console.log(responseJson);
          this.$emit("goToAccueil");
          this.closeModif();
        });
    },
  },
};
</script>

<style scoped>
.modification_container {
  position: relative;
  background-color: rgba(0, 0, 0, 0.397);
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section_modification {
  position: absolute;
  background-color: #163252b2;
  width: 80%;
  min-height: 60%;
  border-radius: 25px;
  box-shadow: 0px 0px 22px rgba(0, 0, 26, 0.158);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 1%;
  padding-bottom: 2%;
}
.title {
  padding: 0;
  color: white;
  font-size: 2rem;
  color: white;
  font-size: 2rem;
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
form {
  position: relative;
  margin-top: 2%;
  width: 80%;
  height: 80%;
}
.top_content {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left {
  height: auto;
  flex-direction: column;
}
.left div {
  margin-top: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.left label {
  width: 20%;
  height: 40px;
  font-size: 1.3rem;
  color: white;
}
.left input {
  width: 70%;
  height: 40px;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 5px;
}
.right {
  flex: 1;
}
.right p {
  font-size: 1.3rem;
  color: white;
}
.right input {
  width: 90%;
  height: 150px;
  border-radius: 5px;
  overflow: scroll;
}
button {
  width: 200px;
  height: 45px;
  margin-top: 5%;
  border-radius: 20px/50px;
  color: #93309e;
  font-size: larger;
  background: rgb(236, 236, 236);
  box-shadow: 0px 0px 22px #93309e;
}
</style>
