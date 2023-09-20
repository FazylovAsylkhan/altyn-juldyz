const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const mainTemplate = path.resolve(`src/templates/main.tsx`);
  const result = await graphql(`
    query PageMainQuery {
      allPageMainJson {
        nodes {
          lang
          url
        }
      }
    }
  `);

  result.data.allPageMainJson.nodes.forEach((node) => {
    const { url, lang } = node;
    createPage({
      path: url,
      component: mainTemplate,
      context: { lang },
    });
  });
};
