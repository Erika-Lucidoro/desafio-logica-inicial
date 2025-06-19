const nome = "Reginariuns";
const experiencia = 0;

function definiNivel(nome, experiencia) {

    let nivel = '';

    if (experiencia < 1000) {
        nivel = "Ferro";
    } 
    
    else if (experiencia < 2000) {
        nivel = "Bronze";
    } 
    
    else if (experiencia < 5000) {
        nivel = "Prata";
    } 

    else if (experiencia < 7000) {
        nivel = "Ouro";
    } 
    else if (experiencia < 8000) {
        nivel = "Platina Diamante";
    } 
    else if (experiencia < 9000) {
        nivel = "Ascendente";
    } 
    else if (experiencia < 10000) {
        nivel = "Imortal";
    } 
    else if (experiencia < 10001) {
        nivel = "Radiante";
    } 

    console.log(`O Heroi de nome ${nome} está no nivel de ${nivel}`);
}

definiNivel(nome, 10000);

