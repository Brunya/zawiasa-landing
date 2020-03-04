import React, { useEffect, useState } from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import { Helmet } from "react-helmet";

import "../components/Style.css"

import Head from "../components/Head"
import Team from "../components/Team"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Contact from "../components/Contact"


function IndexPage() {

  const isDesktop = window.outerWidth > 768;
  console.log(window.outerWidth);

    return (
      <>
      <Helmet>
           <title>Zawiasa.hu</title>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css"/>
      </Helmet>

       {isDesktop ? (
          <>
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
                 <Partners/>
               </FullpageSection>
               <FullpageSection>
                 <Contact/>
               </FullpageSection>
             </FullPageSections>
           </Fullpage>
           </>
          ) : (
            <>
             <div className="page">
               <Head/>
             </div>
             <div className="page">
               <Team/>
             </div>
             <div className="page">
               <Projects/>
             </div>
             <div className="page">
               <Partners/>
             </div>
             <div className="page">
               <Contact/>
             </div>
             </>
          )}
      </>
    )
}

export default IndexPage
