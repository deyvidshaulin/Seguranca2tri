// Função para gerar uma senha aleatória
function generateRandomPassword(length) {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}

// Função para calcular a entropia de uma senha
function calculateEntropy(password) {
    const charsetSize = 94; // Tamanho do conjunto de caracteres possíveis
    const passwordLength = password.length;

    // Fórmula da entropia: H(S) = log2(N^L)
    const entropy = Math.log2(Math.pow(charsetSize, passwordLength));
    return entropy.toFixed(2); // Retorna a entropia com duas casas decimais
}

// Atualiza a interface com a senha gerada e a entropia
function updateUI() {
    const passwordLength = parseInt(document.getElementById('passwordLength').value);
    const generatedPassword = generateRandomPassword(passwordLength);
    const entropy = calculateEntropy(generatedPassword);

    // Atualiza o texto na página
    document.querySelector('#generatedPassword span').textContent = generatedPassword;
    document.getElementById('entropyValue').textContent = `Entropia: ${entropy} bits`;
}

// Evento de clique no botão para gerar senha
document.getElementById('generateButton').addEventListener('click', updateUI);

// Chamada inicial para gerar uma senha quando a página é carregada
updateUI();
