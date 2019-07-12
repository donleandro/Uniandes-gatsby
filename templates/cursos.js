import React, { Component } from "react";
import { graphql, Link } from "gatsby";

// import Layout from "../components/layout";

class CursosPagina extends Component {
  render() {
    const reviews = this.props.data.reviews.edges;
    return (
      <Layout>

      </Layout>
    );
  }
}

export default CursosPagina;

/*/export const ReviewPageQuery = graphql`
  query getAllReviews {
    reviews: allReview {
      edges {
        node {
          id
          slug
          createdAt
          record {
            slug
            title
            artist {
              slug
              name
            }
          }
          title
          rating
        }
      }
    }
  }
`;*/
