const sendQuery = `mutation {
  customerCreate( input: {
       email: "customer@email.com",
       password: "customerpassword",
       acceptsMarketing: true
  }) {
    userErrors {
        field
        message
  }
  customer {
        id
        email
   }
}}`;

function apiCall(query: string) {
  return fetch(
    "https://canada-bestland-industrial.myshopify.com/api/2022-01/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/graphql",
        "X-Shopify-Storefront-Access-Token": "e713ddfbbb06f6fa497ae42d8dfe1a68",
      },
      body: query,
    },
  ).then(response => response.json());
}

// apiCall(sendQuery).then(response => {
//   console.log(response);
// });
export { apiCall };
