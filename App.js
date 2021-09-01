import { StatusBar } from 'expo-status-bar';
//import React from 'react';
import React, { useState } from 'react';
import { Button, NativeModules, StyleSheet, Text, TextInput, View } from 'react-native';
//import { useState } from 'react/cjs/react.production.min';

export default function App() {
  const [valor_prestamo, setValorPrestamo] = useState('');
  const [tipo_prestamo, setTipoPrestamo] = useState('');
  const [cuotas, setCuotas] = useState('');
  const [valor_cuota, setValorCuota] = useState('');
  const [total_deuda, setTotalDeuda] = useState('');

  const calcularCuota = () => {
    if (valor_prestamo == '' || tipo_prestamo == '' || cuotas == '') {
      alert('Todos los campos deben estar diligenciados')
    } else {
      if (valor_prestamo < 4000000) {
        alert('El valor solicitado debe ser superior a $ 4.000.000')
      }
      else { 
        if (tipo_prestamo != 'Vivienda' && tipo_prestamo != 'Educacion' && tipo_prestamo != 'Vehiculo' && tipo_prestamo != 'Libre Inversion'){
          alert('Debe ingresar un tipo de préstamo valido')
        } else{
          let interes;
        switch (tipo_prestamo) {
          case 'Vivienda':
            interes = 0.5
            break;
          case 'Educacion':
            interes = 0.7
            break;
          case 'Vehiculo':
            interes = 1.4
            break;
          case 'Libre Inversion':
            interes = 1.8
            break;
        }
        setValorPrestamo(parseFloat(valor_prestamo))
        setTipoPrestamo(parseFloat(interes))
        alert(valor_prestamo)
        alert(tipo_prestamo)
        alert(interes)
        }    
        
      }
    }

  }

  return (
    <View style={styles.container}>
      <Text>BANCO AGRICOLA</Text>
      <Text>Simulador de Credito</Text>
      <Text>{'\n'}</Text>
      <Text>Valor del Préstamo</Text>
      <TextInput
        placeholder="$"
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 14 }}
        onChangeText={valor_prestamo => setValorPrestamo(valor_prestamo)}
        value={valor_prestamo}
      />
      <Text>{'\n'}</Text>
      <Text>Tipo de Préstamo</Text>
      <TextInput
        placeholder="seleccione"
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 14 }}
        onChangeText={tipo_prestamo => setTipoPrestamo(tipo_prestamo)}
        value={tipo_prestamo}
      />
      <Text>{'\n'}</Text>
      <Text>Número de Cuotas</Text>
      <TextInput
        placeholder="cantidad"
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 14 }}
        onChangeText={cuotas => setCuotas(cuotas)}
        value={cuotas}
      />
      <Text>{'\n'}</Text>
      <Text>Valor de Cuota</Text>
      <TextInput
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 14 }}
        value={valor_cuota}
      />
      <Text>{'\n'}</Text>
      <Text>Total Deuda</Text>
      <TextInput
        style={{ borderStyle: 'solid', color: 'blue', fontSize: 14 }}
        value={total_deuda}
      />
      <Text>{'\n'}</Text>
      <Button
        title="Calcular Cuota"
        onPress={calcularCuota}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
