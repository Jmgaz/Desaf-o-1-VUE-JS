var app = new Vue({
    el: '#app',
    data: {
        titulo: "Desafío 1",
        num: 0,
        
    },
    methods:{
        sumar(){
            this.num++
        },
        restar(){
            this.num--
        }
    }
})
