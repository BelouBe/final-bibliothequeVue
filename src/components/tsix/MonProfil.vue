<template>
  <div class="contains">
    <div class="entete">
      <div class="profil fadeInLeft">
        <img
          class="imgprofil fadeIn first"
          src="../../assets/tsix/images/ispm.jpg"
          alt="image de votre profil"
          width="200"
          height="200"
        />
        <div class="admin fadeIn first">
          <p>{{ nomcomplet(nom, prenom) }}</p>
          <p>M {{ matricule }}</p>
          <p class="txtgris">{{ email }}</p>
          <p class="txtgris">{{ tel }}</p>
          <br /><br />
          <a href="#"
            ><img
              id="imgmodifprofil"
              src="../../assets/tsix/icons/userEditGray.png"
              alt="modifier"
              width="30"
          /></a>
        </div>
      </div>

      <div class="document fadeInRight">
        <div class="one">
          <p id="titre">Ces documents vous intéressent-ils?</p>
        </div>
        <div class="interessant fadeIn first">
          <div class="two" v-for="doc in docs" :key="doc.id">
            <div class="doc">
              <div class="livre">
                <img
                  src="../../assets/tsix/icons/adoberouge.png"
                  alt="adobe rouge"
                  id="imgadoberouge"
                  width="50"
                  height="60"
                />
                <div class="aproposlivre">
                  <p>{{ doc.titre }}</p>
                  <p class="extrait">{{ doc.apropos }}</p>
                </div>
              </div>
              <img
                src="../../assets/tsix/icons/icon.png"
                alt="detail"
                width="8"
                height="50"
                style="padding-left: 90px; padding-top: 0.8em"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="corps">
      <div class="electronique fadeInDown">
        <h4>Emprunts en cours :</h4>
        <div
          class="doc fadeIn second"
          v-for="livre in encours"
          :key="livre._id"
        >
          <div class="livre">
            <img
              src="../../assets/tsix/icons/adobebleu.png"
              alt="adobe bleu"
              id="imgadobebleu"
              width="50"
              height="60"
            />
            <div class="aproposlivre">
              <p>{{ livre.titre }}</p>
              <p class="extrait">{{ livre.apropos }}</p>
            </div>
          </div>
          <div class="deb">
            <p>22/02/2021</p>
          </div>
          <div class="fin">
            <p>21/04/2021</p>
          </div>
        </div>
      </div>

      <div class="attent fadeInDown">
        <div class="element">
          <h4>Emprunts en attent :</h4>
        </div>
        <div
          class="doc fadeIn second"
          v-for="livre in enattente"
          :key="livre._id"
        >
          <div class="livre">
            <img
              src="../../assets/tsix/icons/adobebleu.png"
              alt="adobe bleu"
              id="imgadobebleu"
              width="50"
              height="60"
            />
            <div class="aproposlivre">
              <p>{{ livre.titre }}</p>
              <p class="extrait">{{ livre.apropos }}</p>
            </div>
          </div>
          <div class="deb">
            <p>22/02/2021</p>
          </div>
          <div class="fin">
            <p>21/04/2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LivreElectronique from "@/types/LivreElectronique";
import Documents from "@/types/Documents";
import { defineComponent, PropType } from "vue";
import Singleton from "@/types/Singleton";
export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      nom: Singleton.Utilisateur?.nom,
      prenom: Singleton.Utilisateur?.prenom,
      matricule: Singleton.Utilisateur?.matricule,
      email: Singleton.Utilisateur?.email,
      tel: Singleton.Utilisateur?.numero,
      docs: [],
      encours: [],
      enattente: [],
    };
  },
  methods: {
    nomcomplet() {
      return this.nom + " " + this.prenom;
    },
  },

  mounted() {
    fetch("http://192.168.43.175:3000/api/bookPhysique")
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.docs = result;
      });

    fetch("http://192.168.43.175:3000/api/bookManagement/encours", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        idUser: Singleton.Utilisateur?.id,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        responseJson.forEach((element) => {
          console.log("----------------------");
          this.docs.forEach((book) => {
            if (
              element.confirmAdministrator == 1 &&
              element.idPhysicalBook === book._id
            ) {
              this.encours.push(book);
              console.log("-----", book);
            }
            if (
              element.confirmAdministrator == 0 &&
              element.idPhysicalBook === book._id
            ) {
              this.enattente.push(book);
              console.log("*****", book);
            }
          });
        });
      });
  },

  props: {
    // livres: {
    //   required: true,
    //   type: Array as PropType<LivreElectronique[]>,
    // },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.contains {
  height: 780px;
  padding-bottom: 5em;
}

