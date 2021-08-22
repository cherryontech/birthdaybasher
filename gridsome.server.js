// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require("axios");

module.exports = function(api) {
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });

  api.loadSource(async (actions) => {
    const { data: cards } = await axios.get(
      "https://gist.githubusercontent.com/novellac/029844c63ceed954e5c508b593c06e51/raw/cdc5bf3bb1ca7a59ba857601bc94dcf4ecd1da8a/allCards.json"
    );

    const collection = actions.addCollection({
      typeName: "CardPost",
    });

    for (const card of cards.data) {
      collection.addNode({
        path: card.path,
        havers: card.havers,
        wishers: card.wishers,
      });
    }
  });
};
