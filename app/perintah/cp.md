# cp

Perintah 'cp' digunakan untuk menyalin file atau direktori dari suatu lokasi ke lokasi lain.

## Catatan tambahan

- `cp` adalah singkatan dari copy.

### Format dan opsi parameter perintah

Format: `cp [option] source destination`

Keterangan :
- `option` adalah opsi yang dapat digunakan bersama perintah `cp` (opsional)
- `source` adalah file atau direktori yang ingin disalin
- `destination` adalah lokasi tempat file atau direktori yang disalin akan disimpan

Opsi:
- `r` atau `--recursive`: menyalin seluruh direktori secara rekursif
- `i` atau `--interactive`: meminta konfirmasi sebelum menimpa file yang sudah ada di lokasi tujuan
- `v` atau `--verbose`: menampilkan output yang lebih detail saat menyalin file atau direktori

### Struktur dasar perintah

```bash
cp /home/user1/file1.txt /home/user2/ atau bisa pakai ini untuk mengcopy seluruh file cp -r /home/user1/ /home/user2/
```