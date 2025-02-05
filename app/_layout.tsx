import { Stack, useNavigation } from 'expo-router';
import CustomHeader from '@/components/CustomHeader';
import { BottomSheetModalProvider, TouchableOpacity } from '@gorhom/bottom-sheet';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};

export default function RootLayoutNav() {
  const navigation = useNavigation();
  return (
    <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{
          header: ()=> <CustomHeader />
        }} />
        <Stack.Screen 
          name="(modal)/filter"
          options={{
            presentation:'modal',
            headerTitle:'Filter',
            headerShadowVisible:false,
            headerStyle:{
              backgroundColor:Colors.lightGrey,
            },
            headerLeft:()=>(
              <TouchableOpacity onPress={() =>{navigation.goBack();
              }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary}/>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen 
        name="(modal)/location-search"
        options={{
          presentation:'fullScreenModal',
          headerTitle:'Search Location',
          headerLeft:()=>(
            <TouchableOpacity 
            onPress={() =>{
              navigation.goBack();
            }}>
              <Ionicons name="close-outline" size={28} color={Colors.primary}/>
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen 
          name="(modal)/dish"
          options={{
            presentation:'modal',
            headerTitle:'',
            headerTransparent:true,            
            headerLeft:()=>(
              <TouchableOpacity 
              style={{backgroundColor:'#fff', borderRadius:20,padding:6}}
              onPress={() =>{navigation.goBack();
              }}>
                <Ionicons name="close-outline" size={28} color={Colors.primary}/>
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </BottomSheetModalProvider>
  );
}
