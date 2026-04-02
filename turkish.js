/**
 * TURKISH SCANNER - FIXED INTERACTIVE ENGINE
 * Version: 1.1 - Syntax Fixed
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Variable Definitions
    const searchInput = document.getElementById('main-search');
    const searchForm = document.querySelector('.search-form-pro');
    const searchBtn = document.getElementById('search-btn');
    const luckyBtn = document.querySelector('.ts-btn.secondary');
    const voiceBtn = document.querySelector('.fa-microphone').parentElement;
    const timeDisplay = document.querySelector('.footer-top-line strong');
    const trendLinks = document.querySelectorAll('.trend-list a');

    // 2. Search Function
    const performSearch = (event) => {
        if (event) event.preventDefault();
        
        const query = searchInput.value.trim();
        
        if (query !== "") {
            console.log(`Turkish Scanner Arıyor: ${query}`);
            // Turkish Google for local relevance
            const searchUrl = `https://www.google.com.tr/search?q=${encodeURIComponent(query)}`;
            
            searchInput.style.border = "2px solid #6001d2";
            setTimeout(() => {
                window.location.href = searchUrl;
            }, 500);
        } else {
            searchInput.parentElement.classList.add('shake-animation');
            setTimeout(() => {
                searchInput.parentElement.classList.remove('shake-animation');
            }, 500);
        }
    };

    searchForm.addEventListener('submit', performSearch);

    // 3. Lucky Button
    const luckySites = [
        "https://www.nasa.gov",
        "https://www.wikipedia.org",
        "https://www.github.com",
        "https://www.nationalgeographic.com",
        "https://tr.wikipedia.org/wiki/Ana_Sayfa"
    ];

    luckyBtn.addEventListener('click', () => {
        const randomSite = luckySites[Math.floor(Math.random() * luckySites.length)];
        alert("Turkish Scanner sizi rastgele bir keşfe çıkarıyor!");
        window.location.href = randomSite;
    });

    // 4. Voice Search
    voiceBtn.addEventListener('click', () => {
        searchInput.placeholder = "Dinleniyor...";
        voiceBtn.style.color = "red";
        
        if ('webkitSpeechRecognition' in window) {
            const recognition = new webkitSpeechRecognition();
            recognition.lang = 'tr-TR';
            recognition.start();

            recognition.onresult = (event) => {
                const speechToText = event.results[0][0].transcript;
                searchInput.value = speechToText;
                voiceBtn.style.color = "#4285f4";
                searchInput.placeholder = "İnternet üzerinde güvenle ara...";
                performSearch();
            };

            recognition.onerror = () => {
                voiceBtn.style.color = "#4285f4";
                searchInput.placeholder = "Hata oluştu, tekrar deneyin.";
            };
        } else {
            alert("Maalesef tarayıcınız sesli aramayı desteklemiyor.");
        }
    });

    // 5. Dynamic Finance Updates
    const updateFinanceRates = () => {
        const upElements = document.querySelectorAll('.up');
        upElements.forEach(el => {
            let currentVal = parseFloat(el.textContent.match(/\\d+\\.?\\d*/)[0]);
            let change = (Math.random() * 0.05).toFixed(2);
            el.innerHTML = `${(currentVal + parseFloat(change)).toFixed(2)} <i class="fas fa-caret-up"></i>`;
        });
    };

