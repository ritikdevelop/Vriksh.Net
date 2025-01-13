import { Account, Avatars, Client, OAuthProvider } from 'react-native-appwrite';
import * as Linking from 'expo-linking';
import { openAuthSessionAsync } from "expo-web-browser";

export const config = {
    platform: 'com.vriksh.net',
    endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
    // appName: 'Vriksh.Net',
    // appVersion: '1.0.0',
    // appBuild: '1',
    // appId: 'com.vriksh.net',
    // appStoreUrl: 'https://apps.apple.com/in/app/vriksh-net/id6444288888',
    // googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.vriksh.net',
    // appStoreId: '6444288888',
    // googlePlayId: 'com.vriksh.net',

};

export const client = new Client();

client
    .setEndpoint(config.endpoint!)
    .setProject(config.projectId!)
    .setPlatform(config.platform!)


export const avatar = new Avatars(client);

export const account = new Account(client);

//! Login with Google function
export async function login() {
    try {
        const redirectUri = Linking.createURL('/');

        const response = await account.createOAuth2Token(
            OAuthProvider.Google,
            redirectUri
        );

        if(!response) {
            throw new Error('Failed to login with Google');
        }

        const browserResult = await openAuthSessionAsync(
            response.toString(),
            redirectUri
        );

        if (browserResult.type !== "success") {
            throw new Error("Create OAuth2 token failed");
        }

        const url = new URL(browserResult.url);
        const secret = url.searchParams.get("secret")?.toString();
        const userId = url.searchParams.get("userId")?.toString();

    if (!secret || !userId) {
        throw new Error("Create OAuth2 token failed");
    }

    const session = await account.createSession(userId, secret);

    if (!session) {
        throw new Error("Failed to create session");
    }

    return true;

    } catch (error) {
        console.log(error);
        return false;
    }
};



//? Logout function
export async function logout() {
    try {
      const result = await account.deleteSession("current");
      return result;
    } catch (error) {
      console.error(error);
      return false;
    }
};


//? Get Current User function
export async function getCurrentUser() {
    try {
      const result = await account.get();
      if (result.$id) {
        const userAvatar = avatar.getInitials(result.name);
  
        return {
          ...result,
          avatar: userAvatar.toString(),
        };
      }
  
      return null;
    } catch (error) {
      console.log(error);
      return null;
    }
};
