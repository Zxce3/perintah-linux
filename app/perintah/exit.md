# exit

Perintah untuk keluar dari shell.

## Catatan tambahan

Dalam beberapa kasus, jika Anda memiliki proses yang berjalan di latar
belakang, shell akan mengingatkan Anda bahwa mereka sedang berjalan dan
mengembalikan Anda ke prompt perintah.  Dalam hal ini, mengeluarkan exit lagi
akan menghentikan pekerjaan tersebut dan keluar dari shell.  Alias ​​​​umum
untuk keluar termasuk "bye", "logout", dan "lo". Setiap perintah mengembalikan
status keluar (terkadang disebut sebagai status kembali atau kode keluar).
Perintah yang berhasil mengembalikan 0, sedangkan yang tidak berhasil
mengembalikan nilai bukan nol yang biasanya dapat diartikan sebagai kode
kesalahan.  Perintah, program, dan utilitas UNIX yang berperilaku baik
mengembalikan kode keluar 0 setelah berhasil diselesaikan, meskipun ada beberapa
pengecualian.

Demikian pula, fungsi dalam skrip dan skrip itu sendiri mengembalikan status
keluar.  Perintah terakhir yang dijalankan dalam fungsi atau skrip menentukan
status keluar.  Di dalam skrip, perintah keluar nnn dapat digunakan untuk
mengirimkan status keluar nnn ke shell (nnn harus bilangan bulat dalam kisaran 0 - 255).

### Contoh

Contoh 1: Keluar dari shell

```bash
user@host:~$ exit
logout

# su user
user@host:~# exit
exit
root@host:~$

```

Contoh 2: perintah exit dalam skrip

```bash
#!/bin/bash
echo "Ini adalah tes skrip."
# menghentikan shell skrip dengan pesan sukses
exit 0
```

```bash
user@host:~$ ./test.sh
Ini adalah tes skrip.user@host:~$ echo $?
0
```

```bash
#!/bin/bash
echo "Ini adalah tes skrip."
# menghentikan shell skrip dengan pesan kesalahan
exit 1
```

```bash
user@host:~$ ./test.sh
Ini adalah tes skrip.user@host:~$ echo $?
1
```
