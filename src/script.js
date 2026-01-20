// Wait for DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Array of form IDs to handle submission
    const forms = ['hero-form', 'cta-form'];

    // Loop through each form and attach submit event listener
    forms.forEach(formId => {
        const form = document.getElementById(formId);
        
        // Check if form exists on the page
        if (form) {
            // Handle form submission
            form.addEventListener('submit', (e) => {
                // Prevent default form submission behavior
                e.preventDefault();
                
                // Get email value from the input field
                const email = form.querySelector('input').value;
                
                // Validate email input
                if (email) {
                    // Show success message and reset form
                    alert(`Thanks for signing up, ${email}!`);
                    form.reset();
                } else {
                    // Show error message if email is empty
                    alert('Please enter a valid email address.');
                }
            });
        }
    });
});