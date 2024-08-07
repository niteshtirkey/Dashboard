import "./Feedback.css";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
function Feedback() {
  const UpdatesData = [
    {
      img: img1,
      name: "Andrew Thomas",
      rating: 4,
      noti: "Understanding the RACI roles helps streamline the workflow by ensuring that tasks progress smoothly from one stage to another. Each individual knows their responsibilities and when to take action. It ensures that the right individuals are involved in decision-making processes, improving the quality of the content.",
      time: "25 seconds ago",
    },
    {
      img: img2,
      name: "James Bond",
      rating: 5,
      noti: "Identifying who needs to be informed or consulted ensures that communication channels are clear and that necessary parties are kept in the loop about progress.",
      time: "30 minutes ago",
    },
    {
      img: img3,
      name: "Iron Man",
      rating: 4,
      noti: "These are the individuals or roles who are kept informed about the progress or completion of a task. They need to know the task's status but are not directly involved in its execution.",
      time: "2 hours ago",
    },
  ];

  return (
    <>
      <div className="Feedback">
        <h2>Customer's Feedback</h2>
        {UpdatesData.map((update, index) => {
          return (
            <div className="update" key={index}>
              <div className="profile">
                <img src={update.img} alt="" />
                <span>{update.name}</span>
              </div>
              <div className="noti">
                <Rating  name={`rating-${index}`} value={update.rating} readOnly />
                <p>{update.noti}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Feedback;
