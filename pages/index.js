import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import formatDate from '@/lib/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const MAX_DISPLAY = 8

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('content')

  return { props: { posts } }
}


export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
    </>
  )
}
