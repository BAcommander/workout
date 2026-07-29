// Workout Tracker — config template.
// Setup (about 5 minutes):
//   1. Copy this file to config.js (same folder as index.html).
//   2. Create a free account at https://jsonbin.io
//   3. Create one bin per person (initial content: {"v":2,"workouts":[]})
//      and paste each bin's id below.
//   4. Copy your Access Key from jsonbin.io → API Keys into apiKey.
//   5. Pick your own PINs. Note: PINs are a convenience lock only — anyone
//      with this file can read them, so don't reuse a PIN you care about.
// config.js is gitignored so your key and PINs never end up in the repo.
window.WT_CONFIG = {
  apiKey: 'YOUR-JSONBIN-ACCESS-KEY',

  // One entry per person. `hue` is any CSS color — used for their tab,
  // PIN screen and picker card.
  users: [
    { id:'alex', name:'Alex', pin:'0000', bin:'YOUR-BIN-ID', emoji:'💪', tagline:'Lift heavy, lift often', hue:'#a78bfa' },
    { id:'sam',  name:'Sam',  pin:'0000', bin:'YOUR-BIN-ID', emoji:'🌟', tagline:'Progressive overload',   hue:'#f472b6' }
  ]
};
