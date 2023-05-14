import {StyleSheet, Image, Text, View} from 'react-native'

const Results = ({movie}) => {

    return (
        <View style={styles.card}>
            <Image style={styles.image} src={movie.Poster} />
            <View style={styles.content}>
                <Text style={styles.titleText}>{movie.Title} ({movie.Year})</Text>
                <Text style={styles.subtitleText}>{movie.Rated}</Text>
                <Text style={styles.descriptionText}>{movie.Plot}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {alignItems: 'center', flexDirection: 'row', padding: 20, margin: 20, borderColor: 'gray', borderWidth: 1, borderRadius: 10},
    image: {height: 100, width: 100},
    titleText: {
        fontSize: 18,
        fontWeight: '600',
    },
    subtitleText: {
        fontSize: 12,
        fontWeight: '400'
    },
    descriptionText: {
        fontSize: 16
    },
    content: {flex: 1, paddingLeft: 10},
})

export default Results;