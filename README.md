# NT208 - Selling Books Website Project

## Giới thiệu:
Đây là trang admin của web BookstoRee.

## Mô tả các trang:

### 1. Đăng ký/Đăng nhập
Đăng nhập tài khoản admin để có thể sử dụng.

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/af9b233a-ab50-4ff5-bcbb-d94ad5f55b38)

### 2. Trang chủ:
Trang chủ sẽ liệt kệ top 10 những quyển sách bán chạy nhất. Ngoài ra có thanh sidebar để điều hướng và navbar để đăng xuất tài khoản.

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/a865cdd2-b7a7-4f35-84b4-5c8c68e0a65b)

### 3. Trang quản lý sách:
Quản lý dữ liệu sách có các chức năng cơ bản như thêm, sửa, xóa.

![Screenshot 2024-06-02 133715](https://github.com/qub1tt/admin_bookstore/assets/91910146/70fcf0a6-cf58-44cc-bf4b-e67bfeb0e9c6)

![Screenshot 2024-06-02 133723](https://github.com/qub1tt/admin_bookstore/assets/91910146/91601f75-96ac-4066-a3ee-d1c2fcdffdd0)


### 4. Trang quản lý thể loại
Quản lý dữ liệu thể loại của sách có các chức năng cơ bản như thêm, sửa

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/75139355-95ed-44d4-aaa9-56e5de7ca59d)


### 5. Trang quản lý nhà xuất bản
Quản lý dữ liệu nhà xuất bản của sách có các chức năng cơ bản như thêm, sửa

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/143ac308-cb9b-477c-89e9-ed5bc9f2b7e6)
    
### 6. Trang quản lý tác giả
Quản lý dữ liệu tác giả của sách có các chức năng cơ bản như thêm, sửa

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/d206d443-30e9-4158-a3b6-4c2526303db1)


### 7. Trang quản lý người dùng
Quản lý các tài khoản của người dùng, có thể thêm, sửa, xóa và phân quyền cho các tài khoản.

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/9ccac2a1-865c-4d57-97fd-cd394da63e55)


### 8. Trang đơn hàng
Quản lý đơn hàng của các tài khoản đã đặt mua. Có thể cập nhật trạng thái đơn hàng.

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/7c66221d-906c-4b70-9780-d96af92aa21c)

### 9. Trang thống kê
Thống kê số đơn hàng, sản phẩm, người mua và tổng thu theo ngày, tháng, năm.

![image](https://github.com/qub1tt/admin_bookstore/assets/91910146/271ec3fd-5a78-4084-b1cf-a338a9addc73)



## Cài đặt môi trường và sử dụng:

### Các công nghệ sử dụng:

- ReactJS
- Axios
- Redux/Redux Toolkit
- Bootstrap

### Hướng dẫn cài đặt:
Khi muốn sử dụng trên local, vào file .env sửa giá trị biến REACT_APP_API_URL = "http://localhost:8080".

1. Cài đặt Nodejs phiên bản mới nhất tại https://nodejs.org/en/download/prebuilt-installer.
2. Mở terminal clone repository này.
> git clone https://github.com/qub1tt/admin_bookstore

> cd admin_bookstore
3. Thực hiện lệnh  `npm install --legacy-peer-deps` để cài đặt các module cần thiết.
4. Chạy lệnh `npm start` để khởi động web.
5. Sau khi đã khởi động Backend thì có thể sử dụng được web (Hướng dẫn cài đặt Backend ở repo BackEnd).

### Tài khoản để test:

Tài khoản admin:
  - username: clonenick169@gmail.com
  - password: 123456

