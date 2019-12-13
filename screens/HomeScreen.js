import React from 'react';
import {
    AppRegistry,
    Image,
    ImageBackground,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Alert,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
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
                style={{ flex: 1 }} source={require('./tori.jpg')} >
                <ScrollView>
                    <View style={styles.weather}>
                        {isLoading ? null : (
                            <View>
                                <Weather />
                            </View>
                        )}
                    </View>
                    <View style={styles.about}>
                        <TouchableOpacity>
                        <About onPress={() => { this.props.navigation.navigate('About') }}/>
                        </TouchableOpacity>
                    </View>

                    {/* <View style={styles.iconContainer}>
                        <View>
                            <Weather />
                            <About />
                        </View>

                    </View> */}

                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => { this.props.navigation.navigate('Activities') }}
                        ><Text style={styles.Text}>AKTIVITEETIT</Text></TouchableOpacity>
                        <TouchableOpacity
                            style={styles.Button}
                            onPress={() => { this.props.navigation.navigate('Events') }}
                        ><Text style={styles.Text}>TAPAHTUMAT</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    weather: {
        flex: 1,
        alignItems: 'flex-end',
        paddingTop: 50,
        paddingRight: 25,
    },
    about: {
        alignItems: 'flex-start',
        paddingTop: 50,
        paddingLeft: 25,
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    Button: {
        alignItems: 'center',
        backgroundColor: 'rgba(26, 35, 126, 0.8)',
        marginTop: 400,
        marginHorizontal: 10,
        paddingVertical: 50,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    Text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    }
});