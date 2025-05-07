
import { useLoaderData, useParams } from 'react-router-dom';
import { AddToReadList, addToWhiteList } from '../../Utility/AddToDb';

const BookDetails = () => {
  const {bookId}=useParams()
  const data=useLoaderData()
  const Id = parseInt(bookId.replace(":", ""));
  const book = data.find(book => book.bookId == Id);
 
  const { bookId:currentId, bookName, author, image,review,category ,tags,publisher,totalPages,rating,yearOfPublishing} = book;

  const handelReadList=(id)=>{

  AddToReadList(id)
  }
  const handelWhiteList=(id)=>{
    addToWhiteList(id)
  }
  
  
  return (
    <div className="hero bg-base-200 min-h-screen">
      
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={image}
        className="max-w-sm rounded-lg shadow-2xl "
      />
      <div>
        <h1 className="text-5xl font-bold">{bookName}</h1>
        <p className="py-6">
          {author}
        </p>
        <hr/>
       <p className='m-3'>{category}</p>
        <hr />
        <p className='mt-4'>{review}</p>
       <div className='justify-between mt-4'>
       <button className='bg-lime-500'> tag {tags}</button>
       </div>
       <hr className='mt-4' />
       <p className='mt-4'>Number of page : {totalPages}</p>
       <p>publisher : {publisher}</p>
       <p>year Of Publishing : {yearOfPublishing}</p>
       <p>rating : {rating}</p>
         <div className='flex gap-8 mt-4'>
         <button  onClick={()=>handelReadList(bookId)} className="btn btn-primary btn-outline">Read List</button>
         <button onClick={()=>handelWhiteList(bookId)} className="btn btn-secondary">WishList</button>
         </div>

      </div>
    </div>
  </div>
  );
};

export default BookDetails;