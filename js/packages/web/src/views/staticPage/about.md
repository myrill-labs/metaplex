## Get ready to fight back!

Myrill's Myrmidons is a collection of 100 unique generated crypto trading bots stored on the Solana blockchain.

On top of a neat pixel artwork, each myrmidon unlocks several perks:
- unique access to a pre-configured and pre-trained trading bot powered by machine learning.
- early access to the no-code Myrill's platform.
- access to the restricted slack with direct support from machine learning engineers, quants and traders. Note that a public discord is available at [this url](https://myrill.io/discord-link).

### Myrmidon uniqueness

Each myrmidon has a unique investor profile. It is constructed following several parameters:
- instruments: on which instruments the bot is trading. It can be a combination of pairs listed on exchanges, or even not listed (for DEX trading).
- exchanges: where the bot is allowed to trade. Multiple exchanges implies arbitrage possibilities. Exchange can be centralized (Coinbase, Kraken, Binance etc) or decentralized (Pancake swap, Uniswap etc).
- market data: it describes the type of data the bot is using to make a decision. Available data are the following:
  - trade: the bot looks at the last transaction between a seller and a buyer.
  - [L1](https://www.investopedia.com/terms/l/level1.asp) (also called tick, or quote): the level 1 order book, i.e. the price between the highest bid price and lower ask price.
  - [L2](https://www.investopedia.com/articles/trading/06/level2quotes.asp): the level 2 order book, i.e. all the limit orders (with a given depth) from both side , bids and asks.
  - [L3](https://www.investopedia.com/terms/l/level3.asp): all the information that goes through the exchange, ie cancel orders, partially filled orders etc
- alternative data: all the data the bot can use outside market data. For example Twitter feed, Daytrading sub reddit, telegram group, credit card data, satellite images ...
- asset-types: including [spot](https://www.investopedia.com/terms/s/spotmarket.asp) or [future](https://www.investopedia.com/terms/f/futures.asp). Using both can lead to arbitrage opportunities.
- frequency: the trading frequency of the bot. It can be seconds, minutes, hours or days. It can reach down to 500ms.

### Release roadmap

Starting the **1st of December 2021**, we will run auctions for ten myrmidons each week. An auction lasts for one week. All myrmidons can be resold on the Myrill marketplace.

Myrmidon#1 will be the first to be available for live trading in June 2022, then others will be release each month from June 2022 to May 2023.

See more details on the [whitepaper](https://myrill-labs.github.io/whitepaper/).
