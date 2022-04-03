<template>
  <div class="corpsLogin">
    <div class="text">
      <h1>Bienvenue sur <span>E-Bibliothèque</span></h1>
      <p>
        Ici vous pouvez consultez les documents numériques. Vous pouvez aussi
        emprunter des livres et voir les livres ou documents disponibles sur
        notre platforme.
      </p>
      <img
        id="imagelogo"
        src="../assets/tsix/images/HeaderVector.png"
        alt="image"
      />
    </div>
    <div id="signin">
      <h1>E-Bibiliothèque</h1>
      <div class="form-title">Se connecter</div>
      <div class="input-field">
        <input
          type="text"
          id="matricule"
          autocomplete="off"
          name="matricule"
          v-model="matricule"
        />
        <i class="material-icons"></i>
        <label for="matricule">Matricule</label>
      </div>
      <div class="input-field">
        <input
          type="password"
          id="password"
          name="password"
          v-model="password"
        />
        <i class="material-icons"></i>
        <label for="password">Password</label>
      </div>
      <p
        id="error"
        style="position: absolute; color: rgba(255, 0, 0, 0.8); display: none"
      >
        erreur
      </p>
      <router-link to="SignIn" class="forgot-pw">Créer un compte ?</router-link>
      <!-- <router-link to="Profil">Profil</router-link> -->
      <button v-on:click="validation()" class="login">Se connecter</button>
    </div>
  </div>
</template>

<script>
console.log("hello");

import { defineComponent } from "vue";
import router from "@/router";
import Singleton from "../types/Singleton";
export default {
  props: {},
  name: "App",
  components: {},
  mounted() {
    const input = document.querySelector("input");
    console.log(input);
    input.addEventListener("blur", (e) => {
      console.log("ehh");

      if (e.target.value != "") {
        e.target.classList.add("not-empty");
      } else {
        e.target.classList.remove("not-empty");
      }
    });
  },

  data() {
    return {
      matricule: "",
      password: "",
      show: false,
      loginMode: true,
    };
  },

  // data() {
  //   return {
  //     txtsubmit: 'connecter'
  //   }
  // },
  methods: {
    // action() {
    //   if(this.txtsubmit != "connecter") {
    //     return this.txtsubmit = "connecter"
    //   }else {
    //     return this.txtsubmit = "deconnecter"
    //   }
    // }

    validation() {
      console.log(this.matricule, this.password);

      fetch("http://192.168.43.175:3000/api/user/login", {
        method: "post",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          matricule: this.matricule,
          password: this.password,
        }),
      })
        .then((result) => result.json())
        .then((responseJson) => {
          if (responseJson == false) {
            //erreur alefa
            document.getElementById("error").style.display = "block";
            setTimeout(
              () => (document.getElementById("error").style.display = "none"),
              3000
            );
          } else {
            //makany am accueil
            console.log(responseJson[0].nom);
            let response = responseJson[0];
            Singleton.Utilisateur = new Singleton(
              response._id,
              response.nom,
              response.prenom,
              response.email,
              response.matricule,
              response.numero
            );
            router.push({ name: "AcceuilEmprunt" });
          }
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.corpsLogin {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  margin: 0;
  padding: 0;
}
.text {
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: relative;
  justify-content: center;
  align-items: center;
}
span {
  color: #3f51b5;
}
#imagelogo {
  width: 400px;
  height: 400px;
}
#signin {
  width: 50%;
  background: #3f51b5;
  margin: 50px 50px;
  box-shadow: 0 0 64px rgba(0, 0, 0, 0.5);
  padding: 100px;
  position: relative;
  overflow: hidden;
}
#signin .form-title {
  font: 500 16px/1 "Roboto", sans-serif;
  color: #ebebeb;
  text-align: center;
  margin: 35px 0;
}

#signin .input-field {
  position: relative;
  height: 50px;
  margin: 35px 0;
  transition: all 300ms;
}
// #signin .input-field i{
//   position:absolute;
//   bottom:28px;
//   left:15px;
//   color:#BBBBBB;
//   height:0;
//   visibility:hidden;
//   font-size:100%;
//   transition:height 250ms;
//   }
#signin .input-field label {
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: 20px;
  left: 4px;
  font: 400 16px/1 "Roboto", sans-serif;
  color: #fff;
  opacity: 1;
  transition: all 300ms;
}
#signin .input-field input {
  // width:calc(100% - 70px);
  width: 100%;
  height: 4px;
  font: 500 16px/1 "Roboto", sans-serif;
  padding: 0 20px 0 50px;
  border: none;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
  color: #606060;
  border-radius: 6px;
  outline: 0;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 300ms;
}

#signin .forgot-pw {
  font: 600 14px/1 "Roboto", sans-serif;
  color: #2e3c89;
  text-decoration: none;
  float: right;
  margin: 0 0 25px 0;
  display: block;
}
#signin button.login {
  min-height: 60px;
  font: 500 16px/1 "Roboto", sans-serif;
  width: 100%;
  padding: 20px;
  display: block;
  background: #324192;
  color: #fff;
  border: none;
  outline: 0;
  cursor: pointer;
  position: absolute;
  left: 0;
  bottom: 0;
}

// #signin .input-field input:focus{
//   color:#333;
//   }
#signin .input-field input:focus,
#signin .input-field input.not-empty {
  height: auto;
  padding: 14px 20px 14px 50px;
}
// #signin .input-field input:focus + i, #signin .input-field input.not-empty + i{
//   font-size:24px;
//   bottom:26px;
//   height:10px;
//   visibility:visible;
//   }
#signin .input-field input:focus + i + label,
#signin .input-field input.not-empty + i + label {
  font-size: 12px;
  margin-top: -15px;
  opacity: 0.7;
  animation: label 300ms 1;
}

@keyframes label {
  0% {
    margin-top: -15px;
  }
  50% {
    margin-top: -25px;
  }
  100% {
    margin-top: -15px;
  }
}
</style>