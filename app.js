const groups = [
  {
    category: 'Clicker',
    games: [
      ['Berry Pop', '🍓', 'Pop a few berries. No rush, just vibes.'],
      ['Cloud Tap', '☁️', 'Collect the softest clouds in the sky.'],
      ['Star Sprinkle', '🌟', 'Tap to scatter a little stardust.'],
      ['Mochi Maker', '🍡', 'Make a mountain of squishy mochi.'],
      ['Button Garden', '🌷', 'Every click brings a new flower.'],
      ['Pocket Pancakes', '🥞', 'Flip up a stack, one tap at a time.'],
      ['Bubble Wrap', '🫧', 'Pop those bubbles. You know you want to.'],
      ['Tiny Toast', '🍞', 'Toast, tap, repeat. A perfect little loop.'],
      ['Jelly Jam', '🍇', 'Squish some jellies and make a jam.'],
      ['Paw Prints', '🐾', 'Leave happy little paw prints everywhere.'],
      ['Cocoa Clicks', '☕', 'Stir up a cozy cup of cocoa.'],
      ['Pixel Petals', '🌼', 'Grow a pixel-perfect patch of flowers.'],
      ['Donut Dots', '🍩', 'Sprinkle the donuts with extra joy.'],
      ['Lucky Lanterns', '🏮', 'Light up your own little festival.'],
      ['Turtle Taps', '🐢', 'Slow and steady clicks win the day.'],
      ['Peach Please', '🍑', 'Gather the sweetest fuzzy peaches.'],
      ['Pocket Stars', '💫', 'Catch little stars as they drift by.'],
      ['Daisy Days', '🌼', 'A click, a daisy. A very nice day.'],
      ['Pudding Party', '🍮', 'Tap out a tiny pudding party.'],
      ['Puffball Pop', '🐑', 'Pop fluffy puffballs till you smile.'],
      ['Little Lemons', '🍋', 'Squeeze out a little sunshine.'],
      ['Koi Clicks', '🐠', 'Give the koi a gentle little tap.'],
      ['Sprout Sprint', '🌱', 'Help a tiny sprout reach for the sun.'],
      ['Cookie Crumbs', '🍪', 'Collect one more cookie crumb.'],
    ],
  },
  {
    category: 'Idle',
    games: [
      ['Moon Garden', '🌙', 'Plant a moon garden that grows while you chill.'],
      ['Sleepy Bakery', '🥐', 'Your little bakery keeps baking away.'],
      ['Mossy Meadow', '🍀', 'Grow a peaceful meadow, one patch at a time.'],
      ['Cozy Aquarium', '🐡', 'Fill a quiet aquarium with happy fish.'],
      ['Mushroom Nook', '🍄', 'A little mushroom village, growing on its own.'],
      ['Tea Time Tycoon', '🫖', 'Brew a tiny tea empire at your own pace.'],
      ['Cloud Cottage', '🏡', 'Build the coziest cottage above the clouds.'],
      ['Lunar Llamas', '🦙', 'Raise llamas in a very sleepy moon farm.'],
      ['Little Orchard', '🍎', 'Your trees keep growing between visits.'],
      ['Starry Farm', '🌌', 'Plant seeds beneath the starry sky.'],
      ['Pond Pals', '🪷', 'Let your pond grow into a happy little home.'],
      ['Cat Café', '🐈', 'The cats make biscuits while you’re away.'],
      ['Pebble Planet', '🪐', 'Start small and grow a whole tiny planet.'],
      ['Garden Gnomes', '🧙', 'Your gnomes are busy tending the garden.'],
      ['Tiny Bookshop', '📚', 'Collect books and grow a cozy corner shop.'],
      ['Coral Cove', '🪸', 'Watch a quiet reef bloom with life.'],
      ['Bunny Burrow', '🐇', 'A sweet burrow gets bigger bit by bit.'],
      ['Honey Hive', '🍯', 'Busy bees make honey at their own pace.'],
      ['Pocket Planet', '🌍', 'A tiny world with room to grow.'],
      ['Frog Pond', '🐸', 'Lily pads, little frogs, and no hurry.'],
      ['Cloud Kitchen', '🍰', 'Bake a sky-high stack of sweet treats.'],
      ['Dino Park', '🦕', 'Grow a gentle park for tiny dinosaurs.'],
      ['Star Café', '☄️', 'Serve warm drinks to sleepy stargazers.'],
      ['Seashell Shop', '🐚', 'Collect seashells along a very calm shore.'],
    ],
  },
  {
    category: 'Memory',
    games: [
      ['Dream Sequence', '🌙', 'Remember a little sequence of glowing stars.'],
      ['Color Garden', '🎨', 'Watch the colors, then repeat them back.'],
      ['Mochi Match', '🍡', 'Keep your eyes open and follow the pattern.'],
      ['Firefly Friends', '✨', 'Remember which fireflies blinked.'],
      ['Cosmic Colors', '🌈', 'A tiny color challenge amongst the stars.'],
      ['Bunny Beats', '🐰', 'Remember the bunnies’ little rhythm.'],
      ['Pickle Parade', '🥒', 'Keep track of the marching pickles.'],
      ['Shell Shuffle', '🐚', 'Follow the shells and trust your memory.'],
      ['Pocket Patterns', '🧩', 'A gentle sequence game for your brain.'],
      ['Puppy Playlist', '🐶', 'Remember the pup’s favorite tune.'],
      ['Moon Phases', '🌘', 'Keep the changing moon pattern in mind.'],
      ['Jellyfish Glow', '🪼', 'Follow a glowing jellyfish sequence.'],
      ['Sundae Stack', '🍨', 'Remember what goes on top of the sundae.'],
      ['Fox Trot', '🦊', 'Watch the foxes hop, then copy their moves.'],
      ['Daisy Chain', '🌼', 'Add to the chain and see how far you get.'],
      ['Little Lanterns', '🏮', 'Keep track of the twinkling lanterns.'],
      ['Sleepy Sloths', '🦥', 'Remember which sloth waved hello.'],
      ['Berry Bunch', '🫐', 'A fruity little sequence to remember.'],
      ['Puddle Jump', '🐸', 'Follow the frog’s hops across the pond.'],
      ['Kite Colors', '🪁', 'Keep the colorful kites in the right order.'],
      ['Starfish Says', '⭐', 'A sea star gives you a pattern to remember.'],
      ['Cookie Stack', '🍪', 'Rebuild a very tasty sequence.'],
      ['Turtle Trail', '🐢', 'Remember the turtle’s winding little path.'],
      ['Puffin Parade', '🐧', 'Keep the puffins marching in order.'],
    ],
  },
  {
    category: 'Reaction',
    games: [
      ['Soft Landing', '🪂', 'Wait for the cue, then tap when it feels right.'],
      ['Puffin Pop', '🐧', 'How quick are your flippers today?'],
      ['Blink & Bloom', '🌸', 'Catch the flower when it blooms.'],
      ['Star Catcher', '🌠', 'Tap a falling star at just the right moment.'],
      ['Sleepy Sloth', '🦥', 'A slow sloth, a quick little reaction test.'],
      ['Lemon Drop', '🍋', 'Catch the lemon before it goes splat.'],
      ['Frog Hop', '🐸', 'Hop on the cue, not before. Ready?'],
      ['Bubble Burst', '🫧', 'Pop the bubble when it appears.'],
      ['Kitten Zoom', '🐈', 'React before the kitten zooms away.'],
      ['Pancake Flip', '🥞', 'Flip the pancake at the perfect time.'],
      ['Comet Call', '☄️', 'Catch the comet as it zips past.'],
      ['Acorn Dash', '🌰', 'A quick little dash for a tasty acorn.'],
      ['Puddle Splash', '💧', 'Splash at just the right moment.'],
      ['Taco Toss', '🌮', 'Catch the flying taco. You’ve got this.'],
      ['Firefly Flick', '✨', 'A tiny light, a tiny tap, a tiny win.'],
      ['Boba Bounce', '🧋', 'Catch the bouncing boba pearls.'],
      ['Corgi Zoomies', '🐕', 'See if you can keep up with the corgi.'],
      ['Cherry Drop', '🍒', 'Catch a cherry at the perfect moment.'],
      ['Snowflake Catch', '❄️', 'Tap when the snowflake drifts by.'],
      ['Cloud Hop', '☁️', 'Jump to the next cloud on the cue.'],
      ['Dino Dash', '🦖', 'A tiny dinosaur, a quick little dash.'],
      ['Peachy Keen', '🍑', 'Wait for the peach, then catch it.'],
      ['Candle Wish', '🕯️', 'Make your wish when the flame flickers.'],
      ['Moth to Moon', '🦋', 'Catch the moth as it flutters past.'],
    ],
  },
  {
    category: 'Target',
    games: [
      ['Paw-some Aim', '🐾', 'Tap the little paws as they pop up.'],
      ['Daisy Darts', '🌼', 'A gentle target game with flowers.'],
      ['Marshmallow Toss', '🍡', 'Hit the targets, keep the marshmallows.'],
      ['Little Lighthouse', '🗼', 'Tap each passing boat to light the way.'],
      ['Pebble Skip', '🪨', 'A few targets, a very calm pond.'],
      ['Donut Dodge', '🍩', 'Tap the donut targets before they disappear.'],
      ['Pollen Patrol', '🐝', 'Help the bees find their flowers.'],
      ['Acorn Arcade', '🌰', 'Aim for the acorns and gather a little score.'],
      ['Clover Catch', '🍀', 'Tap the lucky clovers as they appear.'],
      ['Bubble Bop', '🔵', 'A bright, bouncy target game.'],
      ['Starry Aim', '⭐', 'Collect stars from the night sky.'],
      ['Koi Pond Toss', '🐟', 'Find the little fish hiding in the pond.'],
      ['Mushroom Hunt', '🍄', 'Tap the mushrooms when they peek out.'],
      ['Pudding Plop', '🍮', 'Catch the wobbly puddings.'],
      ['Cloud Collector', '☁️', 'Gather a few drifting clouds.'],
      ['Bunny Bursts', '🐇', 'Spot the bunnies and tap before they hop off.'],
      ['Lemon Squeeze', '🍋', 'A zesty little target challenge.'],
      ['Garden Gnome Hunt', '🧙', 'Can you spot all the sneaky gnomes?'],
      ['Turtle Targets', '🐢', 'Slow targets for an easygoing round.'],
      ['Puffball Parade', '🐑', 'Tap the fluff before it floats away.'],
      ['Cherry Pick', '🍒', 'Pick ripe cherries in a little time.'],
      ['Starfish Search', '⭐', 'Find the starfish along the shore.'],
      ['Frogger Pond', '🐸', 'Tap the frogs hopping between lily pads.'],
      ['Pocket Comets', '☄️', 'Catch tiny comets in the night.'],
    ],
  },
];

