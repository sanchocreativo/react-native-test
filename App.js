/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-dates/initialize';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
              <Text style={styles.sectionDescription}>
                RRHH Denwa
              </Text>
              <Text style={styles.sectionDescription}>
                Proximos cumpleaños
              </Text>
              <Text style={styles.sectionDescription2}>
                Mira Mamá es mi primera app 
              </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
 
  sectionDescription: {
    margin: 8,
    fontSize: 18,
    color: Colors.dark,
    fontFamily: 'CerebriSans-Book',
  },
  sectionDescription2: {
    margin: 8,
    fontSize: 55,
    color: Colors.dark,
    fontFamily: 'CerebriSans-Book',
  },
  highlight: {
    margin: 8,
  },
 
});

export default App;
