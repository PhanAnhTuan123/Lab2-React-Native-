const calculateTip = (bill) => {
    const tip = (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
    return tip;
};

const printBillDetails = (bill) => {
    const tip = calculateTip(bill);
    const totalValue = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toLocaleString()}, and the total value ${totalValue.toLocaleString()}`);
};

const bills = [275, 40, 430];

bills.forEach(bill => printBillDetails(bill));

