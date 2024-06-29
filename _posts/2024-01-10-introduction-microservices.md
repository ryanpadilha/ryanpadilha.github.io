---
layout: post
title:  "Introdução a Microservices"
author: ryanpadilha
categories: [ Architecture, System Design, Microservices ]
image: assets/images/ct-1/image-3-2048x1248.png
featured: false
hidden: false
comments: false
---

Atualmente muito se fala a respeito de desenvolvimento de software utilizando uma arquitetura moderna, escalável e que seja de certa forma de baixo custo, entretanto, muitas pessoas não percebem que assim como existem diversos benefícios em uma nova forma de realizar o design de uma solução, há contra-tempos que na maioria das vezes invibializam o projeto a ser desenvolvido a depender do desenho arquitetural.

Uma arquitetura padrão surge em um horizonte recente denominada Microservices. Mas afinal, da onde surgiu, o que propõem esse novo modelo arquitetural e quais os benefícios que indivíduos e empresas podem obter utilizando essa nova proposta. O que parecia ser uma *modinha*, se tornou um padrão de mercado combinado com outros conjuntos de fatores trazidos pela *cloud computing*, ou melhor dizendo, computação em nuvem. Não faz sentido e nunca fará adotar um novo design de arquitetura apenas por influência de mercado, é necessário ir além e perceber de fato quais as consequências reais em adotar o modelo de Microservices em sua empresa e qual a maturidade que precisamos que nosso time tenha para que seja superado toda a complexidade trazida com um desenho de solução de computação distribuída.

**1. Microservices**

O conceito pode ser definido como uma unidade de software, ou serviço, baseado em determinado contexto e domínio de negócio que pode ser implatado de forma independente. Isso nos remete ao conceito já estabelecido no mercado de SOA (*Service-Oriented Architecture*), que apenas traz contexto e não diretivas sobre como deve ser modelado uma aplicação. O termo microservices, derivou de outro termo que estava sendo trabalhado ao observar um padrão em definição de arquiteturas orientada a serviços otimizadas, os *“microapps”*, cunhado em uma conferência sobre arquiteturas por volta de 2011 e 2012.

De forma prática neste design de arquitetura a comunicação entre os microservices ocorre via rede, com interfaces de comunicação através de endpoints bem definidos, ou seja, compõe um conjunto de serviços de negócios em uma espécie de sistema distribuído conforme exibido na Figura 1.1.

![alt text](/assets/images/ct-1/image-3-2048x1248.png)
Figura 1.1 – Exemplo de design de arquitetura de microservices. Fonte: microservices.io

Temos dois pontos principais a serem observados, o primeiro deles é a **implantação independente**, onde uma alteração e implantação em produção de determinado microservice não cause a sub-sequente atualização coordernada de outros serviços no conjunto de seu contexto de negócios. Na prática temos que possuir um <ins>baixo acoplamento entre os serviços</ins> com uma interface de negócios bem definida e estável, isso nos diz muito a respeito de quais são os reais limites ou o que de fato nosso serviço deve ser responsável. O segundo ponto consequentemente é **coesão nas funcionalidades de negócio**, ou seja, o <ins>domínio de negócio orienta a estrutura interna de composição</ins> de serviços, onde a organização das equipes se da em torno de cada domínio de negócio, e não mais em silos de base tecnológica como vimos tempos atrás em arquiteturas de 3 camadas (apresentação, lógica de negócios, e banco de dados).

**Vantagens**

- Implantação independente aumenta a escalabilidade e confiabilidade.
- Utilização de diferentes tecnologias (até certo ponto pode ser considerado).
- Escalabilidade de times baseado em silos de negócios.
- Compreensão sobre o negócio mais rápida por novos integrantes do time.
- Implantações mais rápidas pois a compilação leva menos tempo.
- Combinação de silos de negócios com silos de tecnologia em linhas de produto.

**Desvantagens**

