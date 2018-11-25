import { graphql } from 'react-apollo';

const withQuery = (gql) => Component => {

    const props = ({ownProps, data}) => ({
        ...ownProps,
        ['state']: data.state || '...'
    });

    return graphql(gql, {props})(Component);

};

export { withQuery };