
var app = new Vue({
  el: "#app",
  data: {
    ingredients: [
      {name: 'Tomate', img:'assets/images/tomate-custom.png', precio: '1000'},
      {name: 'Cebolla', img:'assets/images/cebolla_juliana.jpg', precio: '1500'},
      {name: 'Pimenton', img:'assets/images/pimenton.jpg', precio: '2000'},
      {name: 'Choclo', img:'assets/images/maiz.jpg', precio: '2500'},
      {name: 'Jalapeño', img:'assets/images/jalapeño-3.jpg', precio: '3000'},
      {name: 'Jamon', img:'assets/images/jamon-cocido.jpg', precio: '3500'},
      {name: 'Tocineta', img:'assets/images/tocineta-2.jpg', precio: '4000'},
      {name: 'Jamon Serrano', img:'assets/images/jamon-serrano.jpeg', precio: '4500'},
      {name: 'Pepperoni', img:'assets/images/pepperoni-2.jpg', precio: '5000'},
      {name: 'Champiñon', img:'assets/images/champiñon-1.jpg', precio: '5500'},
      {name: 'Aceituna', img:'assets/images/aceituna-verde.png', precio: '6000'},
      {name: 'Salame', img:'assets/images/salami.png', precio: '6500'},
      
    ],
    selectedIngredients:[],
    persona: "",
    cantidad: 0,
    barraDeliciosidad: 0,
    precioTotal: 0
  },
  methods: {
    agregarIngrediente: function(ingrediente){
      const selectedingred = this.selectedIngredients.find(function(ingred) {
        return  ingred.name === ingrediente.name;
      });
      
      if(!selectedingred && this.cantidad < 5)   {
        this.selectedIngredients.push(ingrediente);
        this.cantidad++;
       
        if(this.cantidad === 5){
          alert("Tu pizza personalizada esta lista para preparar!")
        }

        if(this.cantidad === 3){
          var resp = confirm("Has completado el total de ingredientes!, deseas agregar ingredientes extra?")

          if(resp){
            alert("Puedes agregar dos(2) ingredientes más :)")
          }
        }

      }
      
      this.incrementBarra()

    },// Close agregar ingrediente
    incrementBarra: function (){
      var increment = 20;
      this.barraDeliciosidad += increment;
    }
    
  }, // Close methods
  computed: {
    sumarPrecio(){
      this.precioTotal = 0;
      for (ingredient of ingredients){
        this.precioTotal = this.precioTotal + ingredient.precio;
      }
      return this.precioTotal;
    }
  }
  
});


var app2 = new Vue({
  el: "#app-card",
  data: {
    cards: [
      {name: 'Margarita', description:'divina', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Jamón y Queso', description:'extasiante', img:'assets/images/pizza-mixta.jpg', precio: '1$'},
      {name: 'Napolitana', description:'adiktiva', img:'assets/images/mini-pizzas.jpg', precio: '1$'},
      {name: 'Veggy', description:'', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Pepperoni', description:'viciadora', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Chili', description:'', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Funghi', description:'', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Jotapizza', description:'', img:'assets/images/pizza-margarita.jpg', precio: '1$'},
      {name: 'Calzone', description:'', img:'assets/images/pizza-margarita.jpg', precio: '1$'}
    ],
    selectedIngredients:[],
    message: "Esto es una prueba",
    newIngredient: ''
  },
  methods: {
    agregarIngrediente: function(ingrediente){
      const selectedingred=this.selectedIngredients.find(ingred=>ingred.name===ingrediente.name);
      if(!selectedingred){
        this.selectedIngredients.push(ingrediente);
      }
    }
  }
  
});