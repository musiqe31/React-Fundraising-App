export const Donate = amount =>{
    return({
        type:"DONATE",
        payload:Number(amount)
    })
}


