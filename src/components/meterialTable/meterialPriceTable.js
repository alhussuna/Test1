import React from 'react';
import "./meterialPriceTable.css"
import 'tachyons'
let dataFile = require('../../Data.json');


var tableBody = dataFile['PricesTable'].map (function(column) {
  return(
    <tr>
      <td>{column.item}</td>
      <td>{column.amount}</td>
      <td>{column.price}</td>
    </tr>)});

function meterialPriceTable() {

  return (
    <div className="maintable">
    	<div className="innertable">
        <p className="tabletitle br2 shadow-4" dir="rtl">اسعار مواد البناء داخل بغداد</p>
        <table className="ba br3 shadow-4" dir="rtl" width="100%">
          <thead className="header">
            <tr>
              <th>المادة</th>
              <th>الكمية</th> 
              <th>السعر</th>
            </tr>
          </thead>
          <tbody className="mytable">
            {tableBody}
          </tbody> 
        </table>
        <p className="note br2 shadow-4" dir="rtl">* تختلف الاسعار حسب المنطقة والنوعية ولا تتجاوز نسبه الاختلاف -+10%</p>
    	</div>
    </div>
  );
}

export default meterialPriceTable;
