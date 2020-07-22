import Link from "next/link";
import Layout from "../components/Layout";

const Index = () => (
    <Layout>
        <h1>
            Hello, Next.js
        </h1>
        <h2>
            <Link href="/about">
                <div>
                    <a style={{background : "black", color: "white"}}> 소개 </a>
                </div>
            </Link>
        </h2>
    </Layout>
);

export default Index;