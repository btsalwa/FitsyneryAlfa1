import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Grid, TextField, Button, Divider, List, ListItem, ListItemText } from '@mui/material';

const ExerciseDetails = ({ exerciseId }) => {
  const [exerciseDetails, setExerciseDetails] = useState(null);
  const [comment, setComment] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage] = useState(5);
  const[info, setInfo] = useState(null);

  const apiKey = 'a4d126b3da0d64451ded4ebf83fdf364fbdd54e8';

  useEffect(() => {
    const fetchExerciseDetails = async () => {
      try {
        const response = await axios.get(`https://wger.de/api/v2/exercise/${exerciseId}`, {
            headers: {
              Authorization: `Token ${apiKey}`
            }
          });
        setExerciseDetails(response.data);
      } catch (error) {
        console.error("Error fetching exercise details:", error);
      }
    };

    const fetchInfo = async () => {
        try{
            const response = await axios.get(`https://wger.de/api/v2/exerciseinfo/`, {
                headers: {
                  Authorization: `Token ${apiKey}`
                }
              });
              setInfo(response.data);
        } catch(error) {
            console.error("Error fetching info:", error)
        }
    };
     fetchInfo();
    fetchExerciseDetails();
  }, [exerciseId]);

  const handleAddComment = async () => {
    try {
      await axios.post(`https://wger.de/api/v2/exercisecomment/`, {
        headers: {
            Authorization: `Token ${apiKey}`
          },
        exercise: exerciseId,
        comment,
      });
      setComment('');
    } catch (error) {
      console.error(`Error adding comment:`, error);
    }
  };

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = exerciseDetails?.comments?.slice(indexOfFirstComment, indexOfLastComment) || [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if(!exerciseDetails) {
    return <Typography>Loading...</Typography>;
  }

  return(
    <div>
      <Typography variant="h1">{exerciseDetails.name}</Typography>
      <Typography variant="subtitle1">{exerciseDetails.description.replace(/<\/?[^>]+(>|$)/g, "")}</Typography>
      <Divider />
      <Typography variant="h2">Video</Typography>
      <Grid container justifyContent="center">
        <video controls>
          <source src={exerciseDetails.video} type="video/mp4" />
        </video>
      </Grid>
      <Divider />
      <Typography variant="h2">Comments</Typography>
      <TextField
        fullWidth
        label="Add a comment"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>Add Comment</Button>
      <List>
        {currentComments.map((comment, index) => (
          <ListItem key={index}>
            <ListItemText primary={comment} />
          </ListItem>
        ))}
      </List>
      {/* Pagination */}
      <div>
        {[...Array(Math.ceil(exerciseDetails.comments.length / commentsPerPage)).keys()].map(number => (
          <Button key={number} onClick={() => paginate(number + 1)}>{number + 1}</Button>
        ))}
      </div>
      <Divider />
      <Typography variant="h2">Aliases</Typography>
      <ul>
        {exerciseDetails.aliases.map((alias, index) => (
          <li key={index}>{alias}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExerciseDetails;
