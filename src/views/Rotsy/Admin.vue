<template lang="">
    <div>
        <div class="header">
            <p>E - Bibliothèque ISPM</p>
            <div class="deconnexion">
                <p>Déconnexion</p>
            </div>
        </div>
        <div class="admin">
            <div class="leftPart">
                <div class="informations">
                    <div class="user">
                        <img src="../../assets/Rotsy/user.png" alt="user">
                        <p>Admin</p>
                    </div>
                    <div class="rubriques">
                        <p @click="changeRubrique('accueil')" :class="content==='accueil' ? 'selected':''">Accueil</p>
                        <!-- <p @click="changeRubrique('numerique')" :class="content==='numrerique'?'selected':''">Gestion bibliothèque numérique</p> -->
                        <p @click="changeRubrique('physique')" :class="content==='physique'?'selected':''">Gestion bibliothèque physique</p>
                        <p @click="changeRubrique('utilisateur')" :class="content==='utilisateur'?'selected':''">Gestion des utilisateurs</p>
                    </div>
                </div>
                <div class="apropos">
                    <img src="../../assets/Rotsy/icon_help.png" alt="help" 
                    width="30"
                    height="30"
                    >
                    <p>A propos</p>
                </div>
            </div>
            <div class="rightPart">
                <Admin_accueil v-if="content==='accueil'" @goTo="changeSection"/>
                <Admin_biblio_physique v-if="content==='physique'"/>
                <Admin_utilisateur v-if="content==='utilisateur'"/>
                <div v-if="content!=='utilisateur'" class="footer">
                    <div class="sociaux">
                        <img
                        src="../../assets/Rotsy/fb.png"
                        alt="facebook"
                        />
                        <img
                        src="../../assets/Rotsy/twitter.png"
                        alt="twitter"
                        />
                    </div>
                    <div class="copyright">Copyright by Zala Mankafy Fiainana | E-Bibliothèque</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Admin_accueil from "../../components/Rotsy/Admin_accueil.vue"
import Admin_biblio_physique from "../../components/Rotsy/Admin_biblio_physique.vue"
import Admin_utilisateur from "../../components/Rotsy/Admin_utilisateurs.vue"
    export default{
        components: {Admin_accueil, Admin_biblio_physique, Admin_utilisateur},

        data(){
            return {
                content: "accueil"
            }
        },

        methods:{
            changeRubrique(to){
                this.content = to
            },
            changeSection(payload){
                this.content = payload.destination
            },
            async loadBooks(){
                await fetch("http://192.168.43.175:3000/api/bookPhysique").then(res=>{
                    res.json().then(resultat=>console.log(resultat))
                }).catch(err=>{
                    console.log(err)
                })
            }
        },

        mounted(){
            this.loadBooks()
        },


    }
</script>

<style scoped>
.header{
    height: 90px;
    background:#041226;
    color: #E4AE2B;
    font-size: 1.7rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
}

.header p:hover{
    cursor: pointer;
}

.deconnexion{
    font-size: 1.5rem
}
.deconnexion:hover{
    cursor: pointer;
}
.admin{
    min-height: calc(100vh - 90px);
    overflow: hidden;
    display: flex;
  flex-wrap: wrap;
}


    /* Left part*/
.leftPart {
    /* position: relative; */
    width: 20%;
    background: #253649;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
}

.user {
    text-align: center;
    font-size: larger;
    color: #E4AE2B;

}
.user img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
}

.rubriques {
    color: rgb(141, 141, 141);
    font-size: 1.2rem;
    margin-top: 5vh;
    /* text-align: center; */
}

.rubriques p{
    transition: all 0.5s ease;
}

.rubriques p:hover {
    cursor: pointer;
    font-size: 1.25rem;
    color: rgb(255, 255, 255);
}
.selected{
    color: white;
}
.apropos {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
}

.apropos:hover{
    cursor: pointer;
}
.apropos p {
    margin: 0;
    padding-left: 15px;
    color:rgb(255, 255, 255);
}

    /*Right part*/
.rightPart { /* ilay disposition mitsangana item sy footer*/    
    /* position: relative;*/
    flex: 1;
    background: #1C2938;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}


/* footer */
.footer{
    background: #041226;
    /* position: absolute; */
    width: 100%;
    bottom: 0;
}

.sociaux{
    height: 50px;
    background: #041226;
    display: flex;
    justify-content: center;
    align-items: center;
}

.sociaux img {
    width: 2.5em;
    height: 2.5em;
}

.copyright{
    height: 50px;
    background: #041226;
    padding-bottom: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(73, 73, 73);
}
</style>
