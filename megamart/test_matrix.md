ID	Kịch bản kiểm thử	Input (Tier, Total)	Kết quả kỳ vọng	Ghi chú
TC01	Member bình thường	"MEMBER", 100000	10	Kiểm tra hạng Member
TC02	VIP sát biên dưới	"VIP", 499999	49	Dưới 500k chưa được x2
TC03	VIP tại biên 500k	"VIP", 500000	100	Điểm gây lỗi ở code cũ
TC04	VIP trên biên	"VIP", 500010	100	Trên 500k đã được x2
TC05	Hạng không hợp lệ	"GUEST", 100000	-1	Kiểm tra tính bảo mật
TC06	Giá trị biên cực nhỏ	"MEMBER", 9999	0	Chưa đủ 10k để có 1 điểm