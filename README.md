# Pintar – średniowieczne miasto z klocków

Gra przeglądarkowa (Three.js r128, jeden plik `index.html`). Trzy sposoby uruchomienia – od najprostszego.

## 1. Najprościej: link z GitHub Pages (zalecane)
1. Załóż repozytorium na GitHubie (np. `pintar`) i wgraj do niego całą zawartość tego folderu (`Add file → Upload files`, przeciągnij wszystkie pliki, także ukryty folder `.github`).
2. W repozytorium wejdź w **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Po wgraniu pliki same się opublikują (zakładka **Actions**, ok. 1–2 min). Gra będzie pod adresem `https://TWOJA-NAZWA.github.io/pintar/`.
4. Otwórz link w Chrome/Edge i kliknij ikonę **„Zainstaluj”** w pasku adresu – gra pojawi się jako aplikacja (okno bez paska przeglądarki, działa też offline).

## 2. Instalator Windows (.exe, budowany przez GitHub)
Nic nie instalujesz u siebie – instalator buduje GitHub.
1. Nowa wersja = nowy tag `vX.Y.Z` (np. `v1.3.0`). Po wypchnięciu tagu GitHub Actions sam zbuduje i opublikuje wydanie.
2. Po kilku minutach w **Releases** pojawią się pliki:
   - `Pintar-Setup-X.Y.Z.exe` – instalator (skrót na pulpicie i w menu Start),
   - `Pintar-Portable-X.Y.Z.exe` – wersja bez instalacji.
3. Gra startuje na pełnym ekranie (**F11** przełącza okno), działa bez internetu.
   *Windows może pokazać ostrzeżenie SmartScreen (program nie jest podpisany): „Więcej informacji → Uruchom mimo to”.*

## 3. Uruchomienie lokalne (do testów)
Potrzebny Node.js 20+.
```
npm install      # pobiera Electron i three.js
npm start        # uruchamia grę w oknie Electrona
npm run dist     # buduje instalator Windows do folderu dist/
```
Klawisze: **F11** pełny ekran, **F12** narzędzia deweloperskie.

## Zapisy gry
Zapis jest w pamięci przeglądarki/aplikacji (localStorage), osobno dla każdej wersji (link, aplikacja z Pages, Electron).
Zapisów nie da się przenosić między wersjami.

## Aktualizacja gry
Podmień `index.html` na nową wersję i wgraj do repozytorium – strona opublikuje się sama. Nową wersję instalatora zrobisz kolejnym tagiem (`v1.0.1`).
