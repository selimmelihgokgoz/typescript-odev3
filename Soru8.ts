function sum(...numbers: number[]): number {
      /* ??? */
  return numbers.reduce((toplam, sayi) => toplam + sayi);
}
console.log(sum(1, 2, 3));          // çıktı 6
console.log(sum(10, 20, 30, 40));   // çıktı 100
