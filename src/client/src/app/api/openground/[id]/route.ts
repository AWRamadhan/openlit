import { getOpengroundRequest } from "@/lib/platform/openai/openlit/openground";

export async function GET(_: Request, { params }: { params: { id: string } }) {
	const response = await getOpengroundRequest(params.id);
	return Response.json(response);
}
