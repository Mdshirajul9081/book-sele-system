const getToReadList=()=>{
  const stroedListRead=localStorage.getItem('read-list')
  if(stroedListRead){
    const stordList=JSON. parse(stroedListRead)
    return stordList
  }
  else{
    return [];
  }

}

const AddToReadList=(id)=>{
  const storedList=getToReadList()
  if(storedList.includes(id)){
    console.log(id," already hasebeen exied")
  }
  else{
    storedList.push(id)
    const stord=JSON.stringify(storedList)
    localStorage.setItem("read-list",stord);
  }
}

const getToWhiteList=()=>{
  const stroeWhite=localStorage.getItem('read-white')
  if(stroeWhite){
    const stordList=JSON. parse(stroeWhite)
    return stordList
  }
  else{
    return [];
  }

}
const addToWhiteList=(id)=>{
  const storeWhiteList=getToWhiteList()
  if(storeWhiteList.includes(id)){
    console.log(id,"alrady add the existed")
  }
  else{
    storeWhiteList.push(id)
    const  std=JSON.stringify(storeWhiteList)
    localStorage.setItem("read-white",std);
    
  }
}
export {AddToReadList,addToWhiteList,getToReadList};