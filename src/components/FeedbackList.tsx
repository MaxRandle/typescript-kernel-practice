interface IProps {
  reviews: {
    name: string;
    email: string;
    rating: string;
    feedback?: string;
  }[];
}

const FeedbackList: React.FC<IProps> = ({ reviews }) => {
  const renderList = (): JSX.Element[] => {
    return reviews.map((review) => (
      <li>
        <div>
          <span>{review.name}</span> • <span>{review.email}</span>
        </div>
        <span>rating: {review.rating}</span>
        <span>{review.feedback}</span>
      </li>
    ));
  };

  return <ul>{renderList()}</ul>;
};

export default FeedbackList;
