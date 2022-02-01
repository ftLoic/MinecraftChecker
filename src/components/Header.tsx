import { StyleSheet, Text } from 'react-native';

const Header = (props) => {
  return (
    <Text
    style={styles.header}
    {...props}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#a31d7f',
    color: 'white',
    paddingVertical: '30%',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default Header;