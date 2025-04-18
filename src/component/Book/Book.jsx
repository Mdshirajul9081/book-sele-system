

const Book = ({book}) => {
  const {bookName,author,image,rating,publisher}=book;
  return (
    <div className="card bg-base-100 w-96 shadow-sm p-6 bg-amber-500">
  <figure className=" bg-blue-400 py-8 rounded-lg">
    <img
      className="h-[166px]  "
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body   ">
  <div className="card-actions flex space-x-4   ">
      <div className="badge badge-outline bg-lime-300">Fashion</div>
      <div className="badge badge-outline bg-lime-300">Products</div>
    </div>
    <h2 className="card-title">
      {bookName}  
    </h2>
    <hr className="border-t-2 border-gray-300 my-2" /> {/* Added horizontal line */}
    <p className="text-white">Author: {author}</p> {/* Added paragraph for author */}
    <div className="flex">
      <p className="text-white">{publisher}</p>
      <p className="text-white">{rating}</p>

    </div>
  </div>
</div>
  );
};

export default Book;