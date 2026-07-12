// Data Structure
const players = {
  group1: [
    { id: 'tuan', name: 'Ngọc Tuấn', gender: 'M', spouse: 'tram' },
    { id: 'tram', name: 'Diệu Trâm', gender: 'F', spouse: 'tuan' },
    { id: 'manh', name: 'Văn Mạnh', gender: 'M', spouse: 'thanh' },
    { id: 'thanh', name: 'Diệu Thanh', gender: 'F', spouse: 'manh' },
    { id: 'nghiep', name: 'Nguyễn Nghiệp', gender: 'M', spouse: 'thuy' },
    { id: 'thuy', name: 'Diệu Thủy', gender: 'F', spouse: 'nghiep' },
    { id: 'cong', name: 'Hữu Công', gender: 'M', spouse: 'hoa' },
    { id: 'hoa', name: 'Diệu Hoa', gender: 'F', spouse: 'cong' },
  ],
  group2: [
    { id: 'canh', name: 'Quang Cảnh', gender: 'M', spouse: null },
    { id: 'thong', name: 'Tiến Thông', gender: 'M', spouse: null },
  ],
  group3: [
    { id: 'minh', name: 'Hữu Minh', gender: 'M', spouse: null },
    { id: 'hao', name: 'Phi Hào', gender: 'M', spouse: null },
  ],
  group4: [
    { id: 'nhu', name: 'Diệu Như', gender: 'F', spouse: null },
    { id: 'anh', name: 'Diệu Ánh', gender: 'F', spouse: null },
  ]
};

// State
let teamRed = [];
let teamBlue = [];
let currentGroupIndex = 1;
let drawnInCurrentGroup = [];
let groupPairsProcessed = 0; // To track pairs in group 1
let isDrawing = false;
let isAnimating = false;

// DOM Elements
const btnDraw = document.getElementById('btn-draw');
const drawInfo = document.getElementById('draw-info');
const currentGroupLabel = document.getElementById('current-group-label');
const redCount = document.getElementById('red-count');
const blueCount = document.getElementById('blue-count');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const vsDivider = document.getElementById('vs-divider');
const cardsContainer = document.getElementById('cards-container');

// Start
updateStatusBar();
updateLiveResults();

btnDraw.addEventListener('click', async () => {
  if (isDrawing || isAnimating) return;
  isDrawing = true;
  btnDraw.disabled = true;
  btnDraw.classList.add('opacity-50', 'cursor-not-allowed');

  const currentGroupKey = `group${currentGroupIndex}`;
  const groupData = players[currentGroupKey];

  // Find available players
  const availablePlayers = groupData.filter(p => !drawnInCurrentGroup.includes(p.id));

  if (availablePlayers.length === 0) {
    nextGroup();
    return;
  }

  // Pick random person
  const person = availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
  let partner = null;

  if (person.spouse) {
    partner = groupData.find(p => p.id === person.spouse);
  } else if (currentGroupIndex > 1) {
    // For groups 2,3,4 find the other person in the group
    partner = availablePlayers.find(p => p.id !== person.id);
  }

  // Assign teams randomly (50/50 chance)
  const isRed = Math.random() < 0.5;
  const team1 = isRed ? 'red' : 'blue';
  const team2 = isRed ? 'blue' : 'red';

  // Mark as drawn
  drawnInCurrentGroup.push(person.id);
  if (partner) drawnInCurrentGroup.push(partner.id);

  // Add to teams
  if (team1 === 'red') teamRed.push(person); else teamBlue.push(person);
  if (partner) {
    if (team2 === 'red') teamRed.push(partner); else teamBlue.push(partner);
  }

  await animateDraw(person, partner, team1, team2);

  // Check group completion
  const updatedAvailable = groupData.filter(p => !drawnInCurrentGroup.includes(p.id));
  if (updatedAvailable.length === 0) {
    if (currentGroupIndex < 4) {
      nextGroup();
    } else {
      setTimeout(() => {
        showFinalResults();
      }, 1000);
    }
  } else {
    isDrawing = false;
    btnDraw.disabled = false;
    btnDraw.classList.remove('opacity-50', 'cursor-not-allowed');
  }
});

function nextGroup() {
  currentGroupIndex++;
  drawnInCurrentGroup = [];
  currentGroupLabel.innerText = `Group ${currentGroupIndex}`;

  // Reset cards
  card1.classList.add('hidden');
  card1.classList.remove('flipped');
  card2.classList.add('hidden');
  card2.classList.remove('flipped');
  vsDivider.classList.add('hidden');
  drawInfo.innerText = `Nhấn nút để bốc thăm Group ${currentGroupIndex}.`;

  isDrawing = false;
  btnDraw.disabled = false;
  btnDraw.classList.remove('opacity-50', 'cursor-not-allowed');
}

