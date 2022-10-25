const btn = document.querySelector('#iniciar')

btn.addEventListener('click', () => {
    bola.iniciar()
});

addEventListener('keydown', ({key}) => 
{
    switch (key) 
    {
        case 'w':
            teclado.cima = true;
            break;
        case 'd':
            teclado.direita = true;
            break;
        case 's':
            teclado.baixo = true;
            break;
        case 'a':
            teclado.esquerda = true;
            break;
    }
})
addEventListener('keyup', ({key}) => 
{
    switch (key) 
    {
        case 'w':
            teclado.cima = false;
            break;
        case 'd':
            teclado.direita = false;
            break;
        case 's':
            teclado.baixo = false;
            break;
        case 'a':
            teclado.esquerda = false;
            break;
    }
})