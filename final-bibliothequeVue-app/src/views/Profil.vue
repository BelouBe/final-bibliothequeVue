<template>
  <div class="corpsProfil">
    <div class="profil">
      <MonProfil :livres="livres" :docs="docs"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MonProfil from '../components/tsix/MonProfil.vue'
import LivreElectronique from '../types/LivreElectronique'
import Documents from '../types/Documents'
import Singleton from '@/types/Singleton';

export default defineComponent({
  name: 'Profil',
  components: { MonProfil },
  mounted() {
    console.log(Singleton.Utilisateur);
    
  },
  setup() {
    const livres = ref<LivreElectronique[]>([
      { title: 'title1', extrait: 'extrait1', id: '01' },
      { title: 'title2', extrait: 'extrait2', id: '02'},
      { title: 'title3', extrait: 'extrait3', id: '03' },
      { title: 'title4', extrait: 'extrait4', id: '04' },
      { title: 'titre5', extrait: 'extrait5', id: '5' },
      { title: 'titre6', extrait: 'extrait6', id: '6' }
    ])
    
    const docs = ref<Documents[]>([
      { title: 'titre1', extrait: 'extrait1', id: '1' },
      { title: 'titre2', extrait: 'extrait2', id: '2'},
      { title: 'titre3', extrait: 'extrait3', id: '3' },
      { title: 'titre4', extrait: 'extrait4', id: '4' },
      { title: 'titre5', extrait: 'extrait5', id: '5' },
      { title: 'titre6', extrait: 'extrait6', id: '6' }
    ])

    return {livres, docs}
  }
});
</script>

<style lang="scss" scoped>
.corpsProfil{
  background: #1C2938;
  // background: linear-gradient(to top left, #2b5876, #4e4376);
  font-size: medium;
  padding: 0.8em;
}

@media (max-width: 1360px){
  .corpsProfil{
    overflow: visible;
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-10%, 0, 0);
        transform: translate3d(-10%, 0, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    @keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(-10%, 0, 0);
        transform: translate3d(-10%, 0, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
  }


.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(10%, 0, 0);
        transform: translate3d(10%, 0, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
  }

    @keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(10%, 0, 0);
        transform: translate3d(10%, 0, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
  }


.fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    }

    @-webkit-keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -10%, 0);
        transform: translate3d(0, -10%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    @keyframes fadeInDown {
    0% {
        opacity: 0;
        -webkit-transform: translate3d(0, -10%, 0);
        transform: translate3d(0, -10%, 0);
    }
    100% {
        opacity: 1;
        -webkit-transform: none;
        transform: none;
    }
    }

    /* Simple CSS3 Fade-in Animation */
    @-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
    @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

    .fadeIn {
    opacity:0;
    -webkit-animation:fadeIn ease-in 1;
    -moz-animation:fadeIn ease-in 1;
    animation:fadeIn ease-in 1;

    -webkit-animation-fill-mode:forwards;
    -moz-animation-fill-mode:forwards;
    animation-fill-mode:forwards;

    -webkit-animation-duration:2s;
    -moz-animation-duration:2s;
    animation-duration:2s;
    }

    .fadeIn.first {
    -webkit-animation-delay: 0.4s;
    -moz-animation-delay: 0.4s;
    animation-delay: 0.4s;
    }

    .fadeIn.second {
    -webkit-animation-delay: 0.6s;
    -moz-animation-delay: 0.6s;
    animation-delay: 0.6s;
    }

    .fadeIn.third {
    -webkit-animation-delay: 0.8s;
    -moz-animation-delay: 0.8s;
    animation-delay: 0.8s;
    }

    .fadeIn.fourth {
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    animation-delay: 1s;
    }

</style>