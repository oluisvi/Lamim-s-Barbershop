# Lamim's V2.1 — Atmosphere & Tour Ending

> **IMPORTANTE: SUBA SOMENTE NA BRANCH `v2-real-space`. NÃO SUBA NA `main`.**

Este pacote é um delta pequeno sobre a Real Space V2 que já está na branch `v2-real-space`.

## Mudanças

- final do tour passa a girar para a parede das três cadeiras, em vez de resolver visualmente no sofá de espera;
- áudio antigo `room-tone.wav` deixa de ser usado pela experiência;
- botão de som passa a controlar um soundscape procedural leve de barbearia, sem música protegida por direitos autorais;
- soundscape combina room tone filtrado, hum muito baixo, cliques discretos de tesoura e pulsos ocasionais de máquina;
- adicionados quadros minimalistas na parede do fundo;
- adicionada mesa lateral discreta na área de espera;
- adicionadas toalhas dobradas nas estações;
- nenhum elemento existente importante foi removido;
- `main` deve continuar preservada como versão apresentada ao cliente.

## Upload direto pelo GitHub

1. Confirme no topo do repositório que a branch selecionada é **`v2-real-space`**.
2. Extraia este ZIP no computador.
3. Dentro da branch `v2-real-space`, use **Add file → Upload files**.
4. Arraste o conteúdo desta pasta mantendo os mesmos caminhos.
5. Confirme novamente que o commit será feito em `v2-real-space`.
6. Commit sugerido: `feat: refine V2 tour ending ambience and atmosphere`.

## Validação recomendada depois do upload

- abra o Preview Deployment da branch na Vercel;
- role até o final e confirme que o enquadramento termina nas três cadeiras;
- ligue/desligue o botão de som e confira se o áudio está discreto;
- valide que quadros/mesa/toalhas não bloqueiam câmera ou circulação;
- teste desktop e mobile.

## Verificação feita antes de empacotar

- novo teste foi escrito primeiro e falhou contra a V2 anterior;
- depois da implementação, testes específicos V2 + premium environment passaram;
- helper de áudio e scroll path passaram no TypeScript estrito isolado;
- arquivos TS/TSX alterados passaram por parse/transpile de sintaxe.
