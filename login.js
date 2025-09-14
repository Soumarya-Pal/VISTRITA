 document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const roleSelection = document.getElementById('role-selection');
            const investorType = document.getElementById('investor-type');
            const authTabs = document.getElementById('auth-tabs');
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            const backButton = document.getElementById('back-button');
            const authMainTitle = document.getElementById('auth-main-title');
            const authMainSubtitle = document.getElementById('auth-main-subtitle');
            const adminIdField = document.getElementById('admin-id-field');
            const signupAdminIdField = document.getElementById('signup-admin-id-field');
            
            let currentRole = null;
            let currentInvestorType = null;
            
            // Role selection
            const roleCards = document.querySelectorAll('.role-card');
            roleCards.forEach(card => {
                card.addEventListener('click', function() {
                    roleCards.forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    currentRole = this.getAttribute('data-role');
                    
                    if (currentRole === 'investor') {
                        authMainTitle.textContent = 'Are you a new or existing investor?';
                        authMainSubtitle.textContent = 'Select your investor type to continue';
                        roleSelection.style.display = 'none';
                        investorType.style.display = 'flex';
                        backButton.style.display = 'block';
                    } else if (currentRole === 'broker') {
                        authMainTitle.textContent = 'Broker/Admin Login';
                        authMainSubtitle.textContent = 'Sign in to your broker account';
                        roleSelection.style.display = 'none';
                        authTabs.style.display = 'flex';
                        loginForm.classList.add('active');
                        backButton.style.display = 'block';
                        
                        // Show admin ID field for brokers
                        adminIdField.style.display = 'block';
                        signupAdminIdField.style.display = 'block';
                    }
                });
            });
            
            // Investor type selection
            const typeCards = document.querySelectorAll('.type-card');
            typeCards.forEach(card => {
                card.addEventListener('click', function() {
                    typeCards.forEach(c => c.classList.remove('selected'));
                    this.classList.add('selected');
                    
                    currentInvestorType = this.getAttribute('data-type');
                    
                    if (currentInvestorType === 'new') {
                        authMainTitle.textContent = 'Create Investor Account';
                        authMainSubtitle.textContent = 'Sign up to start your investment journey';
                        investorType.style.display = 'none';
                        authTabs.style.display = 'flex';
                        document.querySelector('.auth-tab[data-tab="signup"]').click();
                        backButton.style.display = 'block';
                    } else if (currentInvestorType === 'existing') {
                        authMainTitle.textContent = 'Investor Login';
                        authMainSubtitle.textContent = 'Sign in to your investor account';
                        investorType.style.display = 'none';
                        authTabs.style.display = 'flex';
                        loginForm.classList.add('active');
                        backButton.style.display = 'block';
                    }
                    
                    // Hide admin ID field for investors
                    adminIdField.style.display = 'none';
                    signupAdminIdField.style.display = 'none';
                });
            });
            
            // Back button
            backButton.addEventListener('click', function() {
                if (authTabs.style.display === 'flex') {
                    authTabs.style.display = 'none';
                    loginForm.classList.remove('active');
                    signupForm.classList.remove('active');
                    
                    if (currentRole === 'investor') {
                        investorType.style.display = 'flex';
                        authMainTitle.textContent = 'Are you a new or existing investor?';
                        authMainSubtitle.textContent = 'Select your investor type to continue';
                    } else {
                        roleSelection.style.display = 'flex';
                        authMainTitle.textContent = 'Welcome to VISTRITA';
                        authMainSubtitle.textContent = 'Select your role to continue';
                        backButton.style.display = 'none';
                        currentRole = null;
                    }
                } else if (investorType.style.display === 'flex') {
                    investorType.style.display = 'none';
                    roleSelection.style.display = 'flex';
                    authMainTitle.textContent = 'Welcome to VISTRITA';
                    authMainSubtitle.textContent = 'Select your role to continue';
                    backButton.style.display = 'none';
                    currentRole = null;
                }
            });
            
            // The rest of the code from previous implementation
            const loginTab = document.querySelector('.auth-tab[data-tab="login"]');
            const signupTab = document.querySelector('.auth-tab[data-tab="signup"]');
            const switchToSignup = document.getElementById('switch-to-signup');
            const switchToLogin = document.getElementById('switch-to-login');
            const notification = document.getElementById('notification');
            const notificationText = document.getElementById('notification-text');
            
            // Password toggles
            const loginPasswordToggle = document.getElementById('login-password-toggle');
            const signupPasswordToggle = document.getElementById('signup-password-toggle');
            const loginPassword = document.getElementById('login-password');
            const signupPassword = document.getElementById('signup-password');
            const confirmPassword = document.getElementById('signup-confirm-password');
            
            // Switch to Signup
            switchToSignup.addEventListener('click', function(e) {
                e.preventDefault();
                switchToTab('signup');
            });
            
            // Switch to Login
            switchToLogin.addEventListener('click', function(e) {
                e.preventDefault();
                switchToTab('login');
            });
            
            // Tab clicks
            loginTab.addEventListener('click', function() {
                switchToTab('login');
            });
            
            signupTab.addEventListener('click', function() {
                switchToTab('signup');
            });
            
            // Password toggle functionality
            loginPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(loginPassword, loginPasswordToggle);
            });
            
            signupPasswordToggle.addEventListener('click', function() {
                togglePasswordVisibility(signupPassword, signupPasswordToggle);
            });
            
            // Form submissions
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                let message = 'Login successful! Redirecting...';
                if (currentRole === 'broker') {
                    message = 'Broker login successful! Redirecting to dashboard...';
                }
                
                showNotification(message);
                
                // Simulate redirect
                setTimeout(function() {
                    // In a real app, this would redirect to the appropriate dashboard
                    console.log('Login submitted for:', currentRole);
                }, 1500);
            });
            
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Basic validation
                if (signupPassword.value !== confirmPassword.value) {
                    showNotification('Passwords do not match!', 'error');
                    return;
                }
                
                let message = 'Account created successfully!';
                if (currentRole === 'broker') {
                    message = 'Broker account created successfully!';
                } else if (currentInvestorType === 'new') {
                    message = 'Investor account created successfully! Redirecting to KYC...';
                }
                
                showNotification(message);
                
                // Simulate redirect
                setTimeout(function() {
                    // In a real app, this would redirect to appropriate next step
                    console.log('Signup submitted for:', currentRole || 'investor', currentInvestorType);
                }, 1500);
            });
            
            // Function to switch tabs
            function switchToTab(tabName) {
                const tabs = document.querySelectorAll('.auth-tab');
                tabs.forEach(tab => tab.classList.remove('active'));
                
                if (tabName === 'login') {
                    loginTab.classList.add('active');
                    loginForm.classList.add('active');
                    signupForm.classList.remove('active');
                } else {
                    signupTab.classList.add('active');
                    signupForm.classList.add('active');
                    loginForm.classList.remove('active');
                }
            }
            
            // Function to toggle password visibility
            function togglePasswordVisibility(passwordField, toggleIcon) {
                if (passwordField.type === 'password') {
                    passwordField.type = 'text';
                    toggleIcon.classList.remove('fa-eye');
                    toggleIcon.classList.add('fa-eye-slash');
                } else {
                    passwordField.type = 'password';
                    toggleIcon.classList.remove('fa-eye-slash');
                    toggleIcon.classList.add('fa-eye');
                }
            }
            
            // Function to show notification
            function showNotification(message, type = 'success') {
                notificationText.textContent = message;
                
                // Change color based on type
                if (type === 'error') {
                    notification.style.background = '#f44336';
                } else {
                    notification.style.background = 'var(--primary-green)';
                }
                
                notification.style.display = 'block';
                
                // Hide after 3 seconds
                setTimeout(function() {
                    notification.style.display = 'none';
                }, 3000);
            }
        });