function str2Num(str){
    let res = 0;
    for(let i = 0; i < str.length; i++  ){
        if(str[i] >= '0' && str[i] <='9')
            res = res*10 + (str[i] - '0');
    };
    return res;
}

//alert(str2Num("3.12"));

document.getElementById("btnCalculate").addEventListener("click",function(){

    let isBillion = document.getElementById("isBillion").checked;
    let profitIndex = 1000;
    if(isBillion)
        profitIndex = 1000000000;

    let profit1 = str2Num(document.getElementById("profit1").value)*profitIndex;
    let profit2 = str2Num(document.getElementById("profit2").value)*profitIndex;
    let profit3 = str2Num(document.getElementById("profit3").value)*profitIndex;
    let profit4 = str2Num(document.getElementById("profit4").value)*profitIndex;

    console.log(profit1);
    console.log(profit2);
    console.log(profit3);
    console.log(profit4);

    let price = str2Num(document.getElementById("price").value);

    let number = str2Num(document.getElementById("number").value);

    let pe = (price * number) / (profit1 + profit2 + profit3 + profit4);

    console.log(pe);
   
    document.getElementById("pe").innerText = pe;
}, false);