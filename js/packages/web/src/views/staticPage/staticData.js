export const data = {
  headContent: {
  },
  leftContent: undefined,
  midContent: {
    markdown: 'Myrill\'s Myrmidons is a collection of 100 unique generated crypto trading bots stored on the Solana blockchain.\n' +
      '\n' +
      'On top of a neat pixel artwork, each myrmidon unlocks several perks:\n' +
      '- unique access to a pre-configured and pre-trained trading bot.\n' +
      '- early access to the no-code Myrill\'s platform.\n' +
      '- access to the restricted slack with direct support from ML engineers, quants and traders. Note that a public discord is available at [this url](https://myrill.io/discord-link).\n' +
      '\n' +
      'Each myrmidon has a unique investor profile. It is constructed following several parameters:\n' +
      '- instruments: on which instruments the bot is trading. It can be a combination of pairs listed on exchanges, or even not listed (for DEX trading).\n' +
      '- exchanges: where the bot is allowed to trade. Multiple exchanges implies arbitrage possibilities. Exchange can be centralized (Coinbase, Kraken, Binance ...) or decentralized (Pancake swap, Uniswap ...).\n' +
      '- market data: it describes the type of data the bot is using to make a decision. Available data are the following:\n' +
      '  - trade: look at the last transaction between a seller and a buyer\n' +
      '  - L1 (also called tick, or quote): the level 1 order book, i.e. the price between the highest bid price and lower ask price.\n' +
      '  - L2: the level 2 order book, i.e. all the limit orders (with a given depth) from both side , bids and asks.\n' +
      '  - L3: all the information that goes through the exchange, ie cancel orders, partially filled orders etc\n' +
      '- alternative data: all the data the bot can use outside market data. For example twitter feed, Daytrading sub reddit, telegram group, credit card data, satellite images ...\n' +
      '- derivative: including spot (actually not a derivative) or future.\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      '\n' +
      'Myrmidon#1 will be the first to be available for live trading in June 2022, then others will be release each month from June 2022 to May 2023.\n',
    sections: [
      {
        title: 'Get ready to fight back!',
        paragraphs: [
          "Myrill's Myrmidons is a collection of unique generated trading bot stored on the Solana blockchain." +
          "Each myrmidon unlocks several perks:\n" +
          "\n\tunique access to a pre-configured and pre-trained bot." +
          "\n\tearly access to the no-code platform." +
          "\n\taccess to the restricted slack with direct support from ML engineers, " +
          "quants and traders. Note that a public discord is available at this url.",

        ],
        image: '/myrill-main-banner.png',
      },
    ],
  },
  bottomContent: true,
};
