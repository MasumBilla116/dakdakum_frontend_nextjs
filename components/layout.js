import Header from '../components/header'
import Footer from '../components/footer'
import Title from '../components/title'
import Head from 'next/head'
export default function layout({children}){
	return(
		<>
			<Head>
		        <link rel="stylesheet" href="../font_awesome/css/all.min.css"/>
		        <link rel="stylesheet" href="../css/cust_css.css"></link>
		        <link rel="stylesheet" href="../css/responsive.css"></link>
		        <link rel="stylesheet" href="../css/zoom.css"></link>
	      	</Head>
			<Header/>
			<main>
				{children}
			</main>
			<Footer/>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.minJquery }} />
			<script src={"../js/autoScroll.js"} ></script>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.sidebarController }} async/>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.miniTask }} async/>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.togglerMenu }} async/>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.srcModal }} async/>
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: process.env.zoom }} async/>
			{/**/}
		    
		</>
	)
}

