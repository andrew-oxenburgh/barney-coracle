import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";

function BoardComponent({ children }): React.ReactElement<View> {
  return <View style={styles.board}>{children}</View>;
}

function RowComponent({ children }): React.ReactElement<View> {
  return <View style={styles.row}>{children}</View>;
}

function CellComponent({ children }): React.ReactElement<View> {
  return <View style={styles.cell}>{children}</View>;
}

export default function Main(): React.ReactElement<View> {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        translucent={true}
        hidden={false}
      />
      <Text style={styles.button}>Barney Corracle</Text>
      <BoardComponent>
        <RowComponent>
          <CellComponent>
            <Text>a</Text>
          </CellComponent>
          <CellComponent>
            <Text>b</Text>
          </CellComponent>
          <CellComponent>
            <Text>c</Text>
          </CellComponent>
          <CellComponent>
            <Text>d</Text>
          </CellComponent>
          <CellComponent>
            <Text>e</Text>
          </CellComponent>
        </RowComponent>
        <RowComponent>
          <CellComponent>
            <Text>a2</Text>
          </CellComponent>
          <CellComponent>
            <Text>b2</Text>
          </CellComponent>
          <CellComponent>
            <Text>c2</Text>
          </CellComponent>
          <CellComponent>
            <Text>d2</Text>
          </CellComponent>
          <CellComponent>
            <Text>e2</Text>
          </CellComponent>
        </RowComponent>
      </BoardComponent>
      <TouchableOpacity
        onPress={() => alert("Hello, world!")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Pick a photo</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  board: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
  },
  row: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  cell: {
    color: "black",
    fontFamily: "sans-serif",
    fontSize: 32,
    fontWeight: "bold",
    backgroundColor: "white",
    alignItems: "center",
    height: 60,
    width: 60,
    justifyContent: "center",
    padding: 20,
    margin: 5,
    borderColor: "red",
    borderStyle: "solid",
    borderWidth: 2,
  },
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  logo: {
    width: 305,
    height: 159,
    marginBottom: 20,
  },
  instructions: {
    color: "#888",
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 20,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 20,
    color: "#fff",
  },
});
