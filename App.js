import {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, Button } from "react-native";


export default function App() {

  const [count,setCount] = useState(0)
  const [min,setMin] = useState(0)

  useEffect(()=>{
    setTimeout(()=>{
      setCount(p=>p+1)
      if(count >= 59) {
        setMin(p=>p+1)
        setCount(0)
      }
    },1000)
  },[])
  

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.text}>{min}m :{count}s</Text>
      <View style={styles.buttons}>
        <Button 
          onPress={()=>{setCount(x=>x-1)}}
          title='-1'
        />
        <Button 
          onPress={()=>{setCount(0)}}
          title='Reset'
        />
        <Button 
          onPress={()=>{setCount(x=>x+1)}}
          title='+1'
          style={styles.button}
        />
      </View>
      <Text></Text>
      <View style={styles.buttons}>
        <Button 
          onPress={()=>{setCount(x=>x-10)}}
          title='-10'
        />
        <Button 
          onPress={()=>{setCount(x=>x+10)}}
          title='+10'
          style={styles.button}
        />
      </View>

      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    backgroundColor: '#FFF',
    textAlign: 'center',
    padding: 40,
    fontSize: 60
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    fontSize: 30,
    backgroundColor: 'red'
  },
  footer: {
    backgroundColor: 'blue', 
    position: 'relative',
    top: 0
  }
});
