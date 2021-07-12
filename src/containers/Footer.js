import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../containers/styles/sharedStyles.js'

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Image style={styles.footerImage} source={require('../images/G.png')} />
      <Text style={styles.sectionDescription}>
        {' '}
        Awesome Project Sample! - jcalvopinam
      </Text>
    </View>
  )
}

export default Footer
