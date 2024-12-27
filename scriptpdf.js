// Get references to elements
const pdf1Link = document.getElementById('pdf1-link');
const pdf2Link = document.getElementById('pdf2-link');
const pdf3Link = document.getElementById('pdf3-link');
const pdf4Link = document.getElementById('pdf4-link');
const pdf5Link = document.getElementById('pdf5-link');
const pdf6Link = document.getElementById('pdf6-link');
const pdf7Link = document.getElementById('pdf7-link');
const pdf8Link = document.getElementById('pdf8-link');
const pdf9Link = document.getElementById('pdf9-link');
const pdf10Link = document.getElementById('pdf10-link');
const pdf11Link = document.getElementById('pdf11-link');
const pdf12Link = document.getElementById('pdf12-link');
const pdf13Link = document.getElementById('pdf13-link');
const pdf14Link = document.getElementById('pdf14-link');
const pdf15Link = document.getElementById('pdf15-link');
const pdf16Link = document.getElementById('pdf16-link');
const pdf17Link = document.getElementById('pdf17-link');
const pdf18Link = document.getElementById('pdf18-link');
const pdf19Link = document.getElementById('pdf19-link');
const pdf20Link = document.getElementById('pdf20-link');
const pdf21Link = document.getElementById('pdf21-link');
const pdf22Link = document.getElementById('pdf22-link');
const pdf23Link = document.getElementById('pdf23-link');
const pdfViewer = document.getElementById('pdf-viewer');
const offlineMessage = document.getElementById('offline-message');
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menu-btn');


// Function to check connectivity
function checkConnectivity() {
    if (navigator.onLine) {
        pdfViewer.classList.remove('hidden');
        offlineMessage.classList.add('hidden');
    } else {
        pdfViewer.classList.add('hidden');
        offlineMessage.classList.remove('hidden');
    }
}

// Event listeners for switching PDFs
pdf1Link.addEventListener('click', () => {
    pdfViewer.src = "https://drive.google.com/file/d/1JFnsvesgdVXdwxOukv1CHkbGb3R6kRbb/preview";
    closeSidebar();
});
pdf2Link.addEventListener('click', () => {
    pdfViewer.src = "https://drive.google.com/file/d/1KvPyT2VB-hQCGKcPhploXzAcF7T5LP2w/preview";
    closeSidebar();
});
pdf3Link.addEventListener('click', () => {
    pdfViewer.src = "https://drive.google.com/file/d/16T3ap6gDtqHgfxsTSdpKvuPI3mqXlnVm/preview";
    closeSidebar();
});
pdf4Link.addEventListener('click', () => {
    pdfViewer.src = "https://drive.google.com/file/d/1gZwORD14fs9-EcxXFs5U7SpGfHWDxJuM/preview";
    closeSidebar();
});
pdf5Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf6Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf7Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf8Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf9Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf10Link.addEventListener('click', () => {
    pdfViewer.src = "";
});
pdf11Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf12Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf13Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf14Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf15Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf16Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf17Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf18Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf19Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf20Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf21Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf22Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});
pdf23Link.addEventListener('click', () => {
    pdfViewer.src = "";
    closeSidebar();
});

// Sidebar toggle functionality
menuBtn.addEventListener('click', () => {
sidebar.classList.toggle('hidden');
});

// Close sidebar after selection (optional)
function closeSidebar() {
if (window.innerWidth <= 768) {
sidebar.classList.add('hidden');
}
}

// Check connectivity on load
checkConnectivity();

// Listen for online/offline events
window.addEventListener('online', checkConnectivity);
window.addEventListener('offline', checkConnectivity);
