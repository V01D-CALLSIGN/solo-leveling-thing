function calculateXPNeeded(level) {
  return 100 + Math.floor((level ** 2) * 10);
}

function gainXP(amount) {
  const char = JSON.parse(localStorage.getItem('character'));
  char.xp += amount;

  const needed = calculateXPNeeded(char.level);
  if (char.xp >= needed) {
    char.xp -= needed;
    char.level += 1;
    localStorage.setItem('character', JSON.stringify(char));
    window.location.href = 'level-up.html';
    return;
  }

  localStorage.setItem('character', JSON.stringify(char));
  location.reload();
}
