// Sidebar toggle functionality
document.getElementById('sidebarToggle').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '0';
});

document.getElementById('closeSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').style.left = '-260px';
});

// Open new HTML page
document.getElementById('openPageBtn').addEventListener('click', function() {
    window.location.href = 'form.html';
});

// Popup functionality
function openPopup(imageSrc, text) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupText').innerText = text;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Array of stylesheet URLs
const stylesheets = ["style1.css", "style2.css"];

// Current index to track which stylesheet is active
let currentIndex = 0;

// Function to toggle the stylesheet
function toggleStylesheet() {
  // Get the <link> element by ID
  const linkElement = document.getElementById("stylesheet");
  
  // Update the href attribute to switch stylesheets
  currentIndex = (currentIndex + 1) % stylesheets.length;
  linkElement.href = stylesheets[currentIndex];
}

// Set interval to toggle every 1 minute (60000 ms)
setInterval(toggleStylesheet, 60000);
