import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

const{data,loading,error}=useFetch('http://localhost:8000/blogs' );

    return (
        <div className="home">
        <h2>*Click on New Blog To add your own Blog*</h2>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {data && <BlogList blog={data} title="All Blogs" />}
        {/* <BlogList blog={blogs.filter((blog)=>blog.author==="mario")}  */}
        </div>
    );
}
export default Home;