- Complexidade do ambiente de produção de uma arquitetura distruída.
- Eventual indisponibilidade de serviços se a comunicação for síncrona.
- Latência de rede na comunicação entre serviços do ecossistema.
- Consistência eventual ou parcial dos dados em diversos serviços.
- Maturidade elevada em observabilidade, telemetria e infra-estrutura.

**Alguns pontos de observação**

- Interface gráfica deve ser separada também em microservices.
- Adoção de diversas tecnologias deve ser realizado com moderação.
- O tamanho de um microservice pouco importa, o foco deve estar em possuir um contexto bem definido com alta coesão no domínio de negócio.
- Quanto maior o número de microservices, maior será a complexidade a ser gerenciada, envolvendo mais componentes e peças de software.
- Uma operação pode ser invocada de três formas diferentes: chamadas síncronas e assíncronas de clientes, eventos publicado por outros serviços e aplicações, chamadas temporais.

Os conceitos abordados até aqui compõe apenas uma pequena introdução da arquitetura orientada a serviços, ou melhor dizendo, arquitetura de Microservices. Temos diversos assuntos a serem aprofundados em maiores detalhes, que serão explorados em diversos outros artigos ao longo do tempo. Mas antes disso, vamos entender melhor um conceito do qual precisamos para prosseguir na modernização de aplicações, que é a arquitetura de um só processo.

**2. Arquitetura Monolítica**

Quando falamos em um sistema monolítico ou com um design de arquitetura monolítica, isso significa que todas as funcionalidades de uma aplicação estam contidas e sendo executadas em apenas <ins>um processo computacional</ins>, geralmente sendo implantadas de uma única vez. Vale ressaltar que podemos categorizar as aplicações monolíticas em <ins>modular</ins> conforme apresentado na Figura 1.2 – sem ou com decomposição de base de dados por módulo; <ins>distribuída</ins> – um grande bloco com problemas de coesão de funcionalidades e alto acoplamento. Este último nos levando realmente a pensar em uma arquitetura que seja de fácil manutenção, que tenha baixo custo e que escale facilmente dependendo da demanda de acesso simultâneo.

Aplicações monilíticas não são sinônimo de legado, dependendo do problema a ser resolvido é uma opção super válida e coerente.

![alt text](/assets/images/ct-1/image-6-2048x862.png)
Figura 2.2 – Exemplo de design de arquitetura monolítica. Fonte: microservices.io

**Vantagens**

- Topologia de implemantação simples, apenas um ponto para monitoramento.
- Simplificação na reutilização de código-fonte, tudo está em um mesmo projeto.
- Não latência de rede envolvida na execução de chamadas de negócios.
- Transações são realizadas utilizando ACID simplificando o processamento.
- Escalabilidade vertical de forma simples, apenas aumentando os recursos de hardware, como CPU e memória RAM.

**Desvantagens**

- Alto custo de infra-estrutura ao realizar a escalabilidade horizontal.
- O processo de deploy é demorado, pois a pipeline precisa realizar o build de uma aplicação composta por diversos módulos distintos (todo o código-fonte).
- Dificuldade na escalabilidade de times, pois todos estão evoluindo ou realizando a manutenção na mesma base de código-fonte, eventuais conflitos de código podem acontecer.
- Evolução de tecnologia pode ser lenta, pois como todos os módulos possuem um forto acoplamento, mesma base tecnológica e artefatos relacionados ao desenvolvimento.

**3. Conclusão**

Com o surgimento e consolidação da cloud computing – com preços competitivos, alta escalabilidade e performance, e principalmente a facilidade em compreender e automizar a configuração da infra-estrutura – há de se notar que a arquitetura de microservices veio como uma peça que se encaixa perfeitamento nesse cenário de computação distruída.

Acredito que vivemos em um mundo diferente de algum tempo atrás, seja computacionalmente e de negócios, onde exploramos um mundo onde há alta volatilidade, grande incerteza, complexidade emergente, e uma ambiguidade ímpar. É preciso expandir nossos horizontes com tecnologias e desenhos de soluções mais modernos, onde podemos conseguir ótimos resultado, com baixo investimento financeiro – escalando cada vez mais os negócios e seus produtos.

