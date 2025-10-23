import { account, OAuthProvider } from './appwrite';

export const handleAuthLogin = () => {
  account.createOAuth2Session({
    provider: OAuthProvider.Google,
	success: 'http://localhost:5173/drive/home'
  });
};
