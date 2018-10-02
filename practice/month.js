for (i = 0; i < 3; i++) {
    let monthNum = +prompt('enter month num');

    switch (monthNum) {
        case 1:
            alert('month name: january, season:  winter')
            break;
        case 2:
            alert('month name: february, season:  winter')
            break;
        case 3:
            alert('month name: march, season:  winter')
            break;
        case 4:
            alert('month name: april, season:  summer')
            break;
        case 5:
            alert('month name: may, season:  summer')
            break;
        case 6:
            alert('month name: june, season:  summer')
            break;
        case 7:
            alert('month name: july, season:  monsoon or rainy')
            break;
        case 8:
            alert('month name: august, season:  monsoon or rainy')
            break;
        case 9:
            alert('month name: september, season:  monsoon or rainy')
            break;
        case 10:
            alert('month name: october, season:  post-monsoon')
            break;
        case 11:
            alert('month name: november, season:  post-monsoon')
            break;
        case 12:
            alert('month name: December, season:  winter')
            break;
        default:
            alert('choose correct option')
            break;
    }
}