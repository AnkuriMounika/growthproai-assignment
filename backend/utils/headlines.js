const headlines = [
  "Why {name} is {location}'s Sweetest Spot in 2025",
  "Discover Local Flavors at {name} in {location}",
  "Top Reasons {location} Locals Love {name}",
  "{name}: Redefining Business Success in {location}",
  "{name} – A Rising Star in the Heart of {location}"
];

function getRandomHeadline(name = "Your Business", location = "Your City") {
  const template = headlines[Math.floor(Math.random() * headlines.length)];
  return template.replace('{name}', name).replace('{location}', location);
}

module.exports = { getRandomHeadline };
