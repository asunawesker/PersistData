import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// Usamos el hook useContext cuando nuestra app tiene un state que debe ser accesible
// desde muchos componentes que estén anidados

// Lo primero que debemos hacer es importar el hook dentro del .js 
// import React, { useState, createContext } from “react”;

// Creamos el context
const CounterContext = React.createContext(0);

const useCounter = () => React.useContext(CounterContext);

// Inicializamos el context con valores predeterminados
const CounterProvider = ({ children }) => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);

  // Exportamos el componente con los valores que estarán disponibles de forma global
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const App = () => {
  // Usamos los valores del context
  const { count, increment, decrement } = useCounter();

  // O podemos utilizar 
  // const { count, increment, decrement } = React.useContext(CounterContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => increment()} />
      <Button title="Decrement" onPress={() => decrement()} />
    </View>
  );
};

export default () => (
  <CounterProvider>
    <App />
  </CounterProvider>
);