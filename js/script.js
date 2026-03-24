document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.orbit');
    const infoPanel = document.getElementById('info-panel');
    const glassCard = infoPanel.querySelector('.glass-card');
    const planetName = document.getElementById('planet-name');
    const planetDesc = document.getElementById('planet-description');
    const planetDist = document.getElementById('planet-dist');
    const planetOrbit = document.getElementById('planet-orbit');
    const container = document.querySelector('.solar-system-container');

    // Generate Stars
    function createStars() {
        const body = document.body;
        const starCount = 400;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            
            const size = Math.random() * 2 + 1 + 'px';
            star.style.width = size;
            star.style.height = size;
            
            star.style.top = Math.random() * 100 + 'vh';
            star.style.left = Math.random() * 100 + 'vw';
            
            star.style.animationDelay = Math.random() * 2 + 's';
            
            body.appendChild(star);
        }
    }

    createStars();

    // Planet Interaction
    planets.forEach(planet => {
        const planetElement = planet.querySelector('.planet');
        
        planetElement.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent document click from closing it immediately
            
            const name = planet.getAttribute('data-name');
            const desc = planet.getAttribute('data-desc');
            const dist = planet.getAttribute('data-dist');
            const orbitTime = planet.getAttribute('data-orbit');

            // If clicking the same planet, toggle it
            if (glassCard.classList.contains('active') && planetName.textContent === name) {
                glassCard.classList.remove('active');
                return;
            }

            planetName.textContent = name;
            planetDesc.textContent = desc;
            planetDist.textContent = dist;
            planetOrbit.textContent = orbitTime;

            glassCard.classList.add('active');
            
            // Highlight selected orbit
            planets.forEach(p => p.classList.remove('active-selection'));
            planet.classList.add('active-selection');
        });
    });

    const closePanelBtn = document.getElementById('close-panel');
    closePanelBtn.addEventListener('click', () => {
        glassCard.classList.remove('active');
        planets.forEach(p => p.classList.remove('active-selection'));
    });

    // Close info card when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.orbit') && !e.target.closest('.glass-card') && !e.target.closest('.controls')) {
            glassCard.classList.remove('active');
            planets.forEach(p => p.classList.remove('active-selection'));
        }
    });

    // Controls
    const toggleOrbitsBtn = document.getElementById('toggle-orbits');
    let orbitsVisible = true;

    toggleOrbitsBtn.addEventListener('click', () => {
        orbitsVisible = !orbitsVisible;
        planets.forEach(p => {
            if (orbitsVisible) {
                p.classList.remove('hidden');
            } else {
                p.classList.add('hidden');
            }
        });
    });

    const resetViewBtn = document.getElementById('reset-view');
    resetViewBtn.addEventListener('click', () => {
        container.style.transform = 'scale(1)';
        glassCard.classList.remove('active');
    });

    // Zoom functionality (optional but premium)
    let scale = 1;
    window.addEventListener('wheel', (e) => {
        if (e.deltaY < 0) {
            scale *= 1.1;
        } else {
            scale *= 0.9;
        }
        scale = Math.min(Math.max(0.3, scale), 3);
        container.style.transform = `scale(${scale})`;
    });
});