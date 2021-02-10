import Head from 'next/head';


export default function HeadElements() {
  return(
    <Head>
      <title>Uncharted Quiz</title>
      <meta name="title" content="Uncharted Quiz"></meta>
      <meta name="description" content="Quiz da saga Uncharted"></meta>
      <meta property="og:url" content="https://unchartedquiz-base.andersonfsp.vercel.app/"></meta>
      <meta property="og:image" content="https://images.alphacoders.com/673/673736.jpg"></meta>
    </Head>
  );
}