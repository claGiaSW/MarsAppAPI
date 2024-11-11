import express from "express";
import axios from "axios";
const apiRoutes = express.Router();

interface Toss {
    wonBy: string;
    Decision: string;
}

interface Match {
    matchID: number;
    Teams: string;
    Date: string;
    Toss: Toss;
}

const matchDetails: Match[] = [
  {
    matchID: 60,
    Teams: "Rajasthan Royals vs Kolkata Knight Riders",
    Date: "19 May 2024",
    Toss: {
      wonBy: "Team Name",
      Decision: "TBD",
    },
  },
  {
    matchID: 61,
    Teams: "Mumbai Indians vs Chennai Super Kings",
    Date: "20 May 2024",
    Toss: {
      wonBy: "Team Name",
      Decision: "TBD",
    },
  },
];

apiRoutes.get("/ipl", (req: any, res: any) => {
  res.status(200).json(matchDetails);
});

export default apiRoutes;