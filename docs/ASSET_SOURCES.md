# Asset Sources — Barbearia Lamim's

Última atualização: **2026-09-14**

## REAL_CLIENT_REFERENCE — fotos recebidas para o projeto

Quatro fotos reais do interior/atendimento foram fornecidas na conversa do projeto e passam a ser a referência visual prioritária do V2 procedural.

Versões web otimizadas incluídas no repositório:

1. `public/images/lamims/interior-stations.webp`
   - estações, espelhos, cadeiras pretas e chrome;
   - derivado de foto real recebida no projeto.

2. `public/images/lamims/interior-aisle.webp`
   - circulação central, paredes claras, piso cinza e vegetação;
   - derivado de foto real recebida no projeto.

3. `public/images/lamims/barbershop-in-use.webp`
   - ambiente em funcionamento e distribuição percebida das estações;
   - derivado de foto real recebida no projeto.

4. `public/images/lamims/service-closeup.webp`
   - atendimento, cadeira, espelho e leitura humana da marca;
   - derivado de foto real recebida no projeto.

### Tratamento técnico

- Fontes originais: PNG 1920px recebidos na conversa do projeto.
- Derivados de frontend: WebP, largura máxima de 1600px, qualidade 82.
- O objetivo é reduzir peso/banda sem alterar o conteúdo visual.
- As fotos são conteúdo real e também fonte de art direction para o 3D.

## REAL_PUBLIC_SOURCE — Fresha (referência histórica do MVP)

A listagem pública da própria Barbearia Lamim's no Fresha também foi usada na fase inicial como fonte visual e de conteúdo público.

Página pública do estabelecimento:
https://www.fresha.com/a/barbearia-lamims-sao-paulo-rua-olimpio-catao-440-bbzgjjyj

As URLs históricas verificadas em 2026-09-10 permanecem documentadas no histórico Git do projeto, mas o V2 deixa de depender de hotlink para a galeria principal.

## Uso no MVP

As referências reais podem orientar:

- materiais;
- luminosidade;
- cadeiras e chrome;
- espelhos;
- piso;
- vegetação;
- circulação e profundidade percebida;
- atmosfera humana do espaço.

Elas **não** devem ser usadas para:

- inferir medidas físicas exatas;
- afirmar uma planta arquitetônica precisa;
- classificar o MVP como digital twin;
- inventar áreas que não aparecem ou não foram confirmadas.

O ambiente continua classificado como `APPROX_SPATIAL_LAYOUT` até existir levantamento físico, planta, 360°, LiDAR, photogrammetry ou GLB/GLTF validado.

## Publicação final

Antes de publicação comercial definitiva, confirmar com o cliente o uso das fotos com pessoas identificáveis e dos demais assets recebidos. Se houver arquivos originais oficiais em qualidade superior, substituir os derivados mantendo os mesmos IDs/caminhos sempre que possível para evitar acoplamento desnecessário na UI.

## DEMO_REFERENCE_ASSET

Nenhum stock é necessário para o núcleo atual do projeto. Caso uma lacuna visual futura exija referência externa, registrar fonte/licença antes do uso.
