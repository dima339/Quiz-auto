import { graphql } from 'react-apollo'

const withMutate = (gql, propName) => Component => {

  const props = ({ ownProps, mutate }) => ({
    ...ownProps,
    [propName]: variables => mutate({ variables })
  })

  return graphql(gql, { props })(Component)

}

export { withMutate }
