# awk

digunakan untuk memproses dan memanipulasi teks, terutama untuk data tabular.

## Catatan tambahan

- `awk` merupakan singkatan dari Aho, Weinberger, and Kernighan.
- `awk` bisa digunakan untuk memproses dan memanipulasi data tabular dalam berkas teks atau output perintah lain.
- `awk` memiliki banyak built-in functions dan statements yang memudahkan pengguna untuk memanipulasi data.

### Format dan opsi parameter perintah

Format: `awk [opsi] 'script' [file]`

Opsi:

- `-F` : menentukan field separator.
- `-v` : menentukan variabel.
- `-f` : membaca script dari berkas.

### Struktur dasar perintah

```bash
awk 'script' [file]
```

### Cara kerja perintah

Perintah `awk` membaca berkas teks atau output perintah lain, menjalankan script yang ditentukan, dan menampilkan hasil akhir. Script tersebut menentukan bagaimana data tabular akan diproses dan diformatkan.

```bash
awk '{ print $1 }' data.txt
```

- Dalam script `awk`, biasanya digunakan statement `BEGIN` dan `END` sebagai wrapper untuk inisialisasi dan akhir proses.
- Dalam script `awk`, juga digunakan pattern dan action. Pattern berfungsi sebagai trigger untuk menentukan baris yang akan diproses, dan action berisi perintah yang akan dilakukan pada baris yang diproses.
- Dalam script `awk`, variabel-variabel seperti `$1`, `$2`, dll. digunakan untuk mengakses kolom data dalam berkas.
- Dalam script `awk`, juga tersedia banyak built-in functions yang memudahkan pengguna untuk memanipulasi data, seperti `length`, `substr`, `tolower`, dll.

```bash
awk 'BEGIN { FS = "," } { print $2 }' data.csv
```

### Contoh perintah

Berikut adalah beberapa contoh perintah `awk` yang bisa digunakan:

- Menampilkan kolom pertama dari setiap baris dalam berkas `data.txt`:

```bash
awk '{ print $1 }' data.txt
```