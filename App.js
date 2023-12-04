import { AuthProvider } from './AuthContext';
import AppNavigator from './AppNavigator';
//Phạm Văn Đạt - 20520155
const App = () => {

  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
};

export default App;