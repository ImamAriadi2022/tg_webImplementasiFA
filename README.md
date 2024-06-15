## Finite Automata Pac-Man

Proyek ini menggabungkan implementasi Finite Automata (FA) dalam JavaScript dengan permainan Pac-Man klasik. FA digunakan untuk memvalidasi string input dan mengontrol perilaku Pac-Man, sementara permainan Pac-Man memberikan visualisasi interaktif dari konsep FA.

### Apa itu Finite Automata (FA)?

Finite Automata, atau FA, adalah model komputasi abstrak yang digunakan untuk mengenali pola dalam string input. FA terdiri dari:

* **States:** Kumpulan keadaan yang mungkin dari mesin.
* **Alphabet:** Kumpulan simbol input yang valid.
* **Transition Function:** Fungsi yang menentukan bagaimana mesin berpindah dari satu state ke state lain berdasarkan simbol input.
* **Start State:** Keadaan awal mesin.
* **Accept States:** Kumpulan keadaan yang menandakan bahwa string input diterima.

FA memproses string input satu simbol pada satu waktu, mulai dari start state. Setiap simbol input menyebabkan FA bertransisi ke state baru sesuai dengan transition function. Jika, setelah memproses seluruh string input, FA berakhir di salah satu accept states, maka string input tersebut diterima.

### Implementasi FA dalam Proyek ini

Kode JavaScript dalam proyek ini mendefinisikan class `FiniteAutomata` yang mengimplementasikan konsep FA. Objek `FiniteAutomata` dibuat dengan menentukan states, alphabet, transition function, start state, dan accept states. Method `validateString` digunakan untuk memeriksa apakah string input diterima oleh FA.

### Permainan Pac-Man

Permainan Pac-Man adalah permainan arcade klasik di mana pemain mengontrol Pac-Man untuk memakan semua dots di labirin sambil menghindari hantu. Dalam proyek ini, perilaku Pac-Man dan hantu dikendalikan oleh FA yang ditentukan pengguna atau FA contoh yang sudah disediakan.

### Cara Menggunakan

1. **Pilih atau Buat FA:** Gunakan dropdown menu untuk memilih FA contoh atau formulir "Create Custom Automata" untuk membuat FA sendiri.
2. **Berikan Input String:** Masukkan string yang ingin Anda validasi ke dalam kolom input dan klik "Validate". Hasil validasi akan ditampilkan di bawah kolom input.
3. **Mainkan Pac-Man:** Gunakan tombol panah untuk mengontrol Pac-Man dan memakan semua dots sambil menghindari hantu. Level akan meningkat saat semua dots dimakan.

### Struktur Kode

* `FiniteAutomata` class: Mengimplementasikan logika FA.
* `exampleAutomata`: Objek yang berisi beberapa contoh FA.
* Event listener: Menangani perubahan seleksi FA, pembuatan FA baru, validasi string input, dan input keyboard untuk mengontrol Pac-Man.
* `drawAutomata`: Fungsi untuk memvisualisasikan FA.
* Kode permainan Pac-Man: Mengimplementasikan logika permainan, termasuk pergerakan Pac-Man, hantu, pengumpulan dots, dan peningkatan level.

### Catatan Tambahan

* Implementasi FA dalam proyek ini ditujukan untuk tujuan demonstrasi dan pendidikan.
* Permainan Pac-Man dalam proyek ini adalah versi sederhana dari permainan aslinya.
* Visualisasi FA menggunakan library D3.js.



### PACMAN DOKUMENTATION
Berikut adalah dokumentasi yang ditulis dalam bahasa Indonesia untuk `readme.md` yang menjelaskan implementasi kode permainan Pac-Man di atas.

```markdown
# Permainan Pac-Man

Ini adalah implementasi sederhana dari permainan klasik Pac-Man menggunakan HTML5 Canvas dan JavaScript. Permainan ini menampilkan Pac-Man, hantu, titik-titik, dinding, dan sistem deteksi tabrakan dasar.

## Daftar Isi
- [Pengaturan Permainan](#pengaturan-permainan)
- [Elemen Permainan](#elemen-permainan)
- [Fungsi Permainan](#fungsi-permainan)
- [Kontrol Keyboard](#kontrol-keyboard)
- [Fitur Layar Penuh](#fitur-layar-penuh)
- [Cara Menjalankan](#cara-menjalankan)

## Pengaturan Permainan

Permainan diinisialisasi dengan mengatur kanvas, menentukan ukuran ubin, dan menghitung jumlah ubin.

```javascript
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const tileSize = 20;
const tilesCount = canvas.width / tileSize;

