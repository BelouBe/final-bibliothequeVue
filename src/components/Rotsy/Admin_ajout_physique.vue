<template lang="">
    <div class="ajout_container">
        <form class="info" @Submit="ajouter">
            <p class="titre">Ajouter un oeuvre</p>
            <span @click="closeAjout">X</span>
            <div class="item">
                <input type="text" placeholder="Categorie" v-model="this.newBook.categorie">
                <input type="text" placeholder="Titre" v-model="this.newBook.titre">
            </div>
            <div class="item">
                <p class="description">Description :</p>
                <input type="text" v-model="this.newBook.description">
            </div>
            <div class="valider">
                <button type="submit"> Ajouter</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        methods:{
            closeAjout(){
                console.log(this.newBook)
                return this.$emit('return', null)
            },
            ajouter(){
                console.log(this.newBook)
                this.$emit('ajout', {newItem: this.newBook})
            }
        },
        computed: {
            newBook(){
                const d = new Date()
                const day = d.getDate()
                const month = d.getMonth()
                const year = d.getFullYear()
                const date = year + '-' + month + '-' + year
                return {
                    categorie: '',
                    titre: '',
                    description: '',
                    date: date,
                    }
            }
        }
    }
</script>

<style scoped>
    .ajout_container{
        position: relative;
        height: 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .info{
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
    .description{
        font-size: 1.2rem;
    }
    .titre{
        padding: 0;
        color: white;
        font-size: 2rem;
    }
    .description{
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
    .item{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-wrap: wrap;
    }
    .item input{
        width: 200px;
        height: 40px;
        background-color: rgba(0, 0, 26, 0.158);
        border: none;
        text-align: center;
        color: white;
    }
    .item input:focus{
        box-shadow: 0px 0px 22px #309E3B;
        border: none;
    }

    button{
        width: 150px;
        height: 45px;
        border-radius: 20px/50px;
        color: #309E3B;
        font-size: larger;
        background: rgb(236, 236, 236);
        box-shadow: 0px 0px 22px #309E3B;
    }
</style>