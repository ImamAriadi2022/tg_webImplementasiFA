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

Semoga README ini memberikan penjelasan yang jelas tentang proyek ini. Selamat mencoba dan bereksperimen dengan Finite Automata dan Pac-Man!
