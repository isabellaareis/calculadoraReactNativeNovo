import { useState } from "react";
import {AppRegistry} from "react-native";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function App(){
    const[primeiroNumero, setPrimeiroNumero] = useState(0);
    const[segundoNumero, setSegundoNumero] = useState(0);
    const[resultado, setResultado] = useState(0);
    return(
        <View style={styles.tela}>
            <Text style={styles.tituloPrograma}>Calculadora</Text>

            <View style={styles.primeiroCampo}>
                <TextInput placeholder="Informe um número" style={styles.labelPrimeiroCampo} />
            </View>

            <View style={styles.segundoCampo}>
                <TextInput placeholder="Informe um número" style={styles.labelPrimeiroCampo} />
            </View>

            <View style={styles.areaResultado}>
                <Text style={styles.resultado}>{resultado}</Text>
            </View>

            <View style={styles.containerBotao}>
                <View style={styles.botaoGroup}> 
                    <TouchableOpacity style={styles.botoes}
                    color="#fff"
                    >
                        <Text style={styles.somar}>Somar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botoes}
                        color="#fff"
                    >
                        <Text style={styles.somar}>Subtrair</Text>
                    </TouchableOpacity>
                </View>
           

                <View style={styles.botaoGroup}> 
                    <TouchableOpacity style={styles.botoes}
                    color="#fff"
                    >
                        <Text style={styles.somar}>Multiplicar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botoes}
                        color="#fff"
                    >
                        <Text style={styles.somar}>Dividir</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.btnLimpar}>
                <TouchableOpacity style={styles.botaoLimpar}color="#fff">
                        <Text style={styles.somar}>Limpar</Text>
                </TouchableOpacity>
            </View>

            
            
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        backgroundColor: "#1a1a1a",
        color: "#ffff",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
    },

    tituloPrograma: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
    },

    primeiroCampo: {
        borderColor: "#ffffff",
        borderWidth: 2,
        backgroundColor: "#fff",
        color: "#fff",
        padding: 8,
        borderRadius: 20,
        marginTop: 60,
        width: 300,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
        elevation: 10,
    },

    segundoCampo: {
        borderColor: "#ffffff",
        borderWidth: 2,
        backgroundColor: "#fff",
        margin: 10,
        color: "#fff",
        padding: 8,
        borderRadius: 20,
        marginTop: 25,
        width: 300,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },

    areaResultado: {
        borderColor: "#ffffff",
        borderWidth: 2,
        backgroundColor: "#fff",
        color: "#fff",
        padding: 8,
        borderRadius: 20,
        marginTop: 25,
        width: 300,
        height: 60,
        shadowColor: '#ffffff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 10,
    },

    resultado: {
        fontSize: 18,
        marginLeft: 15,
    },

    labelPrimeiroCampo: {
        fontSize: 18,
        marginLeft: 15,
    },

    containerBotao: {
        display: "flex",
        flexDirection: "row", 
        justifyContent: "space-between", 
        width: "100%", 
        paddingHorizontal: 40,
        marginTop: 50,
    },
    
    botaoGroup: {
        display: "flex",
        flexDirection: "column", 
        justifyContent: "center", 
    },
    
    botoes: {
        padding: 15,
        backgroundColor: "#2E8B57",
        width: 150,
        borderRadius: 15,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center", 
    },

    somar: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: 600,
        color: "#fff",
    },

    botaoLimpar: {
        padding: 15,
        backgroundColor: "#DC143C",
        width: 300,
        borderRadius: 15,
        marginTop: 30,
    }
});

AppRegistry.registerComponent('main', () => App);