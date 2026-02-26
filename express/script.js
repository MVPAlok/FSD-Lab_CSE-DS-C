// Navigation functionality
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        showSection(sectionId);
    });
});

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Reset work message when switching sections
    const workMessage = document.getElementById('work-message');
    if (workMessage) {
        workMessage.textContent = '';
    }
}

// Work button click handler
function handleWorkButtonClick() {
    const workMessage = document.getElementById('work-message');
    workMessage.textContent = '✨ Thank you for clicking! This is the work section. ✨';
    workMessage.style.color = '#ffd700';
    
    // Add animation effect
    const button = document.querySelector('.click-button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 100);
}
