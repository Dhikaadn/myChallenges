const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
  ]);

  // Task 01
const gameEventsSets = new Set();
for (let events of gameEvents.values()) {
  gameEventsSets.add(events);
}

console.log(gameEventsSets);

// Task 02

console.log(gameEvents);
gameEvents.delete(64);
console.log(gameEvents);

// Task 03

console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

// Test 04

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`FIRST HALF: ${key} ${value}`);
  }
  if (key > 45) {
    console.log(`SECOND HALF: ${key} ${value}`);
  }
}