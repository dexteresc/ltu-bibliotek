import Head from "next/head";
import Articles from "../components/articles";
import Header from "../components/header"

export default function Home() {
  return (
    <div className="font-noto">
      <Head>
        <title>LTU Bibliotek</title>
      </Head>
      <Header/>
      <main>
        <div className=""></div>
        <Articles></Articles>
        <Articles></Articles>
        <Articles></Articles>
      </main>
    </div>
  );
}
