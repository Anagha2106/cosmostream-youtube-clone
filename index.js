const menuButton = document.querySelectorAll(".menu-button");
const screenOverlay = document.querySelector(".screen-overlay");
const themeButton = document.querySelector(".theme-button i");

const initDarkMode = () => {
    if (!themeButton) return;

    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        themeButton.classList.replace("uil-moon", "uil-sun");
    }

    themeButton.addEventListener("click", () => {
        const isDarkMode = document.body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");

        if (isDarkMode) {
            themeButton.classList.replace("uil-moon", "uil-sun");
        } else {
            themeButton.classList.replace("uil-sun", "uil-moon");
        }
    });
};

const handleSidebarToggle = () => {
    document.body.classList.toggle("sidebar-hidden");
};

menuButton.forEach(button => {
    button.addEventListener("click", handleSidebarToggle);
});

if (screenOverlay) {
    screenOverlay.addEventListener("click", handleSidebarToggle);
}

const adjustLayoutForScreen = () => {
    const isPlayerPage = document.querySelector(".player-page");
    const isMobile = window.innerWidth < 768;

    if (isPlayerPage || isMobile) {
        document.body.classList.add("sidebar-hidden");
    } else {
        document.body.classList.remove("sidebar-hidden");
    }
};

const allVideos = [
    { file: "video1.mp4", title: "Solar System", channel: "Zelch Csaba", thumb: "thumbnail1.jpg", views: "16.5M views" },
    { file: "video2.mp4", title: "Star gazing", channel: "Dmitry Varennikov", thumb: "thumbnail2.jpg", views: "54.3M views" },
    { file: "video3.mp4", title: "Full moon over sea shore", channel: "Luz Calor Som", thumb: "thumbnail3.jpg", views: "529K views" },
    { file: "video4.mp4", title: "Galactic Nebula", channel: "Nicola Narracci", thumb: "thumbnail4.jpg", views: "1.2M views" },
    { file: "video5.mp4", title: "Massive Black Hole", channel: "Adis Resic", thumb: "thumbnail5.jpg", views: "187K views" },
    { file: "video6.mp4", title: "Earth", channel: "Ingrid", thumb: "thumbnail6.jpg", views: "51.6M views" },
    { file: "video7.mp4", title: "Milky Way glowing", channel: "Vimeo", thumb: "thumbnail7.jpg", views: "63M views" },
    { file: "video8.mp4", title: "Jupiter with Moons", channel: "Crime Lab", thumb: "thumbnail8.jpg", views: "2.5M views" },
    { file: "video9.mp4", title: "Moon going down", channel: "Best Free Footage", thumb: "thumbnail9.jpg", views: "10.9M views" },
    { file: "video10.mp4", title: "Aurora Borealis", channel: "Distill", thumb: "thumbnail10.jpg", views: "30.6M views" },
    { file: "video11.mp4", title: "Starry Night", channel: "Dmitry Varennikov", thumb: "thumbnail11.jpg", views: "12.7M views" },
    { file: "video12.mp4", title: "Snow covered trees", channel: "Mikhail Nilov", thumb: "thumbnail12.jpg", views: "998K views" }
];

const loadVideoDetails = () => {
    const videoPlayer = document.getElementById("videoPlayer");
    if (!videoPlayer) return; 

    const params = new URLSearchParams(window.location.search);
    const videoFile = params.get("video");
    const urlTitle = params.get("title");
    const urlChannel = params.get("channel");
    const urlViews = params.get("views");

    if (videoFile) {
        videoPlayer.src = `assets/videos/${videoFile}`;
    }

    const titleDisplay = document.getElementById("displayTitle");
    const channelDisplay = document.getElementById("displayChannel");
    const viewsDisplay = document.getElementById("displayViews");

    if (titleDisplay && urlTitle) titleDisplay.innerText = decodeURIComponent(urlTitle);
    if (channelDisplay && urlChannel) channelDisplay.innerText = decodeURIComponent(urlChannel);
    if (viewsDisplay && urlViews) viewsDisplay.innerText = decodeURIComponent(urlViews).split("•")[0].trim();

    renderSuggestedVideos(videoFile);
};

const renderSuggestedVideos = (currentVideoFile) => {
    const suggestedContainer = document.getElementById("suggestedList");
    if (!suggestedContainer) return;

    let htmlContent = "";

    const suggestions = allVideos.filter(v => v.file !== currentVideoFile);

    suggestions.forEach(v => {
        const link = `player.html?video=${v.file}&title=${encodeURIComponent(v.title)}&channel=${encodeURIComponent(v.channel)}&views=${encodeURIComponent(v.views)}`;
        
        htmlContent += `
            <a href="${link}" class="suggested-card">
                <img src="assets/thumbnails/${v.thumb}" class="suggested-thumb" alt="${v.title}">
                <div class="suggested-info">
                    <h4 class="video-title">${v.title}</h4>
                    <p class="video-meta">${v.channel}</p>
                    <p class="video-meta">${v.views}</p>
                </div>
            </a>
        `;
    });

    suggestedContainer.innerHTML = htmlContent;
};

window.addEventListener("DOMContentLoaded", () => {
    initDarkMode();
    adjustLayoutForScreen();
    loadVideoDetails();
});

window.addEventListener("resize", adjustLayoutForScreen);