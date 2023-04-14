import Link from "next/link";

const ProductList = ({ productId = 100 }) => {
	return (
		<>
			<Link href="/">Go to Home</Link>
			<h1>
				<Link href="product/1">Product 1</Link>
			</h1>
			<h1>
				<Link href="product/2">Product 2</Link>
			</h1>
			<h1>
				<Link href="product/3">Product 3</Link>
			</h1>
			<h1>
				{/* replace prop will replace current history state instead of adding new url */}
				<Link href={`product/${productId}`} replace>
					Product {productId}
				</Link>
			</h1>
		</>
	);
};

export default ProductList;
