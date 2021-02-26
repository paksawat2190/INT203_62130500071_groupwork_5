app.component('photo-view',{
    props:{
       popup:Boolean,
       popupsrc:String
    },
    template: 
    /*html*/
    `

    <div class="w-auto p-4 bg-gray-900 flex" v-show="popup">
    <img :src="popupsrc" class="w-auto">
    <button v-on:click="closepopup" class="h-1 items-start">
      <i class="im im-x-mark text-white mx-1"></i>
    </button>
    </div>

    `,
    data(){
        return {
            
        }
    },
    methods: {
        closepopup(){
            this.$emit('close-popup')
        }
        
        }
    }
)


