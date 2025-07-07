document.getElementById('assistant-btn').addEventListener('click', () => {
  const choice = prompt(`🧠 Choose an option:
1) Dump tasks for quests
2) Hear a motivational quote
3) Reflect on your week`);

  const char = JSON.parse(localStorage.getItem('character'));

  if (choice === '1') {
    const dump = prompt('Enter tasks separated by commas:');
    if (!dump) return;
    const tasks = dump.split(',').map(t => t.trim()).filter(Boolean);
    char.quests = tasks.map(t => ({
      name: t,
      xp: Math.floor(Math.random() * 30 + 10),
    }));
    localStorage.setItem('character', JSON.stringify(char));
    alert('🗡️ Quests generated!');
    location.reload();
  }

  if (choice === '2') {
    const quotes = [
      "Only cowards procrastinate, Champion.",
      "Your enemies tremble at your GPA rise!",
      "Rest, reflect, rise again.",
      "There is no grind—only growth.",
    ];
    alert(quotes[Math.floor(Math.random() * quotes.length)]);
  }

  if (choice === '3') {
    const log = prompt('How did this week go?');
    if (!log) return;
    alert(`📝 Knight says: "From your words, I sense strength building. Stay sharp."`);
  }
});
