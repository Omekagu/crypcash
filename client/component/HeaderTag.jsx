import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons'

const Header = ({ onProfilePress }) => {
  const [activeTab, setActiveTab] = useState('Exchange')
  const [searchVisible, setSearchVisible] = useState(false)
  const [notifications, setNotifications] = useState(3) // Example count

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        CRYP<Text style={{ color: 'white' }}>CASH</Text>
      </Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        {['Exchange', 'WEB3'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabButton, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTabText
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Right Section */}
      <View style={styles.rightSection}>
        {/* Search Bar Toggle */}
        {searchVisible ? (
          <TextInput
            style={styles.searchInput}
            placeholder='Search...'
            placeholderTextColor='#bbb'
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={() => setSearchVisible(true)}>
            <Ionicons name='search' size={24} color='white' />
          </TouchableOpacity>
        )}

        {/* Notifications */}
        <TouchableOpacity style={styles.notificationIcon}>
          <FontAwesome name='bell' size={24} color='white' />
          {notifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{notifications}</Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Profile */}
        <TouchableOpacity onPress={onProfilePress}>
          <Feather name='user' size={24} color='white' />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121212',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    color: '#FFC107',
    fontSize: 20,
    fontWeight: 'bold'
  },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#2A2A2A',
    borderRadius: 10
  },
  tabButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10
  },
  activeTab: {
    backgroundColor: '#3A3A3A'
  },
  tabText: {
    color: 'gray'
  },
  activeTabText: {
    color: 'white'
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    backgroundColor: '#1E1E1E',
    color: 'white',
    paddingHorizontal: 10,
    borderRadius: 5,
    width: 120,
    marginRight: 10
  },
  notificationIcon: {
    position: 'relative',
    marginRight: 15
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    minWidth: 18,
    alignItems: 'center'
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default Header
