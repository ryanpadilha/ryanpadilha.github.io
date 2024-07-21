---
layout: post
title:  "Como passar no exame AWS Cloud Practitioner"
author: ryanpadilha
categories: [ Certification, Cloud Computing, AWS ]
image: assets/images/ct-2/aws-certified-cloud-practitioner-cover-v.png
#description: ""
featured: false
hidden: false
comments: false
#rating: 4.5
---


A <a href="https://aws.amazon.com/" target="_blank">Amazon Web Services</a> atualmente é o maior provedor de computação em nuvem do mundo segundo o <a href="https://aws.amazon.com/blogs/aws/aws-named-as-a-leader-in-the-2022-gartner-cloud-infrastructure-platform-services-cips-magic-quadrant-for-the-12th-consecutive-year/" target="_blank">quadrante mágico do Gartner report</a>. Isso demostra seu profundo comprometimento com a evolução dos serviços em nuvem e de sua expansão constante de infraestrutura ao redor do mundo. Dentre outras opções do segmento encontramos a Microsoft com o **Microsoft Azure** e o Google com o **Google Cloud Computing**.


### TL;DR


Direto ao ponto, caso não queira ler o artigo na íntegra:


1. Página oficial sobre todos os detalhes da certificação <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank">AWS Cloud Practitioner</a>


2. Resumo geral por tópico dos serviços AWS exigidos no exame por <a href="https://digitalcloud.training/category/aws-cheat-sheets/aws-cloud-practitioner/" target="_blank">Digital Cloud</a>


3. Curso completo do Stephane Maarek pela plataforma Udemy <a href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new" target="_blank">AWS CLF-C02</a>


4. Banco de questões práticas gratuito sobre o conteúdo do exame por <a href="https://www.examtopics.com/exams/amazon/aws-certified-cloud-practitioner-clf-c02/" target="_blank">Exam Topics</a>


5. Conjunto completo pago de vídeo aulas, laboratórios e simulados por <a href="https://www.whizlabs.com/aws-certified-cloud-practitioner/" target="_blank">Whizlabs</a>


6. Questões práticas sobre o exame de forma paga por <a href="https://portal.tutorialsdojo.com/courses/aws-certified-cloud-practitioner-practice-exams/" target="_blank">Tutorial Dojo</a>




### Introdução


Abordaremos neste artigo sobre a certificação de entrada a <a href="https://aws.amazon.com/pt/certification/certified-cloud-practitioner/" target="_blank">AWS Cloud Practitioner</a>, que valida a compreensão básica de alto nível de seus diversos serviços e a terminologia empregada em sua nuvem. Com essa certificação temos a oportunidade de conhecer de forma ampla todas as siglas utilizadas pela AWS, assim como o que cada respectivo serviço realiza e como opera de forma superficial, sem adentrar profundamente em detalhes e conceitos técnicos. Sendo assim, ela é indicada para toda e qualquer pessoa que queira conhecer sobre os serviços da AWS sem o aprofundamento técnico, ou seja, ideal para gerentes de negócios e o pessoal de vendas, consequentemente para pessoas envolvidas diretamente com a área de infra-estrutura e desenvolvimento que necessitarão posteriormente de conhecimento com maior profundidade, caso decidam continuar em sua jornada de formação cloud na AWS.


Apesar de ser introdutória, essa certificação irá exigir tempo de estudo, pois até a escrita deste artigo, a AWS possui cerca de 200 serviços, mas apenas os principais serão abordados no exame. O que eu quero dizer é que será necessário dedicação no tempo de estudo e a escolha correta do material de estudo deve abranger todos os tópicos da prova, assim como realizar diversos simulados antes de agendar o exame. Eu particularmente quando decidi realizar o exame, estudei por dois mês os conceitos gerais da AWS e realizei 6 simulados com aproveitamento superior a 80%. Um ponto importante a considerar no tempo de estudo é sua experiência prática prévia em *cloud computing*.


