var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/supervilains');

var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

var VilainSchema = new Schema({
  nom : String,
  puissance : Number,
  arme : ObjectId
});

var Vilain = mongoose.model('Vilain', VilainSchema);


exports.vilains = function(callback) {  
  Vilain.find(function(err, vilains) {
    callback("Vilains !", vilains);
  });
};

