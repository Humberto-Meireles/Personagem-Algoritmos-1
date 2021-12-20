import prompt from "prompt-sync";
import { Paladino } from "./Paladino";
import { Barbaro } from "./Barbaro";
import { Amazona } from "./Amazona";
import { Personagem } from "./Personagem";

let teclado = prompt();

let amazona: Personagem = new Amazona("Amazøna ");
let barbaro: Personagem = new Barbaro("Barbaro ");
let paladino: Personagem = new Paladino("Paladino");

let selectedCharacter: Personagem | null = null;         // null (é um valor, sempre será convertido para um falso) é como se fosse um vazio... "undefined" é quando não está definido
let choosedCharacter: number = 0;
let characterAction: number = 0;

while (choosedCharacter != 9 && characterAction != 9) {
    console.log("+===== Opções de Personagem =====+");
    console.log("|1. Amazøna                      |");
    console.log("|2. Barbaro                      |");
    console.log("|3. Paladino                     |");
    console.log("|9. Sair                         |");
    console.log('+================================+');

    let choosedCharacter: number = +teclado("---> Escolha um personagem: ");
    console.log()

    switch (choosedCharacter) {
        case 1:
            selectedCharacter = amazona;
            break;
        case 2:
            selectedCharacter = barbaro;
            break;            
        case 3:
            selectedCharacter = paladino;
            break; 
        default:
            break;
    }

    if (choosedCharacter === 9) {
        break;
    }

    while (characterAction != 9 && selectedCharacter) {
        if (selectedCharacter.isDead()) {
            console.log("--- ✝ O personagem morreu! ✝ ----");
            console.log()

            selectedCharacter = null;

            break;
        }

        console.log(`+===== Personagem: ${selectedCharacter.nome} =====+`);
        console.log('|1. Treinar ataque               |');
        console.log('|2. Treinar defesa               |');
        console.log('|3. Treinar habilidade           |');
        console.log('|4. Descansar                    |');                                // Métodos com parâmetro: em vez do descansar ter uma vlr fixo, podemos passar qtos dias o personagem irá descansar
        console.log('|5. Entrar em batalha            |');
        console.log('|6. Imprimir atributos           |');
        console.log('|7. Escolher outro personagem    |');
        console.log('|9. Sair                         |');
        console.log('+================================+');

        characterAction = +teclado("---> Escolha uma ação: ");

        switch (characterAction) {
            case 1:
                selectedCharacter.treinarAtaque();
                break;
            case 2:
                selectedCharacter.treinarDefesa();
                break;
            case 3:
                selectedCharacter.treinarHabilidade();
                break;
            case 4:
                let horas: number = +teclado('Digite o número de horas: ')                // (+) retorna um string, então faço retornar um inteiro
                selectedCharacter.descansar(horas);                                              //será enviado um "número", "parâmetro", para o descansar
                break;
            case 5:
                let dano: number = Math.round(selectedCharacter.batalhar());
                console.log(`--- ⚡ Esta batalha custou ${dano} de energia. ⚡ ---`);
            case 6:
                console.log(selectedCharacter.status());
                teclado('');
                break;
            case 7:
                selectedCharacter = null;
            default:
                break;
        }
    }
}

