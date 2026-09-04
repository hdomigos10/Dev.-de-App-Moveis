import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

function PerfilCard(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.userName}>{props.nome}</Text>
      <TouchableOpacity style={styles.profileButton}>
        <Feather name="user" size={24} color="#8A05BE" />
      </TouchableOpacity>
    </View>
  );
}


function LancamentoItem(props) {
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

export default function Home() {
  const listaLancamentos = [
    { id: '1', data: '16/08/2026', titulo: 'Salário', valor: 'R$ 22.000,00', tipo: 'receita' },
    { id: '2', data: '16/08/2026', titulo: 'Investimento', valor: 'R$ 1.500,00', tipo: 'receita' },
    { id: '3', data: '16/08/2026', titulo: 'Combustível', valor: 'R$ -320,27', tipo: 'despesa' },
    { id: '4', data: '17/08/2026', titulo: 'Parcela Celular 7/12', valor: null, tipo: 'neutro' },
    { id: '5', data: '17/08/2026', titulo: 'Tênis', valor: null, tipo: 'neutro' },
    { id: '6', data: '18/08/2026', titulo: 'Parcela Apê 27/180', valor: 'R$ -723,82', tipo: 'despesa' },
    { id: '7', data: '20/08/2026', titulo: 'Fone de ouvido', valor: null, tipo: 'neutro' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      
      <PerfilCard nome="Higor Domingos" />

      
      <View style={styles.cardContainer}>
        <View style={styles.cardSection}>
          <Text style={styles.cardLabel}>Saldo</Text>
          <Text style={[styles.cardValue, styles.valorPositivo]}>R$ 4.500,55</Text>
        </View>

        <View style={styles.cardSection}>
          <Text style={styles.cardLabel}>Gastos</Text>
          <Text style={[styles.cardValue, styles.valorNegativo]}>R$ -2.500,88</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="folder-plus" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="tag" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="credit-card" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <MaterialCommunityIcons name="barcode-scan" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="settings" size={22} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Feather name="user-check" size={22} color="#333" />
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Últimos lançamentos</Text>

        {listaLancamentos.map((item) => (
          <LancamentoItem
            key={item.id}
            data={item.data}
            titulo={item.titulo}
            valor={item.valor}
            tipo={item.tipo}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#6d0fb6',
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
  cardContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -40,
    borderRadius: 8,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cardSection: {
    flex: 1,
  },
  cardLabel: {
    fontSize: 16,
    color: '#A0A0A0',
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actionsContainer: {
    marginTop: 20,
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: '#F0F0F0',
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  sectionContainer: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
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