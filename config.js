// Workout Tracker — per-installation config.
// This file is gitignored: it holds your private JSONBin key and PINs.
// To set up a fresh copy, duplicate config.example.js as config.js and fill it in.
window.WT_CONFIG = {
  // JSONBin.io Access Key (jsonbin.io → API Keys)
  apiKey: '$2a$10$wcs2g43ed8qnSp0RIBmo9uG6fN6O5AtF7l/rqDbh22O0WOiH6p6OW',

  // One entry per person. `bin` is that person's JSONBin bin id.
  // `hue` is any CSS color — used for their tab, PIN screen and picker card.
  users: [
    { id:'john',    name:'John',    pin:'1234', bin:'69f0b07baaba882197494ea1', emoji:'💪', tagline:'Lift heavy, lift often',     hue:'#a78bfa' },
    { id:'charlie', name:'Charlie', pin:'5678', bin:'69f0b0ac856a6821898145b3', emoji:'🌟', tagline:'Progressive overload queen', hue:'#f472b6' }
  ]
};
