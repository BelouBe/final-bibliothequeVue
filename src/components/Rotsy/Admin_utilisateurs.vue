<template lang="">
    <div class="admin_utilisateurs_container">
        <div class="fondNoir" v-if="showSwall">
            <div class="suppression_container">
                <div class="swall">
                    <p>Voulez-vous vraiment supprimer ?</p>
                    <div class="gif">
                        <img src="../../assets/Rotsy/Icon_delete.png" alt="icon-delete">
                    </div>
                    <div class="btnContainer">
                        <button>Supprimer</button>
                        <button @click="toggleSwall">Annuler</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="utilisateurs">
            <div class="haut">
                <div class="haut_gauche">
                    <p>Utilisateurs</p>
                    <p>256 inscrits</p>
                </div>
                <div class="recherche">
                    <img src="../../assets/Rotsy/search.png" alt="search_icon">
                    <input type="text" placeholder="rechercher">
                </div>
            </div>
            <div class="bas">
                <div class="entete">
                    <p>matricule</p>
                    <p>nom</p>
                    <p>email</p>
                    <p>numero</p>
                    <p>status</p>
                    <p>action</p>
                </div>
                <div class="liste_users">
                    <ul class="liste">
                        <li v-for="user in listes" :key="user.key" class="one_user">
                            <p>{{user.matricule}}</p>
                            <div>
                                <img src="../../assets/Rotsy/fody.jpg" alt="img_profil">
                                <p>{{user.nom}}</p>
                            </div>
                            <p>{{user.email}}</p>
                            <p>{{user.numero}}</p>
                            <!-- <p>{{user.statut}}</p> -->
                            <input type="checkbox" :checked="user.statut===1?true:false">
                            <img src="../../assets/Rotsy/Icon_delete.png" alt="delete_user" @click="chooseUser(user)">
                        </li>
                    </ul>
                </div>

            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return{
                listes: [
                    {
                        key: 1, matricule: '#109 085', nom: 'Rakotomalala berthino', email: "rakotomalalathino@gmail.com", numero: '0341435018', statut: 0
                    },
                    {
                        key: 2, matricule: '#109 086', nom: 'Rakotomalala berthino', email: "rakotomalalathino@gmail.com", numero: '0341435018', statut: 1
                    },
                    {
                        key: 3, matricule: '#109 087', nom: 'Rakotomalala berthino', email: "rakotomalalathino@gmail.com", numero: '0341435018', statut: 1
                    },
                    {
                        key: 4, matricule: '#109 088', nom: 'Rakotomalala berthino', email: "rakotomalalathino@gmail.com", numero: '0341435018', statut: 0
                    },
                    {
                        key: 5, matricule: '#109 089', nom: 'Rakotomalala berthino', email: "rakotomalalathino@gmail.com", numero: '0341435018', statut: 0
                    }
                ],
                showSwall: false,
                rubrique: '',
                userChoosen: null
            }
      },

        methods: {
            toggleSwall(){
                this.showSwall = !this.showSwall
            },
            chooseUser(user){
                this.toggleSwall()
                this.userChoosen = user
            },

            // modify(item, e){ 
            //     this.itemChoosen = item
            //     this.toggleSwall()
            // },
            // deleting(item, e){
            //     console.log(e.target.alt)
            // }
        },

    }
</script>

<style scoped>
.admin_utilisateurs_container{
    position: relative;
    width: 95%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
}
.fondNoir{
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.747);
    z-index: 5;
}
.suppression_container{
    position: relative;
    height: 85%;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.swall{
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
.swall p{
    padding: 0;
    margin: 0;
    color: white;
    font-size: 1.8rem;
}
.gif{
    border: 2px solid red;
    border-radius: 50%;
    width: 30%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.gif img{
    width: 70px;
    height: 60px;
}
.btnContainer {
    width:100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.btnContainer button{
    background-color: #466f9e6c;
    width: 40%;
    height: 50px;
    border-radius: 20px/50px;
    border: 0;
    font-size: 1.2rem;
    color: white;
    transition: all 0.5s ease;
}
.btnContainer button:first-child:hover{
    box-shadow: 0px 0px 22px rgb(255, 2, 2);
    color: red;
}
    .btnContainer button:nth-child(2):hover{
    box-shadow: 0px 0px 22px rgb(255, 188, 2);
    color:rgb(255, 188, 2);
}
.utilisateurs{
    position: relative;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 25px;
    padding: 10px 20px;
    overflow-y: scroll;
}
.haut{
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.haut img{
    width: 35px;
}
.haut input{
    text-align: center;
}
.haut_gauche p:first-child{
    font-size: 2.3rem;
}
.haut_gauche p:nth-child(2){
    font-size: 1.4rem;
    transform: translateY(-50%);
}
.entete{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #B8B8B8;
    font-weight: bold;
    font-size: larger;
    height: 40px;
    padding: 0 10px;
    border: 1px solid #173763;
    border-radius: 10px;
}
.liste_users{
    position: relative;
    overflow-y: scroll ;
}
.liste{
    padding: 0;
}
.one_user{
    width: 100%;
    margin-top: 1%;
    margin-right: 10%;
    padding: 10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #707070;
    border-radius: 10px;
}
.one_user img:first-child{
    width: 60px;
    height: 60px;
    border-radius: 50%;
}
.one_user img[alt='delete_user']{
    width: 50px;
    height: 40px;
    cursor: pointer;
}
input[type="checkbox"]{
    width: 20px;
    height: 20px;
}
.vert{
    background-color:green !important;

}
.rouge{
    background-color:red !important;
}

</style>