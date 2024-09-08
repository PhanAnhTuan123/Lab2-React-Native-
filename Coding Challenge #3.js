
const calculateTip = (bill) => (bill >= 50 && bill <= 300) ? (bill * 0.15) : (bill * 0.20);
const printBillDetails = (bill) => {
    const tip = calculateTip(bill);
    const totalValue = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
};

const bills = [275, 40, 430];
bills.forEach(bill => printBillDetails(bill));
