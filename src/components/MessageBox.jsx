import React from "react";

function MessageBox({user,name,message}) {
// console.log(user);

  return (
    <>
      {user==name?
      <div className="mbox right m-1">
        <p className="pp">You</p>
        <p className="p1">{message}</p>
      </div>
      :name=="Admin"?
      <div className="d-flex justify-content-center w-100">
        <div className="abox m-1">
          <p className="m-0">{message}</p>
        </div>
      </div>
      :
      <div className="mbox left m-1">
        <p className="pp">{name}</p>
        <p className="p1">{message}</p>
      </div>
      }
      
    </>
  );
}

export default MessageBox;