
// Mise en place de la connection à la BDD
const mongoose = require('mongoose');


/* ----- Your DB ------ */
const dbUrl = 'mongodb://malou:malou1@ds239157.mlab.com:39157/malou';
/* --------------------- */

/* ----- DB Options ------ */
const options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true
};

mongoose.connect(dbUrl, options, error => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connexion OK!')
  }
});

module.exports = {
  mongoose: mongoose,
}
