        // Simulate KYC process
        document.addEventListener('DOMContentLoaded', function() {
            const kycProgress = document.getElementById('kyc-progress');
            const successMessage = document.getElementById('success-message');
            const continueBtn = document.querySelector('.btn-primary');
            
            // Update progress bar animation
            setTimeout(function() {
                kycProgress.style.width = '30%';
            }, 500);
            
            // Handle continue button click
            if (continueBtn) {
                continueBtn.addEventListener('click', function() {
                    // Show loading state
                    continueBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
                    continueBtn.disabled = true;
                    
                    // Simulate processing delay
                    setTimeout(function() {
                        // Update progress
                        kycProgress.style.width = '100%';
                        
                        // Show success message
                        successMessage.style.display = 'block';
                        
                        // Scroll to success message
                        successMessage.scrollIntoView({ behavior: 'smooth' });
                        
                        // Reset button after delay
                        setTimeout(function() {
                            continueBtn.innerHTML = 'Continue Verification';
                            continueBtn.disabled = false;
                        }, 3000);
                    }, 2000);
                });
            }
            
            // Handle admin selection
            const adminSelectButtons = document.querySelectorAll('.admin-card .btn-primary');
            adminSelectButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Show selected state
                    adminSelectButtons.forEach(btn => {
                        btn.textContent = 'Select';
                        btn.classList.remove('btn-secondary');
                        btn.classList.add('btn-primary');
                    });
                    
                    this.textContent = 'Selected';
                    this.classList.remove('btn-primary');
                    this.classList.add('btn-secondary');
                    
                    // Show message
                    alert('Admin selected successfully! You can now proceed to make your first investment.');
                });
            });
            
            // Handle file upload areas
            const uploadAreas = document.querySelectorAll('.upload-area');
            uploadAreas.forEach(area => {
                area.addEventListener('click', function() {
                    // Create file input
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/jpeg,image/png,application/pdf';
                    
                    // Handle file selection
                    fileInput.addEventListener('change', function() {
                        if (this.files && this.files[0]) {
                            const fileName = this.files[0].name;
                            area.innerHTML = `
                                <div style="color: var(--primary-green);">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <p>${fileName}</p>
                                <p class="form-hint">Upload successful</p>
                            `;
                            
                            // Update progress
                            const currentWidth = parseInt(kycProgress.style.width);
                            kycProgress.style.width = (currentWidth + 10) + '%';
                        }
                    });
                    
                    // Trigger file input
                    fileInput.click();
                });
            });
        });