import React, { Component } from 'react';
import { Text, SafeAreaView, View, FlatList } from 'react-native';
import SearchBar from './SearchBar';

export default class App extends React.Component {

  state = {
    data: [
      {id: '1', bookName: 'Name of the Wind'},
      {id: '2', bookName: 'Wise mans fear'},
      {id: '3', bookName: 'Doors of stone'},
      {id: '4', bookName: 'Harry potter and the sorcerer\'s stone'}],
    filtered: [],
  }


  componentWillMount() {
    const { data } = this.state;
    this.setState({filtered:data})
  }


  renderItem(i) {
    return (
      <View style={{margin: 8, alignItems: 'center'}}>
        <Text>{i.item.bookName}</Text>
      </View>
    )
  }

  handleSearch = text => {
    console.log(text)
    this.setState({
      filtered: this.state.data.filter(item => item.bookName.toLowerCase().includes(text.toLowerCase()) )
    })
  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <SearchBar
        placeholder={'Search Books'}
        onChange={this.handleSearch}
        />
        <FlatList
        data={this.state.filtered}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
  },
}
