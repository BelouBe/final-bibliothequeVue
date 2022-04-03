<template lang="">
  <div>
    <h1>Accueil</h1>
    <p>Has published books:</p>
    <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>
    <component :is="Math.random() > 0.5 ? Foo : Bar" />
    <div v-if="this.a===1?'bonjour':'au revoir'"></div>  
  </div>
</template>


<script>

export default {

  data() {
    return { 
      a: 1 ,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      }
    }
  },

  methods: {
    plus() {
      this.a++
    }
  },

  computed: {
  // a computed getter
    publishedBooksMessage() {
      // `this` points to the component instance
      return this.author.books.length > 0 ? 'Yes' : 'No'
    }
  }
};
</script>


<style scoped>
  div{
    background: var(--primary);
  }

</style>
