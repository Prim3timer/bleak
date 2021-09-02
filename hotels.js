{
    let total;
    let a = [];
    let b;
    let months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov',
        'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
    let entries = [
        all([167.7, 123.54, 76.22, 144.3, 126.88, 142]),
        all([66.67, 139.84, 152.24, 151.84, 264.80]),
        all([177.40, 72.15, 159.74, 99.89]),
        all([72.12, 199.78, 186.80, 106.02, 205.7])
    ]

    function all(payments) {
        for (let key of payments) {
            if (key >= 123.54) {
                payments.length++;
            }
            if (key > 220) {
                payments.length += 2
            }
        }
        let nights = payments.length
        total = payments.reduce((accumulator, currentValue) => accumulator + currentValue);
        total = parseFloat((total).toFixed(2))
        avg = parseFloat((total / payments.length).toFixed(2))
        return { total, avg, nights };
    }
    function stack(product) {
        for (let i = 0; i < product.length; i++) {
            for (let j = i; j < product.length; j += months.length) {
                total = product[i].total
                avg = product[i].avg
                nights = product[i].nights
                reservations = { month: months[j], total, avg, nights }
            }
            a.push(reservations)


        }

        return a;
    }
    console.log(stack(entries))
}






