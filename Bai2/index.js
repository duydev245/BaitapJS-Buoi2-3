// **Tính giá trị trung bình
/* *Input: 
    - n1
    - n2
    - n3
    - n4
    - n5

    *Process:
    - tong5so = n1 + n2 + n3 + n4 + n5
    -> average = tong5so/5

    *Output:
    - average
*/

function average() {
    var n1 = document.getElementById('n1');
    var n2 = document.getElementById('n2');
    var n3 = document.getElementById('n3');
    var n4 = document.getElementById('n4');
    var n5 = document.getElementById('n5');

    var tong5so = +n1.value + +n2.value + +n3.value + +n4.value + +n5.value;
    var average = tong5so / 5;
    console.log('average: ', average);

    document.getElementById('result').innerHTML=`<p>Giá trị trung bình: ${average}</p>`
    n1.value = n2.value = n3.value = n4.value = n5.value = '';
}