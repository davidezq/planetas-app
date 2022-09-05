import { StatusBar,FlatList, Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';

const obtenerId = () => {
  const fecha = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2);
  return fecha+random;
}

const planetas = [
  {id:obtenerId(),nombre:'mercurio',distanciaAlSol:'57,909,227 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/280px-Mercury_in_color_-_Prockter07_centered.jpg'},
  {id:obtenerId(),nombre:'venus',distanciaAlSol:'108,209,475 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/280px-Venus-real_color.jpg'},
  {id:obtenerId(),nombre:'tierra',distanciaAlSol:'149,598,262 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/As08-16-2593.jpg/280px-As08-16-2593.jpg'},
  {id:obtenerId(),nombre:'marte',distanciaAlSol:'227,943,824 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Schiaparelli_Hemisphere_Enhanced.jpg/280px-Schiaparelli_Hemisphere_Enhanced.jpg'},
  {id:obtenerId(),nombre:'júpiter',distanciaAlSol:'778,340,821 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg/280px-PIA22946-Jupiter-RedSpot-JunoSpacecraft-20190212.jpg'},
  {id:obtenerId(),nombre:'saturno',distanciaAlSol:'1,426,666,422 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/280px-Saturn_during_Equinox.jpg'},
  {id:obtenerId(),nombre:'urano',distanciaAlSol:'2,870,658,186 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-Uranus2.jpg'},
  {id:obtenerId(),nombre:'neptuno',distanciaAlSol:'4,498,396,441 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg'},
  {id:obtenerId(),nombre:'Plutón',distanciaAlSol:'5,934,456,500 Km',img:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/250px-Pluto_in_True_Color_-_High-Res.jpg'},
]

  //Styled components


  const Item = ({id,nombre,distanciaAlSol,img}) => {
  return (
    <View style = {styles.item}>
      <Image source={{uri: img}} style={styles.img}></Image>
      <View style= {{display:'flex',alignItems:'center',alignSelf:'center'}}>
        <Text style = {styles.title}>{nombre}</Text>
        <Text style = { styles.text }>Distancia al sol: {distanciaAlSol}</Text>
      </View>
    </View>
  )
  }


export default function App() {

const mostrarItem = ({item}) => {
    return <Item nombre={item.nombre} distanciaAlSol={item.distanciaAlSol} img={item.img}/>
  }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h1}>Sistema solar</Text>
        <FlatList style={styles.flatlist} data={planetas} renderItem={mostrarItem} keyExtractor={item => item.id}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    backgroundColor: '#000'
  },
  h1:{
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
    color:"white"
  },
  title: {
    fontSize: 32,
    textTransform:'uppercase',
    color:'white'
  },
  text: {
    color:'white'
  },
  flatlist:{
    marginHorizontal:20
  },
  item: {
    display:'flex',
    flexDirection:'row',
    marginVertical:4,
  },
  img: {
    width:125,
    height:125,
  },
});