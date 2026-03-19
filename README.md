# 🎥 CosmoStream – YouTube Clone

CosmoStream is a responsive YouTube-inspired video streaming web application built using HTML, CSS, and JavaScript. It mimics the core UI and functionality of YouTube, including a homepage with video cards and a dedicated video player page.

## 🚀 Features

* **🎬 Homepage Video Grid**: Displays videos with thumbnails, titles, channel names, and views.
* **▶️ Video Player Page**: Plays selected videos dynamically.
* **🔗 Dynamic Routing via URL Parameters**: Video details passed through query strings.
* **🌙 Dark Mode Toggle**: Persistent theme using `localStorage`.
* **📱 Responsive Design**: Works across desktop, tablet, and mobile (optimized for 480px).
* **📂 Sidebar Navigation**: Collapsible sidebar similar to YouTube.
* **🎯 Suggested Videos Section**: Dynamically generated recommendations.

## 🛠️ Tech Stack

* **HTML5**
* **CSS3** (Flexbox + Grid + Responsive Design)
* **JavaScript** (Vanilla JS)

## 📁 Project Structure

```text
CosmoStream/
│
├── index.html          # Homepage
├── player.html         # Video Player Page
├── style.css           # Styling
├── index.js            # Functionality
│
├── assets/
│   ├── images/
│   ├── thumbnails/
│   └── videos/
│
└── README.md
```

## ⚙️ How It Works

* **Redirection**: Clicking a video redirects to:  
    `player.html?video=video1.mp4&title=...&channel=...&views=...`
* **Data Extraction**: The player page extracts URL parameters using:  
    `const params = new URLSearchParams(window.location.search);`
* **Dynamic Loading**: Video and metadata are dynamically loaded into the player based on these parameters.

## ▶️ How to Run the Project

1.  **Download or clone the repository**:
    ```bash
    git clone [https://github.com/Anagha2106/cosmostream-youtube-clone.git](https://github.com/Anagha2106/cosmostream-youtube-clone.git)
    ```
2.  **Open index.html in your browser**:  
    No server required — runs completely on the browser.

## 🌟 Key Learning Outcomes

* **DOM Manipulation**: Dynamically updating the page content.
* **Responsive UI Design**: Ensuring a seamless experience on mobile and desktop.
* **URL Parameter Handling**: Passing data between pages without a database.
* **Dynamic Content Rendering**: Loading video sources and text on the fly.
* **Local Storage Usage**: Saving user preferences like Dark Mode.

## 📸 Credits

All videos used in this project are sourced from **Pexels**. Special thanks to the following creators:

| Video Title | Creator & Link |
| :--- | :--- |
| **Solar System** | [Zelch Csaba](https://www.pexels.com/video/3d-animation-of-the-solar-system-12722063/) |
| **Star gazing on a starry night** | [Dmitry Varennikov](https://www.pexels.com/video/time-lapse-video-of-star-gazing-on-a-starry-night-5155396/) |
| **Full moon over sea shore** | [Luz Calor Som](https://www.pexels.com/video/full-moon-over-sea-shore-12178173/) |
| **Galactic Nebula with Bright stars** | [Nicola Narracci](https://www.pexels.com/video/colorful-galactic-nebula-with-bright-stars-30442061/) |
| **Massive Black Hole** | [Adis Resic](https://www.pexels.com/video/spaceship-approaching-a-massive-black-hole-34875776/) |
| **Earth** | [Ingrid](https://www.pexels.com/video/the-sun-illuminating-earth-s-surface-1851190/) |
| **Milky Way glowing at Night** | [Vimeo](https://www.pexels.com/video/milky-way-glowing-at-night-857136/) |
| **Jupiter with Moons in Space** | [Crime Lab](https://www.pexels.com/video/jupiter-with-moons-in-space-10125076/) |
| **Time lapse of the Moon going down** | [Best Free Footage](https://www.pexels.com/video/time-lapse-video-of-the-moon-going-down-6601416/) |
| **Time lapse of Aurora Borealis** | [Distill](https://www.pexels.com/video/time-lapse-video-of-aurora-borealis-852435/) |
| **Time lapse of a Starry Night** | [Dmitry Varennikov](https://www.pexels.com/video/time-lapse-footage-of-a-starry-night-4991088/) |
| **Snow covered trees in the forest** | [Mikhail Nilov](https://www.pexels.com/video/snow-covered-trees-in-the-forest-7440697/) |

## 📌 Future Improvements

* 🔍 **Search functionality**: Filtering videos by title.
* ❤️ **Like / Subscribe system**: Visual feedback for user engagement.
* 📡 **Backend integration**: Storing video data in a database.
* 🧠 **Recommendation algorithm**: Suggesting videos based on history.
* 🎵 **Audio controls & playlists**: Enhanced playback features.

## 💡 Author

Developed by **Anagha** 💻✨

⭐ If you like this project, give it a ⭐ on GitHub and share it!
 
