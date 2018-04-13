var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoInc   = require('mongoose-sequence')(mongoose);

var MissionAnswer = new Schema({
  _id: Number,
  _user: { 
    type: Number, 
    ref: './user.js' 
  },
  _mission: { 
    type: Number, 
    ref: './mission.js' 
  },
  _group: { 
    type: Number,
    ref: './group.js'
  },
  status: String, //Pendente, aprovado, inválido
  image: String,
  audio: String,
  video: String,
  text: String,
  geolocation: { 
    lat: Number, 
    lng: Number
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

MissionAnswer.plugin(autoInc, {id: "answer_id"});
module.exports = mongoose.model('mission_answer', MissionAnswer);