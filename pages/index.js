import Link from "next/link";
import Header from "../components/Header";

const Index = () => (
    <div>
        <Header />
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
    </div>
);

export default Index;