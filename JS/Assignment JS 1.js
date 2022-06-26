var giay= 0;
var phut=10;
var xy=setInterval(function () {

    console.log("dong ho hien thi:"+ phut +":"+giay);
    giay--;


    if(giay==-1){
        giay=giay+60;
        phut--;

    }
    if(giay==0 && phut==0){
        clearInterval(xy);
        alert("het gio")
    }

},1000);

