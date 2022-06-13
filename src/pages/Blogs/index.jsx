import Pacman from "../../components/Pacman";
import Header from "../../components/Header";
import BlogsData from "../../assets/blogs.json";
import CardPost from "../../components/CardPost";
import Footer from "../../components/Footer";
import PostContainer from "../../components/PostContainer";
import TopInformation from "../../components/TopInformation";

function Blogs() {
  const lastPost = BlogsData.find((blog) => !!blog.lastpost);

  return (
    <>
      <Header />
      <TopInformation
        image={lastPost.image}
        title={lastPost.title}
        description={lastPost.description}
        linkpage="/"
      />

      <Pacman />

      <PostContainer title="LAST POST">
        {BlogsData.filter((data) => !data.lastpost).map((data) => {
          return (
            <CardPost
              key={data.id}
              data={data}
              buttonTitle={"Read more"}
              link={`/blogs/${data.id}`}
            />
          );
        })}
      </PostContainer>

      <Footer />
    </>
  );
}

export default Blogs;
