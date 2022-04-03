<template lang="">
  <div class="suppression_container">
    <div class="swall">
      <p>Voulez-vous vraiment supprimer ?</p>
      <div class="gif">
        <img src="../../assets/Rotsy/Icon_delete.png" alt="icon-delete" />
      </div>
      <div class="btnContainer">
        <button @click="deleteItem">Supprimer</button>
        <button @click="closeSuppr">Annuler</button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/types/config";

export default {
  props: ["item"],
  methods: {
    closeSuppr() {
      return this.$emit("closeSwall", null);
    },
    deleteItem() {
      fetch(config + "/api/bookPhysique/delete/" + this.item._id, {
        method: "delete",
      })
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          this.$emit("goToAccueil");
          this.closeSuppr();
        });
    },
  },
};
</script>

<style scoped>
.suppression_container {
  position: relative;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swall {
  background-color: #163252b2;
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;

  box-shadow: 0px 0px 22px wheat;
}
.swall p {
  padding: 0;
  margin: 0;
  color: white;
  font-size: 1.8rem;
}
.gif {
  border: 2px solid red;
  border-radius: 50%;
  width: 30%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.gif img {
  width: 70px;
  height: 60px;
}
.btnContainer {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.btnContainer button {
  background-color: #466f9e6c;
  width: 40%;
  height: 50px;
  border-radius: 20px/50px;
  border: 0;
  font-size: 1.2rem;
  color: white;
  transition: all 0.5s ease;
}
.btnContainer button:first-child:hover {
  box-shadow: 0px 0px 22px rgb(255, 2, 2);
  color: red;
}
.btnContainer button:nth-child(2):hover {
  box-shadow: 0px 0px 22px rgb(255, 188, 2);
  color: rgb(255, 188, 2);
}
</style>
