let btn = document.getElementById('btn');
let output = document.getElementById('output');

let panes = [
    "Vainilla", 
    "Chocolate", 
    "Red Velvet", 
    "Fresa"];

let tresLeches = [
    "Sí", 
    "No"];

let rellenos = [
    " Cajeta", 
    " Nutella", 
    " Crema Philadelphia", 
    " Mermelada", 
    " Bavaria",
    " "];

let betunes = [
    " Clasico Demare (Azucar glasss)", 
    " Cremoso (Base de queso crema)", 
    " Fresa (Azucar glass sabor fresa)",
    " "];

let toppings = [
    " Oreo", 
    " Nuez", 
    " Mazapan", 
    " Almendras", 
    " Cerezas", 
    " Coco", 
    " Fresas", 
    " Duraznos en almibar", 
    " Chispas de chocolate", 
    " Chispas de chocolate blanco", 
    " Chispas de colores",
    " ", " "];

let extras = [
    " Lechera", 
    " Dulce de leche", 
    " Chocolate Hershey's", 
    " Jarabe de fresa Hershey's",
    " ", " "];

btn.addEventListener('click', function() {
    let pancita = `Pan: ${_.sample(panes)}`; 
    let tresL = `Tres Leches: ${_.sample(tresLeches)}`; 
    let relleno = `Rellenos: ${_.sample(rellenos, 2)}`; 
    let betun = `Betunes: ${_.sample(betunes, 2)}`; 
    let topping = `Toppings: ${_.sample(toppings, 3)}`; 
    let extra = `Extras: ${_.sample(extras, 2)}`;
    output.innerHTML = pancita;
    output2.innerHTML = tresL;
    output3.innerHTML = relleno;
    output4.innerHTML = betun;
    output5.innerHTML = topping;
    output6.innerHTML = extra;
})


/*
const armaMiPancita = () => {
    let pancita = (`
                    Pan: ${_.sample(panes)}; 
                    Tres Leches: ${_.sample(tresLeches)}; 
                    Rellenos: ${_.sample(rellenos, 2)}; 
                    Betunes: ${_.sample(betunes, 2)}; 
                    Toppings: ${_.sample(toppings, 3)}, 
                    Extras: ${_.sample(extras, 2)}`);
    
    console.log(pancita);
    }
    armaMiPancita();
*/