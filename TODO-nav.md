# Turkish Scanner Nav Tabs Fix - TODO-nav

**New Issue:** Haberler ve Videolar sekmeleri çalışmıyor.

## Plan
- **turkish.js**: Nav tabs (.nav-list a) için click handler ekle.
  | Sekme | Action |
  |-------|--------|
  | Hepsi | google.com.tr/search?q= |
  | Haberler | news.google.com.tr |
  | Görseller | google.com.tr/search?tbm=isch |
  | Videolar | youtube.com/results?search_query= |
  | Haritalar | google.com.tr/maps |
  | Alışveriş | google.com.tr/search?tbm=shop |

- Active class toggle + search input focus + performSearch.

### 1. [✅ DONE] Update turkish.js with nav tabs
### 2. [✅ DONE] Test tabs
### 3. [✅ DONE] Complete

**Nav tabs şimdi active toggle + search focus yapıyor. Sekmeye tıklayınca arama aktifleşir.**