Devemos criar uma rotina de estudos, para não perdermos de vista o objetivo de aprender com consistência sobre os serviços da AWS, assim como escolher uma data para a realização do exame e já agendar a prova, com isso criamos um senso de urgência, em nos comprometermos em estudar, realizar os simulados idealmente com aproveitamento superior ou igual a 80% para que estejamos confortáveis para sermos aprovados no dia do exame de certificação.


Além de abordar os assuntos da certificação, vou ampliar a abordagem adicionando minha percepção de como foi a minha jornada e realização do exame.


Para dar início e já começarmos a ver como funciona o exame e como podemos realizar um agendamento, devemos criar primeiro uma conta no portal **AWS Training and Certification**, <a href="https://skillbuilder.aws/" target="_blank">clicando aqui</a>. Nessa página encontraremos um botão para realizar o *sign in*, nos será perguntado qual o método de login utilizado, no caso podemos criar uma nova conta ou utilizar alguma conta já criada na **AWS Builder ID**.


### Overview da certificação


#### 1. Conteúdo


O conteúdo do exame é dividido em domínios, em cada domínio temos um percentual de questões. Não existe uma ordem pré-estabelecida no exame referente as questões por domínio, entretanto sua abrangência cobre todo o escopo definido. Através da figura 1.1 vemos quais são os domínios principais do exame e seu contexto em percentual. A prova de exame atualmente está em sua segunda versão, podemos observar pelo diagrama o que mudou no percentual de perguntas no exame ao longo do tempo, da versão **C01** para a **C02**.






![alt text](/assets/images/ct-2/aws-cloud-practitioner-cover-domains.png)
Figura 1.1 - Overview da prova de certificação versão C01 e C02 *atual.


O conteúdo do exame aborda:


1) Conceitos principais básicos de [cloud computing](https://aws.amazon.com/pt/what-is-cloud-computing/), como é seu funcionamento comparado aos modelos de computação on-premise, a proposição de valor da AWS, em seu conceito de economia de escala; os princípios de um bom design levando em consideração o **AWS Well-Architected Framework** (existe um curso completo voltado a este <a href="https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html" target="_blank">framework</a>), é uma boa ideia antes de realizamos a prova fazer este curso, pois ele é completo e aborda as boas práticas em diversos pilares de operação com excelência na AWS; benefícios e estratégias de migração para a cloud computing e quais ferramentas suportam este processo; e por último aspectos voltados a economia ao adotar um modelo de provisionamento *pay as you go*.




2) Modelo de responsabilidade compartilhada (<a href="https://aws.amazon.com/compliance/shared-responsibility-model/" target="_blank">shared responsibilty model</a>), onde vemos que o provedor de cloud computing detém responsabilidade completa sobre a infra-estrutura física  compartilhando conosco a responsabilidade de execução de workloads de forma segura seguindo boas práticas e guidelines; o esquema de governança utilizado na AWS e suas diversas ferramentas de segurança; ferramentas de controle de acesso, auditoria e privilégios.




3) Cobertura dos principais <a href="https://aws.amazon.com/security/" target="_blank">conceitos de segurança de rede</a> e boas práticas, como utilizar serviços para proteger recursos e detectar acessos indevidos, criptografia em repouso e em trânsito, políticas de credenciais e chaves de acesso, dentre outros conceitos relacionados. Quando falamos em segurança é importante sabermos como é projetado uma rede pública e privada na AWS, assim como seus diversos componentes de rede relacionados.



4) Compreensão dos custos relacionados a recursos dentro de uma rede de computadores na cloud computing, ponto onde encontramos um comparativo entre diversas opções de provisionamento, taxas de tranferência entre regiões. Existe uma <a href="https://calculator.aws/" target="_blank">calculadora</a> que pode ser utilizada para estimar o custo do desenho de solução executada na AWS. Acredito que muitas pessoas ainda tem dúvidas sobre o modelo de cobrança da AWS, no mercado encontramos a disciplina de **FinOps**, que trata de controle de custos ao longo de projetos executados em cloud computing, o que deve ser constantemente analisado de perto, descomissionando ou redimensionando workloads ao longo do tempo para um efetivo *ROI (return on investment)*.