// Replaced with updateRealFinance() called from global scope

    // 6. Trend Links
    trendLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            searchInput.value = link.textContent.trim();
            performSearch();
        });
    });

    // 7. Notification Bell
    const bell = document.querySelector('.notification-bell');
    bell.addEventListener('click', () => {
        const badge = bell.querySelector('.badge');
        if (badge) {
            alert("Yeni Bildirimler:\\n1. Hava durumu uyarısı: Yağmur bekleniyor.\\n2. Güvenlik: Yeni cihaz girişi yapıldı.\\n3. Trend: 'Turkish Scanner' popüler oldu!");
            badge.style.display = 'none';
        } else {
            alert("Okunmamış bildiriminiz bulunmuyor.");
        }
    });

    // 8. Keyboard Shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.altKey && e.key === 's') {
            searchInput.focus();
        }
    });

    // 9. Logo Effect
    const logo = document.querySelector('.ts-logo');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = "scale(1.05) rotate(-1deg)";
        logo.style.transition = "transform 0.3s ease";
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = "scale(1) rotate(0deg)";
    });

    // Inject Shake Animation CSS
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
            100% { transform: translateX(0); }
        }
        .shake-animation {
            animation: shake 0.4s ease-in-out;
            border-color: #ea4335 !important;
        }
    `;
    document.head.appendChild(style);

    console.log("%cTurkish Scanner Sistemleri Aktif!", "color: #6001d2; font-size: 20px; font-weight: bold;");

    // 10. SHORTCUT BUTTONS FIX - YouTube, GitHub, Twitter/X, Reddit
    const shortcutMap = {
        'youtube': 'https://www.youtube.com',
        'github': 'https://github.com',
        'twitter': 'https://x.com',
        'reddit': 'https://www.reddit.com'
    };

    document.addEventListener('click', (e) => {
        const shortcutItem = e.target.closest('.shortcut-item');
        if (!shortcutItem || shortcutItem.classList.contains('add-new')) return;

        const iconBox = shortcutItem.querySelector('.icon-box');
        const siteKey = Array.from(iconBox.classList).find(cls => shortcutMap[cls]);
        
        if (siteKey && shortcutMap[siteKey]) {
            console.log(`Navigating to ${siteKey.toUpperCase()}:`, shortcutMap[siteKey]);
            // Smooth transition
            iconBox.style.transform = 'scale(0.95)';
            setTimeout(() => {
                window.location.href = shortcutMap[siteKey];
            }, 150);
        }
    });

// 11. Enhanced Auth + Theme (Updated)
    const authBtn = document.getElementById('authBtn') || document.querySelector('.btn-login');
    const logoutBtn = document.getElementById('logoutBtn');
    const avatarCircle = document.getElementById('avatarCircle') || document.querySelector('.avatar-circle');
    const themeSelect = document.getElementById('themeSelect');
    const loginModal = document.getElementById('loginModal');
    const registerModal = document.getElementById('registerModal');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const closeBtns = document.querySelectorAll('.close');

    // Modal functions
    function showLogin() {
        loginModal.style.display = 'block';
        registerModal.style.display = 'none';
    }
    function showRegister() {
        registerModal.style.display = 'block';
        loginModal.style.display = 'none';
    }
    function hideAllModals() {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    }

    authBtn.addEventListener('click', showLogin);
    document.getElementById('createAccount')?.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });
    document.getElementById('showRegister')?.addEventListener('click', (e) => { e.preventDefault(); showRegister(); });
    document.getElementById('showLogin')?.addEventListener('click', (e) => { e.preventDefault(); showLogin(); });
    closeBtns.forEach(btn => btn.addEventListener('click', hideAllModals));
    [loginModal, registerModal].forEach(modal => modal.addEventListener('click', (e) => { if (e.target === modal) hideAllModals(); }));

    // User DB (localStorage)
    function getUsers() { return JSON.parse(localStorage.getItem('tsUsers') || '[]'); }
    function saveUsers(users) { localStorage.setItem('tsUsers', JSON.stringify(users)); }

    // Register
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('regEmail').value;
        const name = document.getElementById('regName').value;
        const passHash = btoa(document.getElementById('regPassword').value);

        const users = getUsers();
        if (users.find(u => u.email === email)) return alert('E-posta kayıtlı!');
        users.push({email, name, password: passHash});
        saveUsers(users);
        localStorage.setItem('tsUser', JSON.stringify({email, name}));
        updateAuthUI();
        hideAllModals();
        showSuccessToast('✅ Kayıt başarılı! Hoş geldin ' + name);
    });

    // Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const passHash = btoa(document.getElementById('loginPassword').value);

        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === passHash);
        if (user) {
            localStorage.setItem('tsUser', JSON.stringify(user));
            updateAuthUI();
            hideAllModals();
            showSuccessToast('✅ Giriş başarılı! Hoş geldin ' + user.name);
        } else alert('❌ Hatalı e-posta/şifre!');
    });

    // Logout
    logoutBtn?.addEventListener('click', () => {
        localStorage.removeItem('tsUser');
        updateAuthUI();
    });

    function updateAuthUI() {
        const user = JSON.parse(localStorage.getItem('tsUser'));
        if (user) {
            authBtn.style.display = 'none';
            logoutBtn.style.display = 'inline';
            avatarCircle.textContent = user.name[0].toUpperCase();
            avatarCircle.style.display = 'block';
        } else {
            authBtn.style.display = 'inline';
            logoutBtn.style.display = 'none';
            avatarCircle.style.display = 'none';
        }
    }

    // Theme
    themeSelect?.addEventListener('change', (e) => {
        document.body.className = e.target.value;
        localStorage.setItem('tsTheme', e.target.value);
    });
    document.body.className = localStorage.getItem('tsTheme') || 'light';
    themeSelect.value = localStorage.getItem('tsTheme') || 'light';

    updateAuthUI();

    // Check login state on load
    const savedUser = localStorage.getItem('tsUser');
    if (savedUser) {
        const user = JSON.parse(savedUser);
        loginBtn.style.display = 'none';
        avatarCircle.textContent = user.name[0].toUpperCase();
        avatarCircle.style.display = 'block';
    }

    // 12. TOOL HANDLERS
    document.addEventListener('click', (e) => {
        const toolItem = e.target.closest('.tool-item');
        if (!toolItem) return;

        const icon = toolItem.querySelector('i').classList[1];

        switch(icon) {
            case 'fa-calculator':
                showCalculator();
                break;
            case 'fa-language':
                const text = prompt('Çeviri için metin girin (TR→EN):');
                if (text) {
                    const url = `https://translate.google.com/?sl=tr&tl=en&text=${encodeURIComponent(text)}&op=translate`;
                    window.open(url, '_blank');
                }
                break;
            case 'fa-clock':
                showWorldClocks();
                break;
            case 'fa-cloud':
                showWeather();
                break;
        }
    });