async function animateDraw(p1, p2, t1, t2) {
  isAnimating = true;

  // Setup Card 1
  setupCard(1, p1, t1);
  card1.classList.remove('hidden', 'flipped');
  card1.classList.add('shaking');

  card2.classList.add('hidden');
  card2.classList.remove('flipped');
  vsDivider.classList.add('hidden');

  drawInfo.innerText = "Đang quay số...";

  // Wait for shake
  await sleep(1500);

  // Flip card 1
  card1.classList.remove('shaking');
  card1.classList.add('flipped');
  drawInfo.innerText = `${p1.name} vào ${t1 === 'red' ? 'Đội Đỏ' : 'Đội Xanh'}!`;
  fireConfetti(t1 === 'red' ? ['#ef4444', '#ffffff'] : ['#3b82f6', '#ffffff']);

  updateStatusBar();

  if (p2) {
    await sleep(1500);

    // Show vs divider
    vsDivider.classList.remove('hidden');

    // Setup Card 2
    setupCard(2, p2, t2);
    card2.classList.remove('hidden', 'flipped');

    // Shake card 2
    card2.classList.add('shaking');
    drawInfo.innerText = `Tìm đội cho người còn lại...`;

    await sleep(1500);
    card2.classList.remove('shaking');
    card2.classList.add('flipped');
    drawInfo.innerText = `Tự động: ${p2.name} vào ${t2 === 'red' ? 'Đội Đỏ' : 'Đội Xanh'}!`;
    fireConfetti(t2 === 'red' ? ['#ef4444', '#ffffff'] : ['#3b82f6', '#ffffff']);

    updateStatusBar();
  }

  await sleep(1000);
  isAnimating = false;

  // Update UI lists after animation
  updateLiveResults();
}

function setupCard(num, person, team) {
  document.getElementById(`card-${num}-icon`).innerText = person.gender === 'M' ? '👨' : '👩';
  document.getElementById(`card-${num}-name`).innerText = person.name;
  const teamEl = document.getElementById(`card-${num}-team`);
  teamEl.innerText = team === 'red' ? 'ĐỘI ĐỎ' : 'ĐỘI XANH';

  const backEl = document.querySelector(`#card-${num} .flip-card-back`);
  backEl.className = `flip-card-back ${team}`;
}

function updateStatusBar() {
  redCount.innerText = `${teamRed.length}/7`;
  blueCount.innerText = `${teamBlue.length}/7`;
}

function fireConfetti(colors) {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: colors
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function updateLiveResults() {
  renderList('list-red', teamRed);
  renderList('list-blue', teamBlue);

  document.getElementById('stats-red-m').innerText = `👨 Nam: ${teamRed.filter(p => p.gender === 'M').length}`;
  document.getElementById('stats-red-f').innerText = `👩 Nữ: ${teamRed.filter(p => p.gender === 'F').length}`;
  document.getElementById('stats-red-t').innerText = `Tổng: ${teamRed.length}`;

  document.getElementById('stats-blue-m').innerText = `👨 Nam: ${teamBlue.filter(p => p.gender === 'M').length}`;
  document.getElementById('stats-blue-f').innerText = `👩 Nữ: ${teamBlue.filter(p => p.gender === 'F').length}`;
  document.getElementById('stats-blue-t').innerText = `Tổng: ${teamBlue.length}`;
}

// Result Screen
function showFinalResults() {
  document.getElementById('drawing-area').classList.add('hidden');
  document.getElementById('status-bar').classList.add('hidden');

  document.getElementById('success-header').classList.remove('hidden');
  document.getElementById('action-bar').classList.remove('hidden');
  document.getElementById('action-bar').classList.add('flex');

  // Validate
  const isValid = teamRed.length === 7 && teamBlue.length === 7 &&
    teamRed.filter(p => p.gender === 'M').length === 4 &&
    teamBlue.filter(p => p.gender === 'M').length === 4;

  if (!isValid) {
    document.getElementById('validation-error').classList.remove('hidden');
  }

  // Final big confetti
  fireConfetti(['#ef4444', '#3b82f6', '#16a34a', '#f59e0b']);
  setTimeout(() => fireConfetti(['#ef4444', '#3b82f6', '#16a34a', '#f59e0b']), 1000);
}

function renderList(id, teamArray) {
  const ul = document.getElementById(id);
  ul.innerHTML = '';
  // Sort Men first
  const sorted = [...teamArray].sort((a, b) => (a.gender === b.gender) ? 0 : a.gender === 'M' ? -1 : 1);

  sorted.forEach(p => {
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center bg-white/60 p-1.5 sm:p-2 rounded-lg shadow-sm';
    li.innerHTML = `<span class="font-bold text-gray-800 text-xs sm:text-sm">${p.name}</span> <span class="text-sm sm:text-base">${p.gender === 'M' ? '👨' : '👩'}</span>`;
    ul.appendChild(li);
  });
}

// Action Buttons
document.getElementById('btn-reset').addEventListener('click', () => {
  if (confirm("Bạn có chắc muốn bốc lại từ đầu?")) {
    location.reload();
  }
});

document.getElementById('btn-copy').addEventListener('click', () => {
  let text = `========================\nĐỘI ĐỎ\n`;
  teamRed.forEach(p => text += `- ${p.name} (${p.gender === 'M' ? 'Nam' : 'Nữ'})\n`);
  text += `========================\nĐỘI XANH\n`;
  teamBlue.forEach(p => text += `- ${p.name} (${p.gender === 'M' ? 'Nam' : 'Nữ'})\n`);

  navigator.clipboard.writeText(text).then(() => {
    alert("Đã copy kết quả vào clipboard!");
  });
});

document.getElementById('btn-save').addEventListener('click', () => {
  const zone = document.getElementById('capture-zone');
  html2canvas(zone, { backgroundColor: '#ffffff' }).then(canvas => {
    const link = document.createElement('a');
    link.download = 'ChungMinhCup_Chiadoi.png';
    link.href = canvas.toDataURL();
    link.click();
  });
});
