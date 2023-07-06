import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { graphql } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
    <h1 className="text-3xl font-bold underline"></h1>
    {/* {allContentfulRecipe.edges.map(({node}) => {
      console.log(node)
    })} */}
    </>
  )
}


export const query = graphql`
{
  allContentfulRecipe {
    edges {
      node {
        title,
        slug,
        ingredients
      }
    }
  }
}
`
export default IndexPage

export const Head: HeadFC = () => <title>Home Page For Denis's Blog</title>