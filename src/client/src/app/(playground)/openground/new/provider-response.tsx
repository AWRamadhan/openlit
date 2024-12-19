import { ProviderType } from "@/store/openai/openlit/openground";
import { useRootStore } from "@/store";
import {
	getEvaluatedResponse,
	getSelectedProviders,
} from "@/selectors/openai/openlit/openground";
import ProviderTable from "@/components/(playground)/openai/openlit/openground/provider-table";

export default function ProviderResponse({
	provider,
	index,
}: {
	provider: ProviderType;
	index: number;
}) {
	const selectedProviders = useRootStore(getSelectedProviders);
	const evaluatedResponse = useRootStore(getEvaluatedResponse);
	return (
		<ProviderTable
			provider={provider}
			index={index}
			selectedProviders={selectedProviders}
			evaluatedResponse={evaluatedResponse}
		/>
	);
}
