
export default function convertCurrency(price: number){

let formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
  return formatter.format(price)

}