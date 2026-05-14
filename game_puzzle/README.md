Puzzle - Simple Image Puzzle Game

Mô tả

- Game gồm 5 ô ảnh (các phần của một bức tranh).
- Khi click vào một ô, ảnh sẽ đổi sang một phần khác (random giữa một số hình khác nhau).
- Nếu 5 ô trở về cùng một ảnh (ghép thành bức tranh hoàn chỉnh), toàn bộ các ô sẽ có hiệu ứng viền/ánh sáng đỏ báo thắng.

Yêu cầu nộp bài

1. Đưa mã nguồn lên GitHub: tạo repository mới (ví dụ `puzzle-game`) và push toàn bộ thư mục `game_puzzle` vào repository đó.

Ví dụ lệnh (chạy trong thư mục gốc của dự án):

```bash
git init
git add .
git commit -m "Initial puzzle game"
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

2. Dán link repository GitHub vào phần nộp bài trên CodeGymX.

Ghi chú kỹ thuật

- File chính: `puzzle.html`.
- Ảnh được tạo bằng SVG data-URI (không cần file ảnh bên ngoài) để bạn dễ chạy trực tiếp trong trình duyệt.
- Nếu muốn thay bằng ảnh thực tế, đặt ảnh vào `game_puzzle/img/` với tên theo mẫu `<name>_part<part>x1.jpg` (ví dụ `funny-cat1_part1x1.jpg`).

Nếu bạn muốn, tôi có thể giúp:
- Tạo một repository trên GitHub (bạn cần cấp token hoặc tự làm theo hướng dẫn),
- Hoặc tôi có thể đổi sang dùng ảnh thực tế và thêm file ảnh vào thư mục `img` nếu bạn cung cấp chúng.
