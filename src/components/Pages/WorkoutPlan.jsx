//const apiKey = 'a4d126b3da0d64451ded4ebf83fdf364fbdd54e8';
//const exerciseEndpoint = 'https://wger.de/api/v2/exercise/';

//fetch(exerciseEndpoint, {
 // headers: {
 //   Authorization: `Token ${apiKey}`
 // }
//})
 // .then(response => response.json())
 // .then(data => console.log(data))
 // .catch(error => console.error('Error:', error));


 import React, { useState, useEffect } from "react";
 import axios from "axios";
 import { Grid, TextField, Button, Typography,CircularProgress } from "@mui/material";
 //import Pagination from "@material-ui/lab/Pagination";//
 import Pagination from '@mui/material/Pagination'
 //import { makeStyles } from "@mui/material/styles";
 //import {useHistory} from "react-router-dom"
 
 //const useStyles = makeStyles((theme) => ({
  // root: {
    // backgroundColor: theme.palette.background.basilOrange50,
    // padding: theme.spacing(2),
    // fontFamily: "monospace",
   //},
   //heading: {
    // color: theme.palette.text.basilOrange800,
   //},
   //text: {
   //  color: theme.palette.text.basilGreen500,
   //},
 //}));
 
 const WorkoutPlan = () => {
   const apiKey = 'a4d126b3da0d64451ded4ebf83fdf364fbdd54e8';
 
   //const classes = useStyles();
 
   const [exerciseImages, setExerciseImages] = useState([]);
   const [searchResults, setSearchResults] = useState([]);
   const [searchCriteria, setSearchCriteria] = useState({
     duration: '',
     intensity: '',
     name: '', 
   });
   const [page, setPage] = useState(1);
   const [totalPages, setTotalPages] = useState(1);
   const [loading, setLoading] = useState(false);
   
 
   useEffect(() => {
     const fetchExerciseImages = async () => {
       try {
         const response = await axios.get('https://wger.de/api/v2/exerciseimage/', {
           headers: {
             Authorization: `Token ${apiKey}`
           }
         });
         setExerciseImages(response.data.results);
       } catch (error) {
         console.error('Error fetching exercise images:', error);
       }
     };
 
     fetchExerciseImages();
   }, []);
 
   const handleSearch = async () => {
     try {
       const response = await axios.get('https://wger.de/api/v2/exercise', {
         headers: {
           Authorization: `Token ${apiKey}`
         },
         params: {
           page,
           ...searchCriteria,
           language: "2",
         },
       });
       setSearchResults(response.data.results);
       setTotalPages(response.data.count);
     } catch (error) {
       console.error('Error searching for workout routines:', error);
     } finally {
       setLoading(false);
     }
   };
 
   const handlePageChange = (event, value) => {
     setPage(value);
   };
 
   const filterExerciseByName = (name) => {
     return searchResults.filter(result => result.name.toLowerCase().includes(name.toLowerCase()));
   };
 
   const handleSearchCriteriaChange = (e) => {
     const { name, value } = e.target;
     setSearchCriteria({ ...searchCriteria, [name]: value });
     if (name === 'name') {
       setSearchResults(filterExerciseByName(value));
     }
   };
 
   return (
     <div>
       <Typography variant="h1" align="center" >Workout App</Typography>
       <Grid container spacing={3} justifyContent="center" alignItems="center">
         <Grid item xs={12} sm={4}>
           <TextField
             fullWidth
             label="Duration"
             name="duration"
             value={searchCriteria.duration}
             onChange={handleSearchCriteriaChange}
             
             
           />
         </Grid>
         <Grid item xs={12} sm={4}>
           <TextField
             fullWidth
             label="Intensity"
             name="intensity"
             value={searchCriteria.intensity}
             onChange={handleSearchCriteriaChange}
             
             
           />
         </Grid>
         <Grid item xs={12} sm={4}>
           <TextField
             fullWidth
             label="Name" 
             name="name"
             value={searchCriteria.name}
             onChange={handleSearchCriteriaChange}
             
             
           />
         </Grid>
         <Grid item xs={12} sm={4}>
           <Button variant="contained" color="primary" onClick={handleSearch}>Search</Button>
         </Grid>
       </Grid>
       {loading && <CircularProgress style={{ marginTop: '20px' }} />}
       <Grid container spacing={3} justifyContent="center" >
         {searchResults.map((result) => (
           <Grid key={result.id} item xs={12} sm={6} md={4}>
             <div>
               <Typography variant="h3" >{result.name}</Typography>
               <Typography variant="body1" 
               >Description: {result.description.replace(/<\/?[^>]+(>|$)/g, "")}</Typography>
             </div>
           </Grid>
         ))}
       </Grid>
 
       <Grid container justifyContent="center">
         <Pagination count={totalPages} page={page} onChange={handlePageChange} />
       </Grid>
     </div>
   );
 };
 
 export default WorkoutPlan;
 