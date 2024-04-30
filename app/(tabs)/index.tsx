import { Text, View, StyleSheet } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function OrderScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.top_animation_box}>
      </View>
        <View style={styles.options_box}>
          <ButtonBox  title="MOVING STOCKS" icon="check-square-o" />
          <ButtonBox  title="CRITICAL STOCKS" icon="warning" />
          <ButtonBox  title="EXPIRED STOCKS" icon="remove" />
          <ButtonBox  title="REQUESTS" icon="download" />
          <ButtonBox  title="RETURNS" icon="rotate-right" />
          <ButtonBox  title="SERVE ORDER" icon="barcode" />
          <View style={{ justifyContent: "center", alignItems: "center", height: 50 }}><Text style={{fontSize: 13, color: "orangered"}}>Developed by Lufa Media</Text></View>
        </View>
    </View> 
  );
}

const ButtonBox = ({title, icon}: any) => {
  return(
    <View style={styles.option_box}>
      <FontAwesome name={icon} size={45} />
      <Text style={styles.option_title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  top_animation_box: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  options_box: {
    flex: 1,
    gap: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  option_box: {
    backgroundColor: '#fff',
    padding: 12,
    width: '30%',
    height: 120,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    elevation: 3
  },
  option_title: {
    fontSize: 13
  },
});
