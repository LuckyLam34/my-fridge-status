import React from 'react';
import { Fn } from '../services/utils.service';

export const FridgeItem = ({ fridgeItem }: any) => {
  return <tr>
    <th scope="row">1</th>
    <td> <img className="rounded" src='/assets/images/cabbage.jpg' /></td>
    <td className="text-capitalize">{fridgeItem.vegetableName}</td>
    <td>{Fn.getDateTime(fridgeItem.dateAdded)}</td>
    <td>{Fn.getDateTime(fridgeItem.dateExpired)}</td>
  </tr>
}