//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { connect } from "react-redux";
import { callWebservice } from "../redux/actions/reduxAction";

// create a component
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responce: {}
    };
  }
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: "API TEST"
    };
  };
  componentDidMount() {
    this.props.callService();
    //  this.props.dispatch(callWebservice());
  }
  render() {
    // const{apiresponcedata}=this.props.data;
    console.log("API Responce-->", JSON.stringify(this.props.data));

    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            flexDirection: "column"
          }}
        >
          <View style={styles.container}>
            <Text>{JSON.stringify(this.props.data)}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.reduxReducer.isLoading,
  error: state.reduxReducer.error,
  data: state.reduxReducer.data
});

const mapDispatchToProps = dispatch => ({
  callService: () => dispatch(callWebservice())
});

//make this component available to the app
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
