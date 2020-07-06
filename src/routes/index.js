import React from 'react';
// import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../contexts/auth';

const Routes = () => {
  const { signed } = useAuth();

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  return signed ? <AppRoutes /> : <AuthRoutes />;
  return <AuthRoutes />;
};

export default Routes;