import React, {Component} from 'react'
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from 'react-native'
import {Images, Quest, Navigate} from './../utils/'
import {withQuery, withMutate} from './../hocs/'
import {getState, setStateScore} from './../apollo/graphql/'
import styles from './../styles/'

const dataBase = require('./../../assets/Data/vopros/easy.json')
const numberQuestions = dataBase.length

@withQuery(getState)
@withMutate(setStateScore, 'setStateScore')
class Game extends Component {

    state = {
        start: 0
    }

    _btnStyle(buttonid) {

        var style = {
            justifyContent: 'center',
            width: 250,
            height: 50,
            borderRadius: 5,
            alignItems: 'center',
            marginTop: 10
        }

        if (buttonid === 0) {
            style.backgroundColor = '#3f17af'
        } else if (buttonid === 1) {
            style.backgroundColor = '#6b0417'
        } else if (buttonid === 2) {
            style.backgroundColor = '#279e23'
        } else {
            style.backgroundColor = '#e06c27'
        }

        return style
    }

    _reset = () => {
        this.setState({
            start: 0
        })
    }

    _handleAnswer(answer) {

        if (numberQuestions == this.state.start + 2) {
            if (dataBase[this.state.start].correct == answer) {
                this.props.setStateScore()
            }

            Navigate(this, 'End')

            this._reset

        }

        if (dataBase[this.state.start].correct == answer) {
            this.props.setStateScore()
        }

        this.setState({
            start: this.state.start + 1
        })

    }

    render() {

        var answers = dataBase[this.state.start].answers.map((answer, index) => {

            return (

                <TouchableHighlight
                    key={index}
                    style={this._btnStyle(index)}
                    onPress={this._handleAnswer.bind(this, answer.id)}
                    underlayColor="#333"
                >

                    <Text style={styles.buttonTitle}>{answer.answer}</Text>

                </TouchableHighlight>
            )
        })

        return (
            <View style={styles.cont}>

                <View style={styles.window}>

                    <Image source={Images[this.state.start + 1]}
                           style={styles.image}/>

                    {answers}

                </View>

            </View>
        )
    }
}

export default Game