gSensor = {
    status:false,
    x:0,
    y:0,
    z:0,

    run: function(){
        if(window.DeviceMotionEvent != undefined){
         this.status=true;
            window.ondevicemotion = function(e) {
                this.x = e.accelerationIncludingGravity.x;
                this.y = e.accelerationIncludingGravity.y;
                this.z = e.accelerationIncludingGravity.z;

                /**
                 * X ve Y sabit yüzeyde iken 0 a yakın Z ise 9-9.5
                 * X negatif yönü cihazın sağa yatırılması atışısı sola yatırılması
                 * Y negatif yönü cihazın üst tarafını aşağı doğru yatırılması
                 * Z kısacası cihazın diklik konumunu gösteriyor
                 *
                 * xyz objelerini aktararak telofunun açı ve duruşunun değerlerini öğrenebiliriz.
                 */


                //durum yakalayıcıları
                if(this.z<0){
                    //cihazın yukarıda yada dik tutluyor
                   alert('Holly Shit..');
                }
            }
        }
    }

}

