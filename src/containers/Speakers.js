import React, { useState } from 'react'
import { Text, FlatList, View, TextInput, Pressable, Image } from 'react-native'
import { speakers } from '../data/speakers.json'
import styles from '../containers/styles/sharedStyles.js'
import Footer from './Footer'
import Header from './Header'

const renderItem = ({ item }) => {
  return (
    <View>
      <SpeakerList
        id={item.id}
        name={item.name}
        bio={item.bio}
        session={item.sessions[0].name}
      />
    </View>)
}

const SpeakerList = (props) => {
  return (
    <View style={styles.sectionContainer} key={props.id}>
      <Text style={styles.sectionTitle}>{'Speaker: ' + props.name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + props.bio}</Text>
      <Text style={styles.sectionDescriptionBold}>{'Session: ' + props.session}</Text>
    </View>
  )
}

const SeparatorComponent = () => {
  return (
    <View style={styles.separatorLine} />
  )
}

const HeaderComponent = () => {
  return (
    <Header
      imagePath={require('../images/girl.png')}
      imageDesc='Awesome Speakers Lineup!'
      style={styles.sectionTitleGreen}
    />
  )
}

const FooterComponet = () => {
  return (
    <Footer />
  )
}

const SearchSessions = (props) => {
  const [searchText, setSearchText] = useState('')

  const handleSearch = (text) => {
    setSearchText(text)
    props.findText(text)
  }

  const clearSearch = () => {
    this.textInput.clear()
    props.findText('');
  }

  return (
    <View style={styles.container}>
      <TextInput
        ref={(ref) => { this.textInput = ref }}
        style={styles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        autoCorrect={false}
        autoFocus={true}
        keyboardType={'default'}
      />
      <Pressable
        onPress={clearSearch}
        style={styles.clearContainer}>
        <Image
          style={styles.clearImage}
          source={require('../images/multiply-1_Orange.png')} />
      </Pressable>
    </View>
  )
}

function Speakers() {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers)

  const getText = (text) => {
    let filteredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()))
    setFilteredSpeakers(filteredSpeakersList)
  }

  return (
    <View>
      <SearchSessions findText={getText} />
      <FlatList
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        pagingEnabled={false}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponet}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
      />
    </View>
  )
}

export default Speakers;
