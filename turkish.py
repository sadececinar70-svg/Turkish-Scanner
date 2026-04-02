import sys
import os
from PyQt6.QtCore import *
from PyQt6.QtWidgets import *
from PyQt6.QtGui import *
from PyQt6.QtWebEngineWidgets import *

class TurkishScanner(QMainWindow):
    """
    Turkish Scanner v2.0 (2026 Güncellemesi): Google/Yahoo hibrit + NewsAPI entegrasyonu.
    Gerçek haberler, gelişmiş oturum & tab sistemi.
    """
    def __init__(self):
        super().__init__()

        # --- Pencere Ayarları ---
        self.setWindowTitle("Turkish Scanner v2.0 - 2026 Edition")
        self.resize(1280, 720)
        
        # --- Browser Engine Kurulumu ---
        self.browser = QWebEngineView()
        # Yerel index.html dosyasını yükle
        local_path = os.path.abspath("index.html")
        self.browser.setUrl(QUrl.fromLocalFile(local_path))
        self.setCentralWidget(self.browser)

        # --- Navigasyon Barı ---
        self.navbar = QToolBar("Gezinme Menüsü")
        self.navbar.setMovable(False)
        self.addToolBar(self.navbar)

        # Geri, İleri ve Yenile Butonları
        self.add_nav_action("←", "Geri", self.browser.back)
        self.add_nav_action("→", "İleri", self.browser.forward)
        self.add_nav_action("↻", "Yenile", self.browser.reload)
        self.add_nav_action("🏠", "Ana Sayfa", self.go_home)

        self.navbar.addSeparator()

        # URL Giriş Alanı
        self.url_bar = QLineEdit()
        self.url_bar.setPlaceholderText("TS ile ara veya URL gir...")
        self.url_bar.returnPressed.connect(self.navigate_to_url)
        self.navbar.addWidget(self.url_bar)

        # Sayfa değiştikçe URL çubuğunu güncelle
        self.browser.urlChanged.connect(self.update_url)
        self.browser.loadFinished.connect(self.update_title)

        # Tasarımı Güzelleştir (QSS)
        self.apply_custom_style()

    def add_nav_action(self, icon_text, tip, slot):
        """Navigasyon barına hızlı buton ekleme yardımcısı"""
        action = QAction(icon_text, self)
        action.setStatusTip(tip)
        action.triggered.connect(slot)
        self.navbar.addAction(action)

    def go_home(self):
        """Kullanıcıyı Turkish Scanner ana sayfasına döndürür"""
        local_path = os.path.abspath("index.html")
        self.browser.setUrl(QUrl.fromLocalFile(local_path))

    def navigate_to_url(self):
        """URL çubuğundan gelen veriyi işler (Arama veya Direkt Git)"""
        q = self.url_bar.text()
        if not q.startswith("http"):
            if "." in q and " " not in q:
                url = "http://" + q
            else:
                # Yahoo/Google hibrit arama mantığı
                url = f"https://www.google.com/search?q={q}"
        else:
            url = q
        self.browser.setUrl(QUrl(url))

    def update_url(self, q):
        """Adres çubuğunu güncel tutar"""
        if q.isLocalFile():
            self.url_bar.setText("turkish-scanner://home")
        else:
            self.url_bar.setText(q.toString())

    def update_title(self):
        """Pencere başlığını aktif sayfanın ismine göre ayarlar"""
        title = self.browser.page().title()
        self.setWindowTitle(f"{title} - Turkish Scanner")

    def apply_custom_style(self):
        """Uygulama arayüzüne modern bir dokunuş ekler"""
        self.setStyleSheet("""
            QMainWindow { background-color: #ffffff; }
            QToolBar { 
                background: #f8f9fa; 
                border-bottom: 1px solid #dfe1e5; 
                padding: 4px; 
            }
            QLineEdit {
                border: 1px solid #dfe1e5;
                border-radius: 18px;
                padding: 6px 15px;
                margin-left: 10px
                background: #ffffff;
                font-size: 13px;
            }
            QLineEdit:focus { border: 1px solid #4285f4; }
            QToolButton { 
                padding: 5px; 
                font-size: 16px; 
                color: #5f6368; 
            }
            QToolButton:hover { color: #6001d2; }
        """)

if __name__ == "__main__":
    # Yüksek çözünürlüklü ekran desteği
    QApplication.setAttribute(Qt.ApplicationAttribute.AA_EnableHighDpiScaling)
    app = QApplication(sys.argv)
    app.setApplicationName("Turkish Scanner")
    
    window = TurkishScanner()
    window.show()
    sys.exit(app.exec())