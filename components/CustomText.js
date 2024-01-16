import {Text, View,StyleSheet} from 'react-native'; 
  const Deskripsi = () => {
    return (
    <View>
      <Text style={styles.deskripsi}>
      Hallo, aku Pinka umurku 17 tahun,         
      Siswi SMK Telkom Purwokerto, 
      Kelas 12 Jurusan Rekayasa Perangkat Lunak.
      Angkatan 29.
      </Text>
    </View>
  );
  }

  const styles = StyleSheet.create({

    deskripsi: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    color: '#493323',
    marginTop: 10,

  },
});

export default Deskripsi;