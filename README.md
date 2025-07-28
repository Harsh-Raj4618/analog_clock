# 🕒 Analog + Digital Clock with Theme Switch

A responsive, visually appealing **Analog and Digital Clock** built using **HTML**, **CSS**, and **JavaScript**, featuring:

- 🌓 Dark/Light mode toggle
- ⏰ Real-time analog and digital clocks
- 💡 Smooth transitions and modern styling

---

## ✨ Features

- ⏳ Real-time synchronized **analog and digital** clocks
- 💅 Custom-designed analog face with hour, minute, and second hands
- 🌙 Theme switcher: toggles between **light and dark mode**
- 🎯 Dynamic styling using **CSS variables** for color updates
- 🔄 Automatically updates every second using `setInterval()`

---

## 🧱 Technologies Used

| Language    | Purpose                         |
|-------------|----------------------------------|
| HTML5       | Structure and layout             |
| CSS3        | Styling, theme control, animation|
| JavaScript  | Real-time logic and theme toggle|

---

## 🗂 Project Structure



---


## 🧠 Logic Overview
- The analog clock hands rotate using the transform: rotateZ() style, calculated from the current time.
- The digital clock is displayed using textContent for hours, minutes, seconds, and AM/PM.
- A switchTheme() function toggles the theme using data-theme on <html> and updates the button text.
- CSS variables update clock and background colors dynamically per theme.
  
---

## ⚙️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Harsh-Raj4618/clock-app.git
   cd clock-app

