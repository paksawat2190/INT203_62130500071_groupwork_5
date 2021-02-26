app.component('photo-search', {
  props: {
    search: Object,
    error: Boolean
  },
  template:
    /*html*/
    ` <div class="flex justify-between w-max">
     
     <input v-if="search.box" v-model="inputTask" @keyup.enter="searchphoto"
     placeholder="Please enter text for searching photos ..."
     class=" p-2 bg-white rounded border-2 border-blue-300 w-96 ">    

   <button @click="openbox()"> 
     <img v-if="search.icon" src="image/search.jpg" width="30" >
     <img v-if="!search.icon" src="image/cancel.JPG" width="30" >
   </button> 
 </div>
    <div>
   <p v-if="error" class="font-bold text-2xl flex justify-center pt-10 pb-7"> Not found</p>
    </div>

   
     `,
  data() {
    return {
      inputTask: ''
    }
  },
  methods: {
    openbox() {
      this.$emit('open-box')
    },
    searchphoto() {
      this.$emit('search-photo', this.inputTask)
    }
  }
}
)


