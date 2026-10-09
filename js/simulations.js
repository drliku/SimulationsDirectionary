// The directory's content. To add a simulation, add an entry to SIMULATIONS:
//   categories: one or more ids from CATEGORIES (the first is its main subject)
//   art: key into SIM_ART in app.js, or leave it out to use the subject's icon

window.CATEGORIES = [
  { id: "biology",     name: "Biology",     blurb: "Living things, from cells to ecosystems." },
  { id: "physics",     name: "Physics",     blurb: "Forces, motion and energy." },
  { id: "astronomy",   name: "Astronomy",   blurb: "The Moon, planets, stars and beyond." },
  { id: "mathematics", name: "Mathematics", blurb: "Shapes, patterns and numbers in action." },
  { id: "chemistry",   name: "Chemistry",   blurb: "Atoms, molecules and reactions." },
  { id: "geography",   name: "Geography",   blurb: "Maps, places and the shape of our planet." }
];

window.SIMULATIONS = [
  {
    title: "Lunar Phase Simulator",
    url: "https://claude.ai/artifact/Keha6EZSYNKAFcVVPMD4hS",
    categories: ["astronomy"],
    art: "moon",
    description: "Drag the Moon around its orbit and watch its phase change, as seen from Earth and from an observer's horizon.",
    features: ["Orbit view", "Moon from Earth", "Time stepping"]
  },
  {
    title: "My Solar System 3D",
    url: "https://claude.ai/artifact/P3CgFbVntUJpM9z2UQBq78",
    categories: ["astronomy", "physics"],
    art: "orbits",
    description: "Build your own system of suns, planets and moons, then watch gravity pull them into orbits, ellipses and figure-8s.",
    features: ["9 presets", "Up to 4 bodies", "Gravity vectors"]
  },
  {
    title: "Simple Pendulum",
    url: "https://claude.ai/artifact/WK5Qw4Bkfvamq8zLNEKoNq",
    categories: ["physics"],
    art: "pendulum",
    description: "Swing a 3D pendulum and change its length, angle and gravity while the energy bars trade kinetic for potential energy.",
    features: ["Energy graph", "Force vectors", "Adjustable gravity"]
  },
  {
    title: "Equal Earth Projection",
    url: "https://claude.ai/artifact/1EGzjD2gBoQNxTd4QEVYyL",
    categories: ["geography"],
    art: "map",
    description: "Compare any two countries on an Equal Earth map and a Mercator map to see how much Mercator inflates their size.",
    features: ["Two maps", "Country compare", "Guessing game"]
  },
  {
    title: "pH Lab",
    url: "https://claude.ai/artifact/4YZnCUAE9V4qemVhrKMREp",
    categories: ["chemistry"],
    art: "ph",
    description: "Experiment with acids, bases and dilution in a 3D beaker and see how the pH scale works.",
    features: ["3D beaker", "Acids and bases", "Dilution"]
  }
];
