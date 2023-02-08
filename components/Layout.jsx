import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title : 'BHDASH Ecommerce'}</title>
        <meta name="description" content="Ecommerce Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between shadow-md px-4 items-center">
            <Link className="text-lg font-bold" href="/">
              Ecommerce
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container  mt-4 px-4 m-auto">{children}</main>
        <footer className="flex justify-center items-center h-10 shadow-inner">
          <p>Copyright © BHDASH Ecommerce</p>
        </footer>
      </div>
    </>
  );
}
