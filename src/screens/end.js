import React, {Component} from 'react'
import {
    Text,
    View
} from 'react-native'
import {Button} from './../components'
import {withQuery, withMutate} from './../hocs/'
import {getState, resetState} from './../apollo/graphql/'
import {Navigate} from './../utils/'
import styles from './../styles/'

@withQuery(getState)
@withMutate(resetState, 'resetState')
class End extends Component {

    _again = () => {
        this.props.resetState()
        Navigate(this, 'Start')
    }

    render() {

        return (
            <View style={styles.cont}>

                <Text style={styles.Title}>{this.props.state.say}! Ваш результат {this.props.state.count} </Text>

                <Text
                    style={styles.Title}>
                    {this.props.state.count > 7 ? "Поздравляю,вы выиграли" : "Вы проиграли, попробуйте снова"}
                </Text>

                <Button
                    onPress={this._again}
                    title={'Сначала'}
                />

            </View>
        )
    }
}

export default End
