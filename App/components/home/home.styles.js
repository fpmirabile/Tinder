import {
  StyleSheet
} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f7f7f7',
    },
    buttons:{
      width:80, 
      height:80, 
      borderWidth:10, 
      borderColor:'#e7e7e7', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:40
    },
    buttonSmall:{
      width:50, 
      height:50, 
      borderWidth:10, 
      borderColor:'#e7e7e7', 
      justifyContent:'center', 
      alignItems:'center',
      borderRadius:25
    },
     card: {
      flex: 1,
      alignItems: 'center',
      alignSelf:'center',
      borderWidth:2,
      borderColor:'#e3e3e3',
      width: 350,
      height: 420,
    }
   
  });