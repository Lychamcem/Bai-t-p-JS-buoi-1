//  Bài 1:

// Input: tiền lương 1 ngày, số ngày làm việc
// Xử lý:
// tạo biến: lương 1 ngày, số ngày làm việc và gán giá trị
// dùng phép nhân: tạo biến gán giá trị lấy tiền lương 1 ngày nhân số ngày làm việc
// console để trả kết quả
// Output: tiền lương nhân viên

let luong1Ngay = 100000;
console.log("lương 1 ngày:", luong1Ngay);
let soNgaylam = 30;
console.log("số ngày làm việc:", soNgaylam);
console.log("lương làm việc trong 30 ngày là:", luong1Ngay * soNgaylam);

// Bài 2:

// Input: 5 số thực
// Xử lý:
// tạo biến và gán giá trị lần lượt 5 số thực
// tạo biến và tính tổng 5 số bằng phép cộng
// chia tổng 5 số cho 5
// console để trả kết quả
// Output: trung bình cộng của 5 số thực rồi chia cho 5

let a = 1;
console.log("số thực a:", a);
let b = 2;
console.log("số thực b:", b);
let c = 3;
console.log("số thực c:", c);
let d = 4;
console.log("số thực d:", d);
let e = 5;
console.log("số thực e:", e);
let sum = a + b + c + d + e;
console.log("tổng 5 số thực:", sum);
console.log("trung bình cộng của 5 số:", sum/5);

//Bài 3:

// Input: giá tiền USD so với tiền VND, số tiền USD
// Xử lý:
// tạo biến và gán giá trị tỉ giá usd và vnd
// tạo biến và gán giá trị số tiền usd muốn quy đổi
// tạo biến và nhân số tiền usd với tỉ giá
// console để trả giá trị
// Output: số tiền VND quy đổi từ số tiền USD đã nhập

let vnd = 23700;
console.log("Tỷ giá USD đổi sang VNĐ: 1 USD =", 23500);
let usd = 3;
console.log("Số tiền USD cần quy đổi:", usd);
let usd3 = vnd * usd;
console.log("3 USD đổi sang VNĐ:", usd3);

// Bài 4:

// Input: chiều dài, chiều rộng hình chữ nhật
// Xử lý:
// tạo biến và gán giá trị lần lượt cho chiều dài và chiều rộng
// tạo gán biến cho phép tính diện tích, lấy chiều dài nhân chiều rộng
// tạo gán biến cho phép tính chu vi, lấy tổng chiều dài và chiều rộng nhân 2
// console để trả ra kết quả cho chu vi và diện tích
// Output: chu vi, diện tích hình chữ nhật

let chieuDai = 3;
console.log("chiều dài:", chieuDai);
let chieuRong = 9;
console.log("chiều rộng:", chieuRong);
let dienTich = chieuDai * chieuRong;
console.log("diện tích hình chữ nhật là:", dienTich);
let chuVi = (chieuDai + chieuRong) * 2;
console.log("chu vi hình chữ nhật là:", chuVi);

// Bài 5:

// Input: 1 số có 2 ký số
// Xử lý:

//Output: tổng 2 ký số của số đó

let soDuocNhap = 36;
console.log("Số được nhập:", soDuocNhap);
let soHangChuc = Math.floor(soDuocNhap / 10);
console.log("chữ số hàng chục là:",soHangChuc);
let soHangDonVi = Math.floor(soDuocNhap % 10);
console.log("chữ số hàng đơn vị là:",soHangDonVi);
console.log("Tổng 2 ký số là:",soHangDonVi + soHangChuc);




