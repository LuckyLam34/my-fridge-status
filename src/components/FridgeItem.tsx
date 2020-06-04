import React from 'react';
import { Fn } from '../services/utils.service';

export const FridgeItem = ({ fridgeItem, no, daysLeft }: any) => {
  return <div className="record p-3 align-items-center">
    <div className="w-5"><span className="font-weight-bold">#</span> {no}</div>
    <div className="w-18">
      <span className="font-weight-bold">Picture</span>
      <div><img className="rounded" src={'/assets/images/' + fridgeItem.vegetableId + '.jpg'} /></div>
    </div>
    <div className="w-18 text-capitalize">
      <span className="font-weight-bold">Name</span>
      <div>{fridgeItem.vegetableName}</div>
    </div>
    <div className="w-18">
      <span className="font-weight-bold">Added Date</span>
      <div>{Fn.getDateTime(fridgeItem.dateAdded)}</div>
    </div>
    <div className="w-18">
      <span className="font-weight-bold">Expired Date</span>
      <div>{Fn.getDateTime(fridgeItem.dateExpired)}</div>
    </div>
    <div className="w-18">
      <span className="font-weight-bold">Expire in</span>
      <div className={daysLeft <= 3 ? 'expired' : ''}>{daysLeft} days</div>
    </div>
    <div className="w-5">
      <span></span>
      <button type="button" className="btn btn-outline-danger btn-block"><i className="far fa-trash-alt"></i></button>
    </div>
  </div>
}