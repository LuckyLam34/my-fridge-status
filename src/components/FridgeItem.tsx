import React from 'react';
import { Fn } from '../services/utils.service';

export const FridgeItem = ({ fridgeItem, no }: any) => {
  return <div className="record p-3">
    <div className="w-5">{no}</div>
    <div className="w-19"> <img className="rounded" src='/assets/images/cabbage.jpg' /></div>
    <div className="w-19 text-capitalize">{fridgeItem.vegetableName}</div>
    <div className="w-19">{Fn.getDateTime(fridgeItem.dateAdded)}</div>
    <div className="w-19">{Fn.getDateTime(fridgeItem.dateExpired)}</div>
    <div className="w-19"></div>
  </div>
}