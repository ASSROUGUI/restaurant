import React from 'react';
import {  Link } from "react-router-dom";
import { Map, GoogleApiWrapper } from 'google-maps-react';

const Data = () => {
  const list=[
    {
      error:"no",
      name:"Shrimpy Al-Khobar",
      id:"593c5146029a55375e3127bb",
      link:"https:\/\/foursquare.com\/v\/593c5146029a55375e3127bb",
      cat:"Sandwich Place",
      catId:"4bf58dd8d48988d1c5941735",
      rating:"-1",
      lat:26.28377228373,
      lon:50.218674670818,
      Ulat:50.2017993,
      Ulon:26.2716025,
      open:"",
      image:[]  }]

      const nl= list.map((n,k)=>(
        {k},<h1>i am {n.name} 
          <Link to="https:\/\/foursquare.com\/v\/593c5146029a55375e3127bb">h</Link>
          </h1>))
  return (
    <div>
{nl}

    </div>
  );
}

export default Data;



// import React, { Component } from 'react';
// import Axios from 'axios';

// export default class Data extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             users:[]
//         };
//       }
//       fetchUsers = () => {
//   const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'

//         Axios.get(url)
//         .then(({data}) => {
         
//             if(data.success === 1){   console.log('rr',data)
//                 this.setState({
//                     users:data.users.reverse()
                   
//                 }); console.log('rr',data)
//             }
//         })
//         .catch(error => console.error('error1',error));

//     }

    
//       componentDidMount() {
//         const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
//     const url2='http://localhost:3000/v1/things'
//             fetch(url)
//           .then((res) =>res.json())
//           .then((data)=> {console.log(data)})
          
//           .catch(error => console.error('error',error));
    
//       }
    
    
//       render() {
//           console.log('ooo')
//         return (
            
//           <div style={{ width: "100%", height: "100vh" }}>
//               {/* {this.state.contacts} */}
//               <button onClock={()=>this.fetchUsers()}>hhh</button>
//               <button onClock={this.componentDidMount}>kkk</button>
//               ,,,,
//           </div>
          
//         )
//       }
//     }
// //     constructor(props) {
// //         super(props);
// //         this.state = {
// //             items: [],
// //             isLoaded: false,
// //         }
// //     }
    
// //     componentDidMount() {
// //         const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'

// //         fetch(url)
// //             .then(res => res.json())
// //             .then(json => {
// //                 this.setState({
// //                     isLoaded: true,
// //                     items: json,
                      
// //                 }) 
// //              console.log('i',json)
// //             });
// //     }
    
// //     render() {
    
// //         let {isLoaded, items} = this.state;
    
// //         if (!isLoaded) {
// //             return <div>Loading...</div>
// //         } else {
// //             return (
// //                 <div className="App ">
// //                     <ul>
// //                         {items.map(item => (
// //                             <li key={item.id}>
// //                                 Name:  {item.name} | Location:{item.location} 
// //                             </li>
// //                         ))};
// //                     </ul>
// //                 </div>
// //             );
// //         }
// //         }
// //     }
// // export default Data;



// import React, { Component } from 'react';
// // import Data from './Data'
// import axios from 'axios';

// class Search extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  isLoading: true,
//             posts: [],
//             error: null };
//     }
//     getPosts() {
//         axios
//     .get("https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json")
//     // Once we get a response and store data, let's change the loading state
//     .then(response => {
//       this.setState({
//         posts: response.data.posts,
//         isLoading: false
//       });
//     })
//     // If we catch any errors connecting, let's update accordingly
//     .catch(error => this.setState({ error, isLoading: false }));
// }
// // Let's our app know we're ready to render the data
// componentDidMount() {
//   this.getPosts();
// }
// // Putting that data to use
// render() {
//   const { isLoading, posts } = this.state;
//   return (
//     <React.Fragment>
//       <h2>Random Post</h2>
//       <div>
//         {!isLoading ? (
//           posts.map(post => {
//             const { _id, title, content } = post;
//             return (
//               <div key={_id}>
//                 <h2>{title}</h2>
//                 <p>{content}</p>
//                 <hr />
//               </div>
//             );
//           })
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
//     </React.Fragment>
//   );
// }
// }
// //     render() {  
// //                   const { isLoading, posts, error } = this.state;

// //         return (
// //             <div>
// //             {!isLoading ? Object.keys(posts).map(key => <Post key={key} body={posts[key]} />) : <h3>Loading...</h3>}

       
// //          <Data />      
// //             </div>
        
// //         );
// //     }
// // }

// export default Search;