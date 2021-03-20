import React from "react";


import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({pageContext})=>
(
    <layout>
        <h1 dangerouslySetInnerHTML={{__html:pageContext.title}}/>
        <div dangerouslySetInnerHTML={{__html:pageContext.content}}/>
       
       
    </layout>
)

