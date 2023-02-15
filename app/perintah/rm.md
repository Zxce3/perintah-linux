# rm

Perintah 'rm' digunakan untuk menghapus file atau direktori pada sistem operasi Unix dan Linux.

## Catatan tambahan

- `rm` adalah singkatan dari remove.
- Penting untuk diingat bahwa perintah 'rm' tidak dapat dibatalkan, sehingga harus digunakan dengan hati-hati untuk menghindari penghapusan file atau direktori yang masih Anda perlukan.

### Format dan opsi parameter perintah

Format: `rm [nama_file]`

Opsi:

"-r": digunakan untuk menghapus direktori dan semua isinya secara rekursif. Tanpa opsi ini, perintah "rm" hanya dapat menghapus file biasa.
"-f": digunakan untuk memaksa penghapusan tanpa konfirmasi, meskipun file atau direktori yang akan dihapus dilindungi dari penghapusan.
"-i": untuk meminta konfirmasi penghapusan sebelum menghapus setiap file atau direktori.

### Struktur dasar perintah

```bash
rm [nama_file] / rm [nama_direktori]
```