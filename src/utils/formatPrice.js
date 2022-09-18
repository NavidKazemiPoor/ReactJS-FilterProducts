export const formatPrice = (number) => {
    // const newNumber = Intl.NumberFormat('fa-IR',{
    //     style: 'currency',
    //     currency:'IRR',
    // }).format(number);
    return Number((number).toFixed(1)).toLocaleString()

}