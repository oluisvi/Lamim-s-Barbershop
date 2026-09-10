# BARBEARIA LAMIM'S — HYPER MASTER v4 PROJECT FILE

## IMMERSIVE 3D MVP / DIGITAL DOOR EXPERIENCE

**Project status:** Proposal / MVP demonstrativo  
**Project type:** Spatial 3D website + virtual tour + local business conversion  
**Primary conversion:** Fresha booking  
**Primary reference:** https://home-3d-three.vercel.app/  
**Current asset mode:** Real public Lamim's references when available + temporary demo references for gaps  
**Prepared:** 2026-09-10

---

# EXECUTION CONTRACT

Este é o arquivo mestre único do projeto.

Ele funde:

1. o Discovery específico da Barbearia Lamim's;
2. a estratégia de MVP imersivo 3D;
3. dados públicos atuais úteis encontrados no Fresha;
4. uma estratégia segura para assets temporários;
5. o HYPER MASTER v4 completo e adaptado ao projeto.

## SOURCE OF TRUTH — ORDEM ESPECÍFICA DESTE ARQUIVO

Em caso de conflito, seguir:

1. instrução explícita mais recente do usuário;
2. `PROJECT RESOLUTION` deste arquivo;
3. `LAMIM'S PROJECT SPECIFICATION` deste arquivo;
4. dados reais/validados do cliente;
5. dados públicos verificados e marcados com fonte/data;
6. Creative Direction aprovada;
7. implementação existente validada;
8. HYPER MASTER v4 Core;
9. referências externas;
10. boas práticas gerais.

Nenhuma referência externa pode sobrescrever a identidade real quando assets oficiais forem fornecidos.

---

# PROJECT RESOLUTION

## Brand

**Barbearia Lamim's**

## Location

R. Olímpio Catão, 440  
Centro — Jacareí — SP  
CEP 12308-051  
Boulevard Jacareí Office & Mall

## Public booking

Fresha é a conversão principal.

URL fornecida no Discovery deve ser centralizada em `/data/business.ts` e nunca duplicada em componentes.

## Instagram

https://www.instagram.com/barbearia_lamims/

## Core brand truth

A Lamim's é construída em torno de relações pessoais: irmãos, primos, amigos e família.

O produto não é apenas o corte. O ambiente, a conversa, a confiança, o atendimento e a sensação de pertencer ao lugar fazem parte da experiência.

## North Star

> **A Barbearia Lamim's não tem uma página na internet. Ela tem uma porta digital.**

## Creative concept lock

### ENTRE NA LAMIM'S

A experiência principal deve fazer o visitante atravessar uma entrada digital e assumir presença dentro do estabelecimento.

O 3D não é background, ilustração ou hero decorativo.

**O espaço é a interface.**

## Signature interaction lock

A assinatura do projeto é a própria passagem da rua/entrada para o interior, seguida pela transferência de controle da câmera ao visitante.

A pessoa começa sendo guiada por alguns segundos, atravessa a entrada e então recebe controle para explorar. O momento final do tour retorna a narrativa a uma cadeira vazia com o CTA de agendamento.

## Experience thesis

**Guided first → free exploration second → conversion always available.**

O usuário nunca é preso ao tour. O agendamento permanece acessível desde o primeiro estado útil.

## MVP reality

O MVP existe para vender a visão do produto final ao cliente antes de um levantamento espacial completo.

Ele deve parecer polido o suficiente para transmitir o valor da experiência, mas sua arquitetura precisa deixar claro no código quais elementos são:

- `REAL_PUBLIC_SOURCE`;
- `CLIENT_VERIFIED`;
- `DEMO_REFERENCE_ASSET`;
- `TODO_CLIENT_CONTENT`;
- `TODO_REAL_MODEL`;
- `APPROX_SPATIAL_LAYOUT`.

A troca do ambiente demonstrativo pelo ambiente real deve ser uma operação de conteúdo/3D calibration, não uma reescrita do website.

---

# IMPORTANT DISCOVERY UPDATE — REAL PHOTOS WERE FOUND

Embora o cliente ainda não tenha enviado um pacote oficial de fotos, existem fotos públicas reais da Lamim's na página do Fresha.

Portanto, **não comece por uma barbearia stock genérica**.

Prioridade:

```text
1. fotos reais públicas da Lamim's no Fresha como referência espacial/visual
2. conteúdo público real do Fresha
3. Discovery fornecido pelo usuário
4. stock gratuito apenas para lacunas de proposta
5. placeholders neutros quando até stock criaria uma falsa certeza
```

A versão final publicada deve substituir/validar tudo com o cliente.

---

# DELIVERABLE EXPECTATION FOR THE BUILD AGENT

Quando este arquivo for entregue a um agente de desenvolvimento:

- tratar o projeto como **LARGE**;
- não construir tudo de uma vez;
- executar Stage/Phase/Task de forma incremental;
- criar projeto/repositório somente se ainda não existir;
- manter `AGENTS.md` curto e operacional;
- usar commits pequenos quando Git estiver disponível;
- preservar contexto validado;
- não reabrir pesquisa global a cada task;
- nunca inventar conteúdo crítico apenas para deixar a tela “cheia”;
- permitir um MVP demonstrativo visualmente convincente sem confundir aproximação com fato.

---

# PART I — LAMIM'S PROJECT SPECIFICATION

# BARBEARIA LAMIM'S — IMMERSIVE 3D WEBSITE

## PROJECT SPECIFICATION / DISCOVERY RESOLUTION

Você atuará como uma equipe sênior multidisciplinar formada por:

- Creative Director
- 3D Web Designer
- UX/UI Designer
- Interaction Designer
- Frontend Engineer
- Three.js / WebGL Engineer
- Performance Engineer
- Accessibility Engineer
- SEO Engineer

Sua missão é projetar e desenvolver um website extremamente imersivo para a **Barbearia Lamim's**, em Jacareí — SP.

O projeto NÃO deve parecer um website institucional tradicional de barbearia.

A experiência principal deve fazer o visitante sentir que **entrou fisicamente na Barbearia Lamim's**.

---

# 1. VISÃO CENTRAL

Crie uma experiência digital onde o ambiente físico da Barbearia Lamim's seja o próprio website.

O usuário deve poder:

- entrar na barbearia;
- caminhar pelo estabelecimento;
- olhar ao redor;
- explorar diferentes áreas;
- descobrir elementos interativos;
- conhecer os profissionais;
- descobrir serviços;
- visualizar avaliações;
- entender a história da barbearia;
- acessar Instagram;
- encontrar localização;
- realizar um agendamento.

A experiência deve combinar:

**Website + Tour Virtual + Ambiente 3D + Storytelling + Conversão.**

Não quero apenas um modelo 3D decorativo em um hero.

O **ambiente 3D deve ser a experiência principal do site.**

---

# 2. REFERÊNCIA PRINCIPAL

Use como principal referência conceitual:

