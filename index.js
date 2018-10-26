

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
"github-ynov-vue"
]

var apiURL = 'https://api.github.com/repos/'


var demo = new Vue({

  el: '#demo',

  data: {
    branches: ['master', 'dev'],
    currentBranch: 'master',
    commits: null,
    selected_user: 'etienneYnov',
    users : users_list,
    selected_project: 'github-ynov-vue',
    noms : project_list,
    checkedNames: [],
    resultListe: [],
    date_start: null,
    date_end: null
  },

  created: function () {
    this.fetchData()
  },

  watch: {
    currentBranch: 'fetchData',
    selected_user: (val) => {
      console.log("the new selected user is " + val)
      var user_name = val
      
      console.log("the new selected user is " + user_name)
    },
    selected_project: (val2) => {
      console.log("the new selected project is " + val2)
      var project_name = val2

      console.log("the new selected project is " + project_name)
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
     this.resultListe = []

     this.checkedNames.forEach(function(name){

      console.log(self.selected_project)

      xhr.open('GET', apiURL + name + '/' + self.selected_project + '/commits?since='+ self.date_start + '&until='+ self.date_end,false)
      xhr.setRequestHeader("Authorization", "Basic " + btoa("etienneYnov:187231752c3dfc4af2de62207da9a42d14ab6ce9"));
      console.log(apiURL + name + '/' + self.selected_project + '/commits?since='+ self.date_start + '&until='+ self.date_end)

      xhr.onload = function () {
        self.commits = JSON.parse(xhr.responseText)
        self.resultListe.push(self.commits)
      }
      xhr.send()

    })
   }
 }
})
