var mongoose = require('mongoose');
var Vilain = mongoose.model('Vilain');
var vilainsdata = require('../app/models/vilain')

exports.index = function(req, res){
  vilainsdata.vilains(function(err, vilains){
    res.render('index', { vilains : vilains });
  })
}

exports.create = function(req, res){

  var vilain = new Vilain({
    nom : "Cortex",
    puissance : 1
  });
  vilain.save(function(err, vilain){
    console.log(vilain);
    vilainsdata.vilains(function(err, vilains){
      res.render('index', { vilains : vilains });
    })
  });

}

