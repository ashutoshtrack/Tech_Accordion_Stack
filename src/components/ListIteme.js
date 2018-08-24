import React from "react";
import { CardSection } from "./common";
import {
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class ListIteme extends React.Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.description}</Text>
        </CardSection>
      );
    }
  }

  render() {
    console.log(this.props);
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={styles.titleSytle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleSytle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};

export default connect(mapStateToProps, actions)(ListIteme);
