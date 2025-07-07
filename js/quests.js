function renderQuests() {
  const container = document.getElementById('quest-list');
  const char = JSON.parse(localStorage.getItem('character'));
  if (!char.quests) char.quests = [];

  container.innerHTML = '';
  char.quests.forEach((quest, i) => {
    container.innerHTML += `
      <div class="bg-gray-800 p-3 rounded flex justify-between items-center border border-gray-600">
        <span>🗡️ ${quest.name}</span>
        <button onclick="completeQuest(${i})" class="bg-green-600 hover:bg-green-700 px-2 py-1 rounded text-sm">
          +${quest.xp} XP
        </button>
      </div>
    `;
  });
}

function completeQuest(index) {
  const char = JSON.parse(localStorage.getItem('character'));
  const quest = char.quests[index];

  // Gain XP + boost a random stat
  gainXP(quest.xp);
  const keys = Object.keys(char.stats);
  const randStat = keys[Math.floor(Math.random() * keys.length)];
  char.stats[randStat] += 1;

  char.quests.splice(index, 1);
  localStorage.setItem('character', JSON.stringify(char));
  location.reload();
}

function generateQuests() {
  const ideas = ['Review notes', 'Stretch for 10 min', 'Read 5 pages', 'Organize desk', 'Take a 15-min walk'];
  const quests = ideas.map(task => ({
    name: task,
    xp: Math.floor(Math.random() * 20) + 10,
  }));

  const char = JSON.parse(localStorage.getItem('character'));
  char.quests = quests;
  localStorage.setItem('character', JSON.stringify(char));
  location.reload();
}
function renderBosses() {
  const container = document.getElementById('boss-list');
  const char = JSON.parse(localStorage.getItem('character'));
  if (!char.bosses) char.bosses = [];

  container.innerHTML = '';
  char.bosses.forEach((boss, i) => {
    container.innerHTML += `
      <div class="bg-red-800/70 p-3 rounded flex justify-between items-center border border-red-600">
        <span>🐉 ${boss.name}</span>
        <button onclick="completeBoss(${i})" class="bg-yellow-600 hover:bg-yellow-700 px-2 py-1 rounded text-sm">
          +${boss.xp} XP
        </button>
      </div>
    `;
  });
}

function addBoss() {
  const name = prompt('Name your boss task (e.g. Finish Essay):');
  if (!name) return;
  const xp = Math.floor(Math.random() * 80 + 50);

  const char = JSON.parse(localStorage.getItem('character'));
  if (!char.bosses) char.bosses = [];
  char.bosses.push({ name, xp });

  localStorage.setItem('character', JSON.stringify(char));
  location.reload();
}

function completeBoss(index) {
  const char = JSON.parse(localStorage.getItem('character'));
  const boss = char.bosses[index];

  gainXP(boss.xp);
  char.bosses.splice(index, 1);

  // Optional: Unlock gear
  char.gear.push(`Trophy: ${boss.name}`);
  localStorage.setItem('character', JSON.stringify(char));
  window.location.href = 'level-up.html';
}
