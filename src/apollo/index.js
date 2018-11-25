import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";
import {withClientState} from "apollo-link-state";
import {getState as query} from "./graphql";

const cache = new InMemoryCache({addTypename: false});

const Mutation = {
    setStateScore: (_, __, {cache}) => {
        const data = cache.readQuery({query});

        data.state.count += 1;

        cache.writeQuery({query, data});

        return null;
    },    

    setStateText: (_, {text}, {cache}) => {
        const data = cache.readQuery({query});

        data.state.say = text;

        cache.writeQuery({query, data});

        return null;
    },

    resetState: (_, __, {cache}) => {
        const data = cache.readQuery({query});

        data.state.count = 0;

        data.state.say = '';

        cache.writeQuery({query, data});

        return null;
    }

};

const defaults = {
    state: {
        say: '',
        count: 0
    }
};

const link = withClientState({cache, defaults, resolvers: {Mutation}});

const client = new ApolloClient({cache, link});

export default client;
