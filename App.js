import { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput,
	FlatList,
	Pressable
} from 'react-native';
import ApiCall from './components/apiCall';

export default function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);

	const handleOnChangeText = a => {
		setValue(a);
	};

	const handleOnPressButton = () => {
		setList(currentList => [...currentList, value]);
		setValue('');
	};

	const handlePressable = getCurrentIndex => {
		let copyList = [...list];
		copyList = copyList.filter((_, index) => getCurrentIndex !== index);
		setList(copyList);
	};
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.textTitle}>Notes Native!</Text>
			</View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder='Add new note'
					onChangeText={handleOnChangeText}
					value={value}
				/>
				<Button color={'#000'} title='Enter' onPress={handleOnPressButton} />
			</View>
			<View style={styles.listContainer}>
				<Text style={styles.showText}>Notes List ⬇️</Text>
				<FlatList
					data={list}
					renderItem={itemData => (
						<Pressable onPress={() => handlePressable(itemData.index)}>
							<Text style={styles.listItem}>{itemData.item}</Text>
						</Pressable>
					)}
				/>
			</View>
			<View style={styles.apiContainer}>
				<ApiCall />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 30,
		paddingHorizontal: 15,
		flex: 1
	},
	textTitle: {
		marginVertical: 30,
		fontSize: 24,
		fontWeight: '600'
	},
	inputContainer: {
		flexDirection: 'row',
		paddingBottom: 20,
		marginBottom: 20,
		borderBottomColor: '#000',
		borderBottomWidth: 2
	},
	input: {
		borderColor: 'gray',
		borderWidth: 1,
		padding: 3,
		flex: 1
	},
	showText: {
		fontSize: 16,
		textTransform: 'capitalize',
		marginBottom: 20
	},
	listContainer: {
		paddingTop: 30,
		// flex: 1,
		marginBottom: 20
	},
	listItem: {
		padding: 10,
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: '#2176FF',
		color: '#fff'
	},
	apiContainer: {
		flex: 2,
		marginBottom: 40
	}
});
