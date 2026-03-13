//recebe uma matriz e imprime a matriz original e a transposta
function transporMatriz(A) {

    console.log("Matriz original:");
    console.log(A);

    let transposta = [];

    for (let i = 0; i < A[0].length; i++) {
        transposta[i] = [];
        for (let j = 0; j < A.length; j++) {
            transposta[i][j] = A[j][i];
        }
    }

    console.log("Matriz transposta:");
    console.log(transposta);
}

//exemplo
let matriz = [
    [1, 2, 3],
    [4, 5, 6]
];

//função
transporMatriz(matriz);
