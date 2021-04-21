import React from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6a',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28br',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6t',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7z',
    title: 'Third Item',
  },
];

const Card = () => (
  <TouchableOpacity style={styles.card}>
    <Image style={styles.cardAvatar} />
    <View>
      <Text style={styles.cardRepo}>
        Repo Name
      </Text>
      <Text style={styles.cardShortDescription}>
        Short description about the first 100 repositories from github
      </Text>
    </View>
  </TouchableOpacity>
);

const Home = () => {

  const renderCard = ({item}) => (
    <Card item={item}/>
  );

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>
          Github
          <Text style={styles.titleBlue}>List</Text>
        </Text>
        <View style={styles.separator}></View>
        <TextInput
          style={styles.input}
          placeholder="Search Repository"
          autoCorrect={false}
          autoFocus={true}
        />
        <FlatList
          data={DATA}
          renderItem={renderCard}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
}; 

export default Home;
