import 'tailwindcss/tailwind.css'
import Layout from '../components/layout.js'
import Head from 'next/head'
import { useState } from "react"
import Router from "next/router"
import ProgressBar from 'nextjs-progressbar';
function MyApp({ Component, pageProps }) {
	const [progress, setProgress] = useState(false)
	Router.events.on("routeChangeStart", () => {
      setProgress(true) 
   })

   Router.events.on("routeChangeComplete", () => {
      setProgress(false) 
   })
  return(<>
  		<Head></Head>
	  	<Layout>
	  		<ProgressBar
			  color="#04fd36"
			  startPosition={0.3}
			  stopDelayMs={200}
			  height={2}
			  showOnShallow={true}
			  options={{ easing: 'ease', speed: 500 }}
			  options={{ showSpinner: false }}
			/>
	   		<Component {...pageProps} />
	   		
	   	</Layout>
   	</>)
}

export default MyApp