5) Conceito sobre os serviços da AWS separados em seções incluindo computação, networking, database e armazenamento. **É aqui onde dedicamos mais tempo**, não que as outras partes não sejam importantes, mas aqui devemos nos aprofundar nos conceitos e siglas da AWS. Não é necessário aprofundamento técnico mas devemos saber o que cada serviço faz, como é executado, alguns configurações possíveis e em qual escopo de negócio ele se encaixa. Com o **<a href="https://aws.amazon.com/iam/" target="_blank">IAM</a> - Identity Access Management** é abordado o processo de gerenciamento de usuários, policies e roles dentro de uma organização, configuração de AWS CLI, MFA e chaves de acesso; em **<a href="https://aws.amazon.com/pt/ec2/" target="_blank">EC2</a> - Elastic Computing Cloud** como é realizado a criação de uma máquina virtual gerenciada, tipos de instância, funcionamento de security groups, e acesso SSH; **<a href="https://aws.amazon.com/pt/ebs/" target="_blank">EBS</a> - Elastic Block Storage** como é ciclo de provisionamento de disco para máquinas virtuais EC2, snapshot, e criptografia; **<a href="https://aws.amazon.com/pt/elasticloadbalancing/" target="_blank">ELB</a> e <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html" target="_blank">ASG</a> - Elastic Load Balancer e Auto Scaling Group** onde temos uma visão geral do conceito de load balancer e como isso funciona integrado ao grupo de auto scaling de máquinas EC2; **<a href="https://aws.amazon.com/pt/s3/" target="_blank">S3</a> - Simple Storage Service** um dos principais serviços da AWS, onde temos diversas conceitos e modelos de configuração, aqui é necessário estudar com cuidado, pois o serviço apresenta ampla configuração e conceitos; banco de dados através de **<a href="https://aws.amazon.com/pt/rds/" target="_blank">RDS</a> - Relational Database Service** modelos bancos de dados relacionais e provisionamento, **DynamoDB** um banco de dados NoSQL persistente auto-gerenciado com uso de WCU e RCU, **ElastiCache** um banco de dados NoSQL em memória como o Redis, não vou entrar em detalhes sobre os outros bancos, mas é **importante estudar com cuidado essa seção**, pois muito se fala de modelos de persistência SQL, NoSQL e Analitics no exame; **<a href="https://aws.amazon.com/pt/vpc/" target="_blank">VPC</a> - Virtual Private Cloud** onde encontramos diversos conceitos de rede, como pública e privada, NAT Gateways, Network Access Control List (NACL), VPC Endpoints, private link, aqui o conteúdo é amplo, devemos nos atentar apenas as siglas e significados; **Route 53** é o serviço de DNS onde encontramos diversos conceitos relacionados ao gerenciamento de rotas; **CloudFront** serviço que oferece acesso de borda a diversos recursos diminuindo a latencia de rede; **Machine Learning** aqui temos um catálogo extenso de serviços como Rekognition, Transcribe, Polly, Lex, SageMaker; e outros conceitos gerais sobre os demais serviços como ECS, Lambda, Lightsail, API Gateway, Beanstalk, Code Commit, Code Deploy, Code Pipeline, CodeStar, System Manager SSM, SSM Parameter Store, SQS, SNS, Kinesis, CloudWatch, CloudTrail, EventBridge, X-Ray, WAF, Shield, KMS, Secrets Manager, Macie, Cognito, STS.


Importante notar que apenas relacionei diversos serviços, pois a lista é bem grande, salientando novamente que não precisamos saber em detalhes a forma de configuração e provisionamento de cada serviço, neste exame apenas precisamos saber o que cada serviço faz e como podemos utilizá-lo. O curso citado no TL;DR abrange em profundidade todos os serviços.


