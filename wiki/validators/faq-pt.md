# FAQ (PT)

## Traduções

* [Inglês](../validators/faq.md)
* Adicione seu idioma também através do [Github pull request](https://github.com/near/docs/pull/385)

## O que é um validador?

Usamos o termo validador para se referir a um nó que esteja engajado na construção e manutenção da rede. Existem três papéis para os quais os validadores são automaticamente selecionados:

1. Produtor de bloco
2. Produtor de pedaço de bloco
3. Pescadores são validadores

O produtor de bloco é responsável pela criação e transmissão do bloco que contém todos os pedaços atuais (blocos de fragmentos). Em comparação, o produtor de pedaços de blocos coleta transações para o fragmento dado.

A coleção de transações para o fragmento é chamada de um pedaço (chunk). Uma vez criado um pedaço e um bloco, a informação têm de ser comunicada a outros produtores de pedaços, pescadores e outros nós validadores na rede. Os pescadores e outros nós validadores fornecem segurança verificando a validade das transições de estado em blocos diferentes.

## Como posso me tornar um validador?

Você precisa de uma conta com valor suficiente de fundos. Siga a documentação [aqui](https://near-nodes.io/validator/staking-and-delegation) para entender como se tornar um validador, e [aqui](https://docs.near.org/docs/develop/node/validator/running-a-node) para executar um nó.

Passos mais específicos:
1. Crie um novo par de chaves que será usado para staking, para determinada conta, e carregá-lo com os fundos que você deseja colocar em stake
2. Inicie um nó com o novo par de chaves armazenado em `validator_key.json`
3. Envie uma transação de staking usando sua carteira / CLI com sua conta, incluindo o valor e a chave pública do par de chaves recém-geradas.
4. Aguarde até que o nó se torne um validador

>  **heads up**\
> \
>  Os validadores externos não podem se juntar à MainNet nem à TestNet, só podem testar seus nós na BetaNet. Mais informações abaixo

## O que é 'staking'?

Chamamos de staking um processo de envio de `StakeTransaction` que informa a rede que uma determinada conta deseja se tornar um validador nas próximas épocas. Este tipo específico de transação deve fornecer uma chave pública e um valor de staking. Depois que a transação for enviada, um nó que tenha uma chave privada associada com a chave pública da transação de staking deve esperar até duas épocas para se tornar um validador. **importante**: um nó pode se tornar um validador somente se o valor na transação de staking estiver acima do preço do lugar definido pelo protocolo.

## O que é uma época?

Uma época é o intervalo de tempo que consiste de várias rodadas de consenso. Note-se que não há garantia do número exato de rodadas de consenso. Atualmente, uma época dura cerca de metade de um dia e é usada para

* Medir o desempenho e uptime dos validadores
* Coletar as ofertas dos novos validadores

Para uma época, os validadores são atribuídos aleatoriamente em shards. Depois que a época acabar, os validadores são reorganizados e atribuídos a shards diferentes. Os validadores participam de várias rodadas de validação no decorrer da época. Para cada rodada, um dos validadores em cada shard é escolhido como produtor de chunks e um validador é escolhido de todo o conjunto de validadores para ser o produtor de blocos.

## Qual é a quantia mínima que deve ser colocada em stake como um validador?

Na MainNet, a quantidade mínima é dinâmica e é definida pela quantidade de tokens NEAR colocados em stake por outros validadores.

## O que é um comportamento de slashing?

Para dar segurança à sua rede Proof-of-Stake, o protocolo NEAR pune os validadores que fazem transições de estado inválidas. Um exemplo é a assinatura de dois blocos com a mesma altura (isso também é definido como um 'equívoco'). Quando isso acontece, o stake do validador é progressivamente destruído ou 'cortado', com base na entidade do ataque.

## O protocolo NEAR aplica slashing por falta de atividade?

Não. No entanto, o protocolo mede a atividade de cada validador e se os blocos gerados forem menos de 90% do esperado, o nó será expulso e perderá seu lugar. Neste caso, um validador pode re-fazer staking após duas épocas, e começar a assinar blocos novamente após três épocas.

## Quais são as responsabilidades de um validador?

Em linhas gerais, os validadores devem executar o nó e geralmente estar online. Além disso, eles precisam estar constantemente conectados ao [chat oficial do Slack](https://near.chat) no canal `#community-validator-announcement`, para o caso de emergências e hard forks futuros. Além disso, é muito importante manter as chaves privadas seguras, caso contrário os adversários podem usá-las para assinar blocos maliciosos e acionar o slashing do protocolo.

## Posso fazer stake em um shard diferente?

Não há como um validador escolher o shard. O protocolo atribui aleatoriamente validadores a shards no início de cada época. O nó possui uma época para baixar seu estado. Os nós NEAR têm uma rotina automática de 'coleta de lixo' que deleta o estado de shards anteriores após cinco épocas, para liberar armazenamento não utilizado. Grandes validadores terão que gerar blocos assinando em vários shards, portanto é importante dimensionar o servidor e a rede adequadamente.

## Como eu executo um nó?

Siga [este tutorial.](https://docs.near.org/docs/develop/node/validator/running-a-node)

## Os validadores recebem incentivos para testar o protocolo?

Não oferecemos recompensas aos validadores neste momento. No entanto, podemos oferecer recompensas por relatar bugs críticos ou contribuições valiosas para a base de código no [GitHub](https://github.com/near/nearcore). Fique de olho nos itens marcados como "good first issue" (bom problema para começar). Enquanto isso, junte-se ao canal `#community-validator-announcement` em nosso [Slack oficial](https://near.chat) para ser atualizado constantemente, e ser o primeiro a saber se tencionarmos oferecer incentivos no futuro.

## Como funciona a delegação de staking?

A NEAR não implementa delegação no nível do protocolo. Em vez disso, a NEAR permite que contratos inteligentes façam stake, porque na NEAR contas e contratos são a mesma coisa.

Assim, se os validadores quiserem aceitar stake delegado, eles têm de implementar um contrato com regras específicas sobre como funciona a delegação e a distribuição de recompensas e anunciar tal contrato como destino para delegar.  Veja a [documentação sobre delegação](https://near-nodes.io/validator/staking-and-delegation#how-does-delegating-staking-works) para mais detalhes.

## Onde posso encontrar a pasta neardev/?

_Ultima atualização: ???_

Uma vez que você executar 'near login', uma pasta, chamada 'neardev', será criada no diretório no qual você executou 'login near'.

## Posso ser um validador na rede TestNet?

_Ultima atualização: ???_

Atualmente não. As redes MainNet e TestNet são executadas apenas por um conjunto de validadores permissionados. Se você quiser testar a sua configuração, você pode configurar o seu nó para executar na BetaNet, seguindo o tutorial no [Github](https://github.com/nearprotocol/stakewars) e solicitando alguns tokens da BetaNet através [deste formulário](https://forms.gle/kZk2Gv79TB9qm3KP7).

## Por que meu nó foi expulso do processo de validação na BetaNet?

_Ultima atualização: ???_

Considerando que você esteja executando na betanet, você pode ser expulso por seu nó não estar produzindo blocos suficientes. Tente novamente ou relate um problema no [GitHub](https://github.com/nearprotocol/stakewars) se você estiver passando por problemas recorrentes.

Por favor, note que às vezes tivemos que reiniciar a BetaNet, e os nós podem precisar ser reinstalados para funcionar corretamente. Normalmente anunciamos essas atualizações em nosso canal oficial `#community-validator-announcement` no nosso [Slack oficial](https://near.chat) e no repositório Stake Wars no [Github](https://github.com/nearprotocol/stakewars).

## Após fazer login usando o NEAR CLI com 'near login', eu sempre recebo uma mensagem de erro “Exceeded 10 status check attempts.” Como posso resolver isso?

_Ultima atualização: ???_

Isso significa que algo está quebrado na carteira, por favor nos contate no Slack para investigar o problema.

## Alguém poderia me delegar como validador sem permissão?

_Ultima atualização: 20200501_

É importante recordar que a delegação não é implementada no nível do protocolo, o que significa que cada validador pode ter seu próprio contrato que ele usa para atrair delegadores. É esperado que a delegação não exija permissão, mas é claro que os validadores podem escrever seus próprios contratos de staking para que tenham permissão, se quiserem. Além disso, eles também decidem taxas de comissão e como a distribuição de recompensas funciona.

## Meu stake foi delegado mas as recompensas não estão aparecendo. Como posso vê-las?

_Ultima atualização: 20201022_

Se uma piscina de staking não teve uma ação aplicada a ela recentemente (como alguém delegando ou deixando de delegar), ela mostrará um saldo antigo em todas as contas com stake (o que pode aparecer na sua conta da carteira).  Para ver um saldo atualizado, você pode "pingar" a piscina. Veja a [documentação sobre delegação](https://docs.near.org/docs/validator/delegation) e procure por `ping` para saber como fazer isso.

Tem alguma dúvida?  [Pergunte no StackOverflow!](https://stackoverflow.com/questions/tagged/nearprotocol)
