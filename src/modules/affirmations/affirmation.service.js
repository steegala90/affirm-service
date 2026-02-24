const affirmations = [
  { id: 1, text: "You are capable of great things.", category: "confidence" },
  { id: 2, text: "Progress beats perfection.", category: "growth" },
  { id: 3, text: "You finish what you start.", category: "discipline" },
];

function getAll(category) {
  if (!category) return affirmations;

  return affirmations.filter((a) => a.category === category);
}

function getRandom() {
  return affirmations[Math.floor(Math.random() * affirmations.length)];
}

module.exports = {
  getAll,
  getRandom,
};