const palettes = [
  ['#20204d', '#675dff'], ['#15394c', '#16c5ed'], ['#481f50', '#e344d2'],
  ['#173d3a', '#4ce6a3'], ['#4a2c24', '#ff8b43'], ['#202c54', '#527cff'],
  ['#4b3a1d', '#f5c746'], ['#30234f', '#a875ff'], ['#4a2140', '#f35d9e'],
  ['#17434a', '#34d4c6'], ['#33254c', '#9c77e8'], ['#492541', '#f27ac4'],
];
const modes = {
  Clicker: ['Tap to collect', 'Clicker', 'One button, lots of little wins.'],
  Idle: ['Grow at your own pace', 'Idle', 'Tap to collect and spend your points on helpers that earn more while you play.'],
  Memory: ['Watch, then repeat', 'Memory', 'Watch the sequence, then tap the tiles in the same order.'],
  Reaction: ['Wait for the cue', 'Reaction', 'Tap when the button turns green. Tap early and you’ll have to try again.'],
  Target: ['Catch the targets', 'Target', 'Tap the targets as they appear. How many can you catch?'],
};
const games = groups.flatMap((group, groupIndex) => group.games.map(([name, emoji, description], index) => ({
  id: `${group.category}-${index}`,
  name,
  emoji,
  description,
  category: group.category,
  color: palettes[(index * 3 + groupIndex * 2) % palettes.length],
  rating: (4.5 + ((index + groupIndex) % 5) / 10).toFixed(1),
})));
const grid = document.querySelector('#game-grid');
const modal = document.querySelector('#modal');
const playArea = document.querySelector('#play-area');
const searchInput = document.querySelector('#search');
let activeFilter = 'All';
let favoritesOnly = false;
let currentGame = null;
let cleanupGame = () => {};
let idle = null;

