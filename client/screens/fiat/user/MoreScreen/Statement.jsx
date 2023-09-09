import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../../component/Header';
import MoreComp from '../../../../component/MoreComp';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const Statement = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>
      <Header
        headerTitle={'statement & reports 🇳🇬'}
        style={{ marginBottom: 20 }}
      />
      <MoreComp
        style={{ fontSize: 18 }}
        title={'Request statement'}
        image={<MaterialIcons name="library-books" size={18} color="green" />}
      />
      <MoreComp
        style={{ fontSize: 18 }}
        title={'spending report'}
        image={<FontAwesome name="pie-chart" size={18} color="#399dbd" />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Statement;
