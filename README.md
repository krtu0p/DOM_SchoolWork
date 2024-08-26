# Membuat file README.md dengan penjelasan tentang DOM

content = """
# Document Object Model (DOM)

## Apa itu DOM?

Document Object Model (DOM) adalah representasi hierarkis dari struktur halaman web. Ketika sebuah halaman web dimuat ke dalam browser, DOM dibuat sebagai antarmuka yang memungkinkan program seperti JavaScript untuk membaca dan memanipulasi konten, struktur, dan gaya dari dokumen web secara dinamis. DOM menggambarkan halaman web sebagai pohon yang terdiri dari objek-objek yang mewakili elemen-elemen HTML, atribut, teks, dan lebih banyak lagi.

## Struktur DOM

DOM mengorganisasikan dokumen sebagai struktur pohon, di mana setiap node di pohon adalah objek yang mewakili bagian dari dokumen HTML:

- **Document Node**: Node paling atas yang mewakili seluruh dokumen.
- **Element Node**: Mewakili elemen-elemen HTML seperti `<div>`, `<p>`, `<a>`, dll.
- **Text Node**: Mewakili teks di dalam elemen HTML.
- **Attribute Node**: Mewakili atribut pada elemen HTML, seperti `class`, `id`, `src`, dll.
- **Comment Node**: Mewakili komentar di dalam kode HTML.

Contoh sederhana dari struktur DOM:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Contoh DOM</title>
  </head>
  <body>
    <h1>Selamat datang</h1>
    <p>Ini adalah contoh sederhana DOM.</p>
  </body>
</html>
