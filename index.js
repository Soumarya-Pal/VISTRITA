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
                'broker-dashboard': 'Dashboard',
                'broker-clients': 'Client Management',
                'broker-communication': 'Communication Hub',
                'broker-analytics': 'Analytics & Reports',
                'broker-compliance': 'Compliance Center',
                'broker-settings': 'Settings'
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