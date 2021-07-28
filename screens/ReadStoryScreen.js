import React from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class ReadStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            storyName: ''
        }
    }

    retrieveStories = async ()=>{
        const allStories =  db.collection("stories");
    }

    searchFilter = async ()=>{
        const storyRef = await db
        .collection("stories")
        .where("title", "==", this.state.storyName)
        .get()

        if(storyRef.docs.length === 0){
            Alert.alert("Book not found!")
        } else {
            storyRef.map(doc =>{
                var story = doc.data()
            })
            
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity>
                    <Text>Submit</Text>
                    onPress = {this.searchFilter}
                </TouchableOpacity>
                <SearchBar
                placeholder = "Type here..."
                onChangeText = {this.storyName}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20
    }
})