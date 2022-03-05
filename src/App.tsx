import React from 'react';
import Home from './containers/home';
import Room from './containers/room';
import styled from 'styled-components'

const AppContainer = styled.div`
	width: 100%;
	height: 100%;
`;

function App() {
	return (
		<AppContainer>
			<Room/>
		</AppContainer>
	);
}

export default App;
