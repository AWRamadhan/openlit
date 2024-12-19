import PieChartCard from "@/components/(playground)/pie-chart-card";

export default function DataCharts() {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<PieChartCard
				categoryKey="count"
				heading="Generation by categories"
				indexKey="category"
				url="/openai/openlit/api/metrics/llm/category"
			/>
			<PieChartCard
				categoryKey="count"
				heading="Generation by provider"
				indexKey="provider"
				url="/openai/openlit/api/metrics/llm/endpoint"
			/>
			<PieChartCard
				categoryKey="cost"
				heading="Cost by Environment"
				indexKey="environment"
				url="/openai/openlit/api/metrics/llm/cost/environment"
			/>
			<PieChartCard
				categoryKey="cost"
				heading="Cost by application"
				indexKey="applicationName"
				url="/openai/openlit/api/metrics/llm/cost/application"
			/>
		</div>
	);
}
