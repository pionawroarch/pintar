# Pintar – średniowieczne miasto z klocków

Gra przeglądarkowa (Three.js r128, jeden plik `index.html`). Trzy sposoby uruchomienia – od najprostszego.

## 1. Najprościej: link z GitHub Pages (zalecane)
1. Załóż repozytorium na GitHubie (np. `pintar`) i wgraj do niego całą zawartość tego folderu (`Add file → Upload files`, przeciągnij wszystkie pliki, także ukryty folder `.github`).
2. W repozytorium wejdź w **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Po wgraniu pliki same się opublikują (zakładka **Actions**, ok. 1–2 min). Gra będzie pod adresem `https://TWOJA-NAZWA.github.io/pintar/`.
4. Otwórz link w Chrome/Edge i kliknij ikonę **„Zainstaluj”** w pasku adresu – gra pojawi się jako aplikacja (okno bez paska przeglądarki, działa też offline).

## 2. Instalator na Windows / macOS / Linux (Electron, budowany przez GitHub)
Nic nie instalujesz u siebie – instalatory buduje GitHub.
1. W repozytorium wejdź w **Releases → Draft a new release**, wpisz tag np. `v1.0.0` i opublikuj
   (albo: **Actions → Instalatory → Run workflow**, gotowe pliki znajdziesz w *Artifacts*).
2. Po kilku minutach w Release pojawią się pliki: `Pintar Setup 1.0.0.exe` (Windows), `.dmg` (macOS), `.AppImage` (Linux).
3. Pobierz i uruchom – to zwykły instalator.
   *Windows może pokazać ostrzeżenie SmartScreen (program nie jest podpisany): „Więcej informacji → Uruchom mimo to”.*

## 3. Uruchomienie lokalne (do testów)
Potrzebny Node.js 20+.
```
npm install      # pobiera Electron i three.js
npm start        # uruchamia grę w oknie Electrona
npm run dist     # buduje instalator dla Twojego systemu do folderu dist/
```
Klawisze: **F11** pełny ekran, **F12** narzędzia deweloperskie.

## Zapisy gry
Zapis jest w pamięci przeglądarki/aplikacji (localStorage), osobno dla każdej wersji (link, aplikacja z Pages, Electron).
Zapisów nie da się przenosić między wersjami.

## Aktualizacja gry
Podmień `index.html` na nową wersję i wgraj do repozytorium – strona opublikuje się sama. Nową wersję instalatora zrobisz kolejnym tagiem (`v1.0.1`).
