

export  default function calculateTotal(cart: any){
    let total = cart.map((item: any)=> item.price * item.amount).reduce((a: number, b: number) => a+b)

    return total
}

export  function calculateGrandTotal(cart: any) {
    let total = cart.map((item: any)=> item.price * item.amount).reduce((a: number, b: number) => a+b)*1.0625+50


    return total
}

export  function calculateTax(cart: any) {
    let total = cart.map((item: any)=> item.price * item.amount).reduce((a: number, b: number) => a+b)*.0625


    return total
}
