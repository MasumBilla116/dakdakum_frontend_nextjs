import Head from 'next/head'
import CardItems from './card-items.js'
import NewAndArraivalProduct from './../product/new-and-arraivals-product.js'
import CollectionProduct from './../product/collection-product.js'
import TopSellesProduct from './../product/top-selles-product.js'
export default function Card(){
	return(<>
		<Head>
			<title>Your card items</title>
		</Head>		
		<CardItems/>
		<NewAndArraivalProduct/>
		<CollectionProduct/>
		<TopSellesProduct/>
	</>)
}