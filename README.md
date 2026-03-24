# Calculadora Salarial 2026

Projeto simples em **HTML, CSS e JavaScript** para calcular:
- desconto de **INSS**
- desconto de **IRRF**
- **salário líquido**

A ideia é treinar lógica de programação, funções e manipulação do DOM.

## O que o aluno vai praticar
- Capturar dados de formulário
- Validar entrada do usuário
- Criar funções de cálculo
- Exibir resultados formatados em moeda brasileira
- Trabalhar com regras de negócio (faixas e alíquotas)

## Como executar
1. Baixe ou clone o projeto.
2. Abra o arquivo `index.html` no navegador.
3. Digite um salário bruto e clique em **Calcular Agora**.

Observação: o projeto usa o SweetAlert2 via CDN, então é recomendado estar com internet ativa para os alertas funcionarem corretamente.

## Estrutura do projeto
- `index.html`: estrutura da página e formulário
- `css/style.css`: estilos visuais
- `js/script.js`: regras de cálculo e interação da tela

## Fluxo do cálculo
1. O usuário informa o salário bruto.
2. A função `calcularINSS(bruto)` calcula o INSS por faixas (progressivo).
3. A função `calcularIR(bruto, inss)` calcula o IRRF considerando base de cálculo e regra de redução.
4. A função `calcularValorLiquido(bruto, inss, irrf)` retorna o salário final.
5. Os valores são mostrados na interface com `toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })`.

## Regras usadas no código (resumo)
### INSS (tabela progressiva)
- Faixa 1: até R$ 1.621,00 &rarr; 7,5%
- Faixa 2: até R$ 2.902,84 &rarr; 9%
- Faixa 3: até R$ 4.354,27 &rarr; 12%
- Faixa 4: acima disso &rarr; 14%
- Teto considerado: R$ 8.475,55

![Cálculo do INSS](img/exemplo-calculo-inss.png "Exemplo de como é efetuado o cálculo do INSS")

### IRRF (após desconto do INSS)
- O cálculo usa faixas com dedução.
- Há regra de redução para salários até R$ 7.350,00.
- Até R$ 5.000,00, a redução pode zerar o imposto calculado.

## Sugestões de estudo
1. Adicionar testes com salários fixos (ex.: 2000, 3500, 5000, 8000).
2. Separar as tabelas de INSS/IRRF em constantes no topo do arquivo.
3. Criar uma função para limpar campos e reaproveitar código.
4. Exibir também a base de cálculo do IR na tela.

## Atenção
Este projeto é **educacional** e pode não cobrir todas as regras oficiais de folha de pagamento (dependentes, adicionais, descontos específicos de empresa, etc.).

## Autor
Pedro Takeshita - Fatec Itu



## Licença
MIT
