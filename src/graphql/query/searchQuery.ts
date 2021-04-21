import { gql } from 'apollo-boost';

const searchQuery = gql`
  query Repositories($search: String!) {
    search(first: 100, type: REPOSITORY, query: $search) {
      edges { 
        node {
          ...RepositoryData
        }
      } 
    }
  }

  fragment RepositoryData on Repository { 
    nameWithOwner 
    shortDescriptionHTML 
    descriptionHTML
    owner { 
      avatarUrl
    }
    labels(first: 10) {
      edges {
        node {
          name
          color 
        }
      } 
    }
  }
`;

export default searchQuery;