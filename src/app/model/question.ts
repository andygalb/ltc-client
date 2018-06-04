export class Question {
   _id:string;
   questionTitle: string;
   questionDescription: string;
   questionText: string;
   questionType: string;
   questionAnswer: {
      text : string,
      javascript: string,
      csharp: string
  }
}
