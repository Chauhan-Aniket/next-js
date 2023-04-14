import { useRouter } from "next/router";

const Doc = () => {
	const router = useRouter();
	const { params = [] } = router.query;

	console.log(params);

	if (params.length === 2) {
		return (
			<h1>
				This Feature {params[0]} is for Concept {params[1]}
			</h1>
		);
	} else if (params.length === 1) {
		return <h1>This Feature is {params[0]}</h1>;
	}

	// returns below element for params.length !== 2
	return (
		<>
			<h1>Docs Home Page</h1>
		</>
	);
};

export default Doc;
