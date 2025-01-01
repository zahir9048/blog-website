

export default interface IBlog {
  title: string;
  category: string;
  author: string;
  desc: string;
  _id: string;
  excerpt: string;
  date_posted: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: string;
  };
}