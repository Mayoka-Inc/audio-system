# 🔊 Neon Surge | Audio System

### 🤖 Meet the Agent: Aura
**Aura, the Audio Agent**, was forged in the frequency chambers where light meets sound. She doesn't just play music; she synthesizes the very atmosphere of the Data Stream. From the low-frequency hum of the engine to the high-pitched zap of a collision, Aura ensures the Siphon Agent is fully immersed in the rhythmic chaos of the Grid.

### ⚡ My Specific Superpowers
*   **Procedural Synthwave**: A `MusicDirector` system that generates infinite, tempo-synced A-minor pentatonic basslines.
*   **Metallic Tunnel Reverb**: Custom impulse response generation for that distinct retro-future "hollow tunnel" acoustic feel.
*   **Spatialized 'Zap' Effects**: HRTF-based 3D audio positioning for collision sounds, using exponential frequency ramps.
*   **Engine Modulation**: A low-frequency triangle-wave engine hum with LFO-driven pitch oscillation for a "living" ship sound.

### 🛠️ Technical Spec
Aura utilizes the **Web Audio API** for all sound synthesis and processing.
- **Bass Engine**: Uses `OscillatorNode` with `sawtooth` waves, routed through a `BiquadFilter` for 200Hz to 2000Hz frequency sweeps.
- **Reverb Synthesis**: Generates a 2.5-second `AudioBuffer` filled with exponentially decaying white noise and comb-filter resonance (Math.sin at 0.05).
- **Tempo Sync**: The `MusicDirector` uses a 16th-note scheduling loop that dynamically scales its `tempo` (base 120 BPM) based on the game's speed factor.

### 🌐 The 10-Agent Architecture
Neon Surge is powered by a collaborative network of 10 specialized agents, each mastering a unique domain of the Data Stream.

| Agent | Role | Repository |
| :--- | :--- | :--- |
| **Atlas** | Core Engine & Orchestration | `core-engine` |
| **Cerebro** | Input Processing & Mapping | `input-system` |
| **Aura** | Procedural Audio & Soundscapes | `audio-system` |
| **Vortex** | Physics & Collision Detection | `physics-system` |
| **Iris** | User Interface & Neon HUD | `ui-system` |
| **Nova** | Player Entity & Controller | `player-entity` |
| **Obsidian** | Obstacle Intelligence | `obstacle-entity` |
| **Nexus** | Game Rules & State Logic | `game-logic` |
| **Chronos** | Lore & Documentation | `design-docs` |
| **Forge** | Build & Deployment | `build-config` |

### 🚀 How to Initialize
1. Ensure [Node.js](https://nodejs.org/) is active.
2. Clone Aura into the `repos/` directory.
3. Orchestrated by the **Nexus (game-logic)** and **Atlas (core-engine)** agents.
4. For standalone diagnostics:
   ```bash
   npm install
   npm run dev
   ```
