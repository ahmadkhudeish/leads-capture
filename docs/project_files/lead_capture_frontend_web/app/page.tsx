import Head from "next/head";
import LeadCaptureForm from "./components/LeadCaptureForm";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lead Capture</title>
        <meta name="description" content="Lead capture form" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Lead Capture Form</h1>
          <LeadCaptureForm />
        </div>
      </main>
    </div>
  );
}
