import React, { useState } from 'react';
import { Text, SectionList, View, TouchableOpacity } from 'react-native';
import { sessions } from '../data/sessions.json'
import styles from '../containers/styles/sharedStyles.js'
import Footer from './Footer';
import Header from './Header';

const renderSectionHeader = ({ section }) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  )
}

const renderItem = ({ item, index }) => {
  return (
    <View>
      <SessionList
        id={index}
        title={item.title}
        desc={item.description}
        speaker={item.speakers[0].name}
        level={item.level}
        room={item.room}
      />
    </View>
  )
}

const SessionList = (props) => {
  const [moreInfo, setMoreInfo] = useState(false)
  return (
    <View style={styles.sectionContainer} key={props.id}>
      <Text style={styles.sectionTitle}>{'Session : ' + props.title}</Text>
      <Text style={styles.sectionDescription}>{'Speaker : ' + props.speaker}</Text>

      <TouchableOpacity onPress={() => setMoreInfo(!moreInfo)}>
        <Text style={styles.clickableText}>{moreInfo ? 'Hide details...' : 'Show details...'}</Text>
      </TouchableOpacity>

      {moreInfo &&
        (<>
          <Text style={styles.sectionDescription}>{'Details : ' + props.desc}</Text>
          <Text style={styles.sectionDescription}>{'Level : ' + props.level}</Text>
          <Text style={styles.sectionDescription}>{'Room : ' + props.room}</Text>
        </>)
      }
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
      imagePath={require('../images/sec2.jpg')}
      imageDesc='Awesome Sessions!'
      style={styles.sectionTitleGreen}
    />
  )
}

const FooterComponet = () => {
  return (
    <Footer />
  )
}

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => index}
        stickySectionHeadersEnabled={true}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponet}
      />
    </View>
  )
}

export default Sessions;