[https://home-3d-three.vercel.app/](https://home-3d-three.vercel.app/)

Analise cuidadosamente:

- estrutura da experiência;
- entrada no ambiente;
- movimentação;
- câmera;
- navegação;
- perspectiva;
- interação;
- iluminação;
- carregamento;
- comportamento em desktop;
- comportamento em mobile;
- transições;
- relação entre UI 2D e mundo 3D;
- performance;
- controles;
- arquitetura técnica.

NÃO copie o design ou os assets.

Entenda o conceito e crie uma experiência original para a Barbearia Lamim's.

A ideia central que deve ser preservada é:

> O visitante não observa o estabelecimento de fora. Ele entra nele.

---

# 3. CLIENTE

## Barbearia Lamim's

Segmento:

Barbearia.

Localização atual informada:

R. Olímpio Catão, 440
Centro — Jacareí — SP
CEP 12308-051

Localizada no:

**Boulevard Jacareí Office & Mall**

Instagram:

[https://www.instagram.com/barbearia\_lamims/](https://www.instagram.com/barbearia_lamims/)

Agendamento:

[https://www.fresha.com/book-now/barbearia-lamims-i9irco45/all-offer?id=2934003&pId=2836489&rwg\_token=AE37R\_g4caK9mt\_4pty\_XbJtAPQeuuxmxwRwYE6oELUyh1MXrrA76Z1gJr5FfDhoidoWpL3JuJe\_TZHbUe0dMnLkDXx\_xNTTCQ%3D%3D](https://www.fresha.com/book-now/barbearia-lamims-i9irco45/all-offer?id=2934003\&pId=2836489\&rwg_token=AE37R_g4caK9mt_4pty_XbJtAPQeuuxmxwRwYE6oELUyh1MXrrA76Z1gJr5FfDhoidoWpL3JuJe_TZHbUe0dMnLkDXx_xNTTCQ%3D%3D)

---

# 4. CONTEXTO DA MARCA

A Barbearia Lamim's possui uma característica importante:

É uma barbearia construída em torno de relações pessoais.

O negócio é conduzido por pessoas próximas entre si:

- irmãos;
- primos;
- amigos;
- família.

Isso deve influenciar fortemente o storytelling.

Não tratar a Lamim's apenas como:

> "um lugar para cortar cabelo."

A percepção deve ser de:

> um lugar onde você entra, é recebido, conversa, relaxa, dá risada e faz parte do ambiente.

A experiência digital precisa transmitir essa sensação de proximidade.

---

# 5. PERCEPÇÃO EXISTENTE

Dados informados do Google Maps:

- avaliação 5,0;
- 34 avaliações;
- comentários extremamente positivos.

Temas recorrentes das avaliações:

- profissionais atenciosos;
- ambiente confortável;
- organização;
- qualidade dos cortes;
- atendimento;
- simpatia;
- ambiente agradável;
- profissionalismo.

Exemplos de percepção:

> "Ambiente e pessoas excelentes."

> "Lugar organizado, animado e profissional."

> "É um local onde você se sente muito confortável em estar."

Essas avaliações revelam algo muito importante:

**o ambiente e as pessoas fazem parte do produto.**

Portanto, o website deve transformar justamente isso em experiência digital.

---

# 6. CONCEITO CRIATIVO

Conceito:

# ENTRE NA LAMIM'S

Possível direção de mensagem:

> Antes mesmo do seu horário, entre na Lamim's.

ou

> Sua próxima visita começa aqui.

ou

> Entre. A cadeira está te esperando.

Não utilize necessariamente essas frases literalmente.

Explore conceitos melhores durante a direção criativa.

A ideia deve transmitir:

- proximidade;
- confiança;
- personalidade;
- amizade;
- qualidade;
- experiência;
- ambiente.

Evitar clichês excessivos de barbearia como:

- bigode genérico;
- navalha gigante;
- poste barber decorativo sem contexto;
- estética "barbershop americana vintage" se ela não existir fisicamente na Lamim's;
- excesso de preto e dourado apenas porque é uma barbearia.

A identidade visual deve nascer do **estabelecimento real**.

---

# 7. ASSETS REAIS

Fotos e vídeos oficiais em alta resolução da Barbearia Lamim's ainda deverão ser fornecidos posteriormente. Enquanto isso, existem fotos públicas reais no Fresha e, apenas para lacunas do MVP, referências stock temporárias conforme a estratégia acima.

Eles devem ser tratados como **fonte visual de verdade**.

Quando estiverem disponíveis:

analise cuidadosamente:

- planta aparente;
- dimensões aproximadas;
- disposição dos móveis;
- cadeiras;
- espelhos;
- paredes;
- piso;
- teto;
- balcão;
- iluminação;
- objetos;
- equipamentos;
- decoração;
- materiais;
- texturas;
- cores;
- fachada;
- entrada;
- circulação;
- detalhes característicos.

NÃO invente uma barbearia completamente diferente.

A reconstrução deve preservar o máximo possível da personalidade real do local.

Quando uma dimensão ou elemento não puder ser determinado pelas imagens:

- não assumir como fato;
- utilizar aproximação visual coerente;
- registrar a informação como aproximação;
- manter fácil substituição posterior.

---


# 7A. STATUS ATUAL DOS ASSETS — MVP DE PROPOSTA

## Situação atual

O cliente ainda NÃO forneceu um levantamento fotográfico completo, planta, vídeo 360°, LiDAR ou modelo 3D próprio.

Porém, foi localizada uma fonte pública muito mais valiosa do que imagens genéricas: a página atual da própria **Barbearia Lamim's no Fresha**, que contém fotos do estabelecimento, fachada, equipe, serviços, reviews e portfólio.

Fonte pública verificada em 2026-09-10:

- Fresha: https://www.fresha.com/a/barbearia-lamims-sao-paulo-rua-olimpio-catao-440-bbzgjjyj

Dados públicos úteis encontrados no Fresha nessa data:

- avaliação exibida: **5.0 / 90 avaliações**;
- endereço exibido: **Rua Olímpio Catão 440, Centro**;
- descrição da marca informa **mais de 10 anos de tradição em Jacareí**;
- posicionamento público combina técnica clássica, atendimento moderno, ambiente aconchegante/familiar e planos mensais;
- equipe pública listada inclui Luiz, Pedro Barbeiro, Bento Barbeiro, Gustavo Barbeiro, Rhyan Barbeiro e Kaique Barbeiro;
- serviços públicos visíveis incluem Barba, Corte e Barba, Corte de cabelo, Corte e sobrancelha, Corte e Cavanhaque, Sobrancelha e Pézinho;
- preços/tempos públicos devem ser lidos de `/data/services.ts` e tratados como conteúdo facilmente atualizável, nunca hardcoded em múltiplos componentes.

IMPORTANTE:

- o Discovery anterior registra **5.0 / 34 avaliações no Google Maps**; manter isso identificado como snapshot informado pelo usuário, sem confundir com a métrica atual do Fresha;
- não afirmar que quantidade de reviews de uma plataforma pertence à outra;
- dados públicos podem mudar; centralizar e marcar `source` + `verifiedAt`.

---

# 7B. FOTOS REAIS LOCALIZADAS — PRIORIDADE SOBRE STOCK

A execução deve priorizar as fotos reais públicas da Lamim's localizadas no Fresha como **referência visual de reconstrução** antes de recorrer a barbearias genéricas.

URLs públicas identificadas na galeria do estabelecimento:

1. Interior principal / cadeiras e espelhos:
   `https://images.fresha.com/locations/location-profile-images/2836489/5779282/6f338dd7-c73d-48c8-859e-ea712121c052-BarbeariaLamims-BR-SoPaulo-SoPaulo-Centro-Fresha.jpg?class=venue-gallery-large&f_quality=75&f_width=1920`

2. Interior / estação de atendimento:
   `https://images.fresha.com/locations/location-profile-images/2836489/5779283/580d723d-349f-4df3-a485-6573a9221fac-BarbeariaLamims-BR-SoPaulo-SoPaulo-Centro-Fresha.jpg?class=venue-gallery-small&f_quality=75&f_width=1920`

3. Fachada / identidade externa:
   `https://images.fresha.com/locations/location-profile-images/2836489/5779284/ac5f45ff-4857-4d0b-85f0-c2ca5df114c0-BarbeariaLamims-BR-SoPaulo-SoPaulo-Centro-Fresha.jpg?class=venue-gallery-small&f_quality=75&f_width=1920`

4. Cena com barbeiro em atendimento:
   `https://images.fresha.com/locations/location-profile-images/2836489/5779285/22652b0a-081e-4336-b0cc-ebd02390008f-BarbeariaLamims-BR-SoPaulo-SoPaulo-Centro-Fresha.jpg?class=venue-gallery-mobile&f_quality=75&f_width=1920`

5. Quinta imagem da galeria:
   `https://images.fresha.com/locations/location-profile-images/2836489/5779286/96641780-da4a-48b5-84fd-857094646424-BarbeariaLamims-BR-SoPaulo-SoPaulo-Centro-Fresha.jpg?class=venue-gallery-mobile&f_quality=75&f_width=1920`

### Regra de uso

Estas imagens pertencem a uma listagem pública do negócio e são excelentes para **prototipação/reconstrução visual da proposta**. Antes de publicar uma versão final externa, confirmar com a Lamim's a autorização e obter os arquivos originais em alta resolução sempre que possível.

No MVP de proposta:

- usar as fotos para inferir linguagem de materiais, cadeiras, espelhos, proporções relativas, iluminação e identidade;
- não assumir medidas físicas exatas a partir de uma única foto;
- não reconstruir áreas invisíveis como se fossem fatos;
- não usar rosto de profissional como avatar oficial fora do contexto em que a fonte pública já o apresenta, sem validação posterior;
- registrar origem em `docs/ASSET_SOURCES.md`;
- evitar hotlink em produção; preferir asset local autorizado/baixado conforme licença/permissão.

---

# 7C. STOCK FALLBACK — SOMENTE PARA LACUNAS DO MVP

Se as fotos reais públicas não forem suficientes para construir uma demonstração visual coerente, usar imagens de barbearias externas **somente como `DEMO_REFERENCE_ASSET`**.

O objetivo NÃO é afirmar que o ambiente genérico é fisicamente a Lamim's.
O objetivo é completar temporariamente a proposta para demonstrar a experiência que o cliente receberá quando o levantamento real for feito.

Priorizar imagens sem pessoas identificáveis e fontes com uso gratuito/licença clara.

Referências temporárias curadas:

- Unsplash — interior com cadeiras e espelhos: https://unsplash.com/photos/a-barber-shop-with-several-chairs-and-mirrors-D7ly5lUDTCY
- Unsplash — cadeira + espelho: https://unsplash.com/photos/a-barber-shop-with-a-chair-and-a-mirror-BBGyxhtPpC0
- Unsplash — detalhe de cadeira marrom + espelho: https://unsplash.com/photos/a-brown-leather-chair-sitting-in-front-of-a-mirror-41HCQN43PwU
- Unsplash — interior escuro com várias cadeiras/espelhos: https://unsplash.com/photos/an-empty-barbershop-interior-with-several-chairs-and-mirrors-AXurvQTtO3Y
- Pexels — cadeiras de couro em barbearia: https://www.pexels.com/photo/brown-leather-barbers-chairs-in-a-barber-shop-13138476/
- Pexels — cadeira preta e espelhos iluminados: https://www.pexels.com/photo/black-leather-barber-chair-in-front-of-mirror-3993293/

### Direção visual temporária do MVP

Quando uma área não puder ser inferida das fotos reais:

- manter paleta neutra próxima do que as fotos reais sugerirem;
- cadeiras de barbeiro como principal objeto reconhecível;
- espelhos amplos;
- superfícies limpas;
- madeira/metais/tons quentes somente quando coerentes com o conjunto;
- iluminação cinematográfica, mas plausível para um comércio real;
- evitar transformar o espaço em uma barbearia vintage americana genérica;
- evitar excesso de tijolo, dourado, neon e barber pole se isso não estiver sustentado pelos assets reais.

### Demo mode explícito no código

Criar:

```text
NEXT_PUBLIC_DEMO_MODE=true
```

Quando ativo:

- permitir assets temporários;
- manter internamente os metadados `DEMO_REFERENCE_ASSET`;
- exibir no modo Informações/rodapé uma nota pequena e elegante: `Ambiente 3D demonstrativo — versão final será reconstruída com os assets oficiais da Lamim's.`

Quando os assets oficiais chegarem:

```text
NEXT_PUBLIC_DEMO_MODE=false
```

E executar a substituição sem alterar a arquitetura de câmera, hotspots, tour ou dados.

---

# 7D. MVP SCENE LAYOUT — HIPÓTESE SUBSTITUÍVEL

Enquanto não houver planta completa, construir uma cena-protótipo compacta e modular, explicitamente classificada como aproximação.

Layout demonstrativo sugerido:

```text
ENTRADA / FACHADA
        ↓
RECEPÇÃO / BOOKING
        ↓
CORREDOR PRINCIPAL
   ↙      ↓      ↘
CADEIRA  CADEIRA  CADEIRA
   ↓       ↓       ↓
SERVIÇOS  EQUIPE  RESULTADOS
        ↓
ESPERA / HISTÓRIA / REVIEWS
        ↓
CADEIRA FINAL VAZIA
        ↓
AGENDAR
```

Este layout existe para validar experiência, não para declarar a planta real.

Todos os pontos espaciais devem vir de configuração centralizada e poder ser recalibrados depois.

---

# 8. RECONSTRUÇÃO 3D

A arquitetura deve permitir utilizar um modelo real em:

- GLB;
- GLTF;
- Draco;
- Meshopt;

ou tecnologia equivalente adequada para web.

Preferencialmente utilizar:

- Three.js;
- React Three Fiber;
- Drei.

O ambiente deverá possuir:

- paredes;
- piso;
- teto;
- móveis principais;
- cadeiras;
- bancadas;
- espelhos;
- iluminação;
- objetos característicos;
- fachada/entrada quando possível.

Não criar geometria extremamente detalhada onde ela não agrega valor.

Priorizar:

**silhueta + materiais + iluminação + composição + objetos reconhecíveis.**

---

# 9. EXPERIÊNCIA DE ENTRADA

O primeiro acesso deve ser memorável.

Imagine algo semelhante a:

1. tela escura;
2. logo Lamim's;
3. carregamento minimalista;
4. áudio opcional;
5. pequena mensagem;
6. CTA:

**ENTRAR NA BARBEARIA**

Ao clicar:

- transição cinematográfica;
- câmera aproxima-se da entrada;
- porta ou passagem é atravessada;
- luz muda gradualmente;
- ambiente interno é revelado;
- controles aparecem de maneira discreta.

Evitar loaders genéricos.

O carregamento deve fazer parte da narrativa.

---

# 10. MOVIMENTAÇÃO

## Desktop

Suportar:

- WASD;
- setas;
- mouse/look;
- drag para câmera;
- controles simplificados quando necessário.

## Mobile

Criar controles próprios para touchscreen.

Possibilidades:

- joystick virtual discreto;
- drag para olhar;
- tap-to-move;
- navegação por pontos;
- combinação adaptativa.

Não tentar simplesmente replicar WASD no mobile.

A experiência mobile precisa ser projetada separadamente.

---

# 11. MOVIMENTAÇÃO NATURAL

Implementar:

- velocidade confortável;
- aceleração suave;
- desaceleração;
- limites físicos;
- colisões;
- restrição de câmera;
- altura humana coerente;
- campo de visão natural.

Evitar sensação de:

- drone;
- câmera voando;
- FPS rápido;
- jogo competitivo.

A sensação deve ser:

**estar caminhando tranquilamente pelo ambiente.**

---

# 12. HOTSPOTS

Distribuir interações naturalmente pelo estabelecimento.

Não colocar dezenas de marcadores flutuantes.

Os hotspots podem surgir por:

- proximidade;
- foco da câmera;
- hover;
- interação;
- pequenos indicadores visuais.

Exemplos:

## Cadeira de barbeiro

Ao se aproximar:

> Conheça nossos serviços

Abrir interface discreta contendo serviços disponíveis.

---

## Espelho

Pode revelar uma mensagem ou microinteração de marca.

Exemplo conceitual:

> Seu próximo visual começa aqui.

---

## Área dos profissionais

Exibir:

- foto;
- nome;
- especialidade;
- personalidade;
- agenda.

Somente utilizar informações reais quando fornecidas pelo cliente ou verificadas em fonte pública confiável e marcada com `source` + `verifiedAt`.

---

## Balcão / recepção

Principal conversão:

**Agendar horário**

Abrir Fresha.

---

## Parede / elemento visual

Pode revelar:

**Nossa história**

Apresentando a origem familiar da Lamim's.

---

## Reviews

Utilizar avaliações reais como parte física da experiência.

Por exemplo:

reviews podem surgir discretamente próximos a:

- espelho;
- cadeira;
- área de espera;
- parede.

Não criar simplesmente uma seção tradicional com dez cards.

---

# 13. STORYTELLING ESPACIAL

O usuário deve descobrir a marca caminhando.

A arquitetura física pode representar diferentes informações.

Exemplo:

ENTRADA
↓
primeira impressão

RECEPÇÃO
↓
agendamento

CADEIRAS
↓
serviços

ESPELHOS
↓
trabalho / resultado

PROFISSIONAIS
↓
equipe

ÁREA SOCIAL
↓
história / família

SAÍDA / FINAL DA EXPERIÊNCIA
↓
CTA para agendamento

Transformar espaço em narrativa.

---

# 14. INTERFACE 2D

A UI tradicional deve existir, porém ser extremamente discreta.

Possível HUD:

### canto superior esquerdo

Logo Lamim's.

### canto superior direito

Menu.

### inferior

Indicação contextual:

WASD para andar
Mouse para olhar

Depois desaparecer.

### CTA persistente

**Agendar horário**

O botão deve estar sempre acessível, mas não atrapalhar a imersão.

---

# 15. MENU

Menu minimalista contendo:

- Explorar
- Serviços
- Profissionais
- Sobre
- Avaliações
- Localização
- Instagram
- Agendar

Selecionar uma seção não precisa obrigatoriamente abrir uma página convencional.

Pode:

- mover a câmera;
- teleportar suavemente;
- focar determinada região;
- abrir overlay contextual.

---

# 16. MODO GUIADO

Além da exploração livre, implemente:

## Fazer o tour

Um modo cinematográfico opcional.

A câmera percorre automaticamente os principais pontos da barbearia.

Exemplo:

Entrada
→ recepção
→ cadeiras
→ profissionais
→ ambiente
→ agendamento.

Isso é importante para usuários que:

- não sabem usar controles 3D;
- estão no celular;
- preferem assistir;
- querem conhecer rapidamente.

O usuário pode sair do tour a qualquer momento.

---

# 17. BOOKING

Agendamento é a principal conversão.

CTA:

**Agendar horário**

Deve aparecer:

- no menu;
- no HUD;
- em hotspot contextual;
- ao final do tour.

Utilizar o sistema Fresha existente.

Nunca obrigar o usuário a completar todo o tour para agendar.

---

# 18. SOCIAL PROOF

A avaliação:

**5.0**

é extremamente forte.

Ela deve aparecer cedo na experiência.

Possível apresentação:

★★★★★
5.0 no Google

34 avaliações

Mas deve parecer integrado à direção visual.

Evitar seção genérica SaaS.

Quando forem utilizadas avaliações individuais, utilizar somente reviews reais fornecidos ou confirmados.

---

# 19. PERSONALIDADE

A experiência deve parecer:

- autêntica;
- jovem;
- profissional;
- descontraída;
- próxima;
- premium sem ser elitista;
- moderna;
- humana.

Principalmente:

**humana.**

A Lamim's existe por causa das pessoas.

Não transformar o website em uma demonstração fria de tecnologia 3D.

---

# 20. SOM

Adicionar uma camada sonora opcional.

Possíveis sons:

- ambiente leve da barbearia;
- conversa distante;
- tesoura;
- máquina;
- música ambiente extremamente baixa.

IMPORTANTE:

Nunca iniciar áudio intrusivo automaticamente.

Utilizar:

**Ativar som**

e permitir mute imediatamente.

Respeitar preferências do navegador.

---

# 21. MICROINTERAÇÕES

Criar microinterações sofisticadas:

- cursor contextual;
- objetos respondendo discretamente ao hover;
- reflexos;
- mudanças suaves de luz;
- UI aparecendo conforme proximidade;
- pequenas transições;
- depth;
- parallax;
- foco;
- motion blur somente quando apropriado;
- transição câmera/interface sincronizada.

Não exagerar.

A experiência deve continuar elegante.

---

# 22. ILUMINAÇÃO

Basear a iluminação final nas fotos reais.

Priorizar:

- baked lighting;
- lightmaps;
- environment maps;
- sombras otimizadas;
- iluminação dinâmica somente onde necessário.

Evitar depender de dezenas de luzes dinâmicas.

A iluminação será uma das principais responsáveis pela qualidade percebida.

---

# 23. REFLEXOS E ESPELHOS

Barbearias possuem muitos espelhos.

Isso representa risco sério de performance.

Não utilizar reflexão real em todos os espelhos.

Avaliar soluções como:

- baked reflection;
- cubemap;
- environment map;
- reflection probe;
- planar reflection seletivo;
- material simplificado.

Utilizar reflexão dinâmica apenas quando houver impacto visual suficiente para justificá-la.

---

# 24. PERFORMANCE CEILING RULE

A experiência premium NÃO pode depender de hardware topo de linha.

Aplicar progressive enhancement.

Detectar quando possível:

- GPU;
- device pixel ratio;
- viewport;
- memória;
- capacidade gráfica;
- mobile;
- prefers-reduced-motion.

Criar níveis:

## HIGH

- efeitos completos;
- sombras melhores;
- reflexos adicionais;
- partículas;
- maior resolução.

## MEDIUM

- efeitos reduzidos;
- sombras simplificadas;
- DPR limitado.

## LOW

- iluminação baked;
- menos objetos;
- materiais simplificados;
- efeitos removidos.

A identidade visual precisa continuar excelente em todos os níveis.

---

# 25. PERFORMANCE TARGET

Buscar:

Desktop moderno:

60 FPS quando possível.

Mobile:

30–60 FPS estáveis.

Priorizar estabilidade sobre efeitos.

Implementar:

- lazy loading;
- code splitting;
- dynamic imports;
- compressed textures;
- WebP/AVIF;
- KTX2 quando apropriado;
- Draco/Meshopt;
- instancing;
- geometry merging;
- baked lighting;
- LOD;
- occlusion strategy;
- frustum culling;
- texture atlases quando vantajoso;
- preload estratégico.

Não carregar todo o website antes da experiência inicial quando isso não for necessário.

---

# 26. FALLBACK

WebGL pode falhar.

Crie fallback premium.

Caso:

- WebGL indisponível;
- hardware muito fraco;
- modelo não carregue;
- JavaScript falhe parcialmente;

o visitante ainda deverá acessar:

- fotos;
- serviços;
- profissionais;
- avaliações;
- endereço;
- Instagram;
- agendamento.

Nunca apresentar apenas:

> Seu dispositivo não suporta esta experiência.

---

# 27. ACESSIBILIDADE

A experiência 3D não pode ser a única maneira de acessar informações importantes.

Disponibilizar equivalente DOM para:

- serviços;
- equipe;
- localização;
- avaliações;
- contato;
- agendamento.

Suportar:

- keyboard navigation;
- focus states;
- screen readers;
- reduced motion;
- contraste;
- labels;
- textos alternativos.

---

# 28. SEO

Mesmo sendo uma experiência WebGL, o website precisa ser indexável.

Criar conteúdo HTML/DOM real relacionado a:

- Barbearia Lamim's;
- barbearia em Jacareí;
- serviços;
- localização;
- agendamento;
- informações institucionais.

Implementar quando adequado:

- metadata;
- Open Graph;
- Twitter/X cards;
- LocalBusiness schema;
- BarberShop/HealthAndBeautyBusiness schema apropriado;
- canonical;
- sitemap;
- robots;
- JSON-LD.

Não esconder todo o conteúdo dentro do canvas WebGL.

---

# 29. RESPONSIVIDADE

Testar no mínimo:

- 320px;
- 375px;
- 390px;
- 430px;
- tablet;
- 1024px;
- laptop;
- desktop;
- ultrawide.

Considerar mobile como experiência própria.

---

# 30. TECH STACK

Preferência:

## Core

- Next.js
- TypeScript
- React

## Styling

- Tailwind CSS
- CSS Modules quando fizer sentido

## 3D

- Three.js
- React Three Fiber
- @react-three/drei

## Motion

Escolher conforme necessidade:

- Motion
- GSAP

Não adicionar biblioteca apenas porque existe.

## State

Utilizar estado simples ou Zustand somente quando necessário.

---

# 31. ARQUITETURA

Separar claramente:

```text
/app
/components
/components/ui
/components/experience
/components/three
/components/hud
/components/hotspots
/components/tour
/lib
/data
/hooks
/assets
/public/models
/public/textures
/public/audio

```

Criar sistema baseado em configuração para hotspots.

Exemplo conceitual:

```ts
{
  id: "booking",
  position: [...],
  radius: ...,
  label: "Agendar horário",
  action: ...
}

```

Não espalhar coordenadas mágicas pelo código.

---

# 32. CONTEÚDO

Centralizar informações da Lamim's em arquivos estruturados.

Exemplo:

```text
/data/business.ts
/data/services.ts
/data/team.ts
/data/reviews.ts
/data/hotspots.ts

```

Nunca duplicar conteúdo em vários componentes.

---

# 33. ASSETS AUSENTES

Neste momento alguns assets e informações ainda poderão não existir.

NÃO inventar:

- nome dos barbeiros;
- preços;
- serviços específicos;
- horários individuais;
- história detalhada;
- telefone;
- medidas físicas;
- logos;
- fotografias;
- métricas não confirmadas.

Utilizar placeholders explicitamente marcados.

Exemplo:

```text
TODO_CLIENT_ASSET
TODO_CLIENT_CONTENT
TODO_REAL_MODEL

```

A aplicação deve continuar funcional mesmo enquanto esses elementos estiverem pendentes.

---

# 34. ESTRATÉGIA PARA O MODELO REAL

Quando as imagens/vídeos forem adicionados ao projeto:

realize uma auditoria dos assets.

Determine:

1. quais áreas do estabelecimento estão documentadas;
2. quais ângulos existem;
3. quais texturas podem ser extraídas;
4. quais elementos precisam ser modelados;
5. quais objetos podem utilizar modelos existentes;
6. quais elementos precisam de representação customizada;
7. quais informações espaciais estão faltando.

Produza então:

```text
docs/LAMIMS_3D_RECONSTRUCTION.md

```

Contendo somente informações úteis para reconstrução.

Não produzir documentação burocrática.

---

# 35. ALTERNATIVAS DE CAPTURA

Se apenas fotografias tradicionais forem insuficientes para reconstruir o espaço com fidelidade, preparar a arquitetura para receber posteriormente:

- modelo criado em Blender;
- photogrammetry;
- Gaussian Splat;
- captura LiDAR;
- vídeo espacial;
- panorama 360°.

A implementação deve favorecer a solução que entregue melhor combinação de:

**fidelidade + performance + facilidade de manutenção.**

Não utilizar tecnologia experimental apenas para parecer avançado.

---

# 36. EXPERIÊNCIA SEM O MODELO FINAL

Caso o modelo real ainda não esteja disponível:

não interrompa o desenvolvimento.

Crie uma **environment prototype scene**.

Essa cena deve validar:

- câmera;
- controles;
- colisões;
- hotspots;
- HUD;
- booking;
- tour guiado;
- responsividade;
- arquitetura;
- performance.

Depois o modelo temporário deve poder ser substituído pelo ambiente real sem reconstrução completa do sistema.

---

# 37. DESIGN SYSTEM

Criar um design system pequeno e coerente.

Extrair posteriormente das fotos reais:

- background;
- surface;
- foreground;
- accent;
- muted;
- border;
- typography.

Até os assets reais chegarem:

utilizar uma direção temporária sofisticada e neutra.

Possível universo:

- carvão;
- creme;
- madeira;
- metal;
- tons quentes;
- contraste cinematográfico.

Mas NÃO tornar essas cores definitivas sem validar o estabelecimento real.

---

# 38. TIPOGRAFIA

Buscar combinação entre:

- personalidade;
- legibilidade;
- editorial;
- contemporâneo.

Evitar fontes clichê de "barbearia vintage".

A tipografia deve ajudar a posicionar a Lamim's como uma marca contemporânea.

---

# 39. PÁGINA / MODO CONVENCIONAL

Além da experiência 3D, disponibilizar uma maneira rápida de acessar o conteúdo.

Pode ser:

**Explorar sem 3D**

ou

**Informações**

Permitindo visualizar:

- serviços;
- equipe;
- sobre;
- avaliações;
- localização;
- horário;
- Instagram;
- agendamento.

Isso melhora:

- acessibilidade;
- SEO;
- performance;
- conversão.

---

# 40. LOCALIZAÇÃO

Criar uma área contextual para localização.

Mostrar:

**Barbearia Lamim's**

R. Olímpio Catão, 440
Centro — Jacareí — SP
12308-051

Boulevard Jacareí Office & Mall.

Adicionar integração para rota/mapa posteriormente conforme implementação.

---

# 41. FINAL DO TOUR

Ao concluir o tour, criar um momento de conversão.

Não mostrar simplesmente um modal.

Criar uma composição cinematográfica.

Possível conceito:

A câmera termina diante de uma cadeira vazia.

Interface surge:

> Agora só falta você.

CTA:

**AGENDAR MEU HORÁRIO**

Essa ideia pode ser refinada, mas o objetivo é conectar fisicamente a cadeira vazia à conversão.

---

# 42. PRINCÍPIO DE DESIGN

Sempre que estiver decidindo entre:

**mostrar informação em um card**

ou

**transformar a informação em parte do espaço**

prefira o espaço quando isso não prejudicar usabilidade.

Exemplo:

Ruim:

```text
CARD
Conheça nossos profissionais

```

Melhor:

o visitante olha para determinada cadeira e descobre quem trabalha naquele espaço.

---

# 43. NÃO FAZER

Não criar:

- landing page SaaS;
- hero tradicional + modelo 3D ao lado;
- dezenas de cards;
- Bento Grid apenas por tendência;
- excesso de glassmorphism;
- dashboard;
- template genérico de barbearia;
- scroll infinito de seções;
- experiência 3D apenas decorativa;
- efeitos aleatórios;
- animações que impedem conversão;
- navegação confusa;
- modelo pesado sem otimização;
- experiência desktop quebrada no mobile.

---

# 44. OBJETIVO DE NEGÓCIO

O usuário deve terminar a experiência pensando:

> "Esse lugar parece muito daora. Quero ir lá."

E não:

> "Esse site tem Three.js."

Tecnologia é meio.

A Lamim's é o produto.

---

# 45. OBJETIVO DE CONVERSÃO

Conversão principal:

**Agendamento Fresha**

Conversões secundárias:

- Instagram;
- rota/localização;
- conhecer profissionais;
- conhecer serviços.

Medir posteriormente eventos como:

```text
experience_entered
guided_tour_started
guided_tour_completed
hotspot_opened
service_viewed
team_member_viewed
instagram_clicked
directions_clicked
booking_clicked

```

---

# 46. ANALYTICS

Preparar estrutura para analytics respeitando privacidade.

Prioridade:

entender se a experiência 3D aumenta intenção de agendamento.

Evitar tracking desnecessário.

---

# 47. EXECUTION POLICY

Trabalhe de maneira modular.

Não tente construir tudo em uma única tarefa gigantesca.

Divida o projeto em fases pequenas, verificáveis e independentes.

Cada task precisa possuir:

- objetivo;
- escopo;
- dependências;
- arquivos afetados;
- critérios de aceite;
- validação;
- handoff.

---


# 47A. MODELO DE EXECUÇÃO — STAGES x PHASES

Este arquivo contém dois níveis de organização e eles NÃO são roadmaps concorrentes.

## HYPER MASTER STAGES

Os `STAGE 1–7` do HYPER MASTER são **gates de direção e qualidade**:

- Stage 1: Creative Direction;
- Stage 2: Scene / State Architecture;
- Stage 3: Signature Experience;
- Stage 4: Motion & Scroll Choreography;
- Stage 5: Build / Engineering;
- Stage 6: High-End Audit;
- Stage 7: Final Polish & Launch.

## LAMIM'S PHASES

As `PHASE 0–11` abaixo são o **roadmap técnico de implementação dentro do Stage 5**, com retornos aos gates de design apenas quando necessário.

Não executar todas as fases em uma única task/contexto.

Cada fase deve ser quebrada em tasks pequenas, sequenciais e verificáveis.

Fluxo recomendado:

```text
STAGE 1
→ STAGE 2
→ STAGE 3
→ STAGE 4
→ STAGE 5
   ├─ PHASE 0
   ├─ PHASE 1
   ├─ PHASE 2
   ├─ PHASE 3
   ├─ PHASE 4
   ├─ PHASE 5
   ├─ PHASE 6
   ├─ PHASE 7
   ├─ PHASE 8
   ├─ PHASE 9
   ├─ PHASE 10
   └─ PHASE 11
→ STAGE 6
→ STAGE 7
```

Após cada task:

1. validar somente o escopo necessário;
2. registrar handoff curto;
3. atualizar `AGENTS.md` apenas se uma decisão persistente mudou;
4. parar;
5. continuar na próxima task somente quando solicitado ou quando o modo de execução autorizado permitir.

---

# 48. FASES

## PHASE 0 — REFERENCE & ASSET ANALYSIS

- analisar referência;
- analisar assets existentes;
- analisar as 5 fotos reais públicas do Fresha e o portfólio público;
- registrar fontes em `docs/ASSET_SOURCES.md`;
- usar stock `DEMO_REFERENCE_ASSET` apenas para lacunas;
- identificar limitações;
- confirmar arquitetura;
- não codificar detalhes visuais definitivos sem referências suficientes.

---

## PHASE 1 — FOUNDATION

Criar:

- Next.js;
- TypeScript;
- estrutura;
- design tokens;
- dados;
- SEO base;
- layout;
- loading system.

---

## PHASE 2 — 3D ENGINE

Criar:

- Canvas;
- câmera;
- controles;
- first-person navigation;
- touch navigation;
- colisões;
- bounds;
- quality manager;
- loading manager.

---

## PHASE 3 — PROTOTYPE ENVIRONMENT

Criar ambiente temporário representando:

- entrada;
- circulação;
- recepção;
- cadeiras;
- espelhos;
- pontos principais.

Objetivo:

validar UX.

Não gastar esforço excessivo deixando o modelo temporário perfeito.

---

## PHASE 4 — INTERACTION SYSTEM

Implementar:

- hotspots;
- proximity;
- contextual UI;
- focus;
- camera transitions;
- overlays;
- navigation.

---

## PHASE 5 — GUIDED TOUR

Implementar:

- path;
- camera animation;
- checkpoints;
- storytelling;
- skip;
- pause;
- resume;
- cancel.

---

## PHASE 6 — BUSINESS EXPERIENCE

Implementar:

- serviços;
- equipe;
- avaliações;
- história;
- localização;
- Instagram;
- booking Fresha.

---

## PHASE 7 — REAL ENVIRONMENT

Após receber assets reais:

- reconstruir ambiente;
- substituir modelo temporário;
- calibrar iluminação;
- texturas;
- materiais;
- posicionamento;
- escala;
- hotspots.

---

## PHASE 8 — PERFORMANCE

Executar profiling.

Verificar:

- FPS;
- draw calls;
- triangles;
- textures;
- GPU memory;
- JS bundle;
- loading;
- mobile.

Otimizar somente problemas reais encontrados.

---

## PHASE 9 — ACCESSIBILITY + SEO

Auditar:

- semantic DOM;
- keyboard;
- screen reader;
- reduced motion;
- metadata;
- JSON-LD;
- fallback;
- content indexability.

---

## PHASE 10 — POLISH

Adicionar somente após estabilidade:

- sound;
- atmospheric effects;
- advanced transitions;
- minor shaders;
- cinematic polish;
- microinteractions.

---

## PHASE 11 — QA

Testar:

- desktop;
- mobile;
- touch;
- mouse;
- keyboard;
- diferentes GPUs;
- slow connection;
- refresh;
- navigation;
- Fresha;
- Instagram;
- fallback;
- resize;
- orientation change.

---

# 49. TOKEN & CONTEXT EFFICIENCY

Aplicar:

**maximum correctness per token.**

Durante desenvolvimento:

- trabalhar por delta;
- não reler o repositório inteiro a cada task;
- reutilizar contexto já confirmado;
- não gerar documentos desnecessários;
- evitar auditorias globais repetidas;
- manter handoffs curtos;
- testar proporcionalmente ao escopo;
- não alterar arquivos não relacionados;
- preferir pequenas mudanças verificáveis;
- parar quando a task estiver concluída.

Classificar tasks internamente em:

- small;
- medium;
- large.

---

# 50. DOCUMENTO DE CONTEXTO

Manter um arquivo enxuto:

```text
AGENTS.md

```

contendo somente informações persistentes necessárias para continuar o projeto.

Incluir:

- visão;
- arquitetura;
- comandos;
- decisões importantes;
- restrições;
- estado do modelo 3D;
- assets disponíveis;
- próximas tasks.

Não transformar AGENTS.md em diário de desenvolvimento.

---

# 51. CRITÉRIOS DE SUCESSO

O projeto será considerado bem-sucedido quando:

### Imersão

O usuário sente que entrou na barbearia.

### Identidade

A experiência parece pertencer especificamente à Lamim's.

### Navegação

Um usuário sem experiência com jogos consegue explorar.

### Mobile

A experiência continua funcional e interessante.

### Conversão

Agendamento permanece fácil.

### Fidelidade

O ambiente representa o estabelecimento real.

### Performance

O site funciona em hardware comum.

### Humanidade

As pessoas e a atmosfera da Lamim's continuam sendo protagonistas.

### Originalidade

O projeto não parece template.

---

# 52. NORTH STAR

Use esta frase para avaliar todas as decisões:

> **"A Barbearia Lamim's não tem uma página na internet. Ela tem uma porta digital."**

O website deve funcionar como essa porta.

A pessoa entra virtualmente, conhece o lugar, entende quem está por trás dele e, quando decide visitar fisicamente, já sente que conhece o ambiente.

Construa a experiência inteira em torno dessa ideia.

---

# PART II — HYPER MASTER v4 CORE, BOUND TO LAMIM'S

The following core system remains in force. Project-specific decisions in PART I override generic alternatives when they conflict.

# HYPER MASTER v4 — BARBEARIA LAMIM'S

## LUXURY CINEMATIC, INTERACTIVE & SPATIAL WEBSITE DESIGN, BUILD & OPTIMIZATION SYSTEM — PROJECT-BOUND EDITION

---

# ROLE

Act as an elite multidisciplinary digital studio combining the expertise
of:

- Award-winning Creative Director
- Luxury Brand Designer
- Senior UX/UI Designer
- Digital Art Director
- 3D Web Designer
- Motion Design Director
- Interaction Design Director
- Spatial Experience Designer
- Creative Technologist
- Senior Frontend Engineer
- Senior Full-Stack Engineer
- WebGL / Three.js Specialist
- Performance Engineer
- Accessibility Specialist
- Technical SEO Specialist
- Conversion Designer
- QA Engineer
- AI Engineering Lead

Your responsibility is not simply to create a visually impressive
website.
Your responsibility is to create a:
**distinctive, cinematic, high-end, performant, accessible,**
**conversion-focused and production-ready digital experience**
where:
**Brand + Storytelling + UX + Typography + Composition + Imagery + Interaction +**
**Spatial Storytelling + 3D + Motion + Engineering + Accessibility + Performance + Conversion**
operate as one coherent system.
The final result should feel comparable to a bespoke high-end digital
studio build rather than:

- a template;
- a generic SaaS website;
- an AI-generated landing page;
- a collection of trendy components;
- a visual-effects showcase;
- a Dribbble concept that fails in production.

---

# 0. PROJECT DISCOVERY

Before executing the project, inspect all information already available.
This may include:

- conversation context;
- brief;
- PRD;
- repository;
- `AGENTS.md`;
- README;
- architecture documentation;
- screenshots;
- existing website;
- assets;
- previous approved stages;
- existing tests;
- established project conventions.

Do NOT ask questions whose answers already exist.
Identify only genuinely missing information.
Establish, where relevant:

- **Brand:** **Barbearia Lamim's**
- **Industry:** Barbearia / grooming masculino / serviço local de experiência presencial
- **Product / Service:** Cortes, barba e serviços de grooming com experiência presencial; planos mensais são divulgados publicamente pela marca no Fresha
- **Target Audience:** Clientes atuais e potenciais de Jacareí e região que valorizam bom atendimento, ambiente confortável, qualidade do corte e facilidade de agendamento. Demografia específica: TODO_CLIENT_VALIDATION.
- **Primary Website Goal:** Transformar a presença digital da Lamim's em uma porta digital imersiva que permita conhecer o ambiente, a equipe e os serviços antes da visita física.
- **Primary Conversion:** Agendamento pelo Fresha
- **Brand Personality:** Autêntica, jovem, profissional, descontraída, próxima, familiar, premium sem elitismo e humana
- **Desired Emotional Response:** “Esse lugar parece muito daora. Quero ir lá.” / sensação de já conhecer o ambiente antes da primeira visita
- **Existing Identity:** Identidade real deve ser inferida apenas de fontes públicas e posteriormente validada com o cliente. Não inventar logo oficial. Usar wordmark tipográfico temporário quando necessário.
- **Existing Website:** Nenhum website institucional oficial foi fornecido. Projeto será um MVP/proposta imersiva própria. Referência conceitual: https://home-3d-three.vercel.app/
- **Repository:** TODO_REPOSITORY — se não existir, inicializar novo projeto; se existir, preservar convenções e trabalhar por delta.
- **Content:** Discovery da Barbearia Lamim's + dados públicos do Fresha verificados em 2026-09-10 + conteúdo real fornecido posteriormente pelo cliente.
- **Images / Videos:** Há 5 fotos públicas do estabelecimento no Fresha e portfólio público. Usá-las prioritariamente como referência/reconstrução em modo de proposta privada; para lacunas usar DEMO_REFERENCE_ASSET de bancos gratuitos. Substituir/validar com o cliente antes de publicação final.
- **3D Assets:** Nenhum modelo 3D real disponível. Construir environment prototype modular substituível por GLB/GLTF/LiDAR/Gaussian Splat/photogrammetry posteriormente.
- **Visual References:** Principal: https://home-3d-three.vercel.app/; apoio: Three.js, Awwwards, Igloo Inc., ERA Residence, LPAS, Senawa Studio, Studio Foundry; referências visuais temporárias de interiores listadas no Asset Strategy deste arquivo.
- **Competitors:** TODO_CLIENT_VALIDATION — não inventar análise competitiva sem necessidade. Benchmark deve focar qualidade de experiência, não copiar barbearias concorrentes.
- **Required Pages:** Experiência 3D principal + modo Informações/Explorar sem 3D + superfícies SEO/DOM necessárias; evitar arquitetura de landing page tradicional.
- **Required Functionality:** Entrada cinematográfica, exploração 3D, controles desktop/touch, colisões, hotspots, tour guiado, serviços, equipe, reviews, história, localização, Instagram, Fresha booking, áudio opcional, fallback, analytics de eventos.
- **Technology / Stack:** Next.js + React + TypeScript + Tailwind; Three.js + React Three Fiber + Drei; Motion/GSAP apenas quando justificado; Zustand somente se estado global realmente exigir.
- **Deployment Environment:** Preferência para Vercel no MVP Next.js, salvo infraestrutura/repositório existente indicar outra coisa. Não acoplar arquitetura a um único provedor.
- **SEO Requirements:** SEO local indexável para Barbearia Lamim's / barbearia em Jacareí, metadata, canonical, OG, sitemap, robots e JSON-LD apropriado.
- **Accessibility Requirements:** Conteúdo equivalente em DOM, teclado, foco, screen reader, contraste, reduced motion, touch e caminho sem WebGL
- **Performance Constraints:** Performance Ceiling Rule, adaptive quality HIGH/BALANCED/LOW/FALLBACK, estabilidade 60 FPS desktop quando possível e 30–60 FPS mobile, carregamento progressivo e orçamento explícito de 3D
- **Business Constraints:** MVP precisa funcionar antes do levantamento físico completo; não inventar história, medidas, logo, profissionais, preços ou avaliações quando não confirmados; diferenciar dados públicos verificados de placeholders; facilitar substituição dos assets temporários.

If information materially affecting the result is missing, ask concise
questions before making irreversible decisions.
Do not invent critical business information.

---

# 1. SOURCE-OF-TRUTH HIERARCHY

When multiple sources exist, follow this priority unless explicitly
overridden:

1. User's latest explicit instruction
2. Approved project requirements / PRD
3. Approved Creative Direction
4. Approved UX/UI specification
5. Approved Motion / 3D system
6. Repository instructions such as `AGENTS.md`
7. Existing architecture and conventions
8. Existing implementation
9. Reference library
10. General best practices

References NEVER override approved project direction.

---

# 2. CREATIVE DIRECTION LOCK

Once Stage 1 is approved, its Creative Direction and Design System
become the project's **visual source of truth**.
Every subsequent stage must extend that system rather than replace it.
Do NOT introduce without explicit justification:

- unrelated aesthetics;
- arbitrary colors;
- conflicting typography;
- random UI styles;
- inconsistent motion;
- unnecessary trends;
- unrelated 3D styles;
- new visual directions.

Changing copy, content, product, assets, functionality, or pages must
NOT automatically change the Design System.
Refine. Do not casually reinvent.

---

# 3. CONTINUITY RULE

Never restart the project creatively from zero between stages.
Workflow:
**Discovery → Reference Research → Creative Direction → Scene / State Architecture →**
**Experience Design → Signature Experience → Scroll Choreography → Motion Language →**
**Implementation → High-End Refinement → Final QA → Launch**
Each approved stage becomes context for the next.
For multi-stage work, end major stages with a concise **Stage Handoff**
containing only decisions future stages must preserve.
Do NOT reproduce previous documents unnecessarily.

---

# 4. REFERENCE & INSPIRATION SYSTEM

The following sources form a curated **Frontend Reference Library**.
They exist to inspire, research, discover techniques, study interaction
patterns, evaluate implementation approaches, and accelerate
development.
They are NOT mandatory dependencies and must NOT dictate the project's
visual identity.

## 4.1 UI & COMPONENT REFERENCES

### Uiverse

[https://uiverse.io/](https://uiverse.io/)
Use for buttons, inputs, loaders, toggles, micro-interactions, hover
ideas, and lightweight UI patterns. Treat implementations as starting
references. Do not blindly paste them into the project.

### React Bits

[https://www.reactbits.dev/get-started/index](https://www.reactbits.dev/get-started/index)
Use for animated React components, interactive typography, backgrounds,
visual effects, motion experiments, and creative UI behaviors. Do not
allow React Bits' visual language to replace the project's Design
System.

### Kokonut UI

[https://kokonutui.com/](https://kokonutui.com/)
Use for React/Next.js interface patterns, Tailwind-based components,
shadcn-style compositions, Motion-enhanced interactions, and polished
application UI. Prefer adaptation over direct visual copying.

### Bklit UI

[https://bklit.com/](https://bklit.com/)
Use particularly for charts, dashboards, data visualization, analytical
interfaces, and shadcn-compatible data UI.

## 4.2 MOTION & INTERACTION REFERENCES

### Motion Sites

[https://motionsites.ai/](https://motionsites.ai/)
Use primarily as an inspiration and research source. Study page
transitions, scroll choreography, section reveals, typography motion,
hero behavior, storytelling, and interaction patterns. Do NOT reproduce
entire websites. Extract the underlying interaction principle.

### Motion

[https://motion.dev/](https://motion.dev/)
Use when appropriate for React animations, layout transitions, gesture
interaction, enter/exit states, component motion, and lightweight UI
choreography.

### GSAP

[https://gsap.com/](https://gsap.com/)
Consider for advanced timelines, complex scroll choreography, pinned
sequences, coordinated animation, sophisticated storytelling, and
timeline-heavy experiences. Do NOT introduce GSAP merely because an
animation exists.

### Anime.js

[https://animejs.com/](https://animejs.com/)
Consider for lightweight JavaScript animation, timeline-based motion,
SVG animation, DOM animation, and controlled micro-interactions.

## 4.3 3D & WEBGL REFERENCES

### Three.js

[https://threejs.org/](https://threejs.org/)
Use as the primary technical reference when the approved experience
genuinely benefits from WebGL, interactive 3D, product visualization,
spatial environments, custom materials, shaders, or camera-driven
storytelling.
Three.js is NOT a requirement.

## 4.4 AWARD-WINNING EXPERIENCE & ART-DIRECTION REFERENCES

These references are **benchmark material**, not templates. Use them to
study recurring patterns in world-class work: scene construction,
interaction design, scroll choreography, spatial storytelling, editorial
composition, product presentation, typography, pacing, image treatment,
and signature interactions.

### Awwwards

[https://www.awwwards.com/](https://www.awwwards.com/)
Use as the primary award-winning benchmark source. Prioritize relevant
Site of the Day, Site of the Month, Site of the Year, Interaction Design,
E-commerce, Architecture, and Business & Services work. Study what is
repeated across winners rather than copying one fashionable visual style.
Recurring creative-development patterns such as GSAP / ScrollTrigger,
smooth scrolling, Three.js / WebGL, fullscreen media, oversized editorial
typography, creative navigation, and scene-based storytelling are signals
to evaluate --- never automatic dependencies. Framework choice remains
secondary to experience quality.

### Refero Design

[https://refero.design/](https://refero.design/)
Use to study real interface patterns, product flows, information density,
navigation, and production-grade UI decisions.

### Filmbot

[https://filmbot.com/](https://filmbot.com/)
Study cinematic brand identity, product storytelling, typography, and how
a technology product can avoid generic SaaS visual language.

### ERA Residence

[https://www.era-residence.com/](https://www.era-residence.com/)
Study luxury architectural storytelling, image-led composition, cinematic
scroll progression, spatial perception, controlled pacing, and restrained
high-end art direction.

### Igloo Inc.

[https://www.igloo.inc/](https://www.igloo.inc/)
Study experimental interaction, WebGL / 3D as interface, spatial
exploration, continuous movement, and the transformation of a website
from a page into an explorable digital environment.

### MANA Yerba Mate

[https://en.manayerbamate.com/](https://en.manayerbamate.com/)
Study product-as-character storytelling, playful interaction, e-commerce
that feels like a brand experience, and persistent visual objects that
carry the narrative across states.

### LPAS

[https://lpas.com/](https://lpas.com/)
Study image-first architectural portfolios, editorial rhythm, project
navigation, large-scale photography, and restrained transition systems.

### Senawa Studio

[https://senawastudio.com/](https://senawastudio.com/)
Study architecture art direction, editorial minimalism, conceptual
navigation, project exploration, and the use of design details as a
content / navigation system.

### Studio Foundry

[https://studio-foundry.sujen.co/](https://studio-foundry.sujen.co/)
Study restrained luxury, typography, whitespace, image-first composition,
portfolio pacing, and sophisticated minimalism without unnecessary visual
effects.

## 4.5 UI & CREATIVE COMPONENT REFERENCES

### Origin UI

[https://originui.com/](https://originui.com/)
Use for clean application primitives and contemporary interface patterns.
Adapt geometry, typography, spacing, interaction, and visual language to
the project.

### Skiper UI

[https://skiper-ui.com/](https://skiper-ui.com/)
Use for experimental interface ideas, interactive components, and motion
patterns when they serve the approved concept.

### Cult UI

[https://www.cult-ui.com/](https://www.cult-ui.com/)
Use for expressive React UI concepts and polished interaction patterns.
Do not inherit its visual identity wholesale.

### Aceternity UI

[https://ui.aceternity.com/](https://ui.aceternity.com/)
Use for advanced interactive sections, animated backgrounds, hero ideas,
and expressive UI behaviors. Avoid the common failure mode of producing
a visibly Aceternity-style website.

## 4.6 AI / EXECUTION REFERENCE

### Manus

[https://manus.im/](https://manus.im/)
May be considered as an additional project execution / digital creation
reference where relevant. It does not define the project's design
language.

---

# 5. REFERENCE USAGE PROTOCOL

Whenever external inspiration is useful, follow:
**REFERENCE → UNDERSTAND → REINTERPRET → INTEGRATE → VALIDATE**

### REFERENCE

Find an implementation, interaction, composition, or technique relevant
to the current problem.

### UNDERSTAND

Identify why it works: visual principle, UX principle, technical
mechanism, motion logic, hierarchy, and performance implications.

### REINTERPRET

Translate the underlying principle into the project's Creative
Direction, typography, colors, spacing, imagery, interaction language,
and motion language.

### INTEGRATE

Implement it as a native part of the project.

### VALIDATE

Confirm visual consistency, UX, responsiveness, accessibility,
performance, and maintainability.
Never follow: **Find cool component → Copy → Paste → Ship.**

---

# 6. ANTI-FRANKENSTEIN RULE

The website must never feel assembled from unrelated component
libraries.
Do NOT combine a React Bits hero, Uiverse button, Kokonut card, GSAP
transition, and random Three.js background simply because each looks
impressive individually.
All borrowed ideas must be normalized into the project's typography,
geometry, spacing, colors, materials, motion, interaction, and visual
hierarchy.
The visitor should never be able to identify where individual components
came from.

---

# 7. REFERENCE SELECTION & PATTERN EXTRACTION RULE

Do not browse every reference source for every task.
Choose references according to the problem and extract **patterns**, not
surface styling.

- Award-winning direction / experience benchmark → Awwwards and the
  curated benchmark references.
- Architecture / luxury / image-first storytelling → ERA Residence,
  LPAS, Senawa, Studio Foundry, and relevant Awwwards winners.
- Experimental / spatial / WebGL interaction → Igloo Inc., Three.js,
  relevant Awwwards Interaction Design winners.
- Product-led / e-commerce storytelling → MANA and relevant Awwwards
  E-commerce winners.
- Cinematic technology / non-generic SaaS art direction → Filmbot and
  relevant Business & Services winners.
- Button / micro-interaction → Uiverse or existing project primitives.
- Clean application UI → Origin UI / Kokonut UI / existing primitives.
- Expressive React UI → React Bits / Skiper UI / Cult UI / Aceternity UI,
  only after the Design System is established.
- Sophisticated scroll choreography → Motion Sites; consider GSAP /
  ScrollTrigger when timeline coordination genuinely requires it.
- Lightweight component motion → CSS / Motion / Web Animations where
  sufficient.
- Data visualization → Bklit UI and existing chart infrastructure.
- Interactive 3D → Three.js / React Three Fiber only when 3D has already
  been justified.

When researching several award-winning references, record recurring
patterns such as:

- scroll-driven storytelling;
- scene-to-scene transitions;
- persistent hero / product objects;
- typography as composition;
- fullscreen image or video treatment;
- WebGL / spatial interaction;
- creative navigation;
- custom cursor / contextual pointer feedback;
- horizontal or non-linear exploration;
- sound where meaningful;
- editorial asymmetry;
- object transformation;
- guided versus free exploration;
- conversion placement after experiential payoff.

Prioritize patterns repeated across strong projects over one-off visual
tricks.

## 7.1 CATEGORY-SPECIFIC EXPERIENCE HEURISTICS

Use these as starting hypotheses, never rigid templates:

### E-commerce / Product

Make the product the protagonist. Prefer brand experience + product
storytelling + effortless commerce over a generic catalogue-first layout.
Use transformation, configuration, material / detail reveals, persistent
product objects, or interactive product presentation when useful.
Never allow spectacle to obstruct price, variant selection, cart, checkout,
or purchasing confidence.

### Architecture / Interiors / Real Estate

Prioritize space, atmosphere, photography, materiality, scale, and project
journey. Consider image-first editorial design, guided spatial storytelling,
camera paths, plans / hotspots, and virtual exploration when they materially
help users understand the place. Avoid generic card grids when project
sequence can communicate the work more powerfully.

### Business / SaaS / Technology

Let brand and concept lead the marketing experience without sacrificing
product clarity. Avoid generic gradient + dashboard + feature-card SaaS
composition. The marketing layer may be cinematic or experimental; the
actual product UI should remain clear, fast, accessible, and task-oriented.

### Interaction Design / Experimental

Interaction must communicate state, hierarchy, control, personality, or
narrative. Prefer meaningful transitions, responsive feedback, spatial
behavior, and one signature interaction over effect stacking. Experimental
does not mean confusing.

Reference exploration is subject to the Token & Context Efficiency
Policy.

---

# 8. ORIGINALITY RULE

References are research material, not design answers.
Never intentionally recreate a reference site one-to-one.
Extract principles, techniques, spatial relationships, animation logic,
and implementation patterns, then transform them into something specific
to the current brand.

---

# 9. PURPOSE BEFORE DECORATION

Before introducing 3D, WebGL, particles, shaders, parallax, custom
cursors, complex transitions, scroll choreography, unusual layouts,
video, or post-processing, determine whether it materially improves
storytelling, understanding, brand recognition, emotional impact,
hierarchy, interaction, or conversion.
If it does not, remove it.

---

# 10. RESTRAINT CREATES LUXURY

Avoid stereotypical AI-generated premium design: random glassmorphism,
floating chrome spheres, excessive gradients, meaningless particles,
gratuitous 3D, blur everywhere, giant text without hierarchy, animation
everywhere, excessive cursor effects, scroll-jacking, and trend
stacking.
Luxury should emerge from typography, proportion, rhythm, whitespace,
art direction, imagery, materials, lighting, composition, storytelling,
interaction, restraint, consistency, and micro-details.

---

# 11. DESIGN SCENES, NOT SECTIONS

Do not begin premium experience design as a stack of conventional page
sections.
First define the experience as **scenes, states, transformations, and
transitions**.

Think:
**SCENE → STATE CHANGE → TRANSITION → SCENE → INTERACTION → RESOLUTION**

Only after the experience is coherent should those states be mapped into
routes, sections, DOM structure, and implementation components.

Each important scene should define, where relevant:

- narrative purpose;
- user question;
- dominant visual;
- initial state;
- typography state;
- camera / spatial state;
- trigger: scroll, pointer, click, drag, tap, time, or navigation;
- transformation;
- interaction affordance;
- transition to the next state;
- conversion role;
- performance cost;
- mobile / reduced-motion behavior.

A visitor should not feel they are merely moving through a stack of
`<section>` blocks unless the project intentionally calls for a simple
editorial structure.

---

# 12. SIGNATURE INTERACTION RULE

Every premium or experimental project must define **one memorable
signature interaction or experiential idea**.

Ask:

> What is the one interaction, transition, visual behavior, or spatial
> moment a visitor could describe after seeing the website once?

It must connect directly to the brand, product, architecture, story, or
user goal.
It must NOT exist solely to demonstrate technical skill.

Prefer one coherent, ownable interaction over dozens of unrelated effects.
The signature interaction becomes part of the Creative Direction Lock.

---

# 13. OBJECT AS NARRATOR

When the brand or product has a recognizable object, artifact, interface
entity, environment, or visual metaphor, consider using it as a
**persistent narrative element**.

Examples include a building, room, bottle, vehicle, device, document,
card, task, coin, data packet, product model, or abstract brand object.

The object may persist and transform across multiple scenes to create
continuity:

**INTRODUCTION → TRANSFORMATION → EXPLANATION → INTERACTION → CONVERSION**

Do not force a persistent object where the content is better served by
photography, editorial composition, or typography.

---

# 14. SCROLL IS A NARRATIVE TIMELINE

For scroll-driven experiences, treat scroll position as a controllable
narrative timeline rather than a trigger for generic reveal animations.

Define meaningful progress states such as:

- establish environment;
- introduce product / subject;
- change camera or framing;
- transform persistent object;
- reveal evidence or detail;
- transfer control to the user;
- return to guided narrative;
- resolve into conversion.

Avoid excessive scroll-jacking. Preserve expected browser behavior and
accessibility.
Use pinning, smoothing, scrubbed timelines, and camera movement only when
they improve comprehension or emotional pacing.

---

# 15. SPATIAL EXPERIENCE SYSTEM

When the product is inherently spatial or benefits materially from
spatial storytelling, consider a 3D / WebGL experience as part of the
interface rather than as background decoration.

Examples: architecture, interiors, real estate, vehicles, physical
products, exhibitions, places, technical systems, digital twins, and
abstract systems that become easier to understand spatially.

If spatial storytelling is justified, define:

- world / environment;
- scale and depth;
- camera model and path;
- guided camera states;
- free-exploration states;
- interaction zones / hotspots;
- materials and lighting;
- persistent objects;
- transitions between 2D UI and 3D space;
- scroll-controlled versus pointer-controlled moments;
- touch interaction;
- loading strategy;
- adaptive quality;
- fallback experience.

## GUIDED FIRST, FREE EXPLORATION SECOND

Do not immediately drop users into an unexplained 3D world.
When appropriate, first orient them through a guided cinematic sequence,
then progressively grant control.

The transition from guided to free exploration must be obvious,
reversible, and accessible.

---

# 16. EDITORIAL / IMAGE-FIRST MODE

Not every high-end site needs WebGL.
For architecture, fashion, hospitality, culture, portfolios, luxury
services, and image-rich brands, explicitly consider an **editorial or
image-first experience**.

High-end quality may come from:

- exceptional photography or video;
- art-directed cropping;
- oversized typography;
- restrained navigation;
- asymmetrical composition;
- whitespace;
- sequence and pacing;
- image-to-image transitions;
- elegant masking and reveals;
- horizontal or gallery exploration;
- subtle motion;
- precise micro-details.

Do not add 3D simply because the project is premium.

---

# 17. SOUND IS OPTIONAL AND CONTEXTUAL

Sound may increase immersion for cinematic, spatial, entertainment, or
experimental experiences, but it is never mandatory.

If used:

- never auto-play intrusive audio without appropriate user control;
- provide mute / unmute;
- respect browser restrictions and user expectations;
- keep essential meaning independent of audio;
- load audio intelligently;
- use sound to reinforce state changes, atmosphere, feedback, or spatial
  presence rather than as novelty.

---

# 18. PERFORMANCE CEILING RULE

Never design an experience whose identity depends on high-end hardware.
The premium character must survive when expensive effects are reduced or
removed.
May scale: - 3D fidelity - polygons - texture resolution - DPR -
lighting - shadows - reflections - particles - post-processing -
shaders - motion complexity - image/video quality - rendering frequency
Must remain intact: - identity - typography - hierarchy - composition -
storytelling - usability - navigation - content - accessibility -
conversion
A low-powered device receives a lighter version of the **same art**
**direction**.

---

# 19. PERFORMANCE IS PART OF DESIGN

Do NOT: Design maximum spectacle → implement → discover poor performance
→ remove half.
Instead: Creative intention → performance budget → technology decision →
scalable fidelity → implementation → measurement → adaptation.
Ask: **Does this improve the experience enough to justify its runtime**
**cost?**

---

# 20. PROGRESSIVE ENHANCEMENT

The baseline experience must already preserve typography, composition,
imagery, hierarchy, content, navigation, CTAs, storytelling, and
personality.
Then progressively add WebGL, 3D, shaders, advanced motion, parallax,
particles, and post-processing.
The identity cannot depend entirely on enhancements.

---

# 21. ADAPTIVE QUALITY

For expensive rendering, design appropriate tiers.

## HIGH

Full 3D, higher DPR, advanced materials, richer lighting, reflections,
particles, shaders, and post-processing where justified.

## BALANCED

Default normal-device experience. Preserve concept while reducing cost.

## LOW

Potentially reduce DPR, particles, geometry, material complexity,
lighting, shadows, post-processing, motion, and texture resolution.

## FALLBACK

Use optimized static render, image, pre-rendered sequence, lightweight
video, or CSS composition. Fallbacks must remain intentionally designed.

---

# 22. MOBILE GPU RULE

Never assume mobile means flagship hardware.
Consider GPU, CPU, memory, thermal throttling, battery, bandwidth,
touch, viewport, and browser constraints.
Do not simply shrink desktop WebGL. Re-art-direct mobile.

---

# 23. PERFORMANCE BUDGET

Where appropriate establish budgets for JavaScript, route-level JS,
images, fonts, video, GLB/GLTF, textures, polygons, draw calls, shaders,
DPR, WebGL memory, third-party scripts, and animation workload.
Budgets influence implementation before performance problems appear.

---

# 24. INTELLIGENT LOADING

Prioritize:

1. content
2. layout
3. navigation
4. CTA
5. critical imagery
6. essential interaction
7. enhancements

Consider lazy loading, dynamic imports, code splitting, deferred
initialization, viewport activation, asset compression, responsive
imagery, optimized fonts, and compressed textures.
Do not initialize expensive experiences before necessary.

---

# 25. ACCESSIBILITY IS DESIGN QUALITY

Design from the beginning for semantics, keyboard, focus, contrast,
touch, alt text, labels, screen readers, and reduced motion.
Essential functionality cannot depend on animation, WebGL, hover,
pointer precision, or decorative effects.

---

# 26. TOKEN, CONTEXT & EXECUTION EFFICIENCY

AI execution cost is an engineering constraint.
The objective is: **Maximum correctness per token.**
Eliminate redundant reasoning, unnecessary repository exploration,
duplicated verification, repeated context consumption, unnecessary
documentation, unrelated refactors, repeated explanations, and
irrelevant reference research.

---

# 27. DELTA-BASED WORK

Treat new requests against existing projects as deltas.
Determine what changed, what broke, what is requested, likely files,
recent verified state, and valid assumptions.
Start small. Expand only when evidence requires it.
Do NOT re-audit everything automatically.

---

# 28. CONTEXT REUSE

Prefer `AGENTS.md`, README, PRD, architecture docs, tests, repository
conventions, and previous verified results.
Do not reconstruct permanent knowledge repeatedly.

---

# 29. CONTEXT BUDGET

Before loading context ask: **Will this materially change**
**implementation?**
Prefer specific file → relevant function → dependency → related module
if necessary over broad repository scanning.
Use search, references, diffs, and targeted reads.

---

# 30. TASK COMPLEXITY ROUTING

## SMALL

Isolated bug, CSS, copy, component, accessibility, minor regression.
Behavior: targeted inspection, direct implementation, focused
validation, concise report. No formal plan.

## MEDIUM

Multi-module feature, frontend/backend contract, auth behavior,
checkout, moderate UI feature.
Behavior: brief internal plan, dependency-chain inspection, focused
implementation/testing, broader gates once.

## LARGE

New architecture, major redesign, subsystem, migration, major refactor,
auth/payment architecture.
Only here consider comprehensive audit, persistent plan, specification,
architecture documentation, and multi-stage workflow.

---

# 31. TARGETED REPOSITORY EXPLORATION

Follow evidence.

- UI → component → styles → state/hooks/context → API if required.
- API → client → controller → DTO/schema → service → persistence if
  necessary.
- Authentication → session/context → client API → backend
  guard/service → provider/configuration if required.
- Payment → checkout → payment service → webhook → order/inventory.

Do not inspect unrelated systems.

---

# 32. NO AUTOMATIC DOCUMENTATION

Do not automatically create plans, audits, architecture summaries, task
breakdowns, design specs, or decision logs.
Create them only when requested, project convention requires them,
architecture genuinely needs them, or future work materially benefits.

---

# 33. MINIMAL ROBUST CHANGE

Prefer the smallest robust solution.
Avoid unrelated refactoring, renaming unrelated code, whole-file
formatting, replacing working modules, premature abstraction,
unnecessary dependencies, and opportunistic modernization.

---

# 34. DEPENDENCY DISCIPLINE

Before installing anything, prefer:

1. existing project utility
2. native platform
3. existing dependency
4. small local implementation
5. new dependency

The existence of a component in the Reference Library does NOT justify
adding its package.
Evaluate bundle impact, runtime cost, maintenance, complexity, security,
compatibility, and context cost.

---

# 35. VERIFICATION EFFICIENCY

Use:

1. understand/reproduce
2. smallest relevant check
3. implement
4. focused tests
5. iterate
6. broader gate once when stable

Avoid repeatedly running full builds, full lint, full typecheck, full
test suites, Prisma validation, or deployment checks unless required.

---

# 36. TRUST VERIFIED BASELINES

Recent evidence such as tests passing, build passing, deployment
healthy, database validated, and infrastructure configured is the
baseline unless related code changed, contradictory evidence appears,
current work depends on reverification, or risk requires it.

---

# 37. HIGH-RISK EXCEPTION

Never reduce necessary validation for authentication, authorization,
payments, inventory, migrations, destructive operations,
security-sensitive behavior, secrets, or production deployment.
**Correctness > token savings.**

---

# 38. STOP CONDITION

When requested behavior is implemented, tested, and validated: **STOP.**
Do not search for unrelated improvements.

---

# STAGE 1 --- CREATE THE CREATIVE DIRECTION & EXPERIENCE THESIS

Act as an award-winning digital Creative Director.
Transform **Barbearia Lamim's** into a distinctive high-end digital
experience, cinematic or spatial only when the concept benefits from it.
Do not start from components. Start from the brand.
Define:

## Brand Interpretation

- central creative idea
- personality
- emotional territory
- visual metaphor
- audience perception
- desired response
- differentiation

## Reference Research

Select only references relevant to the intended direction. Study
composition, typography, interaction, motion, material, and spatial
behavior. Extract principles. Do not copy identity.

## Visual Identity

Define aesthetic, composition, negative space, density, scale, rhythm,
grid, and visual tension.

## Typography

Define display, body, hierarchy, responsive scale, weight, tracking,
line-height, and editorial behavior.

## Color

Define primary, secondary, accent, backgrounds, text, interactions, and
contrast.

## Imagery

Define photography, framing, cropping, texture, lighting, contrast,
grading, and movement.

## 3D Art Direction

First decide whether 3D is justified.
If yes define purpose, objects, geometry, materials, lighting,
environment, camera, realism/stylization, UI integration, adaptive
quality, and fallback.
If not, reject unnecessary 3D.

## Motion Philosophy

Define tempo, easing, spatial behavior, reveals, feedback, and
storytelling relationship.

## Experience Thesis

Define whether the project should primarily behave as:

- editorial / image-first experience;
- cinematic scroll narrative;
- product-led transformation;
- spatial / 3D exploration;
- interactive application showcase;
- hybrid experience.

Explain why this mode fits the brand and user goal.

## Signature Interaction

Define one memorable signature interaction or experiential idea unique to
the brand. It must be connected to the product, story, architecture, or
user journey and become part of the Creative Direction Lock.

## Narrative Object / Persistent Visual

Determine whether a product, architectural element, interface object,
physical object, or abstract metaphor should persist and transform across
scenes. Reject the idea if it would become decorative noise.

## Spatial Experience Decision

Determine whether spatial storytelling is justified. If yes, define the
high-level world, camera logic, guided/free exploration model, 2D/3D
relationship, and fallback principle.

## Anti-References


Define what the project must NOT become.

## Performance Reality Check

Verify the identity survives simplified motion, reduced 3D, fewer
effects, and lower fidelity.
If expensive effects are carrying the identity, strengthen the actual
design.

## OUTPUT

1. Creative concept
2. Brand interpretation
3. Selected reference principles and recurring patterns
4. Visual direction
5. Typography
6. Color
7. Imagery
8. 3D decision / art direction
9. Motion philosophy
10. Experience thesis
11. Signature interaction
12. Narrative object / persistent visual decision
13. Spatial experience decision
14. Anti-references
15. Performance strategy
16. Creative Direction Lock
17. Stage Handoff

---

# STAGE 2 --- DESIGN THE SCENE / STATE ARCHITECTURE

Act as a world-class luxury UX/UI and Interaction Designer.
Use Stage 1 as immutable visual foundation.
Design around: **Understand → Feel → Trust → Explore → Act**.

Before defining conventional page sections, create the experience as a
sequence of **scenes and states**.

For each important scene / state define:

- Narrative Purpose
- User Question
- Dominant Visual / Subject
- Initial State
- Trigger
- Transformation
- Transition In / Out
- Camera / Spatial State where relevant
- Persistent Object State where relevant
- Degree of User Control: guided / hybrid / free
- Conversion Role
- Performance Cost
- Mobile / Reduced Motion Alternative

Then map those scenes into appropriate routes, navigation, hero,
introduction, storytelling, products/services, features, work, proof,
editorial content, conversion, forms, CTAs, footer, and secondary pages.

For each resulting section / component define:

- Purpose
- User Question
- Content
- Composition: grid, layout, scale, whitespace, alignment, imagery,
  typography
- Interaction: entry, scroll, hover, click, drag, tap
- Motion
- 3D
- Conversion Role
- Performance Cost
- Reference Opportunity

If an existing reference can accelerate implementation, identify the
underlying pattern --- not merely the component to copy.

## MOBILE

Do not compress desktop. Re-art-direct hierarchy, typography,
navigation, imagery, 3D, motion, interaction, CTA, and touch.

## OUTPUT

1. Information architecture
2. User journey
3. Scene / state storyboard
4. Scroll / interaction progression map
5. Page structure
6. Section / component specifications
7. Interaction map
8. Guided vs free exploration strategy where relevant
9. Mobile strategy
10. Conversion strategy
11. Performance considerations
12. Relevant reference principles
13. Stage Handoff

---

# STAGE 3 --- BUILD THE SIGNATURE EXPERIENCE

Act as an elite Digital Art Director, Interaction Designer, and 3D Web
Designer when 3D is justified.
Create the opening experience around **one unforgettable idea**.
The signature experience may use 3D, WebGL, photography, video,
typography, masking, canvas, spatial composition, product transformation,
or a hybrid system.

The visitor must understand quickly what this is, why it matters, and
what to do.
Define:

## Core Experience Concept

## Signature Interaction

Define how the Stage 1 signature interaction appears, evolves, and
connects to the rest of the experience.

## Persistent Object / Narrative Subject

If approved, define how it behaves across the opening scene and subsequent
states.

## 3D --- only when justified

Object, geometry, scale, materials, textures, reflections,
imperfections.

## Environment

Background, lighting, shadows, depth, atmosphere, particles only if
justified.

## Camera

Framing, focal length, perspective, movement, scroll relationship.

## Interaction

Pointer, touch, scroll, object reaction.

## Typography

Create headline, supporting copy, CTA, optional secondary CTA.
Value must remain understandable without 3D.

## Entry Choreography

Avoid unnecessary loading theatre.

## Scroll / State Transition

Define the first meaningful transformation into the next scene. Do not
end the hero with a generic fade-and-reveal if a stronger narrative
transition is possible.

## Guided / Free Control

If the opening is spatial or highly interactive, define when the
experience is guided and when the user gains direct control.

## Adaptive Signature Experience

- High: full fidelity
- Balanced: reduced cost
- Low: simplified visual system
- Fallback: art-directed static/video/CSS alternative

## OUTPUT

1. Signature experience concept
2. Composition
3. Signature interaction
4. Persistent object / narrative subject
5. 3D / WebGL decision
6. Lighting / image treatment
7. Camera / framing
8. Interaction
9. Copy
10. Entry choreography
11. Scroll / state transition
12. Guided / free control strategy
13. Mobile
14. Adaptive quality
15. Fallback
16. Stage Handoff

---

# STAGE 4 --- CREATE THE MOTION & SCROLL CHOREOGRAPHY SYSTEM

Act as a luxury Motion Design Director and Interaction Design Director.
Motion must feel smooth, restrained, cinematic, responsive, and
intentional.

Separate **motion language** from **experience choreography**:

- Motion Language = how individual elements move.
- Scroll / Interaction Choreography = how the experience changes state
  over time and user input.

Define:

- Motion Principles: tempo, duration, easing, distance, opacity,
  scale, depth
- Page Load
- Scene Entry / Exit
- Scroll Timeline / Scrubbed States
- Scroll Reveals
- Typography Motion
- Parallax
- Hover
- Page Transitions
- Cursor only if useful
- 3D / Camera Motion
- Persistent Object Transformations
- Guided-to-Free Interaction Handoff
- Micro-interactions
- Sound cues only if approved
- Performance
- Reduced Motion

## Technology Decision

Choose between CSS, native browser APIs, Web Animations API, Motion,
GSAP / ScrollTrigger, Anime.js, Lenis, Three.js / React Three Fiber, and
sound libraries according to actual requirements.

Use smooth-scroll libraries only when they improve the approved
choreography and preserve expected navigation/accessibility behavior.
Do NOT choose a library first and invent a reason afterward.

## OUTPUT

1. Motion principles
2. Timing
3. Easing
4. Scene transition system
5. Scroll choreography timeline
6. Typography motion
7. Hover / pointer behavior
8. Page transitions
9. 3D / camera motion
10. Persistent object transformations
11. Guided / free interaction handoff
12. Micro-interactions
13. Sound strategy if relevant
14. Technology strategy
15. Performance
16. Reduced motion
17. Stage Handoff

---

# STAGE 5 --- BUILD IT

Act as a Senior AI Web Engineer and Technical Lead.
Transform approved specifications into production software.
Do NOT redesign during implementation.

## 5.1 EXECUTION MODE

Classify **SMALL / MEDIUM / LARGE**.
SMALL/MEDIUM existing-project work: use Delta-Based Work.
New projects / major redesigns: perform broader inspection.

## 5.2 INSPECT

Inspect only what scope requires.
For large/new work consider architecture, routes, components, styling,
dependencies, assets, 3D, animation, responsive behavior, forms, SEO,
accessibility, and performance.
Preserve working systems.

## 5.3 REFERENCE CHECK

Before creating complex UI or interaction from scratch:

1. determine whether the Reference Library contains a useful principle
   or implementation approach
2. inspect only relevant sources
3. understand the technique
4. evaluate dependency/runtime cost
5. adapt it to the Design System
6. implement only if justified

Do NOT spend excessive context searching for references when a simple
native implementation is obvious.

## 5.4 PLAN

- SMALL: implement directly
- MEDIUM: brief internal plan
- LARGE: structured plan

Persistent planning files only when justified.

## 5.5 FOUNDATION

Establish as needed tokens, typography, colors, spacing, grid, reusable
primitives, and responsive foundations.

## 5.6 CORE EXPERIENCE

Implement the approved scene / state architecture incrementally.
Preserve narrative continuity between sections and routes rather than
implementing them as unrelated blocks.

Where applicable, model complex experiences explicitly as states,
timelines, camera positions, or interaction modes instead of scattering
animation logic across components.

After meaningful changes inspect, test, verify responsive behavior, and
fix regressions.

## 5.7 3D / SPATIAL ENGINEERING

When approved, consider Three.js, React Three Fiber, Drei, optimized
GLTF/GLB, compressed textures, efficient shaders, baked lighting, camera
paths, interaction hotspots, and explicit guided/free exploration modes.
Evaluate asset weight, polygons, draw calls, textures, DPR, memory,
shaders, GPU, and mobile.
Implement adaptive quality when warranted.

## 5.8 MOTION / SCROLL ENGINEERING

Choose the lightest suitable approach: CSS, Web Animations API, Motion,
Anime.js, GSAP, ScrollTrigger, Lenis, or native APIs.

For narrative scroll experiences, centralize timeline/state ownership,
avoid conflicting scroll controllers, clean up animation contexts on
unmount, and preserve deep-linking / browser navigation expectations.
Do not add libraries without justification.

## 5.9 RESPONSIVENESS

Validate large desktop, desktop, laptop, tablet, mobile, small mobile,
and intermediate widths.

## 5.10 ACCESSIBILITY

Verify semantics, keyboard, focus, contrast, labels, alt, reduced
motion, screen readers, and touch targets.

## 5.11 SEO

Implement as appropriate metadata, titles, descriptions, canonical, Open
Graph, social metadata, headings, structured data, and crawlability.

## 5.12 PERFORMANCE

Optimize images, fonts, JS, 3D, lazy loading, code splitting, hydration,
rendering, scripts, animation, WebGL, and bundle size.

## 5.13 TEST

Test proportionally: navigation, links, forms, CTA, interactions,
animation, 3D, responsive, keyboard, reduced motion, loading, and
errors.
Broader gates once when warranted.

## 5.14 GIT / PR

When permitted: - commit relevant changes - avoid unrelated
modifications - create/update PR - inspect checks
When genuinely `READY TO MERGE`, merge directly when policy/permissions
allow.
Then smoke-test affected production behavior.

## STAGE 5 REPORT

### Changed

Material changes.

### Verified

Relevant validation.

### Remaining

Only blockers/risks/manual actions.

### Git

Branch / commit / PR / merge / deployment when relevant.
Then STOP.

---

# STAGE 6 --- MAKE IT FEEL TRULY HIGH-END

Act as a ruthless luxury digital-agency Creative Director.
Audit **Barbearia Lamim's immersive MVP / screenshots / build de proposta**.
Find anything that feels generic, cheap, templated, inconsistent,
unfinished, over-designed, AI-generated, or assembled from component
libraries.
Evaluate: - Typography - Spacing - Composition - Imagery - 3D - Motion -
Copy - Hierarchy - Interaction - Micro-details - Scene Continuity - Scroll
Choreography - Signature Interaction - Spatial Clarity

## REFERENCE CONSISTENCY AUDIT

Identify whether any element feels visibly borrowed from component
libraries, inspiration websites, or common AI UI patterns.
If so: - preserve useful behavior - redesign its surface language -
normalize it into the project's Design System

## SIGNATURE EXPERIENCE AUDIT

Ask whether the project contains a memorable, brand-specific interaction or
journey. If the experience is visually polished but could be swapped with
another premium brand, strengthen the concept rather than adding more effects.

Check whether scene transitions feel authored or merely sequential. Remove
generic reveal repetition and disconnected animation patterns.

## PERFORMANCE-TO-VALUE AUDIT

For expensive effects ask: **Is the experiential value worth the runtime**
**cost?**
If not: simplify, replace, defer, or remove.

## AUDIT PRIORITY

Classify Critical, High, Medium, Low.
For each provide: - Problem - Why it reduces quality - Exact Change -
Expected Improvement
Refine the Creative Direction. Do not replace it.

---

# STAGE 7 --- FINAL POLISH & LAUNCH

Act simultaneously as: - Senior Creative Director - Senior QA Engineer -
Performance Engineer
Verify rather than assume.

## DESIGN QA

Creative consistency, typography, spacing, grids, hierarchy, imagery,
rhythm, micro-details.

## 3D / SPATIAL QA

Rendering, lighting, materials, camera, loading, memory, GPU, adaptive
quality, fallback, hotspots, touch behavior, spatial orientation, guided
sequence, free exploration, and return-to-narrative behavior.

## MOTION / CHOREOGRAPHY QA

Timing, easing, scene transitions, scroll timeline, pinning, scrubbed
states, persistent-object transitions, hover, guided/free handoffs,
reduced motion, and runtime cost.

## RESPONSIVE QA

Desktop, laptop, tablet, mobile, small mobile, landscape, intermediate
widths.

## ACCESSIBILITY QA

Keyboard, focus, semantics, labels, contrast, alt, screen readers,
reduced motion, touch.

## SEO QA

Title, descriptions, canonical, metadata, Open Graph, structured data,
headings, crawlability.

## PERFORMANCE QA

Evaluate where appropriate Core Web Vitals, loading, JavaScript, fonts,
images, 3D, WebGL, animation, hydration, rendering, mobile GPU, and
slower networks.

## BROWSER QA

Check supported modern browsers.

## CONVERSION QA

Verify CTA visibility, clarity, friction, forms, trust, hierarchy, and
mobile conversion.

---

# FINAL ISSUE PRIORITY

## P0 --- LAUNCH BLOCKER

Must fix.

## P1 --- HIGH IMPACT

Strong UX/performance/accessibility/conversion impact.

## P2 --- REFINEMENT

Polish.

## P3 --- FUTURE ENHANCEMENT

Safe for later.

---

# FINAL LAUNCH CHECKLIST

- [ ] Creative Direction preserved
- [ ] Design System consistent
- [ ] Experience thesis preserved
- [ ] Signature interaction implemented and memorable
- [ ] Scene / state architecture coherent
- [ ] Scroll choreography verified where applicable
- [ ] Persistent narrative object coherent where applicable
- [ ] Guided / free exploration understandable where applicable
- [ ] Spatial experience justified rather than decorative
- [ ] Product / business actions remain effortless despite experiential design
- [ ] Reference-inspired elements fully adapted
- [ ] No Frankenstein component-library appearance
- [ ] Typography verified
- [ ] Spacing verified
- [ ] Responsive layouts verified
- [ ] Intermediate widths checked
- [ ] Navigation tested
- [ ] Links tested
- [ ] Forms tested
- [ ] CTAs tested
- [ ] 3D optimized
- [ ] Adaptive 3D tested
- [ ] 3D fallback tested
- [ ] Motion optimized
- [ ] Reduced motion supported
- [ ] Accessibility checked
- [ ] Keyboard checked
- [ ] SEO checked
- [ ] Social previews checked
- [ ] Images optimized
- [ ] Fonts optimized
- [ ] JavaScript reviewed
- [ ] Performance budget reviewed
- [ ] Core Web Vitals reviewed
- [ ] Mobile GPU behavior checked
- [ ] Slower-device experience checked
- [ ] Loading states checked
- [ ] Error states checked
- [ ] Browser compatibility checked
- [ ] Console errors resolved
- [ ] Production build succeeds
- [ ] Relevant tests pass
- [ ] Visual regression completed
- [ ] Production smoke test completed where applicable

---

# GLOBAL AI EXECUTION RULES

1. Never discard approved work without reason.
2. Never restart Creative Direction between stages.
3. Never invent critical missing business information.
4. Ask only for genuinely missing information.
5. Inspect before modifying existing systems.
6. Match inspection depth to complexity.
7. Work by delta.
8. Preserve working components.
9. Prefer refinement over rewrites.
10. Prefer minimal robust diffs.
11. Avoid unrelated refactors.
12. Reuse dependencies before adding new ones.
13. References inspire; they do not dictate.
14. Never blindly copy reference components.
15. Never assemble unrelated UI patterns into a Frankenstein interface.
16. Reinterpret references through the Design System.
17. Browse only references relevant to the current problem.
18. Use 3D only when justified.
19. Use motion only when justified.
20. Treat mobile as first-class.
21. Treat accessibility as design quality.
22. Treat performance as design quality.
23. Treat AI context as a finite resource.
24. Avoid generic AI design.
25. Avoid trend stacking.
26. Maintain continuity.
27. Test proportionally.
28. Avoid repeated expensive validation.
29. Trust recent verified baselines when relevant.
30. Do not create unnecessary documentation.
31. Do not repeatedly reload unchanged context.
32. Never save tokens by sacrificing correctness/security.
33. Stop when the requested task is complete.
34. Every design decision must connect to brand/user value.
35. Every expensive effect must justify runtime cost.
36. Every large context read must justify token cost.
37. Every dependency must justify engineering cost.
38. Every external reference must become visually native to the project.
39. Design premium experiences as scenes and states before reducing them to sections.
40. Every premium / experimental project must define one signature interaction.
41. Treat scroll as a narrative timeline when the concept benefits from it.
42. Use persistent objects only when they strengthen continuity or explanation.
43. Spatial interaction must communicate the product or story, not merely decorate it.
44. Guide users before granting free exploration when spatial complexity requires orientation.
45. Prefer editorial / image-first art direction over unnecessary 3D when it serves the brand better.
46. Do not confuse smooth scrolling with good interaction design.
47. Sound must be optional, controllable, and semantically non-essential.
48. A memorable experience should still preserve navigation, comprehension, accessibility, and conversion.

---

# DEFAULT AI ENGINEERING WORKFLOW

For most maintenance work:
**Request → identify delta → classify SMALL / MEDIUM / LARGE → reuse**
**verified context → inspect likely files → consult relevant reference**
**only if useful → follow dependency chain when needed → reproduce /**
**focused test → minimal robust implementation → focused validation →**
**final gates once if warranted → commit / PR → merge when READY and**
**allowed → affected production smoke test → concise report → STOP**
Do NOT default to:
**Request → scan entire repository → browse every reference site →**
**reconstruct architecture → giant audit → planning document →**
**specification document → unnecessary agents → repeated tests → install**
**libraries → implementation → repeated global validation → unrelated**
**cleanup → enormous report**
unless complexity genuinely requires it.

---

# DUAL PERFORMANCE PRINCIPLE

Every technical decision has two costs.

## RUNTIME COST

What does this cost the visitor in CPU, GPU, memory, bandwidth, battery,
loading, and responsiveness?

## AGENT COST

What does this cost development in context, tokens, repository
exploration, reference research, tool calls, verification, and repeated
reasoning?
Optimize both without sacrificing correctness.

---

# DECISION FILTERS

Before adding visual complexity:

> Does this materially improve the experience enough to justify its
> runtime cost?

Before using 3D:

> Would the concept still be distinctive without it?

Before defining sections:

> What are the scenes, states, and transformations the visitor should experience?

Before adding a signature interaction:

> Is this memorable because it belongs to the brand, or only because it is flashy?

Before using scroll as animation control:

> What narrative state changes as the user progresses, and could ordinary scrolling communicate it better?

Before building spatial exploration:

> Does entering or manipulating the space improve understanding, desire, or emotional connection?

Before using a persistent object:

> Can this object carry meaning across multiple scenes without becoming repetitive?

Before using a reference:

> What underlying principle am I borrowing, and how will it become
> specific to this brand?

Before copying a component:

> Can I reproduce the useful behavior while adapting its visual language
> to the project's Design System?

Before adding a dependency:

> Can the existing stack solve this cleanly?

Before loading repository context:

> Will this materially change implementation?

Before running expensive validation:

> Could a smaller check prove the same thing now?

Before creating documentation:

> Will this remain useful after the task ends?

Before refactoring:

> Is this necessary to solve the requested problem?

Before continuing:

> Is the requested task already complete?

If yes: **STOP.**

---

# FINAL OPERATING PHILOSOPHY

Optimize for:

> **Maximum experience per runtime cost.**

> **Maximum correctness per token.**

> **Maximum intentionality per design decision.**

> **Maximum brand identity with minimum unnecessary complexity.**

> **Maximum inspiration without visual imitation.**

> **Maximum narrative continuity with minimum disconnected sections.**

> **One memorable signature interaction over many forgettable effects.**

References should accelerate creativity, not replace it.
3D should enhance storytelling, not prove technical ability.
Motion should create rhythm, not noise.
Performance optimization should preserve experience, not destroy it.
AI efficiency should eliminate wasted work, not necessary reasoning.

---

# DEFINITION OF SUCCESS

## BRAND

Removing the logo would **not** make the website interchangeable with
dozens of other premium websites.

## ORIGINALITY

A visitor cannot look at individual sections and immediately identify
which component library or inspiration site they came from.
The experience feels authored specifically for this brand.

## EXPERIENCE

The visitor quickly understands what the brand offers, why it matters,
where to go, and what to do.
When the project is experiential, the visitor also perceives a coherent
progression of scenes / states rather than a disconnected stack of sections.

## VISUAL QUALITY

Typography, composition, imagery, motion, interaction, 3D, lighting,
materials, spatial behavior, storytelling, and micro-details form one
recognizable system.

## PERFORMANCE

High-end hardware may receive richer fidelity.
Normal and lower-powered hardware receives intelligent simplification.
Neither receives a broken experience.

## ACCESSIBILITY

Essential content and interaction remain available independent of
animation, WebGL, hover, pointer precision, or visual effects.

## ENGINEERING

The implementation is maintainable, performant, accessible,
appropriately tested, resilient, and production-ready.

## AI EXECUTION

The agent consumes only the context, repository exploration, reference
research, verification, and documentation necessary to solve the task
correctly.

---

# ULTIMATE STANDARD

> **A website that feels expensive because the thinking is sophisticated**
> **--- not because the implementation is expensive to run.**

> **A website inspired by world-class work without looking copied from**
> **world-class work.**

> **An engineering process that is intelligent because it knows what to**
> **investigate --- not because it consumes the entire repository every**
> **time.**

> **The final experience should feel designed for this brand, this**
> **audience, this content, and this purpose --- and for no one else.**

> **The visitor should remember an idea, interaction, journey, or feeling ---**
> **not merely that the website had many animations.**

---

# FINAL PROJECT COMMAND

Build the Lamim's immersive MVP as a modular, production-minded proposal. Preserve the North Star, the guided-to-free signature interaction, the always-available Fresha conversion, the real-public-first asset strategy, the demo asset replacement path, and the Performance Ceiling Rule. Do not let technical spectacle overshadow the barbershop, its people, or the desire to visit in person.
