import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({tuit}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
console.log(tuit)
  return (
      <li className="list-group-item d-flex flex-row w-100">
        <img className="me-3 avatar-img mt-1" src={`/images/${tuit.image}`}/>
        <div className="flex-column flex-fill">
          <i className="bi bi-x-lg float-end"
             onClick={() => deleteTuitHandler(tuit._id)}/>
          <p className="mb-0">
            <span className="fw-bold">{tuit.userName} </span>
            <i className="fa fa-check-circle"/> <span className="text-secondary">{tuit.handle} • {tuit.time}</span>
          </p>
          <p>{tuit.tuit}</p>
          <TuitStats tuitItem={tuit}/>
        </div>
      </li>
  )
};

export default TuitItem;