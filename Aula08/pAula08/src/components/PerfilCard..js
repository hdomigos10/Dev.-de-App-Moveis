import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function PerfilCard(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>{props.nome}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Feather name="user" size={24} color="#8A05BE" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#8A05BE',
    height: 140,
    paddingHorizontal: 20,
    paddingTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileButton: {
    backgroundColor: '#E8D2F5',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});