var cuotasFijas = 0, intereses =0; prestamo=0;

prestamo = parseInt(prompt("favor Ingresar el monto requerido: "));

if( prestamo > 75000000){
    cuotasFijas = (prestamo/18) * 1.01;
    intereses =(prestamo/18) * 0.01;

}else{
    cuotasFijas = (prestamo/18)* 1.005;
    intereses = (prestamo/18)* 0.005; 
}

alert("\nEl prestamo fue de: " + prestamo);
alert("\nLas cuotas fijas mensuales a pagar en 18 Meses sera de: " + cuotasFijas);
alert("\nEl pago total por intereses sera de: " + intereses* 120);

