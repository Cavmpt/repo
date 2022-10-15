import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: "e713ddfbbb06f6fa497ae42d8dfe1a68",
  domain: "canada-bestland-industrial.myshopify.com",
});

export { client };
