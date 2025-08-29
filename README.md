# Tic-Tac-Toe (X and O Game)

A simple **practice Tic-Tac-Toe** game built with **HTML, CSS, and JavaScript**.  
Two players can take turns selecting fields on the 3x3 grid until one player wins or the game ends in a draw.

---

## 🎮 Features

-   ✅ **Two-player mode** (Player X and Player O).
-   ✅ **Player name input** before starting the game.
-   ✅ **Turn-based system** – players alternate turns automatically.
-   ✅ **Game board validation** – prevents overwriting already selected fields.
-   ✅ **Win detection** – game ends when one player gets 3 in a row.
-   ✅ **Draw detection** – game ends when all fields are filled without a winner.
-   ✅ **Restart functionality** – start a new game without refreshing.
-   ✅ **Highlighted active player** – shows whose turn it is.
-   ✅ **Overlay configuration** – edit player details before the game starts.

---

## 📂 Project Structure

```
├── index.html          # Main HTML file
├── styles/             # CSS styles
│   ├── configuration.css
│   ├── game.css
│   ├── overlay.css
│   └── styles.css
└── scripts/            # JavaScript files
    ├── app.js          # DOM handling & player setup
    ├── config.js       # Game configuration (players, board data, states)
    └── game.js         # Core game logic (switch player, check win, etc.)
```

---

## 🕹️ How to Play

1. Enter player names before starting the game.
2. Player X always starts first.
3. Click on any empty cell to place your mark (X or O).
4. The game automatically switches turns between players.
5. The game ends when:
    - One player has three in a row (horizontally, vertically, or diagonally).
    - All fields are filled (draw).

## 📸 Screenshot

Here’s a preview of the game in action:

![Tic Tac Toe Screenshot](styles\Screenshot.png)

---

## 🛠️ Technologies Used

-   **HTML5**
-   **CSS3**
-   **JavaScript (Vanilla)**

---

## 💡 Future Improvements

-   🔹 Add **score tracking system** (wins, losses, draws).
-   🔹 Highlight the **winning combination** on the board.
-   🔹 Add **sound effects** for clicks and wins.
-   🔹 Improve **responsive mobile design**.
-   🔹 Add **dark/light mode** option.

---

## 👨‍💻 Author

Built as a **practice project** by [Adebisi Abdussamad Ayomide]
