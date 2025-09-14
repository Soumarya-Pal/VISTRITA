 // Function to show a specific page and hide others
        function showPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page');
            pages.forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the requested page
            document.getElementById(pageId).classList.add('active');
        }
        
        // Function to update active tab
        function updateActiveTab(pageId) {
            const taskIcons = document.querySelectorAll('.task-icon');
            taskIcons.forEach(icon => {
                icon.classList.remove('active');
                if (icon.getAttribute('data-page') === pageId) {
                    icon.classList.add('active');
                }
            });
            
            // Update page title
            const pageTitles = {
                'investor-dashboard': 'Dashboard',
                'investor-portfolio': 'Portfolio',
                'investor-communication': 'Communication',
                'investor-reports': 'Reports & Tax',
                'investor-learning': 'Learning Hub',
                'investor-settings': 'Settings'
            };
            
            document.querySelector('.app-title').textContent = pageTitles[pageId];
        }
        
        // Add click event listeners to all taskbar icons
        document.querySelectorAll('.task-icon').forEach(icon => {
            icon.addEventListener('click', function(e) {
                e.preventDefault();
                const pageId = this.getAttribute('data-page');
                showPage(pageId);
                updateActiveTab(pageId);
            });
        });
        
        // Initialize KYC status
        document.addEventListener('DOMContentLoaded', function() {
            const kycBanner = document.querySelector('.kyc-banner');
            if (kycBanner) {
                // Simulate KYC status (would come from backend in real app)
                const isKYCComplete = false; // Change to true to simulate completed KYC
                
                if (isKYCComplete) {
                    kycBanner.style.display = 'none';
                }
            }
            
            // Add form submission handling for settings
            const settingsForm = document.querySelector('#investor-settings');
            if (settingsForm) {
                settingsForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Settings saved successfully!');
                });
            }
        });