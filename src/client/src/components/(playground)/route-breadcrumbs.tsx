import {
	Breadcrumb,
	BreadcrumbList,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

const PATH_TO_TITLE_MAP = {
	"/": "Home",
	"/openai/openlit/requests": "Request",
	"/openai/openlit/exceptions": "Exceptions",
	"/openai/openlit/prompt-hub": "Prompts",
	"/openai/openlit/vault": "Vault",
	"/openai/openlit/openground": "Openground",
	"/openai/openlit/database-config": "Databases",
	"/profile": "Profile",
};

export default function RouteBreadcrumbs() {
	const params = usePathname();
	const paths = params.split("/");
	return (
		<Breadcrumb className="grow">
			<BreadcrumbList>
				{paths.length > 1
					? paths.map((path, index) => {
							const pathField = `/${path}`;
							if (index === paths.length - 1) {
								return (
									<BreadcrumbItem key={pathField}>
										<BreadcrumbPage>
											{PATH_TO_TITLE_MAP[
												pathField as keyof typeof PATH_TO_TITLE_MAP
											] || path}
										</BreadcrumbPage>
									</BreadcrumbItem>
								);
							}
							return (
								<React.Fragment key={pathField}>
									<BreadcrumbItem>
										<BreadcrumbLink href={pathField}>
											{PATH_TO_TITLE_MAP[
												pathField as keyof typeof PATH_TO_TITLE_MAP
											] || path}
										</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator />
								</React.Fragment>
							);
					  })
					: null}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
