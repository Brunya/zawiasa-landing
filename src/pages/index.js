import React from "react"
import { Link } from "gatsby"
import Fullpage, { FullPageSections, FullpageSection, FullpageCount, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Helmet } from "react-helmet";

import "../components/Style.css"

import Head from "../components/Head"
import Team from "../components/Team"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

const IndexPage = () => (
  <>
  <Helmet>
       <title>Zawiasa.hu</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
   </Helmet>

  <Fullpage>
    <FullpageNavigation itemStyle={{cursor: "pointer", background: "white", borderRadius: "0%"}} transitionTiming={2000}/>
    <FullPageSections>

      <FullpageSection>
        <Head/>
      </FullpageSection>

      <FullpageSection>
        <Team/>
      </FullpageSection>

      <FullpageSection>
        <Projects/>
      </FullpageSection>

      <FullpageSection>
        <Contact/>
      </FullpageSection>

    </FullPageSections>
  </Fullpage>
  </>
)

export default IndexPage
