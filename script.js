// Lista de pessoas da daily
const people = [
    'Juliana Custodio',
    'Carlos Spoljarick',
    'David Martinez',
    'Bruno Borges',
    'Catharina Mesquita',
    'Eduardo Hamada',
    'Danilo Hoffmeister'
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

        // Destaca o primeiro lugar
        if (index === 0) {
            li.classList.add('first-place');
        }

        // Adiciona animação de entrada
        li.style.opacity = '0';
        li.style.transform = 'translateY(20px)';

        sortedOrder.appendChild(li);

        // Anima a entrada do item
        setTimeout(() => {
            li.style.transition = 'all 0.3s ease';
            li.style.opacity = '1';
            li.style.transform = 'translateY(0)';

            // Dispara confetes quando o primeiro lugar aparece
            if (index === 0) {
                createConfetti();
            }
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

// Função para criar animação de confetes
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe', '#00b894', '#00cec9'];
    const confettiCount = 150;
    const duration = 3000; // 3 segundos

    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');

            // Posição inicial aleatória no topo da tela
            const startX = Math.random() * window.innerWidth;
            const startY = -10;

            // Cor aleatória
            const color = colors[Math.floor(Math.random() * colors.length)];

            // Tamanho aleatório
            const size = Math.random() * 10 + 5;

            // Velocidade e direção aleatórias
            const velocityX = (Math.random() - 0.5) * 4;
            const velocityY = Math.random() * 3 + 2;
            const rotation = Math.random() * 360;
            const rotationSpeed = (Math.random() - 0.5) * 10;

            // Aplica estilos
            confetti.style.position = 'fixed';
            confetti.style.left = startX + 'px';
            confetti.style.top = startY + 'px';
            confetti.style.width = size + 'px';
            confetti.style.height = size + 'px';
            confetti.style.backgroundColor = color;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.pointerEvents = 'none';
            confetti.style.zIndex = '9999';
            confetti.style.opacity = '0.9';
            confetti.style.transform = `rotate(${rotation}deg)`;
            confetti.style.willChange = 'transform, opacity';

            document.body.appendChild(confetti);

            // Anima o confete caindo
            const startTime = performance.now();
            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                if (elapsed < duration) {
                    const progress = elapsed / duration;
                    // Física: movimento horizontal constante, vertical com aceleração
                    const currentX = startX + velocityX * elapsed / 16; // 16ms ≈ 1 frame a 60fps
                    const currentY = startY + velocityY * elapsed / 16 + 0.5 * 0.5 * (elapsed / 16) * (elapsed / 16);
                    const currentRotation = rotation + rotationSpeed * elapsed / 10;

                    confetti.style.left = currentX + 'px';
                    confetti.style.top = currentY + 'px';
                    confetti.style.transform = `rotate(${currentRotation}deg)`;
                    confetti.style.opacity = (1 - progress).toString();

                    requestAnimationFrame(animate);
                } else {
                    confetti.remove();
                }
            };

            requestAnimationFrame(animate);
        }, i * 10); // Espaça a criação dos confetes
    }
}
