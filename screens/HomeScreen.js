import React from 'react';
import {
    ImageBackground,
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from 'react-native';
import Weather from '../components/Weather';
import About from '../components/About';
export default class HomeScreen extends React.Component {
    state = {
        isLoading: false,
    }
    render() {
        const { isLoading } = this.state;
        return (
            <ImageBackground
                style={{ flex: 1 }} source={require('../assets/images/tori.jpg')} >
                <View style={styles.icons}>
                    <View style={styles.about}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('About') }}>
                            <About />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.logo}>
                        <Image style={{ width: 100, height: 100 }} source={require('../assets/images/Meininki.png')} />
                    </View>

                    <View style={styles.weather}>
                        {isLoading ? null : (
                            <View>
                                <Weather />
                            </View>
                        )}
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => { this.props.navigation.navigate('Activities') }}
                        ><Image style={{ width: 120, height: 120 }} source={require('../assets/images/Aktiviteetit.png')} /></TouchableOpacity></View>
                    <View style={styles.container}><TouchableOpacity
                        style={styles.Button}
                        onPress={() => { this.props.navigation.navigate('Events') }}
                    ><Image style={{ width: 120, height: 120 }} source={require('../assets/images/Tapahtumat.png')} /></TouchableOpacity></View>
                </View>
            </ImageBackground>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignItems: 'center',
    },
    icons: {
        flex: 1,
        flexDirection: "row"
    },
    weather: {
        flex: 1,
        alignItems: 'flex-end',
        paddingRight: 25,
        paddingTop: 42
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 10,
        resizeMode: 'contain',
    },
    about: {
        flex: 1,
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingLeft: 25,
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'rgba(26, 35, 126, 0.8)',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 20,
        position: 'absolute',
        bottom: 50,
    },
    Text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});