/**
 * CATWEBS: Demo Interactive Logic
 * Simulates backend responses to create a premium frontend experience for prospects.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. APPOINTMENT FORM DEMO LOGIC ---
    const demoForm = document.getElementById('demoAppointmentForm');
    
    if (demoForm) {
        demoForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop standard form submission
            
            const btn = document.getElementById('submitBtn');
            const originalText = btn.innerText;
            
            // Step 1: Visual loading state
            btn.innerText = 'Processing...';
            btn.style.opacity = '0.8';

            // Step 2: Simulate network request (1 second delay)
            setTimeout(() => {
                // Visual success state
                btn.innerText = '✓ Appointment Requested Successfully';
                btn.style.backgroundColor = 'var(--success-green)'; 
                btn.style.opacity = '1';

                // Step 3: Agency Pitch Alert
                setTimeout(() => {
                    alert("CatWebs Demo Mode:\n\nIn a live environment, this form would instantly trigger a WhatsApp notification to your reception desk and securely log the patient's data into your system.");
                    
                    // Reset form for the next demo presentation
                    demoForm.reset();
                    btn.innerText = originalText;
                    btn.style.backgroundColor = 'var(--medical-teal)'; // Reset to primary color
                }, 800);

            }, 1000);
        });
    }

    // --- FUTURE ADDITIONS GO HERE ---
    // e.g., Mobile Hamburger Menu Toggle
    // e.g., Doctor Search Filtering
});
