window.addEventListener('DOMContentLoaded', () => {
  const char = JSON.parse(localStorage.getItem('character'));
  const statBox = document.getElementById('stat-summary');

  for (const [stat, value] of Object.entries(char.stats)) {
    statBox.innerHTML += `
      <div class="bg-gray-800 border border-blue-600 p-4 rounded">
        <h3 class="text-lg font-bold text-blue-400">${stat}</h3>
        <p class="text-xl text-white">${value}</p>
      </div>
    `;
  }

  const savedRef = localStorage.getItem('reflection');
  if (savedRef) {
    document.getElementById('journal').value = savedRef;
  }
});

function saveReflection() {
  const val = document.getElementById('journal').value;
  localStorage.setItem('reflection', val);
  document.getElementById('ref-msg').textContent = "✅ Reflection saved!";
}
