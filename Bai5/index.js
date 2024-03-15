// **Tính tổng các chữ số
/* *Input: 
    - num

    *Process:
    - digit = +num % 10; //lấy ra từng con số
    - sum += digit;  //tính tổng của các con số đã được lấy ra
    
    *Output:
    - sum //tổng các chữ số

*/

function calc() {
    var num = document.getElementById('num') //123
    var digit = 0;
    var sum = 0;

    while (+num.value != 0) {
        digit = +num.value % 10;  // 3 2 1
        sum += digit;  // 3 5 6
        num.value = Math.floor( +num.value / 10); // 12 1 0
        // +num.value = parseInt(num / 10); 
    }
    console.log('Tổng các chữ số: ', sum)

    document.getElementById('result1').innerHTML = `<p>Tổng các chữ số: ${sum}</p>`
    num.value = ''; //reset Input
}