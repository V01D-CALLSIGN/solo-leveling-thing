window.addEventListener('DOMContentLoaded', () => {
  const char = JSON.parse(localStorage.getItem('character'));
  if (!char) return location.href = 'index.html';

  // Set name, title, level
  document.getElementById('char-name').textContent = char.name;
  document.getElementById('char-title').textContent = char.title;
  document.getElementById('level').textContent = char.level;
  document.getElementById('xp').textContent = char.xp;

  // XP bar
  const needed = calculateXPNeeded(char.level);
  const percent = Math.min(100, (char.xp / needed) * 100);
  document.getElementById('xp-bar').style.width = `${percent}%`;

  // Stats
  const statPanel = document.getElementById('stats');
  statPanel.innerHTML = '';
  for (const [stat, value] of Object.entries(char.stats)) {
    statPanel.innerHTML += `
      <div class="bg-gray-700 p-2 rounded border border-blue-500">
        <h4 class="text-blue-300 font-bold">${stat}</h4>
        <p class="text-white text-lg">${value}</p>
      </div>
    `;
  }

  renderQuests();
  renderBosses();
});
