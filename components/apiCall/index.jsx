import { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';

export default function ApiCall() {
	const [apiData, setApiData] = useState([]);
	useEffect(() => {
		async function getApiData() {
			const data = await fetch('https://dummyjson.com/users');
			const response = await data.json();
			if (response) {
				setApiData(
					response.users.map(
						user => `${user.firstName} ${user.lastName} - ${user.age}`
					)
				);
			}
		}

		getApiData();
	}, []);

	console.log(apiData);
	return (
		<View>
			<Text>Api Call</Text>
			<View>
				<FlatList
					data={apiData}
					renderItem={itemData => <Text>{itemData.item}</Text>}
				/>
			</View>
		</View>
	);
}
