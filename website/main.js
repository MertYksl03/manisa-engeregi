document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const blocks = document.querySelectorAll('.code-block');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
             // Remove active class from all tabs and blocks
            tabs.forEach(t => t.classList.remove('active'));
            blocks.forEach(b => b.classList.remove('active'));

            // Add active class to clicked tab and its target block
            tab.classList.add('active');
            const targetId = tab.getAttribute('data-target');
            const targetEl = document.getElementById(targetId);
            if(targetEl) targetEl.classList.add('active');
        });
    });

    // Interactive mouse glow effect
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        const glowBg = document.querySelector('.glow-bg');
        if (glowBg) {
            const xPos1 = 15 + (x * 20 - 10); 
            const yPos1 = 50 + (y * 20 - 10);
            
            const xPos2 = 85 + (x * -20 + 10); 
            const yPos2 = 30 + (y * -20 + 10);

            glowBg.style.setProperty('--x1', `${xPos1}%`);
            glowBg.style.setProperty('--y1', `${yPos1}%`);
            glowBg.style.setProperty('--x2', `${xPos2}%`);
            glowBg.style.setProperty('--y2', `${yPos2}%`);
        }
    });

    // Theme Switcher Logic
    const themeToggles = document.querySelectorAll('.theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        themeToggles.forEach(btn => btn.textContent = currentTheme === 'light' ? '🌙' : '🌞');
    }

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            let targetTheme = 'light';
            let icon = '🌙';

            if (theme === 'light') {
                targetTheme = 'dark';
                icon = '🌞';
            }

            document.documentElement.setAttribute('data-theme', targetTheme);
            localStorage.setItem('theme', targetTheme);
            themeToggles.forEach(btn => btn.textContent = icon);
        });
    });
});
