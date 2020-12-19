import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Modal,
  Image
} from 'react-native';

let index = 0;

export default (App = () => {
  const [Name, setName] = useState('');
  const [Breed,setBreed]=useState('');
  const [Description,setDescription]=useState('');
  const [arrayCats, setarrayCats] = useState([]);
  const [vis, setvisible] = useState(false);

  const updateArray = () => {
    if (Name === '') {
      return;
    }
    setarrayCats([...arrayCats, {Name: Name,Breed:Breed,Description:Description, id: ++index}]);
    setvisible(false);
    setName('');
    setBreed('');
    setDescription('');
  };

  return (
    <View style={styles.AppContainer}>
      <View>
        <Image style={{height:250,width:'100%', marginBottom:10}}source={require('./cat.jpg')}/>
        </View>
      <Button title="ADD YOUR CAT DETAILS" onPress={() => setvisible(true)} />
      <Modal visible={vis} animationType="slide">
        <View style={styles.view1}>
          <TextInput
            style={styles.txt}
            value={Name}
            placeholder="Enter Your Cat Name"
            placeholderTextColor="grey"
            onChangeText={name => setName(name)}
          />
          <TextInput
            style={styles.txt}
            value={Breed}
            placeholder="Enter Your Cat Breed"
            placeholderTextColor="grey"
            onChangeText={breed => setBreed(breed)}
          />
          <TextInput
            style={styles.txt}
            value={Description}
            placeholder="Enter Your Cat Description"
            placeholderTextColor="grey"
            onChangeText={des => setDescription(des)}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btn}>
              <Button title="ADD " onPress={updateArray} />
            </View>
            <View styles={styles.btn}>
              <Button
                title="CANCEL "
                color="red"
                onPress={() => setvisible(false)}
              />
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <View>
          <Text style={{fontSize:20,marginTop:20}}>Cats List</Text>
          <Text style={{color:'red'}}>press on any item to delete</Text>
          </View>
        <View>
          {arrayCats.map((item, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  let new_ag = arrayCats.filter(cat => cat.id != item.id);
                  setarrayCats(new_ag);
                  console.log(arrayCats);
                }}>
                <View>
              <Text style={styles.list}>Name:{item.Name} Breed:{item.Breed} Description:{item.Description}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
});

styles = StyleSheet.create({
  AppContainer: {
    padding: 30,
  },
  view1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    width: '80%',
    marginBottom: 10,
  },
  list: {
    padding: 12,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 0.5,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  btn: {
    width: '60%',
  },
});
