<template>
  <div id="signin">
    <div class="conteneur">
      <div class="tete">
        <h1>E-Bibiliothèque</h1>
        <div class="form-title text-white mt-4 mb-4">Créer votre compte</div>
      </div>
      <div class="corps">
        <table>
          <tr>
            <td>
              <div class="input-field">
                <label for="nom">Nom</label><br />
                <input
                  type="text"
                  id="nom"
                  autocomplete="off"
                  name="nom"
                  v-model="nom"
                />
              </div>
            </td>
            <td>
              <div class="input-field">
                <label for="prenom">Prénom</label><br />
                <input
                  type="text"
                  id="prenom"
                  autocomplete="off"
                  name="prenom"
                  v-model="prenom"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="input-field">
                <label for="matricule">Matricule</label><br />
                <input
                  type="text"
                  id="matricule"
                  autocomplete="off"
                  name="matricule"
                  v-model="matricule"
                />
              </div>
            </td>

            <td>
              <div class="input-field">
                <label for="numero">Téléphone</label><br />
                <input
                  type="text"
                  id="numero"
                  autocomplete="+261"
                  name="numero"
                  v-model="numero"
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="input-field">
                <label for="email">Email</label><br />
                <input
                  type="email"
                  id="email"
                  autocomplete="off"
                  name="email"
                  v-model="email"
                />
              </div>
            </td>

            <td>
              <div class="input-field">
                <label for="password">Password</label><br />
                <input
                  type="password"
                  id="password"
                  name="password"
                  v-model="password"
                />
              </div>
            </td>
          </tr>
        </table>
        <p
          id="error"
          class="text-white bg-danger container"
          style="color: rgba(255, 0, 0, 0.8); display: none"
        >
          Il y a une erreur
        </p>
      </div>
      <div class="compte">
        <p @click="login()" class="forgot-pw compte mt-4 mb-4">
          Vous avez déjà un compte ?
        </p>
      </div>
      <div class="btn">
        <button v-on:click="valider()" class="login">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
console.log("hello");

import { defineComponent } from "vue";
import router from "@/router";
<<<<<<< HEAD
import config from "@/types/config";
=======
>>>>>>> 47e3927719bef1271c6f8111eecb60d9632477c5

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      nom: "",
      prenom: "",
      matricule: "",
      email: "",
      numero: "",
      password: "",
    };
  },
  methods: {
    login() {
      router.push({ name: "Login" });
    },
    valider() {
      if (
        this.nom == "" ||
        this.prenom == "" ||
        this.email == "" ||
        this.numero == "" ||
        this.password == "" ||
        this.matricule == ""
      ) {
        document.getElementById("error").style.display = "block";
        setTimeout(
          () => (document.getElementById("error").style.display = "none"),
          3000
        );
      } else {
        fetch(config + "/api/user/create", {
          method: "post",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            nom: this.nom,
            prenom: this.prenom,
            matricule: this.matricule,
            email: this.email,
            numero: this.numero,
            password: this.password,
          }),
        })
          .then((result) => result.json())
          .then((responseJson) => {
            console.log(responseJson);
            if (responseJson == false) {
              document.getElementById("error").style.display = "block";
              // setTimeout(
              //   () => (document.getElementById("error").style.display = "none"),
              //   3000
              // );
            } else {
              router.push({ name: "AcceuilEmprunt" });
            }
          });
      }
    },
<<<<<<< HEAD
=======
    valider() {
      router.push({ name: "Login" });
    },
>>>>>>> 47e3927719bef1271c6f8111eecb60d9632477c5
  },
});
</script>

<style lang="scss" scoped>
// .corpsSignIn{
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   padding: 0;
// }
#signin {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #3f51b5;
  height: max-content;
  padding: 75px 0 75px 0;
  // padding-bottom: 4em;
  // padding-top: 6em;
}
input {
  border-radius: 6px;
}
table {
  margin: 0 auto;
  text-align: left;
}
td {
  padding: 2em;
}
input {
  width: 300px;
  height: 40px;
}
label {
  color: aliceblue;
}
button {
  min-height: 60px;
  font: 500 16px/1 "Roboto", sans-serif;
  width: 675px;
  display: block;
  color: #fff;
  background: #344397;
  border: none;
  outline: 0;
}
.compte {
  cursor: pointer;
}
<<<<<<< HEAD
.compte:hover {
  text-decoration: underline;
}

.corps {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: max-content;
}

.btn {
  margin: 0 auto;
}
.marge {
  display: flex;
  align-items: center;
  margin-top: 50px;
}
</style>
=======
</style>
>>>>>>> 47e3927719bef1271c6f8111eecb60d9632477c5
