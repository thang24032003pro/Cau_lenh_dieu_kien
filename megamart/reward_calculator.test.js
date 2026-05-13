// Hàm hỗ trợ kiểm tra tự động
function assertEquals(expected, actual, testName) {
    if (expected === actual) {
        console.log(`%c[PASSED] ${testName}`, "color: green");
    } else {
        console.error(`[FAILED] ${testName}: Kỳ vọng ${expected} nhưng thực tế nhận ${actual}`);
    }
}

function runTests() {
    console.log("--- BẮT ĐẦU KIỂM THỬ HỆ THỐNG TÍCH ĐIỂM ---");
    
    assertEquals(10, calculateRewardPoints("MEMBER", 100000), "TC01: Member 100k");
    assertEquals(49, calculateRewardPoints("VIP", 499999), "TC02: VIP 499.999đ");
    
    assertEquals(100, calculateRewardPoints("VIP", 500000), "TC03: VIP đúng 500k (Mốc x2)");
    
    assertEquals(100, calculateRewardPoints("VIP", 500010), "TC04: VIP trên 500k");
    assertEquals(-1, calculateRewardPoints("GUEST", 100000), "TC05: Hạng không hợp lệ");
    assertEquals(0, calculateRewardPoints("MEMBER", 9999), "TC06: Hóa đơn dưới 10k");
}

runTests();