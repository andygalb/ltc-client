export class User {
  _id: string;
  local: {
    userType: string;
    firstName: string;
    username: string;
    password: string;
    lastName: string;
  };
   results: Result[];
}

export class Result {
  _id: string;
  type: string;
  dateTime: number;
  answer: string;
  courseID: string;
  sequenceID : string;
  questionID : string;
  courseTitle: string;
  sequenceTitle: string;
  questionTitle: string;
}
