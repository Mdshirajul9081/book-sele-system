import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId ,bookName, author, image, rating, publisher, tags, category } = book;
  return (
  <Link to={`/books/:${bookId}`}>
    <div className="card bg-base-100 w-96 shadow-sm p-6 bg-amber-500">
      <figure className=" bg-blue-400 py-8 rounded-lg">
        <img className="h-[166px]  " src={image} alt="Shoes" />
      </figure>
      <div className="card-body   ">
        <div className="flex justify-center gap-6">
          {tags.map((tag ,index) => (
            <button 
            key={index}
            className="bg-lime-400 m-3 px-3 rounded-lg">{tag}</button>
          ))}
        </div>
        <div className="card-actions flex space-x-4"></div>
        <h2 className="card-title">{bookName}</h2>
        <hr className="border-t-2 border-gray-300 my-2" />{" "}
        {/* Added horizontal line */}
        <p className="">Author: {author}</p> {/* Added paragraph for author */}
        <div className="flex justify-between">
          <div>{category}</div>
          <div className="{rating}">
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="1 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="2 star"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="3 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="4 star"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                aria-label="5 star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default Book;
