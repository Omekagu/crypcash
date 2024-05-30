import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import MoreComp from '../../../../component/MoreComp';
import AccountCopy from '../../../../component/AccountCopy';
import ProfileHeader from '../../../../component/ProfileHeader';
import Header from '../../../../component/Header';
import { ScrollView } from 'react-native';

const ProfileDetails = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ tabBarVisible: false });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fff',
      }}
    >
      <ScrollView>
        <Header headerTitle={'account details 🇳🇬'} />
        <ProfileHeader profileName={'omekagu chukwuebuka joseph'} />
        <AccountCopy text={'@wisking'} title={'your username'} />
        <AccountCopy text={'2006448310'} title={'your account number'} />
        <MoreComp title={'@wiseking'} text={'username'} />
        <MoreComp
          title={'Omekagu chukwuebuka joseph'}
          style={{ textTransform: 'uppercase', fontSize: 12 }}
          text={'account name'}
        />
        <MoreComp
          title={'2b los angelos turkey'}
          text={'address'}
          style={{ textTransform: 'uppercase', fontSize: 12 }}
        />

        <MoreComp title={'+ 123-283722'} text={'Phone number'} />
        <MoreComp title={'mikecheq5@gmail.com'} text={'email address'} />
        <MoreComp title={'Voters ID'} text={'identification'} />
        <MoreComp title={'Omekagu Chukwuemeka'} text={'Next of kin'} />
        <MoreComp title={'Single'} text={'Marital status'} />
        <MoreComp
          title={'close account'}
          text={'deactivate your pluto account '}
          style={{ color: 'red' }}
        />
        <MoreComp
          title={'Restrict account'}
          text={'stop transactions in emergency situations '}
          style={{ color: 'red' }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileDetails;
