
import React from 'react';
import {View, StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 30,
    backgroundColor: "#7A4A9E",
    alignContent: "space-between"
  },
  top: {
    flex: 0.3,
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  tasktitle: {
    flex: 0.3,
    backgroundColor: 'pink',
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  subtitle:{
    fontSize: 16,
    color: "#f2f2f2"
  },
  emptylist: {
    padding: 10,
    width:300,
    height: 500,
    backgroundColor:"#7A4A9E",
    justifyContent:"center",
    alignItems: "center"
  },
  emptylistext: {
    fontWeight: "400",
    color:"#f2f2f2"
  },

  inputwrapper:{
    backgroundColor: "#7A4A9E;",
    justifyContent: "center",
    alignContent: "space-between",
    flexDirection: "row",
    height: 51,
    marginTop: 24,
  },
  tasks: {
    fontSize: 20,
    color: "#f2f2f2",
    marginTop: 24,
  },

  buttonText: {
    color: "#fff",
  },

  button :{
    backgroundColor: "#31C667",
    justifyContent: "center",
    alignItems: "center",
    width: 51,
    height: 51,
    flexShrink: 0,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },

  inputAdicionar: {
    width: 249,
    height: 51,
    backgroundColor: "#f2f2f2",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,

  },

  title: {
    fontSize: 24,
    color: "#ffffff",
    fontWeight: "bold",
  }
});

export default styles;