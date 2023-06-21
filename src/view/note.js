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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      dataArray: [
        {Nama_Makanan: '0803040056', gambar_makanan: 'Ridho'},
        {nim: '0803040057', nama: 'Mukti'},
        {nim: '0803040058', nama: 'Adi'},
        {nim: '0803040059', nama: 'Ridho1'},
      ],
    };
  }
  render() {
    return (
      <View key={this.props.keyval} style={uistyle.note}>
        <Text style={uistyle.noteText}>{this.props.val.date}</Text>
        <Text style={uistyle.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={uistyle.noteDeleteText}>
          <Text>
            <Icon
              style={{marginRight: 10}}
              name="trash"
              size={25}
              color="#7FB5FF"
            />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const uistyle = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    backgroundColor: 'grey',
    borderBottomColor: '#ededed',
  },
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: 'black',
    color: 'black',
  },
  noteDeleteText: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2980b9',
    padding: 10,
    top: 10,
    bottom: 10,
    right: 10,
  },
});

export default Home;
