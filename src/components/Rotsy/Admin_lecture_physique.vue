<template lang="">
    <div class="lecture_container">
        <div class="fondNoir" v-if="showSwall">
            <Admin_modification_physique v-if="rubrique==='update'" @closeSwall="toggleSwall" :item="itemChoosen"/>
            <Admin_suppression_physique v-if="rubrique==='delete'" @closeSwall="toggleSwall" :item="itemChoosen"/>
        </div>
        <div class="info" :class="showSwall?'en-arriere':''">
            <p>Lecture des oeuvres</p>
            <span @click="closeLecture">X</span>
            <div class="filtrage">
               <div class="recherche">
                     <img src="../../assets/Rotsy/Icon_search.png" alt="search_icon">
                    <input type="text" placeholder="rechercher">
                </div>
                <div class="par-categorie">
                    <input type="text" placeholder="categorie">
                </div>
            </div>
            <div class="liste_oeuvres">
                <ul class="liste">
                    <li v-for="item in listes" :key="item.key" class="item-oeuvre">
                        <div class="left">
                            <img src="../../assets/Rotsy/Icon_pdf.png" alt="pdf_icon">
                            <div class="info-oeuvre">
                                <p>{{item.titre}}</p>
                                <p>{{item.extrait}}</p>
                            </div>
                        </div>
                        <div class="center">
                            <img src="../../assets/Rotsy/Icon_update.png" alt="icon_update" @click="toggleRubrique(item, $event)">
                            <img src="../../assets/Rotsy/Icon_delete.png" alt="icon_delete" @click="toggleRubrique(item, $event)">
                        </div>
                        <div class="right">
                            <p>{{item.date}}</p>
                            <p>{{item.categorie}}</p>    
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
import Admin_modification_physique from "../../components/Rotsy/Admin_modification_physique.vue"
import Admin_suppression_physique from "../../components/Rotsy/Admin_suppression_physique.vue"
    export default {
        components: {Admin_modification_physique, Admin_suppression_physique},

        data() {
            return{
                listes: [
                    {
                        key: 1, categorie: 'categorie1', titre: 'Livre1', extrait: 'extrait mon livre1', date: '2022-08-01'
                    },
                    {
                        key: 2, categorie: 'categorie2', titre: 'Livre2', extrait: 'extrait mon livre2', date: '2022-08-02'
                    },
                    {
                        key: 3, categorie: 'categorie3', titre: 'Livre3', extrait: 'extrait mon livre3', date: '2022-08-03'
                    },
                    {
                        key: 4, categorie: 'categorie4', titre: 'Livre4', extrait: 'extrait mon livre4', date: '2022-08-04'
                    },
                    {
                        key: 5, categorie: 'categorie5', titre: 'Livre5', extrait: 'extrait mon livre5', date: '2022-08-05'
                    }
                ],
                showSwall: false,
                rubrique: '',
                itemChoosen: null
            }
        },

        methods: {
            closeLecture(){
                return this.$emit('return', null)
            },
            toggleSwall(){
                this.showSwall = !this.showSwall
            },
            toggleRubrique(item, e){
                this.itemChoosen = item
                this.toggleSwall()
                if (e.target.alt==='icon_update'){
                    this.rubrique = 'update'
                }
                else{
                    this.rubrique = 'delete'
                }
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
    .lecture_container{
        position: relative;
        height: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .fondNoir{
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.747);
        z-index: 5;
    }
    .en-arriere{
        z-index: 0;
    }
    .info{
        position: absolute;
        background-color: #253649;
        width: 80%;
        height: 90%;
        border-radius: 5%;
        box-shadow: 0px 0px 22px rgba(0, 0, 26, 0.158);
        display: flex;
        flex-direction: column;
    }
    .info p{
        padding: 0;
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
    .filtrage{
        /* background-color: violet ; */
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 50px;
    }
    .recherche{
        padding: 5px 15px;
        display: flex;
        align-items: center;
    }
    .recherche img{
        margin-right: 10px;
        width: 30px;
        height: 30px;
    }
    input{
        width: 300px;
        height: 40px;
        background-color: rgb(255, 255, 255);
        border: none;
        text-align: center;   
        border-radius: 50px;
    }
    
    input:focus{
        box-shadow: 0px 0px 22px #309E3B;
        border: none;
    }

    .liste_oeuvres{
        overflow-y: scroll;
    }

    .liste{
        margin-top: 1%;
        padding: 2px 15px;
    }
    .item-oeuvre{
        margin-top: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 80px;
        padding: 0px 15px;
        border-radius: 10px;
        background-color: rgba(0, 0, 26, 0.158);
        box-shadow: 0px 3px 5px wheat;
    }
    .left{
        display: flex;
        align-items: center;
    }
    .left img{
        width: 55px;
        height: 70px;
    }
    .info-oeuvre{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .info-oeuvre p{
        font-size: 1.2rem;
        margin-left: 10px;
    
    }
    .info-oeuvre p:first-child{
        font-size: 1.5rem;
    }

    .center{
        margin-right: 3%;
        width: 20%;
        display: flex;
        justify-content: space-around;
    }
    .center img, .center img:hover{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }
    .right{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .right p{
        font-size: 1.3rem;
    }
    .right img{
        width: 45px;
        height: 50px;
        padding-bottom: 7px;
    }
</style>