import {PrivacyRequestForm} from "@/components/PrivacyRequestForm";
export const metadata={title:"Privacy request"};
export default function PrivacyRequest(){return <><section className="page-hero"><div className="container"><span className="eyebrow">Your data rights</span><h1>Start a privacy request.</h1><p>Ask for access, correction, deletion, portability or a sale/share opt-out. We verify identity before disclosing or changing personal data.</p></div></section><section className="section"><div className="container"><PrivacyRequestForm/></div></section></>}
