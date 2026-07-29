# 🏋️ Workout Tracker

A simple workout tracker for you (and a gym buddy). Log sessions, see your
progress charts, track personal bests, and close your weekly rings —
Apple-Fitness style. It's one HTML file, no install, and your data syncs to
the cloud for free so it works across your phone and computer.

![screenshot](https://img.shields.io/badge/single%20file-no%20build%20step-blue)

## Getting your own copy (~10 minutes)

> ⚠️ **Do this first.** The `config.js` in this repo points at the original
> owner's cloud storage. Until you replace it with your own, the app will
> show — and overwrite — **someone else's workouts**. Don't skip step 3.

### 1. Get the files

Click the green **Code** button on GitHub → **Download ZIP**, and unzip it
somewhere (or fork the repo if you know git).

### 2. Create your free cloud storage

The app stores data on [jsonbin.io](https://jsonbin.io) (free tier is plenty).

1. Sign up at **jsonbin.io** and log in.
2. Click **Create Bin**, paste this as the content, and save:
   ```json
   { "v": 2, "workouts": [] }
   ```
3. Copy the **Bin ID** from the bin's page (a long string like
   `65f0b07b...`). Make **one bin per person** who'll use the app.
4. Go to **API Keys** (under your account) and copy your **Access Key**
   (starts with `$2a$...`).

### 3. Set up config.js

1. In your unzipped folder, **delete `config.js`**.
2. Copy `config.example.js` and rename the copy to `config.js`.
3. Open it in any text editor and fill in:
   - `apiKey` — your Access Key from step 2.4
   - one entry per person: their `name`, a `pin` they'll use to unlock
     their tab, and the `bin` ID from step 2.3
   - `emoji`, `tagline`, and `hue` (any CSS colour) are just for looks —
     make them yours

### 4. Open it

Double-click `index.html`. That's it — pick your name, enter your PIN, and
add your first workout.

## Using it on your phone

Opening the file locally works, but for phone access you'll want it hosted:

- **GitHub Pages** (free): fork this repo, replace `config.js` with yours,
  then in your fork go to *Settings → Pages* and enable Pages from the
  `main` branch. Your app will be at `https://YOURNAME.github.io/workout/`.
- **Netlify Drop** (free, no git needed): drag your whole folder onto
  [app.netlify.com/drop](https://app.netlify.com/drop) and you get a URL.

On your phone, open the URL and use "Add to Home Screen" for an app-like feel.

## Logging a workout

Tap **+ ADD**, pick the date, and paste your workout export into the text
box. The parser expects blocks like this (one per exercise):

```
Exercise: Optional ("Chest Press"
- 10 reps x 25
- 12 reps x 25
- 10 reps x 27.5
```

Weights are in kg; use `0` for bodyweight sets. Everything else — PBs,
weekly rings, charts, streaks — is worked out automatically.

## Good to know (security)

This is a static app with no server, which keeps it free and simple but
means two honest caveats:

- **Anyone who has your files or your hosted URL can find your API key**
  inside `config.js`, and with it read or change your workout data. Don't
  share your copy with people you wouldn't share your gym log with. If a
  key leaks, generate a new one at jsonbin.io → API Keys and update
  `config.js` — old copies stop working instantly.
- **The PINs are a convenience lock, not real security** — they stop
  someone idly tapping the wrong tab, nothing more. Don't reuse a PIN you
  use anywhere else.

## Files

| File                | What it is                                        |
|---------------------|---------------------------------------------------|
| `index.html`        | The whole app — UI, charts, logic                 |
| `config.js`         | **Your** key, users and PINs (replace with yours) |
| `config.example.js` | Template for making your own `config.js`          |
