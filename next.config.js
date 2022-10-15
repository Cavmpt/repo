/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    AWS_COGNITO_ID: "us-east-1_MO5LDHBBF",
    CLIENT_AWS: "6mcc6qa9cld5ukhb4ja24ualjk",
    // BACKEND_URL: 'http://backend:4000'
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['via.placeholder.com','cdn.shopify.com',"*"]
  }
}
