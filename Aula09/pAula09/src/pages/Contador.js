import { View, Text, Button } from 'react-native';
import { useState } from 'react';

export default function Contador() {
   const [valor, setValor] = useState(0);

   function incrementar() {
      setValor(valor + 1);
   }

   function decrementar() {
      setValor(valor > 0 ? valor - 1 : 0);
   }

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <Button
            title="+"
            onPress={incrementar}
         />
         <Button
            title="-"
            onPress={decrementar}
         />
         <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{valor}</Text>
      </View>
   );
}