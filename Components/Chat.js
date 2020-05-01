import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../Fire';


class Chat extends React.Component {
    // 2.
    static navigationOptions = ({ navigation }) => ({
      title: (navigation.state.params || {}).name || 'Chat!',
    });
    // 3.
    state = {
      messages: [],
    };
   
    render() {
      // 4.
      return (
        <GiftedChat
          messages={this.state.messages}
          onSend={Fire.shared.send}
          user={this.user}
        />
      );
    }
    get user() {
        // Return our name and our UID for GiftedChat to parse
        return {
          name: "world",//this.props.navigation.state.params.name,
          _id: Fire.shared.uid,
        };
      }
    // 1.
    componentDidMount() {
        Fire.shared.on(message =>
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
        }))
        );
    }
    // 2.
    componentWillUnmount() {
    Fire.shared.off();
    }
}


//const styles = StyleSheet.create({});
export default Chat;