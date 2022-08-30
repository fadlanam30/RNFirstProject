/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// import React from 'react';
import React, { useState, useRef, useEffect } from 'react';
// import type {Node} from 'react';
import {
  Animated,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isHungry, setIsHungry] = useState(true);
  const [text, setText] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            padding: 10,
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={[styles.sectionTitle]}>
            Loading Indicator Example
          </Text>
          <ActivityIndicator size="large" color="#00ff00"/>
          <Text style={[styles.sectionTitle]}>
            Button State Example
          </Text>
          <Text style={[styles.sectionDescription]}>
            I am GooGooo, and I am {isHungry ? "hungry" : "full"}!    
          </Text>
          <Button 
              onPress={() => {
                setIsHungry(false);
              }}
              disabled={!isHungry}
              title={isHungry ? "Pour me some milk, please!" : "Thank you!"}
            />
          <Text style={[styles.sectionTitle]}>
            Text Input Example
          </Text>
          <TextInput
            style={{height: 50}}
            placeholder="Type here to display a mask!"
            onChangeText={newText => setText(newText)}
            defaultValue={text}
          />
          <Text style={{padding: 10, fontSize: 42}}>
            {text.split(' ').map((word) => word && '👺').join(' ')}
          </Text>
          
          {/* <Section title="Step One">
            Edit <Text style={styles.highlight}>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
