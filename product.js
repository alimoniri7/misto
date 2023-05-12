const product = {
    Gender: 'men', // women , none
    category: 'Tshirt', // watch, shoes
    brand: 'Polo' , // Jeans, Coton,
    seller: 'منیران',
    accessory: false,
    details: {
        title: 'لباس مشکی مردانه',
        description: ''
    },
    store: [
        {
            status: 'available', // unavailable, comming soon
            count: 12,
            color: 'red',
            size: 'xl',
            price: {
                value: '400000',
                currency: 'IR',
                discount: { // false
                    amount: '20%',
                    afterDiscount: '320000'
                }
            }
        }
    ],


     
}