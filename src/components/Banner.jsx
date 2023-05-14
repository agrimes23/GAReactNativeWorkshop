import {StyleSheet, Text, View} from 'react-native'

const Banner = () => {

    return (
        <View style={styles.bannerContainer}>
            <Text style={styles.bannerText}>OMDB API MOVIE SEARCH</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    bannerContainer: {
        backgroundColor: 'black',
        flex: 1,
        maxHeight: 100
    },
    bannerText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        borderColor: 'red' ,
        borderWidth: 3,
        borderStyle: "solid",
        flex: 1
    },
})

export default Banner;