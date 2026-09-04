import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LancamentoItem(props) {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemData}>{props.data}</Text>
        <Text style={styles.itemTitulo}>{props.titulo}</Text>
      </View>

      {props.valor ? (
        <Text
          style={[
            styles.itemValor,
            props.tipo === 'receita' ? styles.valorPositivo : styles.valorNegativo,
          ]}
        >
          {props.valor}
        </Text>
      ) : (
        <View style={styles.skeletonBar} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  itemData: {
    fontSize: 12,
    color: '#CCC',
    marginBottom: 2,
  },
  itemTitulo: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#111',
  },
  itemValor: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  valorPositivo: {
    color: '#00C853',
  },
  valorNegativo: {
    color: '#E53935',
  },
  skeletonBar: {
    width: 90,
    height: 12,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
  },
});