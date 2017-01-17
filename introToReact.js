// charlieblackstock@gmail.com
//
// Meetup has the individual repo with the actual Facebook React
//
// Works at Acumen Digital
// Looking for PMs, Devs at the moment
// Business School, Masters at USC in ACcounting.  Acumen for over 1year
// AngularJS + Redux.

// TODO: Investigate Redux
// TODO: Investigate constructor
// TODO: add a node backend in a separate repo
// TODO: add a API endpoint that we will use to search movies and return data from the OMDB API_URL
// TODO: Update rReact to use new Node API enpoint
// TODO: ** Figure out how to install the Node backend **


// Lightweight frontend framework
// Closer to writing JS
// Community Driven components, isolated scope.  Drag & drop into application
//    ==> Lots of libraries of the community stuff
// Declarative views means it more predictable
// Great at error handling
// create-react-app
//    ==> Facebook's react generator tool.  STARTS REACT APP QUICKLY
//
// Webpack is a module bundler. Compiles application into single JS file.
// Babel allows for current JS
// React Dev tools are also great

// React Benfits from solid wireframes, good planning up front, and it will benefit you on the backend.

// Netflix is one of the most referenced React applications.
// Practice and repetition in determing the scope of components.  Break it down to separate concerns.

// Structure:
// Public => index.html, favivon.ico
// src => index.js
// Remainging file structure is flexible.
//
//
// Build base boilerplate at first.  Make sure everythings connected at first
// ES6 syntax, HTML within JS file
// Create base component within and then ReactDOM renders that custom HTML component to the DOM
// Redux opens the door to scalability.  "maybe his favorite piece of software"
//


// class App extender Componet {
//    constructor() {
    //   super()
    //   this.searchMovies('cool');
          // this.State{
            // movies: [];
          // }
    // }
//
//   searchMovie(term){
//     axios.get(`${API_URL}${term}`)
          // .then( res => {
          //   console.log(res);
                // this.setState({movies:res.data.Search});
          // });
//   }
    // render() {
    //   console.log(this.state);
    //   return (
    //     <div className="container">
    //       <h1>OMDB Movie Search</h1>
            // <MovieList movies={this.state.movies} />
            // ^^^^ set on its own component and required at the top
            // initial state is prop of this.movie = [];
    //     </div>
    //   )
    // }
// }
//
//  *** State is a plain JS object that is used to record or react to user input ***
//  ***** Whenever a state is changed, the component is re-rendered, and all its chldre are re-rendered *****
//
//  Keep Render Methods as clean and intuitive as possible
// MAP returns an array, and React iterates over those arrays
// Functional component gets information and then renders / presents that information onto the DOM
// 1 glass or presentational component and the rest function.  GOOD architecture.
//
// Development method separates its concerns within the workflow.  DECLARATIVE
//
// Dont use index as Keys (b/c it will change)

//// Need to import style sheets as well
// Include them at the top under the components
// Can create stylesheets specific to the components.  Like a movie card style
//
// Inline styles are common within React Native
//
// Export this UL functionality into its own component:
      // <ul>
      //   {this.state.movies.map(movie => {
      //     return <li>{movie.Title}</li>
      //    return <MovieCard
              // key={movie.imdbId}   // Unique ID, that way virtual DOMw ill only render that element
              // title={movie.Title}
              // posterURL={movie.Poster}
              // />
      //   })}
      // </ul>
// const MovieList = (props) => {
  // return (
  //   <ul>
  //     {props.movies.maps(movie=>{
  //       return <li>{movie.Title}</li>
  //     })}
  //   </ul>
  // )
// }
//
// export default MovieList;
//
//