function showCalculator() {
        let calcHtml = `
            <div class="calculator-popup calculator-modern" id="calcPopup">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                    <h3 style="margin: 0; color: var(--text-main);">🧮 Hesap Makinesi</h3>
                    <span class="close" style="font-size: 24px; cursor: pointer; color: var(--text-light);" onclick="document.getElementById('calcPopup').remove()">&times;</span>
                </div>
                <input type="text" class="calculator-display" id="calcDisplay" readonly value="0">
                <div class="calc-buttons">
                    <button class="calc-btn" onclick="calcUpdate('C')">C</button>
                    <button class="calc-btn" onclick="calcUpdate('⌫')">⌫</button>
                    <button class="calc-btn" onclick="calcUpdate('/')">/</button>
                    <button class="calc-btn operator" onclick="calcUpdate('*')">×</button>
                    <button class="calc-btn" onclick="calcUpdate('7')">7</button>
                    <button class="calc-btn" onclick="calcUpdate('8')">8</button>
                    <button class="calc-btn" onclick="calcUpdate('9')">9</button>
                    <button class="calc-btn operator" onclick="calcUpdate('-')">-</button>
                    <button class="calc-btn" onclick="calcUpdate('4')">4</button>
                    <button class="calc-btn" onclick="calcUpdate('5')">5</button>
                    <button class="calc-btn" onclick="calcUpdate('6')">6</button>
                    <button class="calc-btn operator" onclick="calcUpdate('+')">+</button>
                    <button class="calc-btn" onclick="calcUpdate('1')">1</button>
                    <button class="calc-btn" onclick="calcUpdate('2')">2</button>
                    <button class="calc-btn" onclick="calcUpdate('3')">3</button>
                    <button class="calc-btn span-2 operator" onclick="calcUpdate('=')" style="grid-column: span 2;">=</button>
                    <button class="calc-btn span-2" onclick="calcUpdate('0')" style="grid-column: span 2;">0</button>
                    <button class="calc-btn" onclick="calcUpdate('.')">.</button>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', calcHtml);
        calcDisplay = document.getElementById('calcDisplay');
    }

    let calcDisplay;
    let calcMemory = '0';
    function calcUpdate(value) {
        switch(value) {
            case 'C': calcMemory = '0'; calcDisplay.value = '0'; break;
            case '⌫': calcMemory = calcMemory.slice(0, -1) || '0'; calcDisplay.value = calcMemory; break;
            case '=':
                try {
                    calcMemory = eval(calcMemory.replace('×', '*')).toString();
                    calcDisplay.value = calcMemory;
                } catch { calcDisplay.value = 'Hata'; }
                break;
            default:
                calcMemory += value;
                calcDisplay.value = calcMemory;
        }
    }

    function showWorldClocks() {
        const clocks = {
            'IST': {name: 'İstanbul', offset: 3},
            'LON': {name: 'Londra', offset: 0},
            'NYC': {name: 'New York', offset: -5},
            'TOK': {name: 'Tokyo', offset: 9}
        };
        let now = new Date();
        let clockHtml = '<div style="position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: white; padding: 24px; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 2001; max-width: 300px;"><h3>Dünya Saatleri</h3>';
        for (let city in clocks) {
            let localTime = new Date(now.getTime() + (clocks[city].offset * 3600000));
            clockHtml += `<p><strong>${clocks[city].name}:</strong> ${localTime.toLocaleTimeString('tr-TR', {hour: '2-digit', minute: '2-digit'})}</p>`;
        }
        clockHtml += '<button onclick="this.parentElement.remove()" style="width: 100%; padding: 12px; background: var(--accent-color); color: white; border: none; border-radius: 8px; cursor: pointer;">Kapat</button></div>';
        document.body.insertAdjacentHTML('beforeend', clockHtml);
    }

    function showWeather() {
        const cities = ['Istanbul: 24°C ☀️ Güneşli', 'Ankara: 22°C 🌤️ Parçalı Bulutlu', 'İzmir: 26°C 🌤️ Hafif Rüzgarlı'];
        let weatherHtml = '<div style="position: fixed; top: 20%; left: 50%; transform: translateX(-50%); background: white; padding: 24px; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.3); z-index: 2001;"><h3>Hava Durumu</h3>';
        cities.forEach(city => weatherHtml += `<p>${city}</p>`);
        weatherHtml += '<button onclick="this.parentElement.remove()" style="width: 100%; padding: 12px; background: var(--accent-color); color: white; border: none; border-radius: 8px; cursor: pointer;">Kapat</button></div>';
        document.body.insertAdjacentHTML('beforeend', weatherHtml);
    }

    // 13. ADD SHORTCUT
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.add-new')) return;
        const name = prompt('Kısayol adı:');
        const url = prompt('URL (örn: https://example.com):');
        const color = prompt('Renk kodu (örn: #ff0000 veya "blue"):') || '#4285f4';
        
        if (name && url) {
            const shortcutsContainer = document.querySelector('.shortcuts-container');
            const newShortcut = document.createElement('div');
            newShortcut.className = 'shortcut-item';
            newShortcut.innerHTML = `
                <div class="icon-box" style="background: ${color}">
                    <i class="fas fa-globe"></i>
                </div>
                <span>${name}</span>
            `;
            newShortcut.onclick = () => window.open(url, '_blank');
            shortcutsContainer.insertBefore(newShortcut, document.querySelector('.add-new'));
            
            // Save
            let shortcuts = JSON.parse(localStorage.getItem('tsShortcuts') || '[]');
            shortcuts.push({name, url, color});
            localStorage.setItem('tsShortcuts', JSON.stringify(shortcuts));
            
            console.log('New shortcut added:', name, url);
        }
    });

    // Load saved shortcuts
    const savedShortcuts = JSON.parse(localStorage.getItem('tsShortcuts') || '[]');
    savedShortcuts.forEach(shortcut => {
        const shortcutsContainer = document.querySelector('.shortcuts-container');
        const newShortcut = document.createElement('div');
        newShortcut.className = 'shortcut-item';
        newShortcut.innerHTML = `
            <div class="icon-box custom" style="background: ${shortcut.color}">
                <i class="fas fa-globe"></i>
            </div>
            <span>${shortcut.name}</span>
        `;
        newShortcut.onclick = () => window.open(shortcut.url, '_blank');
        shortcutsContainer.insertBefore(newShortcut, document.querySelector('.add-new'));
    });

    // Fix duplicate navLinks declaration - remove old one inside DOMContentLoaded
});

// 14. NewsAPI Integration & Enhanced Tabs (2026 Update)
const NEWS_API_KEY = '79c8b6e0e7d84a41aeb9223805be69f9'; // User-provided
let newsData = [];

// Fetch live Turkish news
async function fetchNews() {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=tr&apiKey=${NEWS_API_KEY}`);
        const data = await response.json();
        newsData = data.articles.slice(0, 5); // Top 5
        displayNews(newsData);
    } catch (error) {
        console.error('News fetch error:', error);
        displayNews([{title: 'Haberler yüklenemedi (API hatası). Tarayıcıyı yenile.', description: 'Lütfen NewsAPI key kontrol et.'}]);
    }
}

