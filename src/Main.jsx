import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function BoardComponent({ children }) {
   return (
      <View style={styles.board}>
         {children}
      </View>
   );
}

function RowComponent({ children }) {
   return (
      <View style={styles.row} >
         {children}
      </View>
   );
}

function CellComponent({ children }) {
   return (
      <View style={styles.cell}>
         {children}
      </View>
   );
}

export default function Main() {
   return (
      <View style={styles.container}>
         <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle="default"
            translucent={true}
            showHideTransition="fade"
            hidden={false}
         />
         <Text style={styles.button}>Barney Corracle</Text>
         <BoardComponent>
            <RowComponent>
               <CellComponent>
                  a
               </CellComponent>
               <CellComponent>
                  b
               </CellComponent>
               <CellComponent>
                  c
               </CellComponent>
               <CellComponent>
                  d
               </CellComponent>
               <CellComponent>
                  e
               </CellComponent>
            </RowComponent>
            <RowComponent>
               <CellComponent>
                  a2
               </CellComponent>
               <CellComponent>
                  b2
               </CellComponent>
               <CellComponent>
                  c2
               </CellComponent>
               <CellComponent>
                  d2
               </CellComponent>
               <CellComponent>
                  e2
               </CellComponent>
            </RowComponent>
         </BoardComponent>
         <TouchableOpacity onPress={() => alert("Hello, world!")} style={styles.button}>
            <Text style={styles.buttonText}>Pick a photo</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   board: {
      width: "100%",
      display: "flex",
      flexWrap: "nowrap"
   },
   row: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
   },
   cell: {
      color: 'black',
      fontFamily: 'sans-serif',
      fontSize: 32,
      fontWeight: 'bolder',
      backgroundColor: "white",
      alignItems: "center",
      height: 60,
      width: 60,
      justifyContent: "center",
      padding: 20,
      margin: 5,
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 2,
   },
   container: {
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
   },
   logo: {
      width: 305,
      height: 159,
      marginBottom: 20
   },
   instructions: {
      color: "#888",
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10
   },
   button: {
      backgroundColor: "blue",
      padding: 20,
      borderRadius: 30
   },
   buttonText: {
      fontSize: 20,
      color: "#fff"
   }
});
