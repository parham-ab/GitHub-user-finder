// icons
import { RiUserFollowFill } from "react-icons/ri";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";

const UserProfile = ({ data }) => {
  return (
    <div className="userProfile-container">
      <div className="user-default">
        <img src={data.avatar_url} alt="user_img" loading="lazy" />
        <div>
          <h3 className="name">{data.name}</h3>
          <p className="userName">
            <a
              href={`https://github.com/${data.login}`}
              target={"_blank"}
              rel="noreferrer"
            >
              {data.login}
            </a>
          </p>
        </div>
      </div>
      <p className="bio">{data.bio}</p>
      <div className="follow">
        <RiUserFollowFill />
        <a
          href={`https://github.com/${data.login}?tab=followers`}
          target="_blank"
          className="followers"
          rel="noreferrer"
        >
          <span>{data.followers.toLocaleString()}</span> Followers
        </a>
        .
        <a
          href={`https://github.com/${data.login}?tab=following`}
          target="_blank"
          className="followings"
          rel="noreferrer"
        >
          <span>{data.following.toLocaleString()}</span> Followings
        </a>
      </div>
      {data.company && (
        <div className="company">
          <BiBuildings />
          {data.company}
        </div>
      )}
      {data.location && (
        <div className="location">
          <HiOutlineLocationMarker />
          {data.location}
        </div>
      )}
      {data.email && (
        <div className="email">
          <HiOutlineMail />
          {data.email}
        </div>
      )}
      {data.blog && (
        <div className="blog">
          <a href={`https://${data.blog}`}>
            <BsLink45Deg />
            {data.blog}
          </a>
        </div>
      )}
      {data.twitter_username && (
        <div className="twitter">
          <a
            target={"_blank"}
            href={`https://twitter.com/${data.twitter_username}`}
            rel="noreferrer"
          >
            <BsTwitter />
            {data.twitter_username}
          </a>
        </div>
      )}
      <div className="works">
        {data.public_repos > 0 && (
          <a
            target={"_blank"}
            href={`https://github.com/${data.login}?tab=repositories`}
            rel="noreferrer"
          >
            <div className="repo">
              <p>Repositories: </p>
              <span>{data.public_repos}</span>
            </div>
          </a>
        )}
        {data.public_gists > 0 && (
          <a
            target={"_blank"}
            href={`https://github.com/${data.login}?tab=gist`}
            rel="noreferrer"
          >
            <div className="gist">
              <p>Gists: </p>
              <span>{data.public_gists}</span>
            </div>
          </a>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
