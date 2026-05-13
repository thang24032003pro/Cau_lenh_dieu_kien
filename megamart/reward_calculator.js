function calculateRewardPoints(customerTier, orderTotal) {
    let points = 0;

    if (customerTier !== "MEMBER" && customerTier !== "VIP") {
        return -1;
    }

    if (customerTier === "MEMBER") {
        points = orderTotal / 10000;
    } 
    
    if (customerTier === "VIP") {
        if (orderTotal >= 500000) {
            points = (orderTotal / 10000) * 2;
        } else {
            points = orderTotal / 10000;
        }
    }

    return Math.floor(points);
}