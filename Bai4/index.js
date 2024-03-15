// **Tính diện tích, chu vi hcn
/* *Input: 
    - cd: chiều dài
    - cr: chiều rộng

    *Process:
    - chuVi = (cd+cr)*2 
    - dienTich = cd*cr
    
    *Output:
    - chuVi
    - dienTich
*/

function calc() {
    var cd = document.getElementById('cd');
    var cr = document.getElementById('cr');

    var chuVi = (+cd.value + +cr.value) * 2;
    console.log('chuVi: ', chuVi);

    var dienTich = +cd.value * +cr.value;
    console.log('dienTich: ', dienTich);


    document.getElementById('result1').innerHTML=`<p>Chu Vi: ${chuVi}</p>`
    document.getElementById('result2').innerHTML=`<p>Diện tích: ${dienTich}</p>`
    
    cd.value = cr.value = '';
}