function verifyBooking(user, flight) {
    if (!user.isLoggedIn) {
        return "Từ chối: Vui lòng đăng nhập để tiếp tục";
    }

    if (!user.hasValidPassport) {
        return "Từ chối: Hộ chiếu không hợp lệ hoặc hết hạn";
    }

    if (user.age < 18) {
        return "Từ chối: Khách hàng chưa đủ 18 tuổi";
    }

    if (flight.availableSeats <= 0) {
        return "Từ chối: Chuyến bay đã hết chỗ";
    }

    if (user.accountBalance < flight.price) {
        return "Từ chối: Số dư không đủ";
    }

    return "Thành công: Đặt vé hợp lệ";
}

const testUser = { isLoggedIn: true, hasValidPassport: true, age: 20, accountBalance: 5000 };
const testFlight = { availableSeats: 5, price: 1000 };
console.log(verifyBooking(testUser, testFlight));