document.querySelector('#game-count').textContent = games.length;
document.querySelector('#filters [data-filter="All"] span').textContent = games.length;
document.querySelector('#result-count').textContent = `Showing ${games.length} games`;

function readFavorites() {
  try {
    const saved = JSON.parse(localStorage.getItem('little-arcade-favorites') || '[]');
    return new Set(Array.isArray(saved) ? saved : []);
  } catch (error) {
    console.warn('Could not read saved favorites.', error);
    return new Set();
  }
}
let favorites = readFavorites();

function saveFavorites() {
  try {
    localStorage.setItem('little-arcade-favorites', JSON.stringify([...favorites]));
  } catch (error) {
    console.warn('Could not save favorites.', error);
  }
}

function readSave(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn(`Could not read game save "${key}".`, error);
    return fallback;
  }
}

function writeSave(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Could not save game "${key}".`, error);
  }
}

function renderGames() {
  const query = searchInput.value.trim().toLowerCase();
  const shown = games.filter((game) =>
    (activeFilter === 'All' || game.category === activeFilter) &&
    (!favoritesOnly || favorites.has(game.id)) &&
    (!query || `${game.name} ${game.description} ${game.category}`.toLowerCase().includes(query))
  );
  grid.innerHTML = shown.map((game) => `
    <article class="game-card" data-game="${game.id}" tabindex="0" role="button" aria-label="Play ${game.name}">
      <div class="game-thumb" style="background:radial-gradient(circle at 50% 40%, ${game.color[1]}, ${game.color[0]} 72%)">
        <span class="game-badge">${modes[game.category][1]}</span>
        <button class="card-heart ${favorites.has(game.id) ? 'saved' : ''}" data-favorite="${game.id}" aria-label="${favorites.has(game.id) ? 'Remove' : 'Add'} ${game.name} ${favorites.has(game.id) ? 'from' : 'to'} favorites">${favorites.has(game.id) ? '♥' : '♡'}</button>
        <span class="game-emoji">${game.emoji}</span>
      </div>
      <div class="game-info"><h3 class="game-title">${game.name}</h3><p class="game-subtitle">${game.description}</p>
        <div class="game-meta"><span>★ ${game.rating} &nbsp;·&nbsp; ${game.category}</span><span class="play-link">Play ↗</span></div>
      </div>
    </article>`).join('');
  document.querySelector('#result-count').textContent = `Showing ${shown.length} of ${games.length} games`;
  document.querySelector('#empty-state').hidden = shown.length > 0;
  grid.hidden = shown.length === 0;
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  saveFavorites();
  renderGames();
  if (currentGame?.id === id) updateModalFavorite();
}

function updateModalFavorite() {
  const button = document.querySelector('#modal-favorite');
  button.classList.toggle('saved', favorites.has(currentGame.id));
  button.textContent = favorites.has(currentGame.id) ? '♥ Saved to favorites' : '♡ Save to favorites';
}

function openGame(game) {
  cleanupGame();
  currentGame = game;
  const [hint, , description] = modes[game.category];
  document.querySelector('#modal-category').textContent = `${game.emoji} ${game.category.toUpperCase()} GAME`;
  document.querySelector('#modal-title').textContent = game.name;
  document.querySelector('#modal-description').textContent = game.description || description;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  updateModalFavorite();
  startGame(game, hint);
  document.querySelector('#modal-close').focus();
}

function setPlayArea(markup) {
  playArea.innerHTML = markup;
}

function startGame(game, hint) {
  const category = game.category;
  if (category === 'Clicker') return startClicker(game, hint);
  if (category === 'Idle') return startIdle(game);
  if (category === 'Memory') return startMemory(game);
  if (category === 'Reaction') return startReaction(game);
  startTarget(game);
}

function startClicker(game, hint) {
  const saveKey = `little-arcade-clicker-${game.id}`;
  const saved = readSave(saveKey, {});
  let points = Number(saved.points) || 0;
  let power = Math.max(1, Number(saved.power) || 1);
  let cost = Math.max(10, Number(saved.cost) || 10);
  let combo = 0;
  let lastTap = 0;
  let sprintScore = 0;
  let sprintCombo = 0;
  let sprintTime = 20;
  let sprintTimer = null;
  let sprintActive = false;
  const best = Number(saved.best) || 0;
  setPlayArea(`<p class="play-prompt">${hint} · build a streak, grab upgrades, beat your best.</p>
    <div class="score-line" id="click-score">0 ${game.emoji}</div>
    <div class="play-prompt" id="click-stats">Tap power ×${power} · best sprint ${best}</div>
    <button class="game-action large" id="click-action" aria-label="${hint}">${game.emoji}</button>
    <div class="shop-row"><button class="shop-item" id="click-upgrade">✨ Upgrade tap · ${cost}</button><button class="shop-item" id="click-sprint">⏱ 20-second sprint</button></div>
    <p class="play-prompt" id="click-hint">Every 8 quick taps earns a bonus burst.</p>`);
  const update = () => {
    playArea.querySelector('#click-score').textContent = `${Math.floor(points)} ${game.emoji}${sprintActive ? ` · ${sprintScore} this sprint` : ''}`;
    playArea.querySelector('#click-stats').textContent = `Tap power ×${power} · best sprint ${Number(readSave(saveKey, {}).best) || best}`;
    const upgrade = playArea.querySelector('#click-upgrade');
    upgrade.disabled = points < cost;
    upgrade.textContent = `✨ Upgrade tap · ${cost}`;
  };
  const persist = () => writeSave(saveKey, { points, power, cost, best: Math.max(best, Number(readSave(saveKey, {}).best) || 0) });
  playArea.querySelector('#click-action').addEventListener('click', (event) => {
    const now = performance.now();
    if (now - lastTap > 1100) combo = 0;
    lastTap = now;
    combo++;
    if (sprintActive) {
      sprintScore += power;
      sprintCombo++;
      if (sprintCombo % 8 === 0) sprintScore += power * 4;
    } else {
      points += power + (combo % 8 === 0 ? power * 4 : 0);
    }
    playArea.querySelector('#click-hint').textContent = combo && combo % 8 === 0
      ? '✨ Streak bonus! Keep that lovely rhythm going.'
      : `${game.emoji} ${combo ? `${combo % 8}/8 toward a streak bonus` : 'Find your rhythm.'}`;
    if (!sprintActive) persist();
    update();
    event.currentTarget.animate([{ transform: 'scale(1)' }, { transform: 'scale(.86)' }, { transform: 'scale(1)' }], { duration: 170 });
  });
  playArea.querySelector('#click-upgrade').addEventListener('click', () => {
    if (points < cost) return;
    points -= cost;
    power++;
    cost = Math.ceil(cost * 1.8);
    persist();
    update();
  });
  playArea.querySelector('#click-sprint').addEventListener('click', (event) => {
    if (sprintActive) return;
    sprintActive = true;
    sprintScore = 0;
    sprintCombo = 0;
    sprintTime = 20;
    event.currentTarget.disabled = true;
    event.currentTarget.textContent = `⏱ ${sprintTime}s — go go go!`;
    playArea.querySelector('#click-hint').textContent = 'Fast taps build a streak bonus. Ready, set, tap!';
    update();
    sprintTimer = window.setInterval(() => {
      sprintTime--;
      event.currentTarget.textContent = `⏱ ${sprintTime}s — go go go!`;
      if (sprintTime <= 0) {
        window.clearInterval(sprintTimer);
        sprintActive = false;
        points += sprintScore;
        const oldBest = Number(readSave(saveKey, {}).best) || 0;
        const newBest = Math.max(oldBest, sprintScore);
        writeSave(saveKey, { points, power, cost, best: newBest });
        event.currentTarget.disabled = false;
        event.currentTarget.textContent = '⏱ 20-second sprint';
        playArea.querySelector('#click-hint').textContent = `Sprint complete: ${sprintScore} points${sprintScore > oldBest ? ' — new personal best!' : '. Fancy another?'}`;
        update();
      }
    }, 1000);
  });
  cleanupGame = () => { window.clearInterval(sprintTimer); cleanupGame = () => {}; };
  update();
}

function startIdle(game) {
  const saveKey = `little-arcade-idle-${game.id}`;
  const saved = readSave(saveKey, {});
  const elapsed = saved.savedAt ? Math.min(3600, Math.max(0, Math.floor((Date.now() - saved.savedAt) / 1000))) : 0;
  idle = {
    points: Math.max(0, Number(saved.points) || 0) + (Number(saved.rate) || 0) * elapsed,
    rate: Math.max(0, Number(saved.rate) || 0),
    cost: Math.max(10, Number(saved.cost) || 10),
    timer: null,
  };
  setPlayArea(`<p class="play-prompt">Grow a little ${game.emoji} corner of your own. Your garden remembers you.</p>
    <div class="score-line" id="idle-score">0 ${game.emoji} collected</div>
    <div class="score-line" id="idle-rate">0 helpers · 0/sec</div>
    <button class="game-action" id="idle-collect">Collect ${game.emoji}</button>
    <div class="shop-row"><button class="shop-item" id="idle-buy" disabled>🌱 Hire helper · 10</button><button class="shop-item" id="idle-boost" disabled>✨ Boost · 25</button></div>
    <p class="play-prompt" id="idle-note">${elapsed ? `While you were away, your helpers made ${idle.rate * elapsed} ${game.emoji}!` : 'Helpers keep earning while this game is open.'}</p>`);
  const persist = () => writeSave(saveKey, { points: idle.points, rate: idle.rate, cost: idle.cost, savedAt: Date.now() });
  const update = () => {
    playArea.querySelector('#idle-score').textContent = `${Math.floor(idle.points)} ${game.emoji} collected`;
    playArea.querySelector('#idle-rate').textContent = `${idle.rate} ${idle.rate === 1 ? 'helper' : 'helpers'} · ${idle.rate}/sec`;
    playArea.querySelector('#idle-buy').disabled = idle.points < idle.cost;
    playArea.querySelector('#idle-buy').textContent = `🌱 Hire helper · ${idle.cost}`;
    playArea.querySelector('#idle-boost').disabled = idle.points < 25 || idle.rate === 0;
  };
  playArea.querySelector('#idle-collect').addEventListener('click', () => { idle.points++; persist(); update(); });
  playArea.querySelector('#idle-buy').addEventListener('click', () => {
    if (idle.points < idle.cost) return;
    idle.points -= idle.cost;
    idle.rate++;
    idle.cost = Math.ceil(idle.cost * 1.65);
    persist();
    update();
  });
  playArea.querySelector('#idle-boost').addEventListener('click', () => {
    if (idle.points < 25) return;
    idle.points -= 25;
    idle.rate *= 2;
    persist();
    update();
  });
  idle.timer = window.setInterval(() => { idle.points += idle.rate; persist(); update(); }, 1000);
  cleanupGame = () => { if (idle?.timer) window.clearInterval(idle.timer); if (idle) persist(); idle = null; cleanupGame = () => {}; };
}

function startMemory(game) {
  const icons = [game.emoji, '✨', '🌙', '💜'];
  let sequence = [];
  let inputIndex = 0;
  let locked = true;
  let round = 0;
  let active = true;
  const bestKey = `little-arcade-memory-${game.id}`;
  const best = Number(readSave(bestKey, 0)) || 0;
  setPlayArea(`<p class="play-prompt" id="memory-prompt">Watch the ${game.name} pattern, then repeat it.</p><div class="score-line" id="memory-score">Best round: ${best}</div><div class="sequence">${icons.map((icon, index) => `<button class="sequence-dot" data-index="${index}" aria-label="Tile ${index + 1}">${icon}</button>`).join('')}</div><button class="game-action" id="memory-start">Start a round</button>`);
  const tiles = [...playArea.querySelectorAll('.sequence-dot')];
  const startButton = playArea.querySelector('#memory-start');
  startButton.addEventListener('click', async () => {
    if (!locked || !active) return;
    locked = true;
    round++;
    inputIndex = 0;
    sequence.push(Math.floor(Math.random() * tiles.length));
    playArea.querySelector('#memory-score').textContent = `Round ${round} · best ${Math.max(best, round)}`;
    if (round > best) writeSave(bestKey, round);
    playArea.querySelector('#memory-prompt').textContent = 'Watch closely...';
    startButton.disabled = true;
    for (const index of sequence) {
      await new Promise((resolve) => window.setTimeout(resolve, 450));
      if (!active) return;
      tiles[index].classList.add('lit');
      await new Promise((resolve) => window.setTimeout(resolve, 350));
      if (!active) return;
      tiles[index].classList.remove('lit');
    }
    if (!active) return;
    locked = false;
    startButton.disabled = false;
    playArea.querySelector('#memory-prompt').textContent = 'Your turn — repeat the sequence.';
  });
  tiles.forEach((tile) => tile.addEventListener('click', () => {
    if (locked || !sequence.length) return;
    tile.classList.add('lit');
    window.setTimeout(() => tile.classList.remove('lit'), 160);
    if (Number(tile.dataset.index) !== sequence[inputIndex]) {
      locked = true;
      playArea.querySelector('#memory-prompt').textContent = `Lovely try! You made it to round ${round}. Start another?`;
      sequence = [];
      round = 0;
      playArea.querySelector('#memory-score').textContent = `Best round: ${Number(readSave(bestKey, 0)) || best}`;
      startButton.disabled = false;
      return;
    }
    inputIndex++;
    if (inputIndex === sequence.length) {
      locked = true;
      playArea.querySelector('#memory-prompt').textContent = 'Nice remembering! Ready for the next round?';
      startButton.disabled = false;
    }
  }));
  cleanupGame = () => { active = false; cleanupGame = () => {}; };
}

function startReaction(game) {
  let state = 'ready';
  let startTime = 0;
  let timer = null;
  let round = 0;
  let total = 0;
  const times = [];
  const bestKey = `little-arcade-reaction-${game.id}`;
  const best = Number(readSave(bestKey, 0)) || 0;
  setPlayArea(`<p class="play-prompt" id="reaction-prompt">Five quick rounds. Wait for the green ${game.emoji}, then tap.</p><div class="score-line" id="reaction-score">Best average: ${best ? `${best} ms` : 'not set'}</div><div class="play-prompt" id="reaction-round">Round 1 of 5</div><button class="game-action" id="reaction-action">Start round 1</button>`);
  const button = playArea.querySelector('#reaction-action');
  button.addEventListener('click', () => {
    if (state === 'ready' || state === 'result') {
      if (state === 'result' && round >= 5) {
        round = 0;
        total = 0;
        times.length = 0;
      }
      state = 'waiting';
      button.textContent = 'Wait...';
      button.className = 'game-action waiting';
      playArea.querySelector('#reaction-round').textContent = `Round ${round + 1} of 5`;
      playArea.querySelector('#reaction-prompt').textContent = `Stay ready for the ${game.emoji}...`;
      timer = window.setTimeout(() => {
        state = 'go';
        startTime = performance.now();
        button.textContent = `${game.emoji} TAP!`;
        button.className = 'game-action success';
      }, 900 + Math.random() * 2300);
      return;
    }
    if (state === 'waiting') {
      window.clearTimeout(timer);
      state = 'result';
      button.textContent = 'Too soon — go again';
      button.className = 'game-action';
      playArea.querySelector('#reaction-prompt').textContent = 'Jumped the gun a little. No worries!';
      playArea.querySelector('#reaction-score').textContent = times.length ? `Average so far: ${Math.round(total / times.length)} ms` : 'No score yet — try again';
      return;
    }
    if (state === 'go') {
      const elapsed = Math.round(performance.now() - startTime);
      times.push(elapsed);
      total += elapsed;
      round++;
      state = 'result';
      button.textContent = round < 5 ? `Ready for round ${round + 1}` : 'Play another set';
      button.className = 'game-action';
      playArea.querySelector('#reaction-round').textContent = round < 5 ? `Round ${round} of 5 complete` : 'Five rounds complete!';
      playArea.querySelector('#reaction-prompt').textContent = round < 5 ? `${elapsed} ms — nice! Take a breath, then go again.` : 'Your average reaction time for the set:';
      const average = Math.round(total / times.length);
      const oldBest = Number(readSave(bestKey, 0)) || best;
      if (round === 5 && (!oldBest || average < oldBest)) writeSave(bestKey, average);
      playArea.querySelector('#reaction-score').textContent = round === 5
        ? `${average} ms average${!oldBest || average < oldBest ? ' · new best!' : ` · best ${oldBest} ms`}`
        : `${elapsed} ms · set average ${average} ms`;
    }
  });
  cleanupGame = () => { window.clearTimeout(timer); cleanupGame = () => {}; };
}

function startTarget(game) {
  let score = 0;
  let misses = 0;
  let remaining = 25;
  let timer = null;
  const bestKey = `little-arcade-target-${game.id}`;
  const best = Number(readSave(bestKey, 0)) || 0;
  setPlayArea(`<p class="play-prompt" id="target-prompt">Catch the moving ${game.emoji} before time runs out!</p><div class="score-line" id="target-score">0 caught · 0 misses · 25s</div><div class="target-field" id="target-field"><button class="game-action" id="target-start">Start a round</button></div><p class="play-prompt" id="target-best">Best: ${best} catches</p>`);
  const field = playArea.querySelector('#target-field');
  const placeTarget = () => {
    const button = field.querySelector('#target-hit');
    const maxX = Math.max(0, field.clientWidth - button.offsetWidth);
    const maxY = Math.max(0, field.clientHeight - button.offsetHeight);
    button.style.left = `${Math.random() * maxX}px`;
    button.style.top = `${Math.random() * maxY}px`;
  };
  field.addEventListener('click', (event) => {
    if (event.target === field && remaining > 0) {
      misses++;
      playArea.querySelector('#target-score').textContent = `${score} caught · ${misses} misses · ${remaining}s`;
    }
  });
  const begin = () => {
    score = 0;
    misses = 0;
    remaining = 25;
    playArea.querySelector('#target-prompt').textContent = `Go catch those ${game.emoji}! The targets keep moving.`;
    field.innerHTML = `<button class="game-action target" id="target-hit" aria-label="Catch moving target">${game.emoji}</button>`;
    const target = field.querySelector('#target-hit');
    target.addEventListener('click', () => {
      score++;
      playArea.querySelector('#target-score').textContent = `${score} caught · ${misses} misses · ${remaining}s`;
      placeTarget();
      target.animate([{ transform: 'scale(.72)' }, { transform: 'scale(1)' }], { duration: 140 });
    });
    placeTarget();
    timer = window.setInterval(() => {
      remaining--;
      playArea.querySelector('#target-score').textContent = `${score} caught · ${misses} misses · ${remaining}s`;
      if (remaining <= 0) {
        window.clearInterval(timer);
        const oldBest = Number(readSave(bestKey, 0)) || best;
        if (score > oldBest) writeSave(bestKey, score);
        playArea.querySelector('#target-best').textContent = `Best: ${Math.max(oldBest, score)} catches`;
        playArea.querySelector('#target-prompt').textContent = `${score} caught${score > oldBest ? ' — new personal best!' : '!'} Fancy another round?`;
        field.innerHTML = `<button class="game-action" id="target-restart">Play again</button>`;
        field.querySelector('#target-restart').addEventListener('click', begin);
      }
    }, 1000);
  };
  field.querySelector('#target-start').addEventListener('click', begin);
  cleanupGame = () => { window.clearInterval(timer); cleanupGame = () => {}; };
}

function closeGame() {
  cleanupGame();
  modal.hidden = true;
  document.body.style.overflow = '';
  currentGame = null;
}

document.querySelector('#filters').addEventListener('click', (event) => {
  const button = event.target.closest('[data-filter]');
  if (!button) return;
  activeFilter = button.dataset.filter;
  favoritesOnly = false;
  document.querySelectorAll('.filter').forEach((filter) => filter.classList.toggle('active', filter === button));
  document.querySelector('#show-favorites').classList.remove('saved');
  renderGames();
});
document.querySelectorAll('[data-quick-filter]').forEach((link) => link.addEventListener('click', () => {
  activeFilter = link.dataset.quickFilter;
  favoritesOnly = false;
  document.querySelectorAll('.filter').forEach((filter) => filter.classList.toggle('active', filter.dataset.filter === activeFilter));
  renderGames();
}));
grid.addEventListener('click', (event) => {
  const favorite = event.target.closest('[data-favorite]');
  if (favorite) {
    event.stopPropagation();
    toggleFavorite(favorite.dataset.favorite);
    return;
  }
  const card = event.target.closest('[data-game]');
  if (card) openGame(games.find((game) => game.id === card.dataset.game));
});
grid.addEventListener('keydown', (event) => {
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-game]')) {
    event.preventDefault();
    openGame(games.find((game) => game.id === event.target.dataset.game));
  }
});
searchInput.addEventListener('input', renderGames);
document.querySelector('#show-favorites').addEventListener('click', (event) => {
  favoritesOnly = !favoritesOnly;
  event.currentTarget.classList.toggle('saved', favoritesOnly);
  renderGames();
});
document.querySelector('#modal-close').addEventListener('click', closeGame);
document.querySelector('#modal-favorite').addEventListener('click', () => currentGame && toggleFavorite(currentGame.id));
modal.addEventListener('click', (event) => { if (event.target === modal) closeGame(); });
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.hidden) closeGame();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    searchInput.focus();
  }
});

renderGames();
