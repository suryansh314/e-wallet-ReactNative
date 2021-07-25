import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';

export default function ScanCamera({children}) {
  const [camera, setCamera] = useState({
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  });

  useEffect(() => {
    async function fetchData() {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    
    setCamera((prevState) => ({
      ...prevState,
      hasCameraPermission: status === 'granted',
    }));
    }
    fetchData();
  }, [])

  if (camera.hasCameraPermission === null) {
    return <View />;
  } else if (camera.hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <Camera style={{ flex: 1 }} type={camera.type}>{children}
        </Camera>
      </View>
    );
  }
}
