//JS RESET
console.log('JS OK')

//Vue RESET
console.log('Vue OK', Vue);

const { createApp } = Vue; // Create app
const app = createApp({  // app Vue inizializzato
    data(){
        return{
            name: 'Gabriele'
        }
    }
}); 
app.mount('#root'); // La monto nell'HTML