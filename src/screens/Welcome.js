import { Text, SafeAreaView } from "react-native";
import styles from "../styles/welcome";
import LoginAs from "../components/LoginAs";

function Welcome({ navigation }) {
  return (
    <SafeAreaView style={styles.maincontainer}>
      <Text style={styles.head}>Login as</Text>
      <LoginAs
        role="A student"
        image={require("../../assets/student1.png")}
        onPress={() => navigation.navigate("Logins")}
        navigation={navigation}
      />
      <LoginAs
        role="A teacher"
        image={require("../../assets/teacher.png")}
        onPress={() => navigation.navigate("Logint")}
        navigation={navigation}
      />
    </SafeAreaView>
  );
}

export default Welcome;
