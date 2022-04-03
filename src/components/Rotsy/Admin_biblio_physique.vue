<template lang="">
  <div class="biblio_physique">
    <Admin_accueil_biblio_physique
      v-if="content === 'accueil'"
      @change-screen="goTo"
      @goToAccueil="goToAccueil"
    />
    <Admin_ajout_physique
      v-if="content === 'ajout'"
      @return="retour"
      @goToAccueil="retour"
    />
    <Admin_lecture_physique
      v-if="content === 'lecture'"
      @return="retour"
      @goToAccueil="retour"
    />
  </div>
</template>

<script lang="">
import Admin_accueil_biblio_physique from "./Admin_accueil_biblio_physique.vue";
import Admin_ajout_physique from "./Admin_ajout_physique.vue";
import Admin_lecture_physique from "@/components/Rotsy/Admin_lecture_physique.vue";
export default {
  components: {
    Admin_accueil_biblio_physique,
    Admin_ajout_physique,
    Admin_lecture_physique,
  },

  data() {
    return {
      content: "accueil",
    };
  },

  methods: {
    goTo(payload) {
      this.content = payload.to;
    },
    retour() {
      this.content = "accueil";
    },
  },
};
</script>

<style scoped>
.biblio_physique {
  position: relative;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
