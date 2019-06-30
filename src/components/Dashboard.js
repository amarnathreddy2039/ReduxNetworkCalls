//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import {connect} from 'react-redux';
import {callWebservice} from '../redux/actions/reduxAction';


// create a component
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
        responce:{},

    };
  }
  componentDidMount() {
     this.props.callWebservice();
  //  this.props.dispatch(callWebservice()); 
  }
  render() {
      console.log('API Responce-->',this.props.data);
    return (
      <View style={styles.container}>
        <Text>Dashboard </Text>
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
    isLoading: state.reduxReducerStore.isLoading,
    error: state.reduxReducerStore.error,
    data: state.reduxReducerStore.data
});

const mapDispatchToProps = (dispatch) => ({
    callService: () => dispatch(callWebservice())
})


//make this component available to the app
export default connect(mapDispatchToProps,null)(Dashboard) ;


// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50"
  }
});
