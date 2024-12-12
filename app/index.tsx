import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from 'expo-router';

// Define colors object manually if needed
const colors = {
  white: '#FFFFFF',
  green: '#28a745',
  gray: '#888888',
};

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('login'); // Navigate to the Login screen
  };

  const handleRegistration = () => {
    // Add navigation logic for Registration screen if needed
    navigation.navigate('registration');
  };

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image source={require('../app/assets/login.png')} style={styles.image} />

      {/* Title */}
      <Text style={styles.textStyle}>Login Account</Text>

      {/* Button Container */}
      <View style={styles.buttonContainer}>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButtonWrapper} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Registration Button */}
        <TouchableOpacity style={styles.registrationButtonWrapper} onPress={handleRegistration}>
          <Text style={styles.registrationButtonText}>Registration</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white, // Use defined color
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
  },
  image: {
    width: 200, // Adjust width of the image
    height: 200, // Adjust height of the image
    marginVertical: 20, // Spacing around the image
  },
  textStyle: {
    fontSize: 30,
    color: 'black', // Black text
    textAlign: 'center',
    fontWeight: 'bold', // Bold text
    marginBottom: 20, // Spacing below the text
  },
  buttonContainer: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Space out buttons evenly
    width: '30%', // Adjust container width for better spacing
    marginTop: 20,
  },
  loginButtonWrapper: {
    flex: 1, // Take equal space in the container
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    backgroundColor: colors.green,
    borderRadius: 25, // Rounded corners
    marginHorizontal: 10, // Add spacing between buttons
    height: 50, // Fixed button height
  },
  loginButtonText: {
    color: colors.white, // White text
    fontSize: 18,
    fontWeight: 'bold', // Bold text
  },
  registrationButtonWrapper: {
    flex: 1, // Take equal space in the container
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
    backgroundColor: colors.gray,
    borderRadius: 25, // Rounded corners
    marginHorizontal: 10, // Add spacing between buttons
    height: 50, // Fixed button height
  },
  registrationButtonText: {
    color: colors.white, // White text
    fontSize: 18,
    fontWeight: 'bold', // Bold text
  },
});
