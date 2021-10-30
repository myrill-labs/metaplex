export const data = {
  headContent: {
  },
  leftContent: undefined,
  midContent: {
    markdown:
    "## Get ready to fight back!\n" +
      "\n" +
      "Myrill's Myrmidons is a collection of 100 unique generated crypto trading bots stored on the Solana blockchain.\n" +
      "\n" +
      "On top of a neat pixel artwork, each myrmidon unlocks several perks:\n" +
      "- unique access to a pre-configured and pre-trained trading bot powered by machine learning.\n" +
      "- early access to the no-code Myrill's platform.\n" +
      "- access to the restricted slack with direct support from machine learning engineers, quants and traders. Note that a public discord is available at [this url](https://myrill.io/discord-link).\n" +
      "\n" +
      "### Myrmidon uniqueness\n" +
      "\n" +
      "Each myrmidon has a unique investor profile. It is constructed following several parameters:\n" +
      "- instruments: on which instruments the bot is trading. It can be a combination of pairs listed on exchanges, or even not listed (for DEX trading).\n" +
      "- exchanges: where the bot is allowed to trade. Multiple exchanges implies arbitrage possibilities. Exchange can be centralized (Coinbase, Kraken, Binance etc) or decentralized (Pancake swap, Uniswap etc).\n" +
      "- market data: it describes the type of data the bot is using to make a decision. Available data are the following:\n" +
      "  - trade: the bot looks at the last transaction between a seller and a buyer.\n" +
      "  - [L1](https://www.investopedia.com/terms/l/level1.asp) (also called tick, or quote): the level 1 order book, i.e. the price between the highest bid price and lower ask price.\n" +
      "  - [L2](https://www.investopedia.com/articles/trading/06/level2quotes.asp): the level 2 order book, i.e. all the limit orders (with a given depth) from both side , bids and asks.\n" +
      "  - [L3](https://www.investopedia.com/terms/l/level3.asp): all the information that goes through the exchange, ie cancel orders, partially filled orders etc\n" +
      "- alternative data: all the data the bot can use outside market data. For example Twitter feed, Daytrading sub reddit, telegram group, credit card data, satellite images ...\n" +
      "- asset-types: including [spot](https://www.investopedia.com/terms/s/spotmarket.asp) or [future](https://www.investopedia.com/terms/f/futures.asp). Using both can lead to arbitrage opportunities.\n" +
      "- frequency: the trading frequency of the bot. It can be seconds, minutes, hours or days. It can reach down to 500ms.\n" +
      "\n" +
      "### Release roadmap\n" +
      "\n" +
      "From 1st December 2021 to February 2022, we will run auctions for ten myrmidons each week. An auction lasts for one week. All myrmidons can be resold on the Myrill marketplace.\n" +
      "\n" +
      "Myrmidon#1 will be the first to be available for live trading in June 2022, then others will be release each month from June 2022 to May 2023.\n" +
      "\n" +
      "See more details on the [whitepaper](https://myrill-labs.github.io/whitepaper/).\n",
    sections: [
      {
        title: 'Get ready to fight back!',
        paragraphs: [

        ],
        image: '/myrill-main-banner.png',
      },
    ],
  },
  bottomContent: true,
};
