import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isimenu: [
        {
          title: 'Pre Test',
          icon: 'envelope-open-text',
          press: 'PreTest',
        },
        {
          title: 'Materi Siperbal',
          icon: 'shield-virus',
          press: 'Materi',
        },
        {
          title: 'Pos Test',
          icon: 'check-double',
          press: 'PostTest',
        },
        {
          title: 'About Siperbal',
          icon: 'copyright',
          press: 'About',
        },
      ],
    };
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle="light-content" backgroundColor="#ebccbf" />
        <View
          style={{
            backgroundColor: '#FFFF',
            paddingVertical: 15,
            elevation: 3,
            flexDirection: 'row',
            paddingHorizontal: 20,
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => this.props.navigation.pop()}>
            <Icon
              style={{marginRight: 10}}
              name="angle-left"
              size={25}
              color="black"
            />
          </TouchableOpacity>

          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Halaman Menu
          </Text>
        </View>
        <ScrollView style={uistyle.container}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#f2e9dc',
            }}>
            <View style={uistyle.buttonstyle}>
              <Image
                source={{
                  uri: 'https://cdn-brilio-net.akamaized.net/webp/news/2022/05/27/230295/1755036-resep-masakan-rumahan-sederhana.jpg',
                }}
                style={uistyle.imagestyle}
              />
            </View>
            <View style={uistyle.ContentText}>
              <Text style={uistyle.tittleStyle}>Tumis kubis.</Text>
              <Text style={uistyle.articleText}>
                Bahan: {'\n'}- 6 lembar kubis {'\n'}- 6 bawang merah, iris{' '}
                {'\n'}- 3 bawang putih, iris {'\n'}- 8 cabai rawit, iris halus{' '}
                {'\n'}- 2 daun salam {'\n'}- 2 cm lengkuas, geprek {'\n'}- 1 sdm
                ebi {'\n'}- 200 ml air {'\n'}- 1 sdt kaldu ayam, jamur, dan
                garam {'\n'}- 1 sdt gula pasir
                {'\n'}
                Cara membuat:
                {'\n'}
                1. Tumis bumbu iris.
                {'\n'}
                2. Masukkan daun salam, lengkuas, kubis, air, dan bumbu lain.
                {'\n'}
                3. Masak hingga meresap. Cek rasa, sajikan hangat.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const uistyle = StyleSheet.create({
  imagestyle: {
    display: 'flex',
    height: 200,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  ContentText: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  articleText: {
    color: 'black',
    margin: 10,
  },
  tittleStyle: {
    color: 'black',
    margin: 10,
  },
  container: {
    flex: 0.5,
    backgroundColor: '#f2e9dc',
  },
  buttonstyle: {
    backgroundColor: '#29524a',
    width: '95%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignContent: 'center',
    elevation: 7,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Menu;
