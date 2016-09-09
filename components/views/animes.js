import {
  Image,
  ListView,
  View,
  Text, 
  TouchableHighlight,
  StyleSheet
} from 'react-native';
var React = require('react');
var Episodes = require('./episodes');

import Api from '../../api/animes';
var initShowObj = {
  Title:''
}

module.exports = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(initShowObj),
      errorMessage: ''
    };
  },

  componentDidMount: function() {
    this.setAnimes();
  },
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => this.renderListItem(rowData)}
          style={styles.listView}
        />
      </View>
    );
  },

  renderListItem(show) {
    return (
      <TouchableHighlight onPress={() => this.showEpisodes(show)} underlayColor='#dddddd'>
        <View>
          <View style={styles.listItem}>
            <View style={styles.rightContainer}>
              <Text style={styles.title}>{show.Title}</Text>
            </View>
          </View>
          <View style={styles.separator} />
        </View>
      </TouchableHighlight>
    );
  },

  showEpisodes(show) {
    this.props.navigator.push({
      title: show.Title,
      component: Episodes,
      passProps: {show}
    });
  },

  setAnimes: function() {
    Api.getAnimes().then((data) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(data)
      });
    }, function error (data) {
        this.setState({ errorMessage: error.error });
    });
  },
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    listItem:{
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#F5FCFF',
      padding: 10,
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20
    },
    separator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
    listView: {
        backgroundColor: '#F5FCFF',
        marginTop:10
    }
});