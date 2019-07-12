const path = require(`path`);
const queryAll = require(`./gatsby/queryAll.js`);
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const cursosPaginaTemplates = path.resolve(
      `./src/templates/cursos.js`
    );

    resolve(
      graphql(queryAll).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const cursos = result.data.allPub.edges;
        console.log(cursos);
        /*
        cursos.forEach(({ curso }) => {
          const path = `cursos/` + curso.id;
          console.log(path);
          createPage({
            path,
            component: cursosPaginaTemplates,
            context: {
              id: curso.id
            }
          });
        });*/

      })
    );
  });
};
