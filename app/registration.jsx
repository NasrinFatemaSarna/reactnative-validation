
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Registration = () => {
  const navigation = useNavigation();
  const [secureEntry, setSecureEntry] = useState(true); // State for toggling password visibility
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const [phoneNumber, setPhoneNumber] = useState(''); // State for phone number

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleLogin = () => {
    navigation.navigate('login');
  };

  const handleRegistration = () => {
    // Add validation and API call logic
    if (!email || !password || !phoneNumber) {
      alert('Please fill in all fields');
      return;
    }
    navigation.navigate('login');
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <Text style={styles.textContainer}>Let's get started</Text>

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
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.inputContainer}>
          <Ionicons name="phone-portrait-outline" size={25} color="#555" style={styles.icon} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your Phone Number"
            placeholderTextColor="#aaa"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
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
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setSecureEntry(!secureEntry)}>
            <SimpleLineIcons
              name={secureEntry ? 'eye-off' : 'eye'}
              size={20}
              color="#555"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Registration Button */}
        <TouchableOpacity onPress={handleRegistration} style={styles.registrationButton}>
          <Text style={styles.registrationButtonText}>Register</Text>
        </TouchableOpacity>

        {/* Divider Text */}
        <Text style={styles.continueText}>or continue with</Text>

        {/* Google Button */}
        <TouchableOpacity style={styles.googleButton}>
          <Image
            source={require('../app/assets/google.png')} // Path to your Google logo image
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Google</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <Text style={styles.accountText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Registration;

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
    width: '100%', // Adjusted width for responsiveness
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
  registrationButton: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 20,
  },
  registrationButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
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
  loginText: {
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

// const Registration = () => {
//   const navigation = useNavigation(); // Invoke useNavigation as a function
//   const [secureEntry, setSecureEntry] = useState(true); // State for toggling password visibility
//   const [email, setEmail] = useState(""); // State for
//   const [password, setPassword] = useState(""); // State for password
//   const [phoneNumber, setPhoneNumber] = useState(""); // State for confirm password

//   const handleGoBack = () => {
//     navigation.goBack();
//   };
//   const handleLogin = () => {
//     navigation.navigate('login');
//   };

//   const handleEmail = (e) => {
//     setEmail(e.target.value);

// }

//   const handlePassword = (e) => {
//     setPassword(e.target.value);
//   }
//   const handlePhoneNumber = (e) => {
//     setPhoneNumber(e.target.value);
//   }
//   const handleRegistration = (e) => {
//     // Add your validation and API call here
//     navigation.navigate('login');
//   }

// return (
//     <View style={styles.container}>
//       {/* Back Button */}
//       <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
//         <Ionicons name="arrow-back-outline" size={30} color="#fff" />
//       </TouchableOpacity>

//       {/* Welcome Text */}
//       <Text style={styles.textContainer}>Let's get started</Text>

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
//             onPress={handleEmail}
//           />
//         </View>

//         <View style={styles.inputContainer}>
//           <Ionicons name="phone-portrait-outline" size={25} color="#555" style={styles.icon} />
//           <TextInput
//             style={styles.textInput}
//             placeholder="Enter your Phone Number"
//             placeholderTextColor="#aaa"
//             keyboardType="email-address"
//             onPress={handlePhoneNumber}
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
//             onChangeText={handlePassword}
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

    

//         {/* registration Button */}
//         <TouchableOpacity onPress={handleRegistration} style={styles.registrationButton}>
//           <Text style={styles.registrationButtonText}>Registration</Text>
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
//           <Text style={styles.accountText}>Already have an account!</Text>
//           <TouchableOpacity onPress={handleLogin}>
//             <Text style={styles.loginText}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default Registration;

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
//     registrationButton: {
//     backgroundColor: '#000',
//     paddingVertical: 15,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//     registrationButtonText: {
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
//   loginText: {
//     color: '#000',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 5,
//   },
// });

