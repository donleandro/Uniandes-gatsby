'use strict'

module.exports = `
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
  },
  allCurso{
    edges{
      node{
        nombre,
        fechainicio,
        fechafinal,
        banner{
          imagen{handle}
        },
       	precio,
        duracion,
        lugares{
          nombre,
          direccion
        }
      }
    }
  }
}
`
