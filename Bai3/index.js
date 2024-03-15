// **Quy đổi tiền
/* *Input: 
    - n1: số lượng tiền muốn quy đổi

    *Process:
    - 1USD = 23500VND 
    -> tongTien = n1 * 23500
    
    *Output:
    - tongTien
*/

function quyDoi() {
    var n1 = document.getElementById('n1');
    var tongTien = +n1.value * 23500;
    console.log('tongTien: ', tongTien);

    document.getElementById('result').innerHTML=`<p>Tổng Tiền: ${tongTien}VND</p>`
    n1.value = '';
}