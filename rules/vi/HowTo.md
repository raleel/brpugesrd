# Điều kiện tiên quyết

1. Hiểu biết cơ bản về [ngôn ngữ markdown](https://www.markdownguide.org/basic-syntax/).

2. Bạn sẽ cần tạo một tài khoản [github](https://github.com/) miễn phí nếu chưa có. Khuyến khích bạn sử dụng tên của hệ thống RPG của mình vì tên này sẽ trở thành một phần của URL mà mọi người sử dụng để truy cập SRD của bạn.

3. Bạn có thể thực hiện toàn bộ quy trình này thông qua trình duyệt mà không cần biết về git. Tuy nhiên, việc tìm hiểu github desktop sẽ cho phép bạn kiểm tra mọi thay đổi cục bộ trước khi triển khai trực tiếp cho mọi người cùng xem.

> Nếu bạn đã đăng ký tên miền, bạn có thể sử dụng tên miền này với quy trình hiện tại để tạo một SRD giống như tôi đã làm tại https://srd.7thextinctionrpg.com

# Quy trình

## Tạo kho lưu trữ (Repository) trên Github

1. Đăng nhập vào Github

2. Truy cập vào mẫu công khai (public template) https://github.com/7thExtinctionrpg/RPG_SRD_Template

3. Nhấp vào "Use this template" (Sử dụng mẫu này)

![Step3](/_media/Step3.png)

4. Chọn "Create a new repository" (Tạo kho lưu trữ mới)

5. Nhập tên kho lưu trữ

![Step5](/_media/Step5.png)

6. Chọn 'Private' (Riêng tư)

7. Chọn 'Create repository' (Tạo kho lưu trữ)

Sẽ mất từ 5-30 giây để sao chép mẫu, sau đó bạn sẽ có bản sao của riêng mình.

8. Đảm bảo rằng bạn có tệp ".nojekyll", đây là một tệp trống cần thiết khi lưu trữ trang web trên Github, nếu không SRD sẽ không hiển thị đúng cách. *(Thông báo cho GitHub Pages không chạy các tệp đã xuất bản thông qua Jekyll).*


## Thêm nội dung của bạn

### Tệp *.md

Các tệp .md là tệp markdown, Markdown là một ngôn ngữ đánh dấu nhẹ mà bạn có thể sử dụng để thêm các phần tử định dạng vào tài liệu văn bản thuần túy. Tùy thuộc vào quy mô nội dung, bạn có thể đặt tất cả thông tin trò chơi của mình vào một tệp *.md duy nhất hoặc giống như tôi tại [7thextinctionrpg.com](https://srd.7thextinctionrpg.com), tạo các tệp riêng biệt cho mỗi chương. Tệp "sample.md" cung cấp một số ví dụ về định dạng.

Ngôn ngữ Markdown rất dễ học, hãy sử dụng liên kết được cung cấp tại mục 2 trong phần Điều kiện tiên quyết ở trên để xem danh sách đầy đủ các cú pháp.

### _Sidebar.md

Đây là menu, khung điều hướng ở phía bên trái của trang web. Sau khi bạn đã thêm tệp markdown vào kho lưu trữ của mình, bạn cần thêm tệp đó vào đây để nội dung của nó được bao gồm. Hãy làm theo định dạng hiện có.


## Bật Github Pages để biến Kho lưu trữ thành Trang web

1. Trong kho lưu trữ của bạn, nhấp vào 'Settings' (Cài đặt)

![Website-Step1](/_media/Website-Step1.png)

2. Chọn 'Pages' ở menu bên trái

![Website-Step2](/_media/Website-Step2.png)

3. Nếu bạn chưa đặt kho lưu trữ ở chế độ 'public' (công khai), bạn có hai lựa chọn:
    a. Đặt kho lưu trữ ở chế độ công khai, điều này sẽ cho phép bạn sử dụng Github pages để lưu trữ trang web SRD của mình miễn phí.
    b. Nâng cấp tài khoản Github của bạn (tại thời điểm viết bài này, chi phí là 4 đô la một tháng hoặc 48 đô la phí hàng năm).

4. Trong phần 'Branch', chọn 'main' và nhấp vào lưu.

5. Chờ 10-20 giây rồi làm mới trang.

6. Bây giờ bạn sẽ thấy URL của mình, ví dụ như https://coweater.github.io/mysrd/

![Website-Step6](/_media/Website-Step6.png)


## Thay đổi phông chữ

1. Chỉnh sửa tệp /_assets/style.css

2. Trong phần 'body section', bạn sẽ tìm thấy siteFont & headingFont

3. Thay đổi các phần này thành phông chữ bạn muốn sử dụng


## Sử dụng plugin Fontawesome và/hoặc Material Icons để hiển thị các biểu tượng miễn phí trong SRD của bạn

### Fontawesome

Sử dụng Fontawesome để nhận các biểu tượng miễn phí và biểu tượng hoạt hình. Người dùng đăng ký có thể sử dụng Pro Icons.

1. Tìm biểu tượng trên [Fontawesome](https://fontawesome.com/icons)
2. Chọn biểu tượng đó
3. Trong cửa sổ bật lên, dưới tab HTML, sao chép mọi thứ nằm giữa " "

```EXAMPLE
<i class="fa-solid fa-dice-d20"></i>
```

4. Đặt văn bản đã sao chép vào giữa `:` không có khoảng cách

```EXAMPLE
fa-solid fa-dice-d20
```

### Material Icons

Sử dụng Material Icons để có thêm nhiều biểu tượng miễn phí

1. Tìm biểu tượng trên [Material Icons](https://fonts.google.com/icons)
2. Sao chép và chèn liên kết web span trực tiếp vào các tệp markdown của bạn

```markup
<span class="material-icons">face</span>
```