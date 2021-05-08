import React from "react";

let month = [
  " Jan ",
  " Feb ",
  " Mar ",
  " April ",
  " May ",
  " June ",
  " July ",
  " Aug ",
  " Sept ",
  " Oct ",
  " Nov ",
  " Dec ",
];
let date = new Date();
let fulldate = date.getDate() + month[date.getMonth()] + date.getFullYear();

export default function DateHeader() {
  return <h1 className='date'>{fulldate}</h1>;
}
