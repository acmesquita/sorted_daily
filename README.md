# 🎲 Sorteador de Daily

Um sistema web moderno e responsivo para sortear a ordem de apresentação das dailies da equipe. Permite gerenciar dinamicamente quais membros participam do sorteio.

## ✨ Funcionalidades

- **🎯 Sorteio Aleatório**: Algoritmo Fisher-Yates para embaralhamento justo
- **👥 Gestão de Participantes**: Sistema de checkboxes para ativar/inativar pessoas
- **📱 Design Responsivo**: Interface moderna que funciona em desktop e mobile
- **🎨 Animações Suaves**: Transições e efeitos visuais elegantes
- **🔄 Reset Inteligente**: Possibilidade de sortear novamente
- **⚡ Contador Dinâmico**: Mostra quantas pessoas estão ativas

## 🚀 Como Usar

### Instalação
1. Clone ou baixe o projeto
2. Abra o arquivo `index.html` no navegador
3. Ou execute um servidor local:
```bash
python3 -m http.server 8000
```

### Uso Básico
1. **Selecione os participantes**: Marque/desmarque os checkboxes das pessoas que participarão
2. **Sorteie a ordem**: Clique em "🎯 Sortear Ordem"
3. **Veja o resultado**: A ordem sorteada aparecerá numerada
4. **Reset se necessário**: Use "🔄 Resetar" para sortear novamente

## 👥 Lista de Participantes

- Juliana Custodio
- Carlos Spoljarick
- David Martinez
- Bruno Borges
- Catharina Mesquita
- Eduardo Hamada

## 🎨 Interface

### Estados Visuais
- **✅ Pessoa Ativa**: Checkbox marcado, cor normal, participa do sorteio
- **❌ Pessoa Inativa**: Checkbox vazio, acinzentada, riscada, não participa
- **⚠️ Nenhuma Seleção**: Botão desabilitado com aviso

### Botão Inteligente
- `🎯 Sortear Ordem` - Todas as pessoas ativas
- `🎯 Sortear Ordem (3/6)` - Algumas pessoas inativas
- `⚠️ Nenhuma pessoa selecionada` - Nenhuma pessoa ativa

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**:
  - Flexbox e Grid Layout
  - Gradientes e animações
  - Media queries para responsividade
  - Custom checkboxes
- **JavaScript (ES6+)**:
  - Algoritmo Fisher-Yates
  - DOM manipulation
  - Event listeners
  - Arrow functions

## 📁 Estrutura do Projeto

```
sorted_daily/
├── index.html          # Estrutura principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica de sorteio
└── README.md           # Documentação
```

## 🎯 Algoritmo de Sorteio

O sistema utiliza o **algoritmo Fisher-Yates** para garantir um embaralhamento justo e aleatório:

```javascript
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
```

## 📱 Responsividade

- **Desktop**: Layout em grid com múltiplas colunas
- **Tablet**: Grid adaptativo
- **Mobile**: Layout em coluna única, botões full-width

## 🎨 Características de Design

- **Gradientes modernos** com cores suaves
- **Glassmorphism** com backdrop-filter
- **Animações CSS** para transições suaves
- **Hover effects** interativos
- **Custom checkboxes** com animações
- **Typography** moderna e legível

## 🔧 Personalização

### Adicionar/Remover Pessoas
Edite o array `people` no arquivo `script.js`:

```javascript
const people = [
    'Nome da Pessoa 1',
    'Nome da Pessoa 2',
    // ... adicione mais pessoas aqui
];
```

### Alterar Cores
Modifique as variáveis CSS no arquivo `styles.css`:

```css
/* Gradiente principal */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cores dos botões */
background: linear-gradient(45deg, #667eea, #764ba2);
```

## 🚀 Casos de Uso

- **Dailies diárias**: Sorteio da ordem de apresentação
- **Reuniões de equipe**: Organização de falas
- **Apresentações**: Ordem de apresentadores
- **Eventos**: Sorteio de participantes

## 📋 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado
- Não requer dependências externas

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👩‍💻 Autor

**Catharina Mesquita**

Feito com ❤️ para organizar as dailies da equipe.

---

## 🎉 Agradecimentos

- Equipe de desenvolvimento pela inspiração
- Comunidade open source pelas tecnologias utilizadas
- Todos que contribuem para tornar as dailies mais organizadas! 🚀
