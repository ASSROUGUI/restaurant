import React, { Component } from 'react';
import Data from './Data'
import axios from 'axios';


// Access-Control-Allow-Credentials: true 

class Search extends Component {
     constructor(){
    super();
    this.state = {
        isLoading:true,
        list:[],
        places:[],
        currentLatLng: {
          lat:26.2716025,
          lng:50.2017993
        }
 }

}

//   componentWillMount() {
//     this.getUser();
//   }

//   getUser() { 
// const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data.results))
//     .catch(error =>console.log('error',error))
//   }
// getUser() { 
//     const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
   
//     const url2='http://localhost:3000/v1/things'
//     const url3='https://api.randomuser.me/'
//      fetch('https://api.randomuser.me/').
//     then((response) => response.json()).
//     then((list) =>  this.setState({ list }).
//     catch(error =>console.log('error',error))  );
//       }

// getUser() { 
//  const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
//  const url2='http://localhost:3000/v1/things'
//  const url3='https://api.randomuser.me/'
//  const url4='http://localhost:3000/api/v1/users/'
// axios.get(url)
//   .then(response => {
//     console.log(response.data);
//   }, error => {
//     console.log('err',error);
//   }
//   );
// }

// async t(){   const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   }
// };

// const {
//   data: { ip }
// } = await axios.get("https://api.ipify.org?format=json", config);}

//  axiosConfig = {
//   headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       "Access-Control-Allow-Origin": "*",
//   }
// };

//  response = new Promise((res,rej)=>{
//   const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
//   const url2='http://localhost:3000/v1/things'
//   const url3='https://api.randomuser.me/'
//   axios({
    
//       method: 'get',
//       url: url,
//       data: {'name':'foo', 'type':'bar'},
//   }).then((response) => {
//       res(response);
//   }).catch((error) => {
//       rej(error);
//   });
// });

// response.then((data) => {
//   console.log(data)
// }).catch((error) => {
//   console.log(error)
// });

// fetch()
// {
//     const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'

//     fetch(url)
//   .then(response => response.json())    // one extra step
//   .then(data => {
//     console.log(data) 
//   })
//   .catch(error => console.error(error));
// }
// updateView = () => {
    
//   //console.log(this.state.id)
//   axios({
//     method: 'GET',
//    url:'https://api.randomuser.me/',
//     // url: `https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value`
//   }).then(response => {
//     this.setState({scene: response.data}) 
//     console.log('ii',response.data)
  
//   }).catch(error => console.log('err',error));
// }


componentWillMount() {
  this.searchPlacesz();
}


// searchPlaces = () => {
//    const url='https://wainnakel.com/api/v1/GenerateFS.php?uid=26.2716025,50.2017993&get_param=value'
//   axios
// .get(url
//     )
//     .then(res => {
//       console.log(res)
//       console.log(res.data.results);
//       this.setState({
//         places: res.data.results
        
//       });      console.log(res.data.results);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// };

// searchPlacesz = () => {
//   return fetch(`http://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.currentLatLng.lat},${this.state.currentLatLng.lng}&get_param=value`
//   , {
//     accept: 'application/json',})
//     .then(res => {
//             console.log(res)
//             console.log(res.data.results);
//             this.setState({
//               places: res.data.results
              
//             });      console.log(res.data.results);
//           })
//           .catch(err => {
//             console.log(err);
//           });
// }
searchPlacesz = () => {
   fetch(`http://wainnakel.com/api/v1/GenerateFS.php?uid=${this.state.currentLatLng.lat},${this.state.currentLatLng.lng}&get_param=value`)
.then(response => response.json())
  .then(json => console.log(json))
}

  render() {
 
    return (
	<div>

    {/* hiiij */}
    

    {/* <Data /> */}
          {/* <h1>{`${this.state.name.title} ${this.state.name.first} ${this.state.name.last}`}</h1>
          <img alt='Profile' src={this.state.image}></img><br/>
          <button onClick={this.getUser}>Get new user.</button> */}
	</div>
    );
  }
}


          {/* <button onClick={this.componentDidMount}>Get new user.</button> */}
        
  
  export default Search;

