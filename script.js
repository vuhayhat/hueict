document.addEventListener('DOMContentLoaded', () => {
    // You can add your links data here to make it easier to update
    const links = [
        { name: 'Facebook Page', url: '#', icon: 'fab fa-facebook' },
        { name: 'Zalo Official', url: '#', icon: 'zalo-icon', isCustomIcon: true, text: 'Z' },
        { name: 'Official Website', url: '#', icon: 'fas fa-globe' },
        { name: 'Download Android App', url: '#', icon: 'fab fa-android' },
        { name: 'Download iOS App', url: '#', icon: 'fab fa-apple' },
        { name: 'Customer Support', url: '#', icon: 'fas fa-headset' }
    ];
    
    // Function to update links dynamically (if needed)
    function updateLinks() {
        const linksContainer = document.querySelector('.links');
        
        // Clear existing links
        linksContainer.innerHTML = '';
        
        // Add links from the array
        links.forEach(link => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.className = 'link-card';
            linkElement.target = '_blank';
            
            const icon = document.createElement('i');
            icon.className = link.icon;
            
            // Handle custom icons with text
            if (link.isCustomIcon && link.text) {
                icon.textContent = link.text;
            }
            
            const span = document.createElement('span');
            span.textContent = link.name;
            
            linkElement.appendChild(icon);
            linkElement.appendChild(span);
            linksContainer.appendChild(linkElement);
        });
    }
    
    // Add animation to links when they appear
    const animateLinks = () => {
        const linkCards = document.querySelectorAll('.link-card');
        linkCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);
        });
    };
    
    // Add animation to features
    const animateFeatures = () => {
        const features = document.querySelectorAll('.feature');
        features.forEach((feature, index) => {
            setTimeout(() => {
                feature.style.opacity = '0';
                feature.style.transform = 'translateY(20px)';
                feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0)';
                }, 50);
            }, (index * 100) + 600); // Start after links animation
        });
    };
    
    // Call the animation functions
    animateLinks();
    animateFeatures();
    
    // Update the copyright year automatically
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('footer p');
    footerYear.textContent = footerYear.textContent.replace('2023', currentYear);
}); 