import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import axios from 'axios';


const Screen01 = () => {

  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const localCategories = [
  { name: 'Resort', image: require('../assets/resort.png') },
  { name: 'Homestay', image: require('../assets/resort.png') },
  { name: 'Hotel', image: require('../assets/resort.png') },
  { name: 'Lodge', image: require('../assets/resort.png')},
  { name: 'Villa', image: require('../assets/resort.png') },
  { name: 'Apartment', image: require('../assets/resort.png') },
  { name: 'Hostel', image: require('../assets/resort.png') },
  { name: 'See all', image: require('../assets/resort.png') }
  ];

  const localLocations = [
  { image: require('../assets/resort.png') },
  { image: require('../assets/resort.png') },
  { image: require('../assets/resort.png') },
  { image: require('../assets/resort.png') },
  { image: require('../assets/resort.png')},
  { image: require('../assets/resort.png') },
  ];

   useEffect(() => {
    fetch('https://671236b74eca2acdb5f79eeb.mockapi.io/categories')
      .then(response => response.json())
      .then(data => setCategory(data))
      .catch(() => setCategory(localCategories)); // neu api loi retrun ve local

    fetch('https://671236b74eca2acdb5f79eeb.mockapi.io/image')
      .then(response => response.json())
      .then(data => setLocation(data))
      .catch(() => setLocation(localLocations));
    fetch('https://671236b74eca2acdb5f79eeb.mockapi.io/image')
    .then(response => response.json())
    .then(data => setRecommended(data))
    .catch(() => setRecommended(localLocations));
    
  }, []);


return(

  <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>

            <View style={styles.header}>
                <View style={styles.headerRow1}>
                  <Image source={require('../assets/logoicon.png')} style={styles.logo}/>
                  <View style={{flexDirection: 'row'}}>
                      <TextInput placeholder='Search' style={styles.searchContainer}></TextInput>
                      <TouchableOpacity style={styles.searchButon} >
                        <Image source={require('../assets/findicon.png')} style={styles.searchIcon}/>
                      </TouchableOpacity>
                  </View>
            
                </View>

                <View style={styles.headerRow2}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Image source={require('../assets/personicon.png')} style={styles.logo}/>
                      <View style={{marginLeft: 20}}>
                        <Text style={{fontWeight: 'bold', color: '#fff'}}>Wellcome!</Text>
                        <Text style={{color: '#fff'}}>Donna Stroupe</Text>
                      </View>
                      
                  </View>
                  <TouchableOpacity style={styles.searchButon} >
                        <Image source={require('../assets/ringicon.png')} style={styles.searchIcon}/>
                  </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bodyContainer}>
                <View style={styles.categoryStyle}>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 22, paddingBottom: 10}}>
                        <Text style={{fontSize: 16}}>Category</Text>
                        <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/3gach.png')} style={styles.searchIcon}/>
                        </TouchableOpacity>
                  </View>
                  <FlatList
                    data={category}
                    keyExtractor={(item, index) => index.toString() }
                    numColumns={4}
                    renderItem =  {
                        ({item}) => (
                          <View style={styles.categoryItem}>
                            <Image source={{ uri: item.image }} style={styles.categoryImage} />
                            <Text>{item.name}</Text>
                          </View>
                        )
                    }/>
                </View>

                <View style={styles.popularDes}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 22, paddingBottom: 10, paddingTop: 10}}>
                        <Text style={{fontSize: 16}}>Popular Destination</Text>
                        <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/3gach.png')} style={styles.searchIcon}/>
                        </TouchableOpacity>
                    </View>
                  <FlatList
                    data={location}
                    keyExtractor={(item, index) => index.toString() }
                    horizontal
                    renderItem =  {
                        ({item}) => (
                          <View style={styles.categoryItem2}>
                            <Image source={{ uri: item.image }} style={styles.categoryImage2} />
                            <Text>{item.name}</Text>
                          </View>
                        )
                    }/>

                </View>
                <View style={styles.recommentStyle}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 22, paddingBottom: 10, paddingTop: 10}}>
                        <Text style={{fontSize: 16}}>Recommended</Text>
                        <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/3gach.png')} style={styles.searchIcon}/>
                        </TouchableOpacity>
                    </View>
                  <FlatList
                        data={location}
                        keyExtractor={(item, index) => index.toString() }
                        horizontal
                        renderItem =  {
                        ({item}) => (
                          <View style={styles.categoryItem2}>
                            <Image source={{ uri: item.image }} style={styles.categoryImage3} />
                            <Text>{item.name}</Text>
                          </View>
                        )
                    }/>

                </View>            
            </View>

        </ScrollView>


        <View style={styles.footer}>
          <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/homeicon.png')} style={styles.footerIcon}/>
          </TouchableOpacity>
           <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/exploreicon.png')} style={styles.footerIcon}/>
          </TouchableOpacity>
           <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/searchicon.png')} style={styles.footerIcon}/>
          </TouchableOpacity>
           <TouchableOpacity style={styles.searchButon} >
                          <Image source={require('../assets/profileicon.png')} style={styles.footerIcon}/>
          </TouchableOpacity>
        
        </View>

  </SafeAreaView>

)}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    
  },
  header: {
    width: '100%',
    height: '200',
    backgroundColor: '#5958b2',
    padding: 15
  },
  scrollView: {
    width: '100%',
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius:50,
    resizeMode: 'contain',
  },
 headerRow1: {
   flexDirection: 'row',
   alignItems: 'center'
 },
 searchContainer: {
   width: 280,
   height: 30,
   marginLeft: 20,
   backgroundColor: '#fff',
   borderRadius:5,
 },
 searchIcon: {
    right: 35,
    width: 30,
    height: 30,
    borderRadius:50,
    resizeMode: 'contain',
    position: 'absolute',
 },
 searchButon: {
    width: 30,
    height: 30,
 },
 headerRow2: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingTop: 10,
 },
 bodyContainer: {
   flex: 1,
   width: "100%",
   padding: 10
 },
 categoryStyle: {
   width: "100%",
 },
  categoryItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  categoryImage: {
    width: 50,
    height: 50,
    marginBottom: 4,
  },
  popularDes: {
    width: '100%'
  },
  categoryImage2: {
    width: 90,
    height: 90,
    borderRadius: 10
  },
  categoryItem2: {
    flex: 1,
    alignItems: 'center',
    margin: 5,
    textAlign: 'center',
    paddingLeft: 15
  },
  recommentStyle: {
    width: '100%'
  },
  categoryImage3: {
    width: 150,
    height: 90,
    borderRadius: 10
  },
  footer: {
    width: '100%',
    height: '300',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5958b2',
    justifyContent: 'space-around',
    padding: 10,
    paddingTop: 30
  },
  footerIcon: {
    width: 35,
    height: 35,
    resizeMode: 'contain',

  }

})

export default Screen01;