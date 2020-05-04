import React from 'react';
import { FridgeItem } from './../components/FridgeItem';
import { IFridgeItem } from '../constants/interfaces';

export const FridgeItems = ({ fridgeItems }: any) => {
  let items: any[] = [];

  if (fridgeItems) {
    items = Object.values(fridgeItems);
    console.log(items)
  }
  return items.length > 0 ? <div className="fridge-item">
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
          items.map((item, idx) => <FridgeItem key={idx} fridgeItem={item}></FridgeItem>)
        }
      </tbody>
    </table>
  </div> : null
}
