import Layout from '@components/Layout';
import useWindowDimensions from '@hooks/useWindowDimensions';

const IndexPage = (): JSX.Element => {
    const { height, width } = useWindowDimensions();
    return (
        <Layout title="See Warning in console">
            <div>
                <p>Opening the console you should see a warning</p>
                width: {width} ~ height: {height}
            </div>
        </Layout>
    );
};

export default IndexPage;
