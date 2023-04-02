import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button, ScrollView } from 'react-native'

const CreateUser = () => {

    const [state, setState] = useState({
           nombre: '',
           correo: '',
           celular: '',
    })

    const handleChangeText = (nombre, value) => {
        setState({ ...state, [nombre]: value })
    }
    
  return (
    <ScrollView style={styles.container} >
        <View style={styles.inputGroup}>
            <TextInput placeholder='Nombre del Usuario' onChangeText={(value) => handleChangeText('nombre', value)}/>
        </View>
        <View  style={styles.inputGroup}>
            <TextInput placeholder='Direccion del Correo' onChangeText={(value) => handleChangeText('correo', value)}/>
        </View>
        <View  style={styles.inputGroup}>
            <TextInput placeholder='Numero de Celular' onChangeText={(value) => handleChangeText('celular', value)}/>
        </View>
        <View>
            <Button title='Guardar Usuario'/>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        padding: 35,
    },
    inputGroup: {
        flex: 1,
        padding:0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})


export default CreateUser;
