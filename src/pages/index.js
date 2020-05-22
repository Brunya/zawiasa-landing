import React, { useEffect } from "react"
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from '../autoScroll.js';
import { Helmet } from "react-helmet";

import "../components/Style.css"

import Head from "../components/Head"
import Team from "../components/Team"
import Story from "../components/Story"
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
         <script async src="https://analytics.zegen.org/tracker.js" data-ackee-server="https://analytics.zegen.org" data-ackee-domain-id="2f9f6fa9-8cc2-420d-899c-2c9429d82454"></script>
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
               <Story/>
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
           <Story/>
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
