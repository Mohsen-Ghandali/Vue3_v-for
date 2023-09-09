const app = Vue.createApp({

    data() {
        return {
            showContainer: true,
            users: [
                { userName: "alex123", name: "Alex Müller", email: "alex@test.com", tel: "0049 162 0780 7890",link:"https://google.com" },

                { userName: "martin007", name: "Martin Schmidt", email: "martin@test.com", tel: "0049 176 4564 7897",link:"https://yahoo.com" },
                
                { userName: "luis-m", name: "Luis Max", email: "luis@test.com", tel: "0049 000 2495 8748",link:"https://youtube.com" }
            ]
        };
    },

    methods: {
        hideBtn() {
            this.showContainer = !this.showContainer;
        },

    },

})

app.mount("#app")
