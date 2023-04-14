import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
	const router = useRouter();

	const handleClick = () => {
		console.log("Placing your order");

		router.push("/product");
		// router.replace("/product");
	};
	return (
		<>
			<h1>Home Page</h1>
			<Link href="/about">About</Link>
			<br />
			<Link href="/blog">Blog</Link>
			<br />
			<Link href="/product">Product</Link>
			<br />
			<button onClick={handleClick}>Place Order</button>
		</>
	);
};

export default Home;
