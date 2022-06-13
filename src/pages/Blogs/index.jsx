import Pacman from "../../components/Pacman";
import Header from "../../components/Header";
import CardPost from "../../components/CardPost";
import Footer from "../../components/Footer";
import PostContainer from "../../components/PostContainer";
import TopInformation from "../../components/TopInformation";
import { useSelector } from "react-redux";
function Blogs() {
  const { blogsArray } = useSelector((state) => state.blogs);
  const lastPost = blogsArray.find((blog) => !!blog.lastpost);

  return (
    <>
      <Header />
      {blogsArray.length > 0 && (
        <TopInformation
          image={lastPost.image}
          title={lastPost.title}
          description={lastPost.description}
          linkpage={`/blog/${lastPost.id}`}
        />
      )}

      <Pacman />

      <PostContainer title="LAST POST">
        {blogsArray.length > 0 &&
          blogsArray
            .filter((data) => !data.lastpost)
            .map((data) => {
              return (
                <CardPost
                  key={data.id}
                  data={data}
                  buttonTitle={"Read more"}
                  link={`/blog/${data.id}`}
                />
              );
            })}
      </PostContainer>

      <Footer />
    </>
  );
}

export default Blogs;
