import { create } from "zustand";
import { UserStore, userStoreSlice } from "./user";
import { FilterStore, filterStoreSlice } from "./filter";
import { DatabaseStore, databaseConfigStoreSlice } from "./openai/openlit/database-config";
import { withLenses } from "@dhmk/zustand-lens";
import { devtools } from "zustand/middleware";
import { OpengroundStore, opengroundStoreSlice } from "./openai/openlit/openground";
import { DashboardStore, dashboardStoreSlice } from "./openai/openlit/dashboard";

export type RootStore = {
	user: UserStore;
	filter: FilterStore;
	databaseConfig: DatabaseStore;
	openground: OpengroundStore;
	dashboard: DashboardStore;
};

export const useRootStore = create<RootStore>()(
	devtools(
		withLenses({
			user: userStoreSlice,
			filter: filterStoreSlice,
			databaseConfig: databaseConfigStoreSlice,
			openground: opengroundStoreSlice,
			dashboard: dashboardStoreSlice,
		})
	)
);
