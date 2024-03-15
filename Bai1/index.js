// **Tính lương nhân viên
/* *Input: 
    - Số ngày làm 

    *Process:
    - Tiền Lương 1 ngày: 100000
    -> Tổng lương = Số ngày làm * Tiền Lương 1 ngày

    *Output:
    - Tổng lương
*/

function tongLuong() {
    var ngayLam = document.getElementById('ngayLam');
    var luong1Ngay = 100000;
    var tongLuong = +ngayLam.value * luong1Ngay;
    console.log('tongLuong: ', tongLuong);

    document.getElementById('result').innerHTML=`<p>Tổng Lương: ${tongLuong}</p>`
    ngayLam.value = '';
}