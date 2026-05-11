/**
 * AudioManager handles synthesized sound effects using the Web Audio API.
 */
export class AudioManager {
    constructor() {
        // Initialize AudioContext
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.engineOsc = null;
        this.engineGain = null;
    }

    /**
     * Plays a synthesized 'zap' sound effect for collisions.
     * Uses a high-pitched frequency sweep down.
     */
    playZap() {
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        // Configuration for 'zap'
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(880, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

        // Fade out to prevent clicks
        gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    }

    /**
     * Starts a low humming 'engine' sound loop.
     * Uses a triangle wave with LFO modulation for a richer hum.
     */
    startEngine() {
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        // Prevent multiple engine sounds from layering
        if (this.engineOsc) return;

        this.engineOsc = this.ctx.createOscillator();
        this.engineGain = this.ctx.createGain();

        // Low frequency hum (A1 = 55Hz)
        this.engineOsc.type = 'triangle';
        this.engineOsc.frequency.setValueAtTime(55, this.ctx.currentTime);

        // LFO for subtle 'thrumming' effect
        const lfo = this.ctx.createOscillator();
        const lfoGain = this.ctx.createGain();
        lfo.frequency.setValueAtTime(3, this.ctx.currentTime);
        lfoGain.gain.setValueAtTime(5, this.ctx.currentTime);
        
        lfo.connect(lfoGain);
        lfoGain.connect(this.engineOsc.frequency);
        lfo.start();

        // Low volume for background hum
        this.engineGain.gain.setValueAtTime(0.05, this.ctx.currentTime);
        
        this.engineOsc.connect(this.engineGain);
        this.engineGain.connect(this.ctx.destination);

        this.engineOsc.start();
    }
}
