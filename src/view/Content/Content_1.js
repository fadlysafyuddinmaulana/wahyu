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
              height: '100%',
            }}>
            <View style={uistyle.buttonstyle}>
              <Image
                source={{
                  uri: 'https://cdn-brilio-net.akamaized.net/webp/news/2022/05/27/230295/1755035-1000xauto-resep-masakan-rumahan-sederhana.jpg',
                }}
                style={uistyle.imagestyle}
              />
            </View>
            <View style={uistyle.ContentText}>
              <Text style={uistyle.tittleStyle}>Ikan teri goreng tepung.</Text>
              <Text style={uistyle.articleText}>
                Bahan: {'\n'} - 250 gr ikan teri segar {'\n'}- 150 gr tepung
                instan
                {'\n'}
                {'\n'}
                Cara membuat:
                {'\n'}
                1. Cuci bersih ikan teri, bilas sebanyak 3 kali, kemudian
                tiriskan.
                {'\n'}
                2. Siapkan baskom, taruh ikan teri di dalam baskom kemudian
                tuang sedikit demi sedikit tepung instan lalu aduk rata, diamkan
                5 menit, setelah terserap beri tepung lagi aduk kembali sampai
                habis.
                {'\n'}
                3. Setelah terserap sempurna sampai tidak ada butir tepung
                kering dan tanpa menambahkan air, goreng ikan dalam minyak panas
                dengan api kecil hingga matang dan kering.
                {'\n'}
                4. Sajikan.
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
