import React from 'react'
import PortableText from "react-portable-text"

const RichText = (props) => {
  return (
   <div>
     <PortableText
      // Pass in block content straight from Sanity.io
      content={props}
      projectId = 'l4fed5ma'
    dataset = 'production'
      // Optionally override marks, decorators, blocks, etc. in a flat
      // structure without doing any gymnastics
      serializers={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        li: ({ children }) => <li classNameName="special-list-item">{children}</li>
      }}
    />
   </div>
  )
}

export default RichText
