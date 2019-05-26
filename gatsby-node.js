"use strict"

exports.createPages = ({ actions, graphql }) => {
  const { createRedirect } = actions

  const redirects = [
    [`/blog/very-much-alive`, `/blog`],
    [`/album-cover/133`, `/music`],
    [`/album-cover/132`, `/music`],
    [`/album-cover/117`, `/music`],
  ]

  redirects.forEach(([fromPath, toPath]) =>
    createRedirect({
      fromPath,
      toPath,
      isPermanent: true,
      redirectInBrowser: true,
    })
  )
}
