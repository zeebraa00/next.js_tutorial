import Layout from "../components/Layout";

class SSRTest extends React.Component {
    static async getInitialProps ({req}) {
        return req
        ? {from : 'server'} // 서버에서 실행할 시
        : {from : 'client'} // 클라이언트에서 실행할 시
    };

    render() {
        return (
            <Layout>
                {this.props.from} 에서 실행됨 ㅋ
            </Layout>
        )
    }
};

export default SSRTest;