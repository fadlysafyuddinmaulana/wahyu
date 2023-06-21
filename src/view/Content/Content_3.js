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
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: '#f2e9dc',
            }}>
            <View style={uistyle.buttonstyle}>
              <Image
                source={{
                  uri: 'https://cdn-brilio-net.akamaized.net/webp/news/2022/05/27/230295/1755038-1000xauto-resep-masakan-rumahan-sederhana.jpg',
                }}
                style={uistyle.imagestyle}
              />
            </View>
            <View style={uistyle.ContentText}>
              <Text style={uistyle.tittleStyle}>Sayur lombok.</Text>
              <Text style={uistyle.articleText}>
                Bahan: {'\n'}- 1 papan tempe, potong-potong {'\n'}- 10 buah
                cabai hijau keriting, iris {'\n'}- 1 sdm udang rebon {'\n'}- 1
                ruas lengkuas, geprek {'\n'}- 2 lembar daun salam {'\n'}- 3
                butir bawang merah, haluskan {'\n'}- 2 siung bawang putih,
                haluskan
                {'\n'}- 2 butir kemiri, haluskan {'\n'}- 1 sdt gula merah {'\n'}
                - Garam dan merica secukupnya {'\n'}- 1 sachet santan instan
                ukuran kecil
                {'\n'}
                Cara membuat:
                {'\n'}
                1. Panaskan sedikit minyak. Tumis bumbu-bumbu sampai harum.
                {'\n'}
                2. Rebus air kira-kira 500 ml atau secukupnya. Masukkan bumbu
                yang sudah ditumis, tempe dan semua bahan lainnya. Masak selama
                30 menit. Koreksi rasa, dan sajikan.
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
