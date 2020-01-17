import React from "react"
import { Link } from "gatsby"
import { FullPage, Slide } from 'react-full-page';
import { Helmet } from "react-helmet";

import "../components/Style.css"

import Head from "../components/Head"
import Team from "../components/Team"
import Projects from "../components/Projects"
import Partners from "../components/Partners"


const IndexPage = () => (
  <>
  <Helmet>
       <title>Zawiasa.hu</title>
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
   </Helmet>
   
  <FullPage>
    <Slide>
      <Head/>
    </Slide>
    <Slide>
      <Team/>
    </Slide>
    <Slide>
      <Projects/>
    </Slide>
    <Slide>
      <Partners/>
    </Slide>
  </FullPage>
  </>
)

export default IndexPage
