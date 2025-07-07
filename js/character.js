document.getElementById('startBtn').addEventListener('click', () => {
  const name = document.getElementById('name').value.trim();
  const title = document.getElementById('title').value.trim();
  const currentState = document.getElementById('currentState').value.trim();
  const desiredPath = document.getElementById('desiredPath').value.trim();
  const statInputs = document.querySelectorAll('.stat-input');
  const stats = Array.from(statInputs).map(input => parseInt(input.value) || 0);
  const totalPoints = stats.reduce((a, b) => a + b, 0);

  if (!name || !title || !currentState || !desiredPath || totalPoints !== 15) {
    alert('Fill all fields and use exactly 15 stat points.');
    return;
  }

  const character = {
    name,
    title,
    currentState,
    desiredPath,
    stats: {
      Strength: stats[0],
      Focus: stats[1],
      Happiness: stats[2],
      Wisdom: stats[3],
      Creativity: stats[4],
    },
    level: 1,
    xp: 0,
    gear: [],
    quests: [],
    bosses: [],
    backstory: `You are ${name}, ${title}. Once ${currentState}, now striving to become ${desiredPath}.`,
  };

  localStorage.setItem('character', JSON.stringify(character));
  window.location.href = 'dashboard.html';
});
