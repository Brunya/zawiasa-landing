import React, { useEffect } from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '../autoScroll.js';
import { Helmet } from "react-helmet";

import "../components/Style.css"

import Head from "../components/Head"
import Team from "../components/Team"
import Projects from "../components/Projects"
import Partners from "../components/Partners"
import Contact from "../components/Contact"

function IndexPage() {

  const [width, setWidth] = React.useState(0);
  const windowGlobal = typeof window !== 'undefined' && window;
  const isDesktop = width > 768;

  useEffect(() => {
    window.addEventListener('resize', setWidth(window.outerWidth));
  });

  return (
    <>
    <Helmet>
         <title>Zawiasa.hu</title>
         <meta name="description" content="Zawiasa Clojure developer team from Szeged."/>
         <meta name="keywords" content="zawiasa, szeged clojure, clojure ai, clojure iot, clojure developer team, clojure developer, clojure, zawisa robert, zawiasa bruno, zawiasa aron, zawiasa bernat"/>
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