.msg {
  position: absolute;
  background: rgba(233, 236, 168, 0.3);
  border-radius: 1em;
  padding: 0.2em;
  bottom: 0%;
  right: 0%;
}
.entete {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.profil {
  display: flex;
  /* background: #1C2938; */
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px 3px rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 3px 3px 3px #000; */
  border-radius: 1.5em;
  /* width: 500px; */
  width: max-content;
  padding: 0.8em;
}
.imgprofil {
  border-radius: 1.5em;
}
.admin {
  padding-left: 0.8em;
  position: relative;
}
.txtgris {
  color: #afafaf;
}
#imgmodifprofil {
  padding-left: 250px;
}
@media (max-width: 550px) {
  #imgmodifprofil {
    padding-left: 150px;
  }
}
.one {
  display: flex;
  padding-left: 0.8em;
  padding-right: 0.8em;
  justify-content: space-between;
}
.boutondoc {
  padding-top: 0.8em;
  padding-right: 0.8em;
}
.document {
  /* background: #1C2938; */
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px 3px rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 3px 3px 3px #000; */
  border-radius: 1.5em;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.extrait {
  color: rgb(255, 255, 255);
}
.one {
  display: flex;
}
.flecheleft {
  background-image: url("../../assets/tsix/icons/flecheleft.png");
  background-repeat: no-repeat;
}
.two {
  display: flex;
  /* background: #1C2938; */
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px 3px rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 3px 3px 3px #000; */
  border-radius: 1.5em;
  /* width: 200px; */
  width: max-content;
  padding: 0.8em;
  margin: 0.8em;
  justify-content: space-between;
}
#imgadoberouge {
  padding-top: 0.5em;
}
.interessant {
  display: flex;
  overflow-x: scroll;
  scrollbar-color: rgb(5, 28, 77) rgb(78, 78, 78);
  scrollbar-width: thin;
}

.interessant::-webkit-scrollbar {
  width: 10px;
}

.interessant ::-webkit-scrollbar-track {
  border-radius: 50px;
  box-shadow: inset 0 0 5px grey;
}

.interessant::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

p,
h4 {
  color: #fff;
  font-size: 0.9em;
  text-align: left;
}
.livre {
  display: flex;
}
.aproposlivre {
  padding-left: 0.5em;
}
.corps {
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  height: max-content;
}
#imgadobebleu {
  padding-top: 0.5em;
}
.doc {
  display: flex;
  justify-content: space-between;
}
.bouton {
  display: flex;
  padding-top: 1.2em;
  justify-content: space-around;
}
.electronique {
  overflow: visible;
  display: flex;
  flex-direction: column;
  /* background: #1C2938; */
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: 3px 13px 20px 3px rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 3px 3px 3px #032d8f; */
  border-radius: 1.5em;
  width: 400px;
  height: 56vh;
  padding: 0.8em;
  margin-top: 1.8em;
  overflow-y: scroll;
  scrollbar-color: rgb(5, 28, 77) rgb(78, 78, 78);
  scrollbar-width: thin;
}
.emprunt {
  display: flex;
  flex-direction: column;
  /* background: #1C2938; */
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -5px 20px 20px 10px rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 3px 3px 3px #09dd62; */
  border-radius: 1.5em;
  width: 400px;
  height: 56vh;
  padding: 0.8em;
  margin-top: 1.8em;
}
.element {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.attent {
  display: flex;
  flex-direction: column;
  background-color: linear-gradient(to top left, #2b5876, #4e4376);
  box-shadow: -10px 13px 20px 3px rgba(0, 0, 0, 0.5);
  border-radius: 1.5em;
  width: 400px;
  height: 56vh;
  padding: 0.8em;
  margin-top: 1.8em;
  margin-left: 8em;
  overflow-y: scroll;
  scrollbar-color: rgb(5, 28, 77) rgb(78, 78, 78);
  scrollbar-width: thin;
}
#imgemprunt {
  border-radius: 1.5em;
  width: 50%;
  height: 100%;
}
.maj {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1.8em;
  padding-left: 3.6em;
}
</style>
