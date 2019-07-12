import React, { Component } from "react"
import { Link } from 'gatsby'
import Cabecera from '../components/cabecera'
import Piedepagina from '../components/piedepagina'
import '../assets/main.css'


class IndexPage extends Component{
  render() {
    const artists = this.props.data.allPub.edges;
    return (
      <div className="about-container">
        <Cabecera />
        <div className="contenido">
        <ul
          style={{
            listStyle: `none`,
            margin: `0 0 2rem`,
            display: `flex`,
            flexWrap: `wrap`,
            alignItems: `center`,
            justifyContent: `center`,
            width: `100%`
          }}
        >
          {artists.map(({ node }, i) => (
            <li
              key={node.id}
              id={'pub-' + node.id }
              className={'col-md-4 col-sm-12'}
              style={{
                padding: '10px',
                marginBottom: `0.5rem`
              }}
            >

            <div className="imagen">
            <img width="100%"
            src={`https://media.graphcms.com/resize=w:600,h:624,a:top,fit:crop/${
              node.imagenes.imagen.handle
            }`} />
             </div>
            <div className="titulo"><h2>{node.titulo}</h2></div>
            <div className="contenido">{node.contenido}</div>
            </li>
          ))}
          </ul>
          </div>
          <Piedepagina />
      </div>
    )
  }
}

export default IndexPage
export const pageQuery = graphql`
{
  allPub{
    edges{
      node{
        id,
        titulo,
        contenido,
        imagenes{
          imagen{
            handle
          }
        }
      }
    }
  }
}
`;
