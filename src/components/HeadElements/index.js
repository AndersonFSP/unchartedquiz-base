import Head from 'next/head';


export default function HeadElements() {
  return(
    <Head>
      <title>Uncharted Quiz</title>
      <meta name="title" content="Uncharted Quiz"></meta>
      <meta name="description" content="Quiz da saga Uncharted"></meta>
      <meta property="og:url" content="https://unchartedquiz-base.andersonfsp.vercel.app/"></meta>
      <meta property="og:image" content="https://images.alphacoders.com/673/673736.jpg"></meta>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
    </Head>
  );
}