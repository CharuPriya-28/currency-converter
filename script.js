async function convert(){

    let amount=document.getElementById("amount").value;

    let from=document.getElementById("from").value;

    let to=document.getElementById("to").value;

    if(amount==="" || amount<=0){

        alert("Please enter a valid amount.");

        return;

    }

    const url=`https://open.er-api.com/v6/latest/${from}`;

    const response=await fetch(url);

    const data=await response.json();

    const rate=data.rates[to];

    const result=(amount*rate).toFixed(2);

    document.getElementById("result").innerHTML=
    `${amount} ${from} = ${result} ${to}`;

}