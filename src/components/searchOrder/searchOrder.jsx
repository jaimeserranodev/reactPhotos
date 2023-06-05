// import { React, useState } from "react";

// import { useDispatch } from "react-redux";
// import { sortSearch } from "../../features/search/searchSlice";
// import { searchPhoto } from "../../features/search/searchSlice";
// import { sortBy, searchFAvorite } from "../../features/favorite/favoriteSlice";



// function SearchOrder() {

//     let [search, setSearch] = useState('')

//     let dispatch = useDispatch()

//     let onSort = (e) => {
//         dispatch(sortBy(e.target.value))
//         dispatch(sortSearch(e.target.value))
//     }

//     let searchAction = (ev) =>{
//         setSearch(ev.target.value)
//         dispatch(searchPhoto({search: search}))
//         dispatch(searchFAvorite({ search: search }))
//     }



//     return (
//         <div style={{
//             display: 'flex',
//             justifyContent: 'space-between',
//             paddingLeft: '5%',
//             flexWrap: 'wrap'
//         }}>
//             <div>
//                 <label htmlFor="" style={{ marginRight: '5px' }}>Sort by</label>
//                 <select name="filter" id="" placeholder="Filter" onChange={(target) => {onSort(target)}}>
//                     <option value="none">None</option>
//                     <option value="width">Width</option>
//                     <option value="height">Height</option>
//                     <option value="likes">Likes</option>
//                     <option value="date">Date</option>
//                 </select>
//             </div>
//             {/* <div style={{
//                 display: 'flex',
//                 marginRight: '5%'
//             }}>
//                 <input onChange={(ev) => searchAction(ev)} type="text" placeholder="Search for description" style={{
//                     borderRadius: '5px',
//                     padding: '2px 4px',
//                     width: '300px',
//                 }} />
//                 <SearchIcon onClick={() => searchAction()} style={{background: '#900c3f', color: 'white'}}/>
                
//             </div> */}
//         </div>
//     );
// }

// export default SearchOrder