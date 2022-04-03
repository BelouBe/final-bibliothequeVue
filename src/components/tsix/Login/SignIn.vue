<template>
  <div id="signin">
    <div class="container">
      <div class="tete">
        <h1>E-Bibiliothèque</h1>
        <div class="form-title">Créer votre compte</div>
      </div>
      <div class="corps">
        <table>
          <tr>
            <td>
              <div class="input-field">
                <label for="nom">Nom</label><br />
                <input type="text" id="nom" autocomplete="off" name="nom" />
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
                />
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div class="input-field">
                <label for="prenom">Matricule</label><br />
                <input
                  type="text"
                  id="matricule"
                  autocomplete="off"
                  name="prenom"
                />
              </div>
            </td>

            <td>
              <div class="input-field">
                <label for="tel">Téléphone</label><br />
                <input type="text" id="tel" autocomplete="+261" name="tel" />
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
                />
              </div>
            </td>

            <td>
              <div class="input-field">
                <label for="password">Password</label><br />
                <input type="password" id="password" name="password" />
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="compte">
        <p @click="valider()" class="forgot-pw compte">
          Vous avez déjà un compte ?
        </p>
      </div>
      <div class="btn">
        <button v-on:click="action" class="login">Valider</button>
      </div>
    </div>
  </div>
</template>

<script>
console.log("hello");

import { defineComponent } from "vue";
import router from '@/router'

export default defineComponent({
  name: "App",
  components: {},
  methods: {
    action() {
      if (this.txtsubmit != "enregistrer") {
        return (this.txtsubmit = "enregistrer");
      } else {
        return (this.txtsubmit = "valider");
      }
    },
    valider() {
      router.push({name: 'Login'})
    }
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
  background: #3f51b5;
  position: relative;
  height: 780px;
  padding-bottom: 5em;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
input {
  border-radius: 6px;
}
table{
  margin: 0 auto;
  text-align: left;
}
td{
  padding: 2em;
}
input{
  width: 300px;
  height: 40px;
}
label{
  color: aliceblue;
}
button{
  min-height:60px; 
  font:500 16px/1 'Roboto',sans-serif; 
  width:675px;
  display:block; 
  color:#FFF; 
  background: #344397;
  border:none; 
  outline:0; 
  }
.compte{
  cursor: pointer;
}
</style>