# Lamim's 3D Reconstruction — Estado do MVP

## Classificação atual

`APPROX_SPATIAL_LAYOUT` + `TODO_REAL_MODEL`

O ambiente existente é propositalmente modular e aproximado. Ele valida UX, câmera, controles, hotspots, tour, conversão, mobile e performance sem declarar medidas reais.

## Elementos sustentados pelas referências públicas

As fotos públicas confirmam que o espaço real possui elementos reconhecíveis de barbearia que devem orientar a reconstrução final, especialmente cadeiras, espelhos/estações, materiais de acabamento, iluminação e fachada.

## Elementos que NÃO devem ser tratados como fato no protótipo

- dimensões exatas;
- planta completa;
- distância entre estações;
- quantidade final/posição precisa de objetos;
- áreas não visíveis nas fotos;
- características estruturais não documentadas.

## Captura recomendada para a versão real

1. vídeo contínuo da entrada até o fundo do estabelecimento;
2. fotos das quatro direções a partir de pontos centrais;
3. fotos frontais de cada parede/estação;
4. medidas simples de largura, comprimento e pé-direito;
5. detalhes de piso, parede, madeira, metais e iluminação;
6. fachada e entrada com boa exposição;
7. se disponível, panorama 360°, LiDAR ou photogrammetry.

## Pipeline recomendado

- reconstruir no Blender ou solução equivalente;
- exportar GLB/GLTF;
- usar Draco/Meshopt quando trouxer ganho real;
- baked lighting/lightmaps como padrão;
- evitar reflexão dinâmica em todos os espelhos;
- considerar cubemap/reflection probe e somente um reflexo seletivo se necessário;
- limitar texturas e resolução por tier de qualidade;
- recalibrar `data/hotspots.ts`, sem espalhar coordenadas no código.
