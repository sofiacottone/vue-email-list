// ISTRUZIONI
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            arrayLength: 10,
            randomEmail: null
        }
    },
    methods: {
        generateRandomEmail() {
            for (let i = 0; i < this.arrayLength; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        const serverData = response.data;
                        const randomEmail = serverData.response;
                        this.emailList.push(randomEmail);
                    });
            }
        }
    },
    mounted() {
        this.generateRandomEmail();
    }
}).mount('#app');