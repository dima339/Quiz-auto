import React, { Component } from "react"
import { ApolloProvider } from "react-apollo"
import client from "./src/apollo"
import Main from './src/screens/main'

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Main/>
            </ApolloProvider>
        )
    }
}

export default App