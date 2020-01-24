import React from 'react';
import { WebView } from 'react-native-webview';

function Profile({ navigation }){
	const githubUsername = navigation.getParam('github_username');

    return <WebView source={{ uri: `https://github.com/${githubUsername}` }} allowFileAccess={true} />
}

export default Profile;