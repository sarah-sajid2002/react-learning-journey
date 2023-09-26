import React from "react";

// objects in jsx
let obj = {
  userNAme: "sarah",
  userAge: 10,
  userCninc: "0000000000",
  userEmail: "abc@gmail.com",
  imageUrl:
    "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk=",
  userAlt: "user image",
};

// creating a component in this file
function Component1(props) {
  return <h1>i am the h1 of first component</h1>;
}

export default function ObjectsInJsx() {
  return (
    <div>
      {/* object in JSX */}
      <h3>hey {obj.userNAme} </h3>
      <h3>your age is : {obj.userAge} </h3>
      <h3>your cninc is : {obj.userCninc} </h3>
      <h3>your email is: {obj.userEmail} </h3>
      <img src={obj.imageUrl} alt={obj.userAlt} width={100} height={100} />
      {/* rendering Component1 */}
      <Component1 />
    </div>
  );
}
