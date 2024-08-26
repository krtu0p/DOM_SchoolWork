
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
```

Struktur di atas akan diubah menjadi pohon DOM dengan node seperti berikut:

```
- Document
  - html
    - head
      - title (Selamat datang)
    - body
      - h1 (Selamat datang)
      - p (Ini adalah contoh sederhana DOM.)
```

## Mengakses dan Memanipulasi DOM

DOM memungkinkan kita untuk mengakses elemen-elemen pada halaman dan memanipulasinya dengan menggunakan JavaScript. Berikut adalah beberapa cara umum untuk berinteraksi dengan DOM:

1. **Mengakses Elemen DOM:**
   - `document.getElementById('id')`: Mengakses elemen berdasarkan ID-nya.
   - `document.querySelector('selector')`: Mengakses elemen berdasarkan selektor CSS.
   - `document.getElementsByClassName('class')`: Mengakses elemen berdasarkan nama kelas.

2. **Memanipulasi Konten:**
   - `element.textContent`: Mengubah atau mendapatkan teks di dalam elemen.
   - `element.innerHTML`: Mengubah atau mendapatkan HTML di dalam elemen.
   - `element.setAttribute('attribute', 'value')`: Menambahkan atau mengubah atribut pada elemen.

3. **Memanipulasi Struktur:**
   - `element.appendChild(newElement)`: Menambahkan elemen baru sebagai anak dari elemen yang sudah ada.
   - `element.removeChild(childElement)`: Menghapus elemen anak dari elemen yang ada.

4. **Memanipulasi Gaya:**
   - `element.style.property = 'value'`: Mengubah gaya elemen secara langsung.

## Event Handling dalam DOM

DOM juga memungkinkan penanganan peristiwa (event handling) seperti klik, hover, submit, dll. Menggunakan JavaScript, kita dapat menambahkan event listener ke elemen DOM untuk merespons interaksi pengguna:

```javascript
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button diklik!');
});
```

## Mengapa DOM Penting?

DOM sangat penting dalam pengembangan web modern karena memungkinkan halaman web menjadi interaktif dan dinamis. Dengan DOM, kita bisa merespons input pengguna, memperbarui konten tanpa memuat ulang halaman, dan membangun aplikasi web yang kaya fitur.
