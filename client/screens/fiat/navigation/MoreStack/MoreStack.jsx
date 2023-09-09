import { createNativeStackNavigator } from '@react-navigation/native-stack';
import More from '../../user/More';
import ProfileDetails from '../../user/MoreScreen/ProfileDetails';
import Statement from '../../user/MoreScreen/Statement';
import SavedCards from '../../user/MoreScreen/SavedCards';
import GetHelp from '../../user/MoreScreen/GetHelp';
import Security from '../../user/MoreScreen/Security';
import Referrals from '../../user/MoreScreen/Referrals';
import AccountLimits from '../../user/MoreScreen/AccountLimits';
import Legal from '../../user/MoreScreen/Legal';

const Stack = createNativeStackNavigator();
const MoreStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="more"
        component={More}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="profile"
        component={ProfileDetails}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="statements"
        component={Statement}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="saveCards"
        component={SavedCards}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="getHelp"
        component={GetHelp}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="security"
        component={Security}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="referrals"
        component={Referrals}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="limits"
        component={AccountLimits}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="legal"
        component={Legal}
      />
    </Stack.Navigator>
  );
};

export default MoreStack;
