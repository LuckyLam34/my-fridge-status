import React from 'react';
import { FridgeItem } from './../components/FridgeItem';
// import { IFridgeItem } from '../constants/interfaces';
import { Fn } from '../services/utils.service';
// import moment from 'moment';
// import { removeFridgeItem } from 'src/redux/actions';
// import { connect } from 'react-redux';

export const FridgeItems = ({ fridgeItems, removeFridgeItem }: any) => {
  return fridgeItems.length > 0 ? (
    <div className="fridge-item">
      <div className="fridges-table mt-0">
        <div className="record p-3">
          <div className="w-5">#</div>
          <div className="w-18 header">Picture</div>
          <div className="w-18 header">Name</div>
          <div className="w-18 header">Added Date</div>
          <div className="w-18 header">Expired Date</div>
          <div className="w-18 header">Expired in</div>
        </div>
        {fridgeItems.map((item: any, idx: number) => (
          <FridgeItem
            key={idx}
            no={idx + 1}
            daysLeft={Fn.calDaysLeft(item.dateExpired)}
            removeFridgeItem={removeFridgeItem}
            fridgeItem={item}
          ></FridgeItem>
        ))}
      </div>
    </div>
  ) : null;
};
