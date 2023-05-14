import {StyleSheet, Text, TextInput, View, Pressable} from 'react-native'
import {useState} from 'react'

// Notes:
// // No one uses the React Native button; too restrictive in styling
// // They use Pressable instead

const SearchField = ({onSubmit}) => {

    const [searchString, setSearchString] = useState('')

    const handleSearch = () => {
        onSubmit(searchString)
    }


    return (
        <View style={{
            flexDirection: 'row',
            padding: 10,
        }}>
            <TextInput
                onChangeText={setSearchString}
                style={{
                    borderColor: 'gray',
                    borderRadius: 5,
                    borderWidth: 1,
                    flex: 1,
                    margin: 10,
                    paddingVertical: 5,
                }} />
            <Pressable
                onPress={handleSearch}
                style={{
                   marginVertical: 10,
                   padding: 10,
                   backgroundColor: "green",
                   borderRadius: 5,
                }} >
                <Text
                style={{
                    color: 'white',
                    textAlign: 'center',
                    fontWeight: '600'
                    }}>Search</Text>
            </Pressable>
        </View>
    )
}

export default SearchField;
