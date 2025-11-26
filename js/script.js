// Simple JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Assignments Portfolio loaded successfully!');
    
    // Add loading animation to cards
    const cards = document.querySelectorAll('.assignment-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add click tracking
    cards.forEach(card => {
        card.addEventListener('click', function() {
            const assignmentName = this.querySelector('h3').textContent;
            console.log(`Navigating to: ${assignmentName}`);
        });
    });
});