6) Identificação de casos de usos comuns para a utilização de soluções AWS. Dado determinado cenário podemos ser questionados quais seriam os serviços que atenderiam o problema em questão.




#### 2. Formato do exame


O exame é composto por 65 questões de única e múltipla escolha. Comparado a outros exames que realizei a prova não contém *"pegadinhas"*, mas avalia seu conhecimento sobre os serviços da AWS. Ao escolher uma resposta lembre sempre de analisar todas as opções. Relacionando a quantidade de questões com o tempo, encontramos questões com um enunciado longo, que pode levar tempo para entender e responder, se estiver em dúvida marque a questão para análise posterior, não perca muito tempo em uma determinada questão, avance ao longo do exame e volte depois nas questões marcadas.


Referente ao local da prova tempos a opção no momento do agendamento, selecionar entre um local físico, ou seja, um centro de certificação, do qual conta com um espaço reservado para a realização da prova e internet de boa qualidade, caso seja selecionado esta opção, podemos durante a prova sair do local da prova para ir ao banheiro ou beber água, entretanto o tempo da prova continua computando.


Já no outro formato que na minha opinião é melhor, é a realização do exame no conforto de sua casa, através do formato <a href="https://home.pearsonvue.com/Test-takers/OnVUE-online-proctoring.aspx" target="_blank">*online proctoring*</a>, onde ao realizar o agendamento do exame, selecionamos qual é o idioma da prova, e o idioma que iremos nos comunicar de forma online com o avaliador do exame. Geralmente esta etapa é bem tranquila, uma pessoa irá fazer algumas perguntas simples em inglês antes de iniciar o exame, entretanto devemos garantir alguns pontos:


- Possuir uma conexão de internet de alta velocidade e estável;
- Remover todos os objetos e monitores do local do exame, recomendo realizar a prova em um local fechado, pois não poderemos conversar com ninguém nem mesmo sermos interrompidos. Eu particularmente deixo apenas o computador na mesa do qual vou realizar o exame para evitar problemas;
- Mostre o ambiente ao examinador de forma direta, ele vai perguntar sobre o uso de relógio de pulso, então já retire se for o caso, outro ponto é o celular, mostre-o para ele e deixe em um lugar fora de seu alcance.


Aqui são pontos simples, basta deixarmos o ambiente organizado e todos os dispositivos eletrônicos fora de nosso alcance, somente o computador que realizaremos o exame é necessário.




#### 3. Duração


O exame é classificado como introdutório, ou seja, de conhecimento amplo e básico, entretanto pela quantidade de serviços e siglas que temos no provedor de nuvem, isso pode se tornar uma tarefa complexa. São **90 minutos para a realização da prova**, do qual eu aconselho que seja **realizada em língua inglesa**, pois praticamente todos os simulados de qualidade que você irá encontrar estão em inglês. Ao realizar o agendamento da prova, se você estiver em um país do qual o inglês não seja sua língua oficial, podemos solicitar uma extensão do tempo de prova para não nativos na língua em cerca de 30 minutos; mais uma vez, não recomendo realizar a prova em outro idioma, sendo esse tempo extra de grande ajuda.


Após criado a conta e logado na plataforma de certificação da AWS Training, podemos observar no canto superior direito o link para o **AWS CertMetrics**, acessado em *"Take an AWS Certification Exam"*, ou simplesmente clicando <a href="https://www.aws.training/Certification" target="_blank">aqui</a>. Na página de dashboard do CertMetrics, devemos procurar no menu lateral esquerdo pelo item *Exam Registration > Exam accommodations*, ao clicar nesse item seremos encaminhados para a tela de *"Requesting new accommodations (additional testing time for non-native English speakers)"*, sendo possível solicitar em 30 minutos a estensão da prova. Isso deve ser realizado uma única vez antes de qualquer agendamento de exame dentro da plataforma, caso seja agendado um exame sem realizar esse processo antes, o mesmo não será considerado.


