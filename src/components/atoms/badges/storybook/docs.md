# Badges Component

Badges komponen digunakan untuk membuat badges pada notifikasi atau hanya informasi angka pada sebuah component.

## Cara Penggunaan
berikut adalah cara penggunaan badges component

```jsx
// Import Component
import Badges from 'badges.component.js'

// Implementasi di method render
return (
    <Badges>95</Badges>
)
```

## Props
berikut adalah dokumentasi props component

| Props | PropTypes | Default | Deskripsi |
|-------|-----------|---------|-----------|
|children|String / Number|`null`|Anda diwajibkan mengisi angka untuk informasi pada badges component.|
