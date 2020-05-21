import React from 'react';
import { FridgeItem } from './../components/FridgeItem';
import { IFridgeItem } from '../constants/interfaces';
import { Fn } from '../services/utils.service';

export const FridgeItems = ({ fridgeItems }: any) => {
  console.log(fridgeItems)
  return fridgeItems.length > 0 ? <div className="fridge-item">
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">Added Date</th>
          <th scope="col">Expired Date</th>
        </tr>
      </thead>
      <tbody className="text-center">
        {
          fridgeItems.map((item: any, idx: number) => <FridgeItem key={idx} fridgeItem={item}></FridgeItem>)
        }
      </tbody>
    </table>
  </div> : null
}
