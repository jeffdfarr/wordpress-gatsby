/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'


// Split up the creation of posts and pages in different files
const createPages = require("./create/createPages")
const createPosts = require("./create/createPosts")

exports.createPagesStatefully = async ({ graphql, actions, reporter }, options) => {
  await createPages({ actions, graphql, reporter }, options)
  await createPosts({ actions, graphql, reporter }, options)
}

