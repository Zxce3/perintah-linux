# adduser

perintah **adduser** digunakan untuk menambahkan user baru ke sistem.

Biasanya hanya dilakukan oleh *root* untuk menambahkan user atau akun yang baru. Setelah perintah ini bisa dilanjutkan dengan perintah passwd yaitu untuk mengatur password dari user yang baru saja dibuat.

## Contoh

```bash
adduser [nama_user]
```

ini akan menambahkan user baru dengan nama [nama_user] ke sistem.

parameter tambahan yang bisa digunakan adalah:

  * -c "Keterangan" : untuk menambahkan keterangan pada user
  * -d /home/[nama_user] : untuk menentukan direktori home dari user
  * -g [nama_group] : untuk menentukan group dari user
  * -s /bin/bash : untuk menentukan shell dari user
  * -u [nomor_user] : untuk menentukan nomor user
  * -m : untuk membuat direktori home dari user

Sebagai contoh:

```bash
adduser -c "User baru" -d /home/userbaru -g userbaru -s /bin/bash -u 1000 -m userbaru
```
