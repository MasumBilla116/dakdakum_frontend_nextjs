import Document,{Html,Head,Body,Main,NextScript} from 'next/document'
export  default  class LoadedJs extends Document{
	render(){
		return(<>
			<Html>
		        <Head/>
		        <body>
		          <Main/>
		          <NextScript/>
		        </body>
		      </Html>
			
		</>)
	}
}