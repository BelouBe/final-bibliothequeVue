<template>
    <div class="accueil_container">
        <p class="titre">Bienvenue dans la section administrateur</p>
        <div class="content_accueil">
            <!-- <div class="item_section" @click="changeSection('numerique')">
                <p>Bibliothèque numérique</p>
                <img
                src="../../assets/Rotsy/Icon_user.png"
                alt="numerique"
                width="40"
                height="40"
                />
            </div> -->
            <div class="item_section" @click="changeSection('physique')">
                <p>Bibliothèque physique</p>
                <img
                src="../../assets/Rotsy/Icon_user.png"
                alt="physique"
                width="40"
                height="40"
                />
            </div>
            <div class="item_section" @click="changeSection('utilisateur')">
                <p>Gestion des utilisateurs</p>
                <img
                src="../../assets/Rotsy/Icon_user.png"
                alt="utilisateur"
                width="40"
                height="40"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            changeSection(to){
                return this.$emit('goTo', {destination: to})
            }
        }
    }
</script>

<style scoped>
    .accueil_container { /* dispsition mitsangana crud sy nombres*/
        height: calc(100% - 90px);
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        /* background-color: aqua; */
    }
    .titre{
        padding: 0;
        margin: 0;
        color: white;
        font-size: 2.2rem;
    }
    .content_accueil{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .item_section {
        background: #253649; 
        min-width: 17vw;
        min-height: 25vh;
        padding: 1rem 0rem;
        border-radius: 7%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
        font-size: larger;
        transition: all 0.5s ease;
    }

    .item_section:hover{
        cursor: pointer;
        box-shadow: 0px 0px 22px wheat;
    }
</style>