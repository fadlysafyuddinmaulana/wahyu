import React, {Component} from 'react';
import {
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Snackbar from './Component/SnackBar';

import Note from './note';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
    };
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return (
        <Note
          key={key}
          keyval={key}
          val={val}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });
    return (
      <View style={uistyle.container}>
        <View style={uistyle.header}>
          <Text style={uistyle.textHeader}>-Note-</Text>
        </View>
        <ScrollView style={uistyle.scrollContainer}>{notes}</ScrollView>
        <View style={uistyle.footer}>
          <TextInput
            onChange={noteText => this.setState({noteText})}
            style={uistyle.AddText}
            placeholder="Write note here"
            placeholderTextColor="Black"
          />
        </View>
        <TouchableOpacity
          style={uistyle.addBtn}
          onPress={this.addNote.bind(this)}>
          <Text style={uistyle.addBtnText}>
            <Icon
              style={{marginRight: 10}}
              name="plus"
              size={25}
              color="#7FB5FF"
            />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  addNote() {
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({
        date: d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate(),
        note: this.state.noteText,
      });
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  }

  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState.apply({noteArray: this.state.noteArray});
  }
}
const uistyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2e9dc',
  },
  header: {
    backgroundColor: '#c6ecae',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#9ac9a9',
  },
  textHeader: {
    color: 'white',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
  AddText: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 30,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },
  addBtn: {
    position: 'absolute',
    zIndex: 11,
    right: 10,
    bottom: 90,
    backgroundColor: '#e91e63',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: {
    color: 'white',
    fontSize: 24,
  },
});

export default Home;
