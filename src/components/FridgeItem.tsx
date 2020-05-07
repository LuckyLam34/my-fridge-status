import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { IFridgeItem } from '../constants/interfaces';
import { CommonService } from '../common/common.service';

export const FridgeItem = ({ fridgeItem }: any) => {
  return <tr>
    <th scope="row">1</th>
    <td> <img className="rounded" src='/assets/images/cabbage.jpg' /></td>
    <td className="text-capitalize">{fridgeItem.vegetableName}</td>
    <td>{CommonService.getDateTime(fridgeItem.dateAdded)}</td>
    <td>{CommonService.getDateTime(fridgeItem.dateExpired)}</td>
  </tr>
}