module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: `https://api-useast.graphcms.com/v1/cjnn5qcp058q901gh5tkpmb00/master`,
        query: `
        {
pubs:publicacioneses{
  id,
  titulo,
  contenido,
  categoriaspubs{
    nombre
  }
  imagenes{
    titulo,
    imagen{
      handle
    }
  }
}
  cursos:cursoses{
    id,
    nombre,
    fechainicio,
    fechafinal,
    lugares{
      nombre,
      direccion
    },
    banner{
      titulo,
      imagen{
        handle
      }
    },
    precio,
    duracion
  }
}

`,
      },
    }
  ],
}
