# 🌌 Solaris | Interactive Solar System Simulation

Solaris is a premium, interactive 3D solar system simulation built with modern web technologies. It combines high-performance CSS animations with an elegant glassmorphism UI to provide an immersive educational experience.

![Hero Screenshot](file:///Users/kaavyagala/.gemini/antigravity/brain/ba1c81a4-3881-40d9-9f03-b7b8b98870cf/hero_solar_system_1774343678740.png)

## ✨ Features

- **Realistic Orbital Mechanics**: Each planet follows its relative orbital period using precise CSS keyframe animations.
- **Interactive Info Panel**: Click on any planet to reveal a dynamic, glassmorphism-styled information card with a smooth "pop-up" animation.
- **Visual Feedback**: Selection highlights on orbital paths and glowing planet effects.
- **Responsive Controls**: Toggle orbit lines, reset the view, and smooth zoom functionality.
- **Premium Aesthetics**: Deep space starfield with twinkling effects and high-quality planet textures.

## 🛠️ Technical Architecture

Solaris is designed with a "CSS-first" philosophy for animations, ensuring buttery-smooth performance even on lower-end devices.

### 🎨 CSS Animation Engine
The core orbital movement is handled entirely by the CSS GPU-accelerated transition engine. By using relative orbital periods (based on Earth's 36.5s cycle), we achieve realistic comparative speeds without the overhead of a heavy physics engine.
- **Keyframes**: `orbit` rotation from `0deg` to `360deg`.
- **Transitions**: Complex `cubic-bezier` curves are used for UI elements like the info panel to give them a "premium" feel.

### ⚙️ JavaScript Interactivity
JavaScript is used as the orchestration layer for user interactions:
- **Event Delegation**: Efficient click handling for planet selection.
- **Dynamic Content**: Injecting planetary data from `data-*` attributes into the shared `info-panel`.
- **State Management**: Handling "Selection Modes" and UI transitions (active/inactive states).

### 📐 Layout & Styling
- **Flexbox/Grid**: Used for precise centering and responsive UI placement.
- **Glassmorphism**: Leveraging `backdrop-filter: blur()` and `border: 1px solid rgba(...)` for a modern, aeronautical aesthetic.

## 📂 Project Structure

```text
Solaris/
├── index.html          # Main entry point and structural layout
├── src/
│   ├── style.css       # Core styling and animation engine
│   └── script.js       # Interaction logic and state management
├── assets/
│   └── images/         # Planet and UI textures
└── README.md           # Project documentation and architecture
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KaavyaGala546/Solar-System-Simulation.git
   ```
2. **Open the simulation**:
   Simply open `index.html` in any modern web browser.

## 📸 Media Gallery

````carousel
![Earth Details](file:///Users/kaavyagala/.gemini/antigravity/brain/ba1c81a4-3881-40d9-9f03-b7b8b98870cf/earth_info_panel_1774343798750.png)
<!-- slide -->
![Saturn Details](file:///Users/kaavyagala/.gemini/antigravity/brain/ba1c81a4-3881-40d9-9f03-b7b8b98870cf/saturn_info_panel_1774343848646.png)
<!-- slide -->
![Simulation Interaction](file:///Users/kaavyagala/.gemini/antigravity/brain/ba1c81a4-3881-40d9-9f03-b7b8b98870cf/solaris_simulation_demo_1774343618008.webp)
````

## 👩‍💻 Author

**Kaavya Gala**
[GitHub Profile](https://github.com/KaavyaGala546)
