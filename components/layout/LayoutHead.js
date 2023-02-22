import Head from "next/head";

const LayoutHead = ({ title, description }) => {
  return (
    <Head>
      <title>{title ? title + " - Bloowatch" : "Bloowatch"}</title>
      <meta
        name="description"
        content={description ? description : "Bloowatch Ecommerce"}
      />
    </Head>
  );
};

export default LayoutHead;