// Display dynamic news
function displayNews(articles) {
    const newsFeed = document.querySelector('.news-feed');
    if (!newsFeed) return;

    let html = `
        <div class="feed-header">
            <h2>📰 Canlı Haberler (Gerçek Zamanlı - ${new Date().toLocaleDateString('tr-TR')})</h2>
            <button onclick="fetchNews()" style="background: #4285f4; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">🔄 Yenile</button>
        </div>
    `;

    articles.forEach(article => {
        html += `
            <article class="news-card-large">
                <div class="news-img-placeholder" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                    ${article.urlToImage ? `<img src="${article.urlToImage}" style="width:100%;height:100%;object-fit:cover;">` : '📰'}
                </div>
                <div class="news-details">
                    <span class="category">${article.source.name || 'Haber'}</span>
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description || 'Detaylar için tıklayın.'}</p>
                    <div class="news-meta">
                        <span><i class="far fa-clock"></i> ${new Date(article.publishedAt).toLocaleString('tr-TR')}</span>
                    </div>
                </div>
            </article>
        `;
    });

    newsFeed.innerHTML = html;
}

// Enhanced tab handlers with real functionality
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        searchInput.focus();

        // Tab-specific actions
        const query = searchInput.value.trim();
        const tabActions = {
            0: () => query ? `https://www.google.com.tr/search?q=${encodeURIComponent(query)}` : '#', // Hepsi
            1: () => { fetchNews(); return 'https://news.google.com.tr'; }, // Haberler (load live news)
            2: () => query ? `https://www.google.com.tr/search?tbm=isch&q=${encodeURIComponent(query)}` : 'https://images.google.com.tr', // Görseller
            3: () => query ? `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}` : 'https://youtube.com', // Videolar
            4: () => 'https://www.google.com.tr/maps', // Haritalar
            5: () => query ? `https://www.google.com.tr/search?tbm=shop&q=${encodeURIComponent(query)}` : 'https://shopping.google.com.tr' // Alışveriş
        };

        if (index === 1) { // Haberler: Load live news first
            fetchNews();
        } else if (query || tabActions[index]()) {
            const url = typeof tabActions[index]() === 'string' ? tabActions[index]() : tabActions[index];
            if (url !== '#') window.open(url, '_blank');
        }
    });
});

