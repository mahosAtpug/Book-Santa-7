import React from "react"
import {Header , Icon} from "react-native-elements"
import {SafeAreaProvider} from "react-native-safe-area-context"

const MyHeader = (props)=>{
   return(
      <SafeAreaProvider>
       <Header centerComponent={{text:props.title , style:{color:"#90A5A9" , fontSize:20 , fomtWeight:"bold"}}} 
                backgroundColor={"#EAF8FE"} 
                leftComponent={
                   <Icon name={"bars"} type={"font-awesome"} color={"#696969"} onPress={()=>{
                      props.navigation.toggleDrawer()
                     }} 
                    />
                }/>
                </SafeAreaProvider>
   )
}

export default MyHeader