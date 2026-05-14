function calculateTransactionFee(transactionType, amount) {
    let fee = 0;

    switch (transactionType) {
        case "DEPOSIT":
            fee = 0;
            break;

        case "WITHDRAW":
            if (amount <= 1000000) {
                fee = 1100;
            } else if (amount <= 5000000) {
                fee = 2200;
            } else {
                fee = 3300;
            }
            break;

        case "TRANSFER":
            if (amount <= 1000000) {
                fee = 2000;
            } else if (amount <= 5000000) {
                fee = 5000;
            } else {
                fee = 7000;
            }
            break;

        default:
            return "Lỗi: Loại giao dịch không được hỗ trợ!";
    }

    return fee;
}

console.log("1. Phí nạp tiền 10tr:", calculateTransactionFee("DEPOSIT", 10000000));
console.log("2. Phí rút 1tr (biên):", calculateTransactionFee("WITHDRAW", 1000000));
console.log("3. Phí rút 2tr:", calculateTransactionFee("WITHDRAW", 2000000));
console.log("4. Phí chuyển 6tr:", calculateTransactionFee("TRANSFER", 6000000));
console.log("5. Thử loại giao dịch lạ:", calculateTransactionFee("PAYMENT", 500000));