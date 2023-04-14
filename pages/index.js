import Link from "next/link";

const Home = () => {
	return (
		<>
			<h1>Home Page</h1>
			<Link href="/about">About</Link>
			<br />
			<Link href="/blog">Blog</Link>
			<br />
			<Link href="/product">Product</Link>
		</>
	);
};

export default Home;
