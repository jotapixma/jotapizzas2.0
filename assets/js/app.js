
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
    pizzas:[
    ],

    nameUser: true,
    persona: "",
    cantidad: 0,
    barraDeliciosidad: 0,
    precioTotal: 0,
    armarPizza: false,
    idPizzaSelected:-1,
    selectedPizza:{}
    
  },
  methods: {
    armarSiguientePizza(){
      this.selectedPizza=this.pizzas[++this.idPizzaSelected];
      this.armarPizza=true;
    },
    ingredienteIsInPizza(ingrediente){
      return !!this.selectedPizza.ingredientes.find(ingredienteDeLaPizza=>ingredienteDeLaPizza.name===ingrediente.name
      );
    },
    quitarPizzaMediana(){
      let index=this.pizzas.findIndex(i => i.size === "Mediana");
      this.pizzas.splice(index,1);
    },
    quitarPizzaGrande(){
      let index=this.pizzas.findIndex(i => i.size === "Grande");
      this.pizzas.splice(index,1);
    },
    agregarPizzaMediana(){
      this.pizzas.push({
        size: 'Mediana', 
        ingredientes:[], 
        precioBase: '1800'
      })
    },
    agregarPizzaGrande(){
      this.pizzas.push({
        size: 'Grande', 
        ingredientes:[], 
        precioBase: '2000'
      })

    },
    agregarIngrediente: function(ingrediente){
      
      this.selectedPizza.ingredientes.push(ingrediente);
      
      var cantIngred = this.cantidad++;
      
      //Aqui incremento la barra de deliciosidad
      this.incrementBarra ();


    },// Close agregar ingrediente
  
    incrementBarra: function (){
      var increment = 33.33;
      this.barraDeliciosidad += increment;  
      var message;
      
      if (this.cantidad === 3){
        
        var resp = confirm("Has terminado de armar tu pizza, deseas agregar mas ingredientes?");
        
        if (resp == true) {
          alert(message = "Puedes agregar dos(2) ingredientes más");
          this.barraDeliciosidad = 33.33;
        } 
        else {
         alert(message = "Gracias! has completado tu pizza"); 
         this.barraDeliciosidad = 0;
        }
        return message;
       
      }
      if (this.cantidad == 5){
        alert("Felicidades! Has terminado de armar tu pizza");
        this.barraDeliciosidad = 0;
      }

    },
    hiddenName(){
      this.nameUser = !this.nameUser;
      return this.nameUser;
    },
    resetName(){
      this.persona = "";
    },
    editUser(){
      this.nameUser = true;
    }
  
  }, // Close methods
  computed: {
    
    cantidadPizzasMedianas(){
      return this.pizzas.filter(function(pizza){
        return pizza.size==='Mediana'
      }).length;
    },
    cantidadPizzasGrandes(){
      return this.pizzas.filter(function(pizza){
        return pizza.size==='Grande'
      }).length;
    },
    sumarPrecio(){
      this.precioTotal = parseInt(this.selectedPizza.precioBase);
      for (ingredient of this.selectedPizza.ingredientes){
        this.precioTotal = this.precioTotal + parseInt(ingredient.precio)   ;
      }
      return this.precioTotal;
    },
    estadoBarra() {
      const deliciosidad = this.barraDeliciosidad;
      return {
        "bg-success": deliciosidad <= 33.33,
        "bg-warning": deliciosidad > 33.33 && deliciosidad <= 66.66,
        "bg-danger": deliciosidad > 66.66
      }
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

var app3 = new Vue ({
  el: "#app-body",
  data: {
    items: [
      {name: '', img:'assets/images/albahaca.jpg'},
      {name: '', img:'assets/images/tomates-3.jpg'},
      {name: '', img:'assets/images/pepperoni.jpg'},
      {name: '', img:'assets/images/oregano.jpg'},
      {name: '', img:'assets/images/masa-pizza.jpg'},
      {name: '', img:'assets/images/queso-mozzarella.jpg'},
      {name: '', img:'assets/images/jalapeño.jpg'},
      {name: '', img:'assets/images/champiñones-2.jpg'},
      {name: '', img:'assets/images/tocineta.png'}
    ],
    players: [
      {name: 'Cecilia Cova',cargo: 'Jefe de Logistica' ,img:'assets/images/cecilia.png'},
      {name: 'Jorge Teran Father',cargo: 'Maestro de horno' ,img:'assets/images/papa-tony-2.png'},
      {name: 'Jorge Teran Jr',cargo: 'Pizzero' ,img:'assets/images/jota.png'},
      {name: 'Sulynn Teran',cargo: 'Community Manager' ,img:'assets/images/sulynn.png'},
      {name: 'Fernando Cova',cargo: 'Jefe de Operaciones' ,img:'assets/images/fernando-cova-2.png'},
      // {name: 'Ludwig Dauhgbeterre',cargo: 'Sous Cheff' ,img:'assets/images/ludwig.png'}
    ]
  }
})