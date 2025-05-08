// Check for saved user preference, if any
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

// Toggle switch
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// If user previously chose dark mode
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Function that will switch the theme based on the toggle
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

// Event listener
toggleSwitch.addEventListener('change', switchTheme, false);

// Function to check system preference
function detectColorScheme() {
    // If user hasn't selected a preference yet
    if (!localStorage.getItem('theme')) {
        // Check if the browser supports prefers-color-scheme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            // Dark mode is preferred
            document.documentElement.setAttribute('data-theme', 'dark');
            toggleSwitch.checked = true;
        }
    }
}

// Call the function when the page loads
detectColorScheme();