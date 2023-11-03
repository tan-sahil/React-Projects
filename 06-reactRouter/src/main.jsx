import React from 'react'
import ReactDOM from 'react-dom/client'
import { Contact, Home, LinkedIn} from './components'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='contact-us' element = {<Contact/>}/>
    <Route path='linkedIn' element = {<LinkedIn/>} 
       />
        
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


// import Layout from './components/Layout.jsx'
// import User from './components/User.jsx'
// // const router= createBrowserRouter([
// //   {
// //     path: "/",
// //     element: (
// //       <div className='w-full  h-28 bg-orange-700'>
// //       <h1>Hello home route</h1>
// //       <Layout/>
// //     </div>),
// //     children: [{
// //       path: "contact",

// //       element: (<div className=' w-96 h-40 bg-slate-600'><h1>children hai contact bale</h1></div>)
// //     },
// //     {
// //       path: "register",
// //       element: (<div className=' w-96 h-40 bg-blue-600 text-yellow-400'><h1>ynha pr registrations hongi</h1></div>)
// //     }]
// //   },
// //   {
// //     path: "about",
// //     element: <div className='w-full h-28 bg-green-500'> This is about section</div>
// //   },
// //   {
// //     path: ':id',
// //     loader : async ({params}) =>{
// //       const data = await params.id;
// //       return data;
// //     },
// //     element: <User/>
// //   }
// // ])


// function EditContact() {
//   // Since Contact is not a parent of EditContact we need to go up one level
//   // in the path, instead of one level in the Route hierarchy
//   return (
//     <Link to=".." relative="path">
//       Cancel
//     </Link>
//   );
// }
// const router = createBrowserRouter(
//     createRoutesFromElements(
//       <Route path = "/" element = {<Layout/>}>
//         <Route path ="contacts/:id" element ={<User/>} 
//           loader = {({params}) => (params.id)}/>
//         <Route path = "contacts/:id/edit" element  ={<EditContact/>}/>
//       </Route>

//     )
// )