// Auto-load news on page load
fetchNews();

// 15. Enhanced Finance (Mock 2026 Projections + simple API fallback)
async function updateRealFinance() {
    try {
        // Free exchangerate API (no key needed for basic)
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/TRY');
        const data = await response.json();
        const usd = (1 / data.rates.USD).toFixed(2);
        const eur = (1 / data.rates.EUR).toFixed(2);
        document.querySelector('.f-row:nth-child(1) span:last-child').innerHTML = `32.${Math.floor(Math.random()*100)} ↑`; // Mock 2026 USD
        document.querySelector('.f-row:nth-child(2) span:last-child').innerHTML = `${usd} ↓`;
    } catch {
        // Fallback 2026 mock
        document.querySelector('.f-row:nth-child(1) span:last-child').innerHTML = '35.20 <i class="fas fa-caret-up"></i>';
        document.querySelector('.f-row:nth-child(2) span:last-child').innerHTML = '38.45 <i class="fas fa-caret-down"></i>';
    }
}
setInterval(updateRealFinance, 30000); // 30s

// Success Toast Animation
function showSuccessToast(message) {
    let toast = document.createElement('div');
    toast.innerHTML = message;
    toast.style.cssText = `
        position: fixed; top: 20px; right: 20px; background: #34a853; color: white; 
        padding: 16px 24px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); 
        z-index: 9999; transform: translateX(400px); opacity: 0; transition: all 0.4s ease;
        font-weight: 500; max-width: 300px; font-family: Inter, sans-serif;
    `;
    document.body.appendChild(toast);
    
    requestAnimationFrame(() => {
        toast.style.transform = 'translateX(0)';
        toast.style.opacity = '1';
    });
    
    setTimeout(() => {
        toast.style.transform = 'translateX(400px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// Update existing interval to use real func
// (replace previous updateFinanceRates call if exists)