Com isso logo ao selecionar a prova, na página da Person Vue, no topo superior com o nome da prova ao clicar no nome da prova será exibido a instrução de tempo estendido conforme a figura 1.2.


![alt text](/assets/images/ct-2/aws_pearson_vue_CLF-C02_AWS_Certified_Cloud_Practitioner-1024x706.png)
Figura 1.2 - Página de opções de exame no portal Pearson Vue.


Esse tempo adicional pode fazer toda a diferença ao realizar um exame com questões com enunciados longos em inglês.


#### 4. Dicas para o exame


**Preparação:**


1. Escolha um curso sobre o exame e assista as vídeo-aulas com consistência, ou seja, divida seu tempo em assistir todos os dias uma certa quantidade de vídeos, não queira terminar o curso em 1 semana. Precisamos de tempo para assimilar todo o conteúdo. Acredito que de 1 a 2 meses é um bom tempo para concluir um curso.


2. Cria uma conta gratuita no console da AWS para praticar sobre o que aprendeu nas aulas. Se sua conta for nova, existe um período chamado de <a href="https://aws.amazon.com/free/" target="_blank">*free tier*</a>, onde diversos serviços tem uma cota de uso gratuita válido por 1 ano, entretanto fica atento ao uso.


3. Pratique através de simulados e exercite o que aprendeu na teoria, isso faz toda a diferença na hora do exame, pois quanto mais simulados fizer melhor será sua pontuação. Refaça os simulados até obter nota igual ou superior a 80%. Eu particularmente faço de 6 a 8 simulados completos de 65 questões com assertividade de 100%, mas isso leva tempo, o mesmo simulado as vezes faço 3 ou 4 vezes e estudo o porque da resposta.




**Durante o exame:**


1. Mantenha a calma. Leia com cuidado o enunciado das questões, e as opções de resposta. Se uma questão parecer fácil, leia novamente. Use o processo de eliminação de respostas, geralmente há 2 parecidas e as demais opções são inválidas.


2. Não gaste muito tempo em uma determinada questão, se ainda tiver dúvidas, marque a questão para análise posterior. Geralmente marco questões que tenho dúvida para no final da prova revisitar e analisar com mais cuidado, pois complementando todo o questionário e sobrando tempo, fica mais fácil pensar com calma sobre qual resposta é a correta. Não deixa nenhuma questão sem responder.


3. Se sua prova for no modelo online, fique atento ao não ficar lendo as questões em voz alta, o examinador pode pensar que você está se comunicando com outra pessoa ou usando um dispositivo de voz para ajudar na prova. Outro ponto é colocar a mão na boca, fique com as mãos o tempo todo no teclado, lembre que a câmera ficará ligada durante todo o tempo do exame.


4. Lembre-se que você não poderá sair da sala durante a execução do exame online, então já deixe reservado um copo de água e vá ao banheiro antes.




#### 5. Conclusão


Atualmente no mercado vemos diversas empresas utilizando recursos provisionados em cloud para executar grandes workloads e aplicações. No mundo a adoção de cloud computing é uma realidade, com uma alta demanda por profissionais qualificados e certificados internacionalmente. A jornada de certificação é longa do qual vai demandar tempo de estudo e dedicação, pois a obtenção da credencial da certificação é apenas o resultado de um bom trabalho realizado ao aprender a teoria e colocar em prática o desenho de diversas soluções.


A visibilidade de mercado que uma certificação traz ao profissional é enorme, colocando-o em outro patamar em relação a outras pessoas. Isso demonstra ao mercado sua dedicação em se atualizar, dedicação aos estudos e principalmente seu poder de transformar os negócios trazendo qualidade ao ambiente de trabalho, aumentando a competitividade da empresa no mercado.


Caso tenha alguma dúvida sobre o processo de certificação AWS, entre em contato, será um prazer poder conversar sobre como podemos evoluir na carreira juntos trocando ideias.



