# passwd

perintah **passwd** digunakan untuk mengatur password dari user yang sudah ada di sistem.

Dan perintah ini juga bisa untuk merubah password dari user yang sudah ada di sistem.

## Contoh

```bash
passwd [nama_user]
```

ini akan mengatur password dari user [nama_user] di sistem.

## Parameter tambahan

* -l : untuk mengunci password dari user
* -u : untuk membuka kunci password dari user
* -d : untuk menghapus password dari user
* -f : untuk mengatur password dari user tanpa memasukkan password lama
* -S : untuk menampilkan status password dari user
* -n : untuk menentukan batas waktu password berlaku
* -R : direktori untuk CHROOT

Sebagai contoh:

```bash
passwd -l [nama_user]
```

ini akan mengunci password dari user [nama_user] di sistem.