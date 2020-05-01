import React, { Component } from 'react';
import { View, TextInput,   TouchableOpacity, // <- Add TouchableOpacity
    StyleSheet, Text } from 'react-native';



class Main extends React.Component {
    static navigationOptions = {
        title: 'FLOCK_CHAIN',
      };

    state = { name: 'New_User' } // 2. <- Add the component state

    onPress = () => {
        // 1.
        this.props.navigation.navigate('Chat', { name: this.state.name });
      }
    // Inside the Main component...

    onChangeText = name => this.setState({ name }); // 1.


    render() {
      return (
        <View>
            <Text style={styles.title}>Enter your name:</Text> 

            <TextInput
            onChangeText={this.onChangeText} // <- Add this
            style={styles.nameInput}
            //placeHolder="John Cena"
            value={this.state.name}
            />
            <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
      );
    }

  }




  const offset = 24;
  const styles = StyleSheet.create({
    nameInput: { // 3. <- Add a style for the input
      height: offset * 2,
      margin: offset,
      paddingHorizontal: offset,
      borderColor: '#111111',
      borderWidth: 1,
    },
    title: { // 4.
        marginTop: offset,
        marginLeft: offset,
        fontSize: offset,
      },
    buttonText: { // 5.
        marginLeft: offset,
        fontSize: offset,
    },
  });
  
  
  export default Main;