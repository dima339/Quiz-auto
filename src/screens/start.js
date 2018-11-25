import React, {Component} from 'react'
import {View, Text, TextInput, Alert} from 'react-native'
import {Navigate} from './../utils/'
import styles from './../styles/'
import {Button} from './../components/'
import {withQuery, withMutate} from './../hocs/'
import {getState, setStateText} from './../apollo/graphql/'

@withQuery(getState)
@withMutate(setStateText, 'setStateText')
class Start extends Component {
    state = {
        name: '',
        score: 5
    }

    _changeName(name) {
        this.setState({name})
    }

    goStart = () => {

        if (this.state.name != '') {

            this.props.setStateText({text: this.state.name})

            Navigate(this, 'Game')

            this.setState({
                name: ''
            })
        }
        else {
            Alert.alert('Внимание', 'Введите ваше имя')
        }
    }

    render() {
        return (
            <View style={styles.cont}>

                <Text style={styles.Title}>Угадай авто</Text>

                <TextInput
                    value={this.state.name}
                    onChangeText={(text) => this._changeName(text)}
                    placeholder={'Как вас зовут?'}
                    style={styles.Input}
                />

                <Button
                    title={'Старт'}
                    onPress={this.goStart}
                />

            </View>
        )
    }
}

export default Start