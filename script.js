// filepath: script.js
// ตัวแปรเก็บตัวเลขลับ
let secretNumber = 0;
// ตัวแปรนับจํานวนครั้งที่ทาย
let attemptCount = 0;
// ฟังก์ชันเริ่มเกมใหม่
function initializeGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptCount = 0;
  updateDisplay();
}
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");
  attemptCount++;
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
  } else {
    resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
  }
  updateDisplay();
  guessInput.value = "";
  guessInput.focus();
}
// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
  const attemptsContainer = document.getElementById("attemptsContainer");
  attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
  initializeGame();
  document.getElementById("resultContainer").innerHTML = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").focus();
}
// เริ่มเกมเมื่อโหลดหน้า
window.addEventListener("load", initializeGame);

// filepath: script.js
// ...existing code...
// ฟังก์ชันตรวจสอบการทาย
function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guessValue = parseInt(guessInput.value);
  const resultContainer = document.getElementById("resultContainer");
  // Validation: ตรวจสอบว่าใส่ตัวเลขหรือไม่
  if (isNaN(guessValue) || guessInput.value === "") {
    resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลข!
 </div>
 `;
    return;
  }
  // Validation: ตรวจสอบว่าอยู่ในช่วง 1-100 หรือไม่
  if (guessValue < 1 || guessValue > 100) {
    resultContainer.innerHTML = `
 <div class="alert alert-danger" role="alert">
 กรุณาใส่ตัวเลขระหว่าง 1 ถึง 100!
 </div>
 `;
    return;
  }
  attemptCount++;
  if (guessValue === secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
  } else if (guessValue > secretNumber) {
    resultContainer.innerHTML = `
 <div class="alert alert-warning" role="alert">
 ↓ ตัวเลขสูงไป
 </div>
 `;
  } else {
    resultContainer.innerHTML = `
 <div class="alert alert-info" role="alert">
 ↑ ตัวเลขตํ่าไป
 </div>
 `;
  }
  updateDisplay();
  guessInput.value = "";
  guessInput.focus();
}
// ...existing code...

// filepath: script.js
// ...existing code...
// ฟังก์ชันเริ่มเกมใหม่
function resetGame() {
 initializeGame();
 document.getElementById("resultContainer").innerHTML = "";
 document.getElementById("guessInput").value = "";
 document.getElementById("guessInput").focus();
}
// ...existing code...

<!-- filepath: index.html -->
<!-- ...existing code... -->
<div class="d-grid gap-2">
 <button onclick="checkGuess()" class="btn btn-primary">ทาย</button>
 <button onclick="resetGame()" class="btn btn-secondary">เริ่มใหม่</button>
</div>
<!-- ...existing code... -->
git add script.js index.html
git commit -m "feat: add reset game button functionality"
Step 6: Commit ที่ 5 - นิสิต#2 นับจํานวนครั้งที่ทาย
อัปเดต script.js โดยเพิ่มตัวแปร attemptCount และอัปเดต updateDisplay:
// filepath: script.js
// ตัวแปรนับจํานวนครั้งที่ทาย
let attemptCount = 0;
// ฟังก์ชันอัปเดตจํานวนครั้ง
function updateDisplay() {
 const attemptsContainer = document.getElementById("attemptsContainer");
 attemptsContainer.textContent = `ทายแล้ว: ${attemptCount} ครั้ง`;
}
และแก้ไข checkGuess() ให้เพิ่ม attemptCount:
function checkGuess() {
 const guessInput = document.getElementById("guessInput");
 const guessValue = parseInt(guessInput.value);
 const resultContainer = document.getElementById("resultContainer");
 // ... validation code ...
 attemptCount++; // เพิ่มตรงนี้
 if (guessValue === secretNumber) {
 resultContainer.innerHTML = `
 <div class="alert alert-success" role="alert">
 <h5>✓ ถูกต้อง!</h5>
 <p>คุณทายถูกในครั้งที่ ${attemptCount}</p>
 </div>
 `;
 }
 // ... rest of code ...
}