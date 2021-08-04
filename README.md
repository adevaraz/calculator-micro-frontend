# Implementasi Micro-frontend pada Aplikasi Kalkulator Sederhana
## Deskripsi
Repositori ini adalah project sederhana untuk implementasi arsitektur micro-frontend dengan menggunakan framework Vue diintegrasikan menggunakan `iframe` dari `HTML`. Vue yang digunakan adalah `@vue/cli` versi `2`. Pada project ini, tampilan kalkulator dibagi menjadi 3 micro-frontend, yaitu `navbar`, `display`, dan `buttons`. Ketiga micro-frontend tersebut diintegrasikan menjadi sebuah tampilan kalkulator pada file `home.html` menggunakan `iframe`.

## Prerequisites
1. Intalasi NodeJS (dan `npm`).
2. Instalasi `vue-cli`.
3. (Opsional) Instalasi Python untuk menjalankan HTML pada server.

## Menjalankan Project
### 1. Clone repositori
```
git clone https://github.com/adevaraz/calculator-micro-frontend
```
### 2. Instalasi depencencies
Pada aplikasi micro-frontend `buttons` (`calculator-micro-frontend/mf-buttons`), lakukan instalasi dependencies yang ada dengan menjalankan perintah berikut:
```
npm install
```
Lakukan langkah 2 pada aplikasi micro-frontend `display` dan `navbar`.
### 3. Jalankan project
Untuk menjalankan project, perlu menjalankan ketiga aplikasi micro-frontend terlebih dahulu. Dalam direktori masing-masing aplikasi, jalankan perintah berikut:
```
npm run serve
```
Ketiga aplikasi tersebut akan berjalan pada port yang berbeda.
```
# aplikasi mf-navbar
http://localhost:8081/

# aplikasi mf-display
http://localhost:8082/

# aplikasi mf-buttons
http://localhost:8083/
```
Setelah itu, pada direktori `calculator-micro-frontend`, buka file `home.html` pada browser atau jalankan perintah berikut terlebih dulu:
```
python -m http.server
```
Kemudian, buka `http://localhost:8000/` pada browser.