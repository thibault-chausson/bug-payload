import React from 'react';
import config from "@payload-config";
import { getPayload } from "payload";

export default async function Component() {
    const payload = await getPayload({ config });
  const articles = await payload.find({
    collection: "articles",
    locale: "all"
    //req, // passing req is recommended
  });
  console.log(articles);
  console.log(articles.docs[0].title);
  console.log(articles.docs[0].title.en);
  return (
    <div>
      <h1>Articles</h1>
      <p>Check on terminal console</p>
    </div>
  );
};
