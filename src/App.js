import Fun from "./components/route";

function App(){
  return(
    <div>
      <Fun/>
    </div>
  )
}

export default App;

// create a simple react application that fetches and display data from an api when the user navigates to the "todo" page 
// requirement:
// 1)use react-router-dom to create navigation links for "Home", 'About' , 'Todos' pages 
// 2)on the todo page . fetch data from following api "https://jsonplaceholder.typicode.com/posts"
// 3)use axios library to make the Api requestAnimationFrame
// 4)display the titles of the fetched posts in a list format on the "Todo" page
// 5)show a "loding.." messege while data is fetched
// 6)handle any error 
