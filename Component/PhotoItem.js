app.component('photo-item',{
    props:{
       photos:{
           type:Array,
           require:true
       }
    },
    template: 
    /*html*/
    `<ul class="flex flex-col space-y-5">
    <li  v-show="photo.show" v-for="(photo,index) in photos" class="flex items-center mt-5" >
    <button  @click="showPopup(index)">
    <img   :src="photo.src" width="250" >               
    </button>     
      <!-- caption -->
      <span class="text-xl ml-5 font-semibold">{{ photo.caption }}</span>

      <span v-show="photo.done" class="ml-5"><img src="image/h1.jpg"  width="25"></span>
    </li> 
    </ul>
    `,
    data(){
        return {

        }
    },
    methods: {
       
        showPopup(index){
            this.$emit('show-popup',index)
            
        }
        }
    }
)


