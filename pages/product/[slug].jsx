import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../../components/Layout';
import data from '../../utils/data';

export default function ProductScreen() {
  const router = useRouter();
  const slug = router.query.slug;

  //   const { query } = useRouter();
  //   const { slug } = query;
  const product = data.product.find((product) => product.slug === slug);

  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back To Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          ></Image>
        </div>
        {/* Product Details */}
        <div>
          <ul>
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category : {product.category}</li>
            <li>Brand : {product.brand}</li>
            <li>
              {product.rating} from {product.numReviews} reviews
            </li>
            <li>Description : {product.description}</li>
          </ul>
        </div>
        {/* Action Section  */}
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price</div>
              <div>${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status</div>
              <div>{product.countInStock > 0 ? 'In Stock' : 'Unavailable'}</div>
            </div>
            <button className="primary-button w-full ">Add To Cart</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
