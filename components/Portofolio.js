import { Image,View, Text, ScrollView, TextInput, Button, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Import ikon love
import React, { useState } from 'react';

import ButtonQ from '../components/CustomButton';
import CustomImage from '../components/CustomImage';
import Deskripsi from '../components/CustomText';



// You can import supported modules from npm
import { Card } from 'react-native-paper';

export default function PortfolioScreen({ navigation }) {

  const [likes, setLikes] = useState({});
  const [dislikes, setDislikes] = useState({});

  const addLike = (projectId) => {
    setLikes((prevLikes) => ({
      prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };
    const addDislike = (projectId) => {
    setDislikes((prevLikes) => ({
      prevLikes,
      [projectId]: (prevLikes[projectId] || 0) + 1,
    }));
  };

  // Fungsi untuk mengurangi jumlah like (dislike)
  const removeLike = (projectId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [projectId]: Math.max((prevLikes[projectId] || 0) - 1, 0),
    }));
  };
  
  const projects = [
    { id: 1, title: 'Wish Clean Juice', description: 'E-commerce Web', imageSource: require('../assets/EC.png') },
    { id: 2, title: 'Tajido Crochet', description: 'E-commerce Web', imageSource: require('../assets/EC1.png') },
    { id: 3, title: 'ESP32 Based IoT Weather Station', description: 'IOT Project', imageSource: require('../assets/EC2.png') },
  ];


  return (
  <ScrollView>
   <View style={styles.container}>
      <CustomImage source ={require ('../assets/Profile.png')} style={styles.profil} />
      <Text style={styles.nama}>Pinka Ratna Putri Aimar</Text>

      <Deskripsi/>
      <ButtonQ
      onPress={() => alert("Halloooo")}
      title="Contact Me"
      color="#493323"
      style={{}}
      />
      
    <View style={{ padding: 25 }}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' , textAlign: 'center', marginBottom:15, color: '#493323',}}>My Recent Project</Text>
        <CustomImage source ={require ('../assets/Garis.png')} style={styles.garis} />
        {projects.map((project) => (
          <View key={project.id} style={styles.projectContainer}>
            <Image source={project.imageSource} style={styles.thumbnail} />
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>{project.title} </Text>
              <Text style={styles.projectDescription}>{project.description}</Text>
              <TouchableOpacity>
              <Image style={{width : 50, height: 50, left : 190, top: 15,}} source={require('../assets/button.png')} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.likeButton}
              onPress={() => addLike(project.id)}
            >
              <MaterialCommunityIcons name="heart" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dislikeButton}
              onPress={() => addDislike(project.id)}
            >
              <MaterialCommunityIcons name="heart-broken" size={20} color="white" />
            </TouchableOpacity>
            <Text style={styles.likeCount}>
              Likes: {likes[project.id] || 0}
            </Text>
            <Text style={styles.dislikeCount}>
              Dislikes: {dislikes[project.id] || 0}
            </Text>
            <CustomImage source ={require ('../assets/Garis.png')} style={styles.garis} />
          </View>
        ))}
      </View>
    </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 50,
    backgroundColor: '#F9F3DF',
    fontFamily: 'sans-serif',
    alignItems: 'center',
  },

  nama:{
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#493323',
  },

  profil:{
    height: 300,
    width: 330,
    borderRadius: 0,
  },

   garis: {
    width: 300,
    height: 60,
    rectangle: 300,
    marginTop: 0,
    borderRadius: 5,
    alignItems: 'center',
  },
  
 projectContainer: {
   alignItems: 'center',
  },

  thumbnail: {
    width: 380,
    height: 200,
    borderRadius: 5,
    alignItems: 'center',
  },
  projectInfo: {
    // flex: 2,
    // // marginLeft: ,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#493323',
    marginBottom: 5,
    marginTop: 5,
    top : 10,
  },
  projectDescription: {
    textAlign: 'center',
    color: '#493323',
    fontSize: 16,
    marginBottom: 5,
    top:10,
  },
  // learnMoreButton: {
  //   backgroundColor: 'blue',
  //   padding: 5,
  //   borderRadius: 5,
  //   // alignItems: 'center',
  //   // justifyContent: 'center',
  //   width: 100,
  // },
  likeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'left',
    justifyContent: 'left',
    width: 40,
    marginBottom: 20,
  },
  dislikeButton: {
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 40,
    left: 45,
  },
  likeCount: {
    marginLeft: 10,
    fontSize: 14,
    bottom: 85,
    color: '#493323',
    right : 10,
    alignContent: 'left'
  },
  dislikeCount: {
    marginLeft: 10,
    fontSize: 14,
    alignContent: 'center',
    bottom: 85,
    color: '#493323',
    right : 10,
  },

});

