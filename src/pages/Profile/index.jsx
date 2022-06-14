import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CardPost from "../../components/CardPost";
import PostContainer from "../../components/PostContainer";
import TopInformation from "../../components/TopInformation";
import { useSelector } from "react-redux";
const Profile = () => {
  const { projects } = useSelector((state) => state.project);
  return (
    <div className="profile-container">
      <Header />
      <TopInformation
        title="who i am"
        image="https://avatars.githubusercontent.com/u/76668472?v=4"
        description="A great team player and proactive Full Stack Web Developer with
              demonstrated ability to create a fast web with the best
              techniques. Skilled on tools on both sides: front-end with React,
              Redux, Vanilla, JavaScript, and back-end with Node, Express,
              Firebase, MongoDB, and SCRUM methodology as well. My previous
              experience in the sales industry has helped me to improve my
              customer service skills and to work under pressure as well. As a
              team lead, I improved my team management and people skills."
      />

      <PostContainer title="projects">
        {projects.length > 0 &&
          projects.map((data) => {
            return (
              <CardPost
                key={data._id}
                data={data}
                buttonTitle={"website"}
                type="projects"
                extralink={data.extralink}
              />
            );
          })}
      </PostContainer>
      <Footer />
    </div>
  );
};

export default Profile;
