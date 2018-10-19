var users_list = [
"Killy85",
"Nair0fl",
"raphaelCharre",
"mathiasLoiret",
"thomaspich",
"TeofiloJ",
"Grigusky",
"Dakistos",
"mael61",
"KevinPautonnier",
"BenoitCochet",
"sfongue",
"ClementCaillaud",
"gfourny",
"Mokui",
"LordInateur",
"AntoineGOSSET",
"etienneYnov",
"Coblestone",
"AlexDesvallees",
"rudy8530",
"benjaminbra",
"mael61",
"alixnzt"]

var project_list = [
"github-ynov-vue",
"guillaume-fourny",
"nicolas-goureau",
"mathias-loiret",
"steven-fongue",
"matthieu-fournier",
"maxime-courant",
"matthieu-saint-martin",
"antoine-gosset",
"kevin-pautonnier",
"mael-maillard",
"alix-nouzillat",
"raphael-charre",
"teofilo-jeandot",
"florian-boche",
"antoine-drouard",
"etienne-hounguevou",
"clement-caillaud",
"thomas-pichard",
"gregoire-meunier",
"mathias-dupont",
"benjamin-brasseur",
"rudy-schoepfer",
"benoit-cochet",
"maxime-rolland",
"yanis-dando",
"alexandre-desvallees"
]

var apiURL = 'https://api.github.com/repos/'
/**
 * Actual demo
 */

 var demo = new Vue({

  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    selected_user: null,
    users : users_list,
    selected_project: null,
    noms : project_list
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData',
    selected_user: (val) => {
      console.log("the new selected user is " + val)
      var project_name = val
      console.log("the new selected user is " + project_name)
    },
    selected_project: (val2) => {
      console.log("the new selected project is " + val2)
      var user_name = val2
      console.log("the new selected project is " + user_name)
    }
  },

  filters: {
    truncate: function (v) {
      var newline = v.indexOf('\n')
      return newline > 0 ? v.slice(0, newline) : v
    },
    formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },

  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest()
      var self = this
      xhr.open('GET', apiURL + this.selected_user + '/' + this.selected_project + '/commits?')
      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        console.log(self.commits[0].html_url)
      }
      xhr.send()
    }
  }
})

 console.log(demo.users)