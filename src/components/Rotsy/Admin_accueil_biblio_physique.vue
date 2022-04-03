<template lang="">
    <section class="itemContainer">
        <div class="crud">
            <div class="controlCaroussel">
                <img src="../../assets/Rotsy/arrow-left.png" alt="gauche">
                <img src="../../assets/Rotsy/arrow-right.png" alt="droite">
            </div>
            <div class="itemCrud" @click="change('ajout')">
                <p>AJOUT</p>
                <p>Ajoutrer des ouvrages</p>
                <img src="../../assets/Rotsy/Icon_add.png" 
                alt="add" 
                width="50" 
                height="40" 
                />
            </div>
            <div class="itemCrud" @click="change('lecture')">
                <p>MODIFICATION</p>
                <p>Modifier des ouvrages</p>
                <img
                src="../../assets/Rotsy/Icon_update.png"
                alt="update"
                width="40"
                height="40"
                />
            </div>
        </div>
        <div class="nombresContainer">
            <div class="itemNombres">
                <p>2000</p>
                <p>Livres numériques</p>
            </div>
            <div class="itemNombres">
                <p>2000</p>
                <p>Livres Physiques</p>
            </div>
            <div class="itemNombres">
                <p>1000</p>
                <p>Membres</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
    },

    methods: {
        change(destination){
            this.$emit('change-screen',{to: destination})
        }
    },

}
</script>

<style scoped>
    .itemContainer { /* dispsition mitsangana crud sy nombres*/
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .controlCaroussel {
        display: none;
    }

    .crud{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .itemCrud {
        background: #253649; 
        min-width: 17vw;
        min-height: 20vh;
        padding: 1rem 0rem;
        border-radius: 7%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        transition: all 0.5s ease;
    }

    .itemCrud:hover{
        cursor: pointer;
        box-shadow: 0px 0px 22px wheat;
    }

    .itemCrud p:first-child {
        font-size: 1.2rem;
        color:rgb(255, 255, 255) 
    }

    .itemCrud p:nth-child(2){
        font-size: 1.1rem;
        color: rgb(141, 141, 141);
    }

    .nombresContainer{
        display: flex;
        justify-content: space-around;
        text-align: center;
    }

    .itemNombres{
        background: #253649;
        border-radius: 50%;
        width: 8rem;
        height: 8rem;
        font-size: 1rem;
        transition: all 0.5s ease;
    }

    .itemNombres:hover{
        cursor: pointer;
        box-shadow: 0px 0px 22px wheat;
    }

    .itemNombres p:first-child{
        color:darkgoldenrod;
        margin-top: 25%;
    }
    .itemNombres p:nth-child(2){
        font-size: 0.9rem ;
        color: rgb(141, 141, 141)
    }
</style>