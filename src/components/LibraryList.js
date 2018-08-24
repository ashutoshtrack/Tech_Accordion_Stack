import React, { Component } from "react";
import { View, ListView } from "react-native";
import { connect } from "react-redux";
import ListIteme from "./ListIteme";

class LibraryList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderRow(library) {
    return <ListIteme library={library} />;
  }

  render() {
    return <ListView dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
