import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getToReadList } from "../../Utility/AddToDb";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [readList,setReadList]=useState([])
  const listed=useLoaderData()
  
  useEffect(()=>{
    const storedBooks=getToReadList()
    const storedReadListInt=storedBooks.map(id=>parseInt(id));

    const readBookList=listed.filter(book=>storedReadListInt.includes(book.bookId))
    setReadList(readBookList)
  },[])
  return (
    <div>
      <h2>this is my list book </h2>
      <Tabs>
        <TabList>
          <Tab>Reed books</Tab>
          <Tab>WhisList Books</Tab>
        </TabList>

        <TabPanel>
          <h2>read the book:{readList.length} </h2>
          {
            readList.map(book=> <Book book={book.bookId} book={book}></Book>)
          }
        </TabPanel>
        <TabPanel>
          <h2>white read the book</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
