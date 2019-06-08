/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from "react-native";

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions
} from "react-native/Libraries/NewAppScreen";

import { RNCamera as Camera } from "react-native-camera";

class App extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={styles.container}>
          <Camera
            ref={ref => {
              this.camera = ref;
            }}
            style={styles.preview}
            type={Camera.Constants.Type.back}
            flashMode={Camera.Constants.FlashMode.on}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes);
            }}
          />
          <View
            style={{
              flex: 0,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style={styles.capture}
            >
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});

export default App;
