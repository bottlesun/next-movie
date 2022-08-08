import Head from "next/head";
import React from "react";

const SEO = ({title} : {title: React.ReactNode}) => {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  )
}

export default SEO;
