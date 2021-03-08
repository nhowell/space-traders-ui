import { useMutation } from "react-query";
import { spaceTradersApi } from "..";

export function useClaimUsernameAndGetToken() {
	return useMutation(claimUsernameAndGetToken);
}

async function claimUsernameAndGetToken(username: string) {
	const response = await spaceTradersApi.post<ISuccessResponse>(
		`/users/${username}/token`,
	);
	return response.data;
}

interface ISuccessResponse {
	token: string;
	user: ISuccessUserResponse;
}

interface ISuccessUserResponse {
	id: string;
	username: string;
	picture: unknown | null;
	email: string | null;
	credits: number;
	createdAt: string;
	updatedAt: string;
}