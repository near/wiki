---
id: staking-overview-pt
title: Orientações sobre Staking
sidebar_label: Orientações
---

# Sobre (PT)
## Traduções

* [Inglês](../validators/about.md)
* Adicione seu idioma também através do [Github pull request](https://github.com/near/docs/pull/385)

## Bem Vindo

Nesta seção você será introduzido aos princípios do staking e a como rodar seu próprio nó validador.

Protocolo NEAR usa Proof-of-Stake (PoS) para fazer a segurança da blockchain. Os _Validadores_ são a comunidade de operadores de nó que tomam conta do [consenso da blockchain](../resources/faq/integrator-faq.md#which-consensus-algorithm-does-near-use). Tecnicamente, os _nós validadores_ são servidores que agregam transações em blocos, os executam, e mantém o último estado da blockchain. Os donos desses nós, os _Validadores_, ganham prêmios por seu serviço no final de cada época (\~12 horas).

Todos os Validadores devem deixar uma certa quantia de tokens NEAR em _stake_, o que representa um colateral contra um possível comportamento desonesto. _Tokens em stake_ não podem ser gastos: se um Validador desonesto atacar o consenso da blockchain, o protocolo progressivamente destrói seu stake (veja [slashing](../validators/faq.md#what-is-a-slashing-behavior)). Tokens em Stake podem ser _desbloqueados_ a qualquer momento, mas continuam sem poder ser gastos por três épocas, mesmo que o nó validador fique offline ou decida parar de validar.

O protocolo NEAR escolhe automaticamente os melhores validadores com um leilão. Qualquer um que esteja executando um nó de validação pode participar fazendo stake de seus tokens. No final de cada época, o protocolo NEAR seleciona automaticamente os nós com a maior participação, tornando-os elegíveis para gerar novos blocos e obter recompensas. Se o stake é pequeno demais, o nó de validação não receberá um _lugar de validador_ e funcionará como um nó de retransmissão normal, esperando pela próxima época (veja a [dinâmica de mercado](validators/validators/README.md#understand-market-dynamics) na página da economia de validador).

Validadores podem aumentar seu stake, e assim suas recompensas, pedindo _delegação_. Delegação é a oportunidade para todos os titulares de tokens participarem em parceria com um validador, alugando uma pequena porção do seu nó de validação. _Delegadores_ podem travar seus fundos em uma [_staking pool_](https://github.com/near/core-contracts), e receber recompensas no final de cada época, menos as taxas pagas ao Validador.

As recompensas NEAR são previsíveis e proporcionais ao seu stake. O protocolo gera novos tokens a uma taxa de \~5% da oferta total (anualizada) e a maioria deles são recompensas. Como exemplo, se a oferta total for um bilhão de tokens, e as recompensas anuais forem \~4.5%, todos os validadores dividirão 45 milhões de tokens NEAR (veja a [página sobre economia](validators/validators/README.md) para mais detalhes). Independente de você ser validador ou delegador, quanto mais stake você faz, maior é a sua parte dessas recompensas.

## Para Delegadores

Se você quer recompensas por fazer staking, mas não quer executar seu próprio nó de validação, mesmo assim gaste algum tempo para conhecer a economia da NEAR e o que é preciso para se tornar um grande validador. Estes são alguns bons pontos de partida:

1. Entenda a [economia de um validador(validators/validator-economics.md)
2. Veja os validadores atuais no [explorador de blocos](https://explorer.near.org/nodes/validators). Colete informações sobre sua confiabilidade, taxas e stake atual.
3. Planeje adequadamente sua custódia de tokens, a partir das [opções de custódia disponíveis](../ecosystem/near-token/token-custody.md).
4. Verifique o que os validadores oferecem para você, pergunte se eles usam a [staking pool](https://github.com/near/core-contracts) dos contratos principais NEAR ou seus próprios contratos inteligentes.
5. Se você é proficiente com a interface de linha de comando, consulte a [página sobre delegação](../ecosystem/near-token/token-delegation.md) para obter uma lista de comandos de baixo nível que você pode usar para fazer stake.
6. Junte-se aos canais dos validadores no [Discord](https://near.chat) para fazer perguntas e conhecer a comunidade de staking da NEAR.

> **você sabia?**
>
> O protocolo NEAR não pune os delegadores. Então, se o seu validador favorito errar e for cortado, você só perderá algumas recompensas, e seu stake permanecerá intacto.

## Para Validadores

Você decidiu ver o quão fundo é o buraco do coelho? Sem problemas! A NEAR é como muitas outras redes de proof of stake: mantenha os seus servidores online \~100% do tempo, esteja sempre pronto para atualizar seu nó, participe da comunidade. No entanto, há fatores de diferenciação importantes, como o staking através de contratos inteligentes; atualizações planejadas do protocolo sem hard forks; taxas de gás que queimam tokens em vez de dar recompensas.

Você pode encontrar material adicional a seguir:

1. Entenda a [economia de um validador](validators/validators/README.md)
2. Verifique os [comandos de staking](../validators/validator-guides/running-a-validator.md) básicos
3. Implante sua staking pool a partir dos [contratos principais](https://github.com/near/core-contracts)

Você ainda está aqui? Se você quiser aprender mais sobre a NEAR, confira

* [O Guia do Iniciante para a Blockchain da NEAR](https://near-portuguese.medium.com/o-guia-do-iniciante-para-a-blockchain-da-near-7776317b6c65) para obter uma visão geral de alto nível da NEAR.
* [O Whitepaper da NEAR](https://near.org/papers/the-official-near-white-paper) para ver um panorama geral.
* [Economia em Blockchain Compartilhada](https://near.org/papers/economics-in-sharded-blockchain/) para saber mais sobre a estrutura de incentivos da NEAR.
* [Design de Compartilhamento: Nightshade](https://near.org/papers/nightshade) para ganhar um entendimento mais detalhado do mecanismo de consenso.

Se algo não estiver claro ou você travar, por favor, vá ao nosso chat oficial no [Discord](https://near.chat), e entre na seção de validadores.

> **Atenção!**
>
> Depois de abrir o link do Discord acima, você deve concluir uma verificação automática e habilitar seu papel como "validador", caso contrário, não poderá enviar mensagens nos canais de validadores.

## Rede de Testes Stake Wars

A Stake Wars foi a `testnet` incentivada pela NEAR para validadores profissionais. Esta iniciativa já terminou, mas ainda é possível aprender com ela.

A [MainNet](https://explorer.near.org) da NEAR agora é "governada pela comunidade" (veja [o cronograma completo](https://near.org/blog/mainnet-roadmap/) e o [blog de lançamento](https://near.org/blog/near-mainnet-phase-2-unrestricted-decentralized/)) então qualquer validador pode participar. No entanto, a rede está sendo executada em um único shard, limitando temporariamente os slots disponíveis para validadores. Como resultado, você pode precisar de uma grande quantidade de tokens (em torno de 1% do stake total) para ter o seu nó _eleito_ como um produtor de blocos, e receber as recompensas.

Enquanto a rede está recebendo shards adicionais e se tornando mais acessível para validadores menores, você ainda pode usar o [repositório Stake Wars](https://github.com/nearprotocol/stakewars) para entender as necessidades tecnológicas, testar a estabilidade do seu sistema e aprender alguns dos aspectos exclusivos da delegação de NEAR em preparação para a próxima fase do protocolo.

Se você quiser saber mais sobre esta oportunidade, leia a publicação ["Stake Wars is Over, mas estamos apenas começando"](https://near.org/blog/stake-wars-is-over-but-were-just-getting-started/) no blog.

> Tem alguma dúvida? [Pergunte no StackOverflow!](https://stackoverflow.com/questions/tagged/nearprotocol)

### Junte-se à _Shards Alliance_

:::note link
https://openshards.io
:::
