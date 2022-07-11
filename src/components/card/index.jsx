import { LiCard } from "./style";

const Card = ({ notice }) => {
  const { title, og_url, og_image, article_published_time } =
    notice.yoast_head_json;
  return (
    <LiCard>
      <img src={og_image[0].url} alt={title} />
      <h4>{title}</h4>
      <span>{article_published_time}</span>
    </LiCard>
  );
};

export default Card;
