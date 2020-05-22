import React from 'react';
import { FridgeItem } from './../components/FridgeItem';
import { IFridgeItem } from '../constants/interfaces';
import { Fn } from '../services/utils.service';
import moment from 'moment';

export const FridgeItems = ({ fridgeItems }: any) => {
  return fridgeItems.length > 0 ? <div className="fridge-item">
    <div className="fridges-table my-3">
      <div className="record p-3">
        <div className="w-5">#</div>
        <div className="w-19 header">Picture</div>
        <div className="w-19 header">Name</div>
        <div className="w-19 header">Added Date</div>
        <div className="w-19 header">Expired Date</div>
        <div className="w-19 header">Expire in</div>
      </div>
      {
        fridgeItems.map((item: any, idx: number) => <FridgeItem key={idx} no={idx + 1} daysLeft={Fn.calDaysLeft(item.dateExpired)} fridgeItem={item}></FridgeItem>)
      }
    </div>
  </div> : null
}
