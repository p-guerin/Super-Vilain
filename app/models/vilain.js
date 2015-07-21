var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/supervilains');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var VilainSchema = new Schema({
  nom : String,
  puissance : Number,
  arme : ObjectId
});

var Vilain = mongoose.model('Vilain', VilainSchema);

var darth_vador = new Vilain({
  nom : "Darth Vador",
  puissance : 10
});
darth_vador.save(function(err, vilain){
  console.log(vilain);
});
