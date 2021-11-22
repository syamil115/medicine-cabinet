const app = Vue.createApp({





  data() {
    return {

      items: ['Drug A', 'Drug B', 'Drug C', 'Drug D', 'Drug E', 'Drug F'],

      items2: []
    }


  },


  methods: {
    searchDrug() {
      var x = document.getElementById("search").value;

      if (x === "Drug A" || x === "Drug B" || x === "Drug C" || x === "Drug D" || x === "Drug E" || x === "Drug F") {
        for (var i = 0; i < this.items.length; i++) {

          if (this.items[i] !== x) {
            this.items.splice(i, 1);
            i--;
          }
        }
      } else if (x === "") {
        return;
      } else {
        alert("No drug found!");
      }


    },


    addDrug() {
      var y = document.getElementById("add").value;
      console.log(y);

    },

    removeDrug() {


    }






  },



})

app.mount('#app')
