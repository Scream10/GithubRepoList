import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      paddingLeft: 20,
      paddingRight: 20,
      alignItems: 'center',
    },
    titleBlue: {
      fontSize: 28,
      textTransform: 'uppercase',
      fontWeight: '700',
      color: '#0266D6',
    },
    title: {
      display: 'flex',
      alignItems: 'flex-start',
      width: '100%',
      paddingLeft: 15,
      fontSize: 28,
      textTransform: 'uppercase',
      fontWeight: '700',
    },
    separator: {
      marginVertical: 5,
      borderBottomColor: '#e5e5e5',
      borderBottomWidth: 1,
      width: '100%',
    },
    input: {
      height: 40,
      margin: 12,
      marginBottom: 20,
      fontSize: 16,
      paddingLeft: 15,
      borderRadius: 8,
      backgroundColor: '#e5e5e5',
      width: '100%',
    },
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      padding: 10,
      width: '100%',
      borderRadius: 4,
    },  
    cardAvatar: {
      width: 60,
      height: 60,
      backgroundColor: '#0266D6',
      marginRight: 15,
      borderRadius: 15,
    },
    cardRepo: {
      marginBottom: 5,
      color: '#000',
      fontWeight: '700',
      fontSize: 18,
    },
    cardShortDescription: {
      fontSize: 16,
      fontWeight: '300',
    },
  });

export default styles;