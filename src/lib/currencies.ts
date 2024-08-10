const IDRupiah = new Intl.NumberFormat("id-ID");

export function toIDRString(rawPrice: string | number) {
  let priceNumber = 0;
  if (typeof rawPrice == "string") {
    const priceInt = parseInt(rawPrice);
    priceNumber = priceInt;
  } else {
    priceNumber = rawPrice;
  }
  return IDRupiah.format(priceNumber);
}
