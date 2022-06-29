import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export default function SearchBarHome()  {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
    style={styles.search}
      placeholder="Qual Produto você procura ?"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

const styles = StyleSheet.create({
    search:{
        borderRadius:20,
        marginTop:30,
        marginLeft:20,
        marginRight:20
    }

})

