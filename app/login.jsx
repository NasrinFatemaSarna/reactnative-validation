
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Login = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleGoBack = () => navigation.goBack();
  const handleRegistration = () => navigation.navigate('registration');
  const handleLogin = () => {
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
    // Add login logic or API call here
    alert('Login Successful!');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.textContainer}>Hey, Welcome Back</Text>

      {/* Form */}
      <View style={styles.formContainer}>
        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={25} color="#555" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#aaa"
            keyboardType="email-address"
            onChangeText={setEmail} // Update state
            value={email}
          />
        </View>

        {/* Password Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={25} color="#555" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#aaa"
            secureTextEntry={secureEntry}
            onChangeText={setPassword} // Update state
            value={password}
          />
          {/* Eye Icon for Toggling Password Visibility */}
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <SimpleLineIcons
              name={secureEntry ? 'eye-off' : 'eye'}
              size={20}
              color="#555"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Forgot Password Link */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Divider Text */}
        <Text style={styles.continueText}>or continue with</Text>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../app/assets/google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Don’t have an account?</Text>
          <TouchableOpacity onPress={handleRegistration}>
            <Text style={styles.registrationText}>Registration</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButtonWrapper: {
    height: 30,
    width: 30,
    backgroundColor: '#888',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 50,
    left: 20,
  },
  textContainer: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '90%',
    maxWidth: 400, // Limit width for larger screens
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 50,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  icon: {
    marginLeft: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#888',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'right',
  },
  continueText: {
    color: '#888',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: '#E5EFF8',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',                                                                                                                                                                                                    
    borderWidth: 2,
  },
  googleButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleIcon: {
    width: 20,
    height: 20,
  },
  footerContainer: {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  accountText: {
    color: '#000',
    fontSize: 16,
  },
  registrationText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
});



































// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import { SimpleLineIcons } from '@expo/vector-icons';
// import { useNavigation } from 'expo-router';

// const Login = () => {
//   const navigation = useNavigation(); // Invoke useNavigation as a function
//   const [secureEntry, setSecureEntry] = useState(true); // State for toggling password visibility

//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const handleRegistration = () => {
//     navigation.navigate('registration');
//   };

//   return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
//         <Ionicons name="arrow-back-outline" size={30} color="#fff" />
//       </TouchableOpacity>

//       {/* Welcome Text */}
//       <Text style={styles.textContainer}>Hey, Welcome Back</Text>

//       {/* Form */}
//       <View style={styles.formContainer}>
//         {/* Email Input */}
//         <View style={styles.inputContainer}>
//           <Ionicons name="mail-outline" size={25} color="#555" style={styles.icon} />
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your email"
//             placeholderTextColor="#aaa"
//             keyboardType="email-address"
//           />
//         </View>

//         {/* Password Input */}
//         <View style={styles.inputContainer}>
//           <Ionicons name="lock-closed-outline" size={25} color="#555" style={styles.icon} />
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your password"
//             placeholderTextColor="#aaa"
//             secureTextEntry={secureEntry}
//           />
//           {/* Eye Icon for Toggling Password Visibility */}
//           <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
//             <SimpleLineIcons
//               name={secureEntry ? 'eye-off' : 'eye'}
//               size={20}
//               color="#555"
//               style={styles.icon}
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Forgot Password Link */}
//         <TouchableOpacity>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>

//         {/* Login Button */}
//         <TouchableOpacity style={styles.loginButton}>
//           <Text style={styles.loginButtonText}>Login</Text>
//         </TouchableOpacity>

//         {/* Divider Text */}
//         <Text style={styles.continueText}>or continue with</Text>

//         {/* Google Button */}
//         <TouchableOpacity style={styles.googleButton}>
//           <Image
//             source={require('../app/assets/google.png')} // Path to your Google logo image
//             style={styles.googleIcon}
//           />
//           <Text style={styles.googleButtonText}>Google</Text>
//         </TouchableOpacity>

//         {/* Footer */}
//         <View style={styles.footerContainer}>
//           <Text style={styles.accountText}>Don’t have an account?</Text>
//           <TouchableOpacity onPress={handleRegistration}>
//             <Text style={styles.registrationText}>Registration</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f0f0',
//     padding: 25,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   backButtonWrapper: {
//     height: 30,
//     width: 30,
//     backgroundColor: '#888',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     top: 50,
//     left: 20,
//   },
//   textContainer: {
//     fontSize: 32,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   formContainer: {
//     width: '20%', // Responsive width
//     marginTop: 20,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 50,
//     marginVertical: 10,
//     paddingHorizontal: 15,
//     backgroundColor: '#fff',
//   },
//   icon: {
//     marginLeft: 10,
//   },
//   textInput: {
//     flex: 1,
//     fontSize: 16,
//     paddingVertical: 10,
//     paddingHorizontal: 10,
//     color: '#333',
//   },
//   loginButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPasswordText: {
//     color: '#888',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     textAlign: 'right',
//   },
//   continueText: {
//     color: '#888',
//     fontSize: 16,
//     marginTop: 20,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   googleButton: {
//     backgroundColor: '#E5EFF8',
//     padding: 10,
//     borderRadius: 100,
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     borderWidth: 2,
//   },
//   googleButtonText: {
//     color: 'black',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 10, // Space between the icon and the text
//   },
//   googleIcon: {
//     width: 20,
//     height: 20,
//   },
//   footerContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   accountText: {
//     color: '#000',
//     fontSize: 16,
//   },
//    registrationText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
// });
