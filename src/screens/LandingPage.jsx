import {useState} from 'react'
import {Text, View} from 'react-native'
import Banner from '../components/Banner'
import SearchField from '../components/SearchField'
import Results from '../components/Results'

const LandingScreen = () => {

    const [movieResult, setMovieResult] = useState()

    const handleSearch = async (searchString) => {
        const result = await fetch("http://www.omdbapi.com/?t="+ searchString +"&apikey=3616fc0d").then((data) => data.json())
        setMovieResult(result)
    }

    return(
        <View style={{ flex: 1 }}>
            <Banner />
            <SearchField onSubmit={handleSearch} />
            {movieResult?.Title &&
                <Results movie={movieResult} />
            }
        </View>
    )
}


export default LandingScreen;