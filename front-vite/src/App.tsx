import BookList from "./components/BookList";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const App = () => {
    return (
        <div className="w-280 h-200 p-0 m-0 bg-lime-100">
            <Hero />
            <Nav />
            <BookList />
        </div>
    );
};

export default App;
