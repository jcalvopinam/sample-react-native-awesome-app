import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from '../containers/styles/sharedStyles.js'

const Header = ({imagePath, imageDesc, style}) => {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.headerImage}
        source={imagePath}
      />
      <Text style={style}>{imageDesc}</Text>
    </View>
  )
}

export default Header