let score = 0;
let speed = 200;
let level = 1;
```

## Elemen Permainan

### Pac-Man
Pac-Man diinisialisasi di sudut kiri atas kanvas dan mulai bergerak ke kanan.

```javascript
let pacMan = { x: 1, y: 1, direction: 'right' };
```

### Hantu
Dua hantu diinisialisasi di posisi tertentu dengan arah awal.

```javascript
const ghosts = [
    { x: tilesCount - 2, y: tilesCount - 2, direction: 'left' },
    { x: 1, y: tilesCount - 2, direction: 'up' }
];
```

### Titik dan Dinding
Titik ditempatkan pada grid, menghindari posisi yang ditempati oleh dinding, hantu, dan Pac-Man.

```javascript
const dots = [];
const walls = [
    { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 },
    { x: 5, y: 6 }, { x: 7, y: 6 },
    { x: 5, y: 7 }, { x: 6, y: 7 }, { x: 7, y: 7 },
];
```

## Fungsi Permainan

### Menggambar Elemen Permainan
Fungsi `drawGame` membersihkan kanvas dan menggambar ulang dinding, titik, Pac-Man, dan hantu.

```javascript
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Gambar dinding, titik, Pac-Man, dan hantu
}
```

### Memindahkan Pac-Man
Fungsi `movePacMan` memperbarui posisi Pac-Man berdasarkan arah saat ini, memastikan dia tidak bergerak melalui dinding.

```javascript
function movePacMan() {
    // Perbarui posisi Pac-Man berdasarkan arah
}
```

### Memindahkan Hantu
Fungsi `moveGhosts` memperbarui posisi hantu secara acak, memastikan mereka tidak bergerak melalui dinding.

```javascript
function moveGhosts() {
    // Perbarui posisi hantu secara acak
}
```

### Memeriksa Tabrakan
Fungsi `checkCollisions` memeriksa tabrakan antara Pac-Man dan titik atau hantu.

```javascript
function checkCollisions() {
    // Periksa tabrakan dengan titik dan hantu
}
```

### Menginisialisasi Level
Fungsi `initializeLevel` mengatur ulang titik-titik dan posisi Pac-Man serta hantu, dan menggambar elemen permainan.

```javascript
function initializeLevel() {
    // Atur ulang titik-titik dan posisi Pac-Man serta hantu
    drawGame();
}
```

### Loop Permainan
Fungsi `gameLoop` memindahkan Pac-Man dan hantu, memeriksa tabrakan, dan menggambar ulang elemen permainan.

```javascript
function gameLoop() {
    movePacMan();
    moveGhosts();
    checkCollisions();
    drawGame();
    setTimeout(gameLoop, speed);
}
```

## Kontrol Keyboard

Gunakan tombol panah untuk mengontrol arah Pac-Man.

```javascript
document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowRight': pacMan.direction = 'right'; break;
        case 'ArrowLeft': pacMan.direction = 'left'; break;
        case 'ArrowUp': pacMan.direction = 'up'; break;
        case 'ArrowDown': pacMan.direction = 'down'; break;
    }
});
```

## Fitur Layar Penuh

Permainan mendukung mode layar penuh. Tombol `fullscreenBtn` dan `minimizeBtn` memungkinkan beralih ke mode layar penuh.

```javascript
const fullscreenBtn = document.getElementById('fullscreenBtn');
const minimizeBtn = document.getElementById('minimizeBtn');

fullscreenBtn.addEventListener('click', () => {
    // Masuk ke mode layar penuh
});
minimizeBtn.addEventListener('click', () => {
    // Keluar dari mode layar penuh
});
```

## Cara Menjalankan

1. Buka `index.html` di peramban web.
2. Gunakan tombol panah untuk mengontrol Pac-Man.
3. Klik tombol layar penuh untuk masuk ke mode layar penuh.

Selamat bermain!
```
