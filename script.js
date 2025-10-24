// Lista de pessoas da daily
const people = [
    'Juliana Custodio',
    'Carlos Spoljarick',
    'David Martinez',
    'Bruno Borges',
    'Catharina Mesquita',
    'Eduardo Hamada'
];

// Função para obter pessoas ativas (marcadas nos checkboxes)
function getActivePeople() {
    const checkboxes = document.querySelectorAll('#peopleList input[type="checkbox"]:checked');
    return Array.from(checkboxes).map(checkbox => checkbox.dataset.person);
}

// Elementos do DOM
const sortButton = document.getElementById('sortButton');
const resetButton = document.getElementById('resetButton');
const resultSection = document.getElementById('resultSection');
const sortedOrder = document.getElementById('sortedOrder');

// Função para embaralhar array usando algoritmo Fisher-Yates
function shuffleArray(array) {
    const shuffled = [...array]; // Cria uma cópia do array
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para sortear a ordem
function sortPeople() {
    // Obtém apenas as pessoas ativas (marcadas)
    const activePeople = getActivePeople();

    // Verifica se há pelo menos uma pessoa ativa
    if (activePeople.length === 0) {
        alert('⚠️ Selecione pelo menos uma pessoa para participar do sorteio!');
        return;
    }

    // Embaralha a lista de pessoas ativas
    const shuffledPeople = shuffleArray(activePeople);

    // Limpa a lista anterior
    sortedOrder.innerHTML = '';

    // Adiciona cada pessoa na ordem sorteada
    shuffledPeople.forEach((person, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${person}`;
        li.classList.add('sorted-item');

        // Adiciona animação de entrada
        li.style.opacity = '0';
        li.style.transform = 'translateY(20px)';

        sortedOrder.appendChild(li);

        // Anima a entrada do item
        setTimeout(() => {
            li.style.transition = 'all 0.3s ease';
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';
        }, index * 100);
    });

    // Mostra a seção de resultados
    resultSection.style.display = 'block';
    resultSection.scrollIntoView({ behavior: 'smooth' });

    // Esconde o botão de sortear e mostra o de resetar
    sortButton.style.display = 'none';
    resetButton.style.display = 'inline-block';
}

// Função para resetar
function resetSort() {
    // Esconde a seção de resultados
    resultSection.style.display = 'none';

    // Limpa a lista ordenada
    sortedOrder.innerHTML = '';

    // Mostra o botão de sortear e esconde o de resetar
    sortButton.style.display = 'inline-block';
    resetButton.style.display = 'none';
}

// Função para atualizar contador de pessoas ativas
function updateActiveCount() {
    const activeCount = getActivePeople().length;
    const totalCount = people.length;

    // Atualiza o texto do botão de sortear
    if (activeCount === 0) {
        sortButton.textContent = '⚠️ Nenhuma pessoa selecionada';
        sortButton.disabled = true;
    } else if (activeCount === totalCount) {
        sortButton.textContent = '🎯 Sortear Ordem';
        sortButton.disabled = false;
    } else {
        sortButton.textContent = `🎯 Sortear Ordem (${activeCount}/${totalCount})`;
        sortButton.disabled = false;
    }
}

// Event listeners
sortButton.addEventListener('click', sortPeople);
resetButton.addEventListener('click', resetSort);

// Função para atualizar visual das pessoas inativas
function updatePersonVisual() {
    const checkboxes = document.querySelectorAll('#peopleList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        const personItem = checkbox.closest('.person-item');
        if (checkbox.checked) {
            personItem.classList.remove('inactive');
        } else {
            personItem.classList.add('inactive');
        }
    });
}

// Adiciona listeners para os checkboxes
document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('#peopleList input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateActiveCount();
            updatePersonVisual();
        });
    });

    // Inicializa o contador e visual
    updateActiveCount();
    updatePersonVisual();
});

// Adiciona efeito de hover nos botões
sortButton.addEventListener('mouseenter', () => {
    sortButton.style.transform = 'scale(1.05)';
});

sortButton.addEventListener('mouseleave', () => {
    sortButton.style.transform = 'scale(1)';
});

resetButton.addEventListener('mouseenter', () => {
    resetButton.style.transform = 'scale(1.05)';
});

resetButton.addEventListener('mouseleave', () => {
    resetButton.style.transform = 'scale(1)';
});
