import { useRootStore } from "@/store";
import { getData } from "@/utils/api";
import asaw from "@/utils/asaw";
import { signOut } from "next-auth/react";

export const fetchAndPopulateCurrentUserStore = async () => {
	const [err, user] = await asaw(
		getData({
			url: "/openai/openlit/api/user/profile",
			method: "GET",
		})
	);

	if (err) {
		signOut();
	}

	useRootStore.getState().user.set(user);
};
