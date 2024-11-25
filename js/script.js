// let minValue=0;
let count=1;
let btnVisible;
function incrementNo() {
    if (count==1) {
        // currentVal+=1;
        document.getElementById("btn-dec").disabled=false;
    }
    count+=1;
    document.getElementById("display").textContent=count;
}
function decrementNo() {
    count-=1;
    document.getElementById("display").textContent=count;
    if(count==1){
        document.getElementById("btn-dec").disabled=true;
    }
}