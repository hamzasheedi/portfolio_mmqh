import Link from "next/link";
export default function NotFound() { return <section className="section"><div className="container"><span className="eyebrow">404</span><h1>That page is not available.</h1><p>The address may have changed or the content may not be public.</p><Link className="button" href="/">Return home</Link></div></section>; }
