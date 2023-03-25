/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'

const contentfulLoader = ({ src, width, quality }) => {
  // loader allows us to pass parameters
  return `${src}?w=${width}&q=${quality || 75}`
}

// render the image and pass all the props that we send to the ContentfulImage component
const ContentfulImage = props => {
  // custom loader
  return <Image loader={contentfulLoader} {...props} />
}

export default ContentfulImage