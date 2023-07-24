const app = Vue.createApp({

    data() {
        return {
            author: "hany",
            book: "book1",
            age: 42,
            buttom: "show",
            show: false
        }
    },
    methods: {
        changename(name) {
            this.author = name;
        },
         () {
    if(this.show) {
        this.show = false;
this.buttom = "show"
            } else {
    this.show = true;
    this.buttom = "hide"
}

        }
    },

}).mount("#app")
