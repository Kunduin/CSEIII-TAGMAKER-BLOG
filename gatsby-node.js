const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        const slug = node.fields.slug;
        let component = path.resolve(`./src/templates/blog-post.js`);
        if (slug.includes("/doc")) {
          component=path.resolve(`./src/templates/doc-post.js`);
        }
        createPage({
          path: slug,
          component: component,
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: slug
          }
        });
      });
      resolve();
    });
  });
};
