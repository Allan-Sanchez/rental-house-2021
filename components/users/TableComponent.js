import React from 'react'
import RowComponent from "./RowComponent";


const TableComponent = ({ title, data }) => {
    data.map((item) => {
        console.log(item);
    });
    return(

    <table className="border-collapse w-full lg:mt-10 ">
      <thead>
        <tr>
          {title.map((item, index) => (
            <th
              key={index}
              className="p-3 font-bold uppercase bg-pink-primary-400 text-white border border-pink-primary-300 hidden lg:table-cell"
            >
              {item}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        
        {data.map((item, index) => (
          <RowComponent key={index}
            data={item}
            title={title}
          ></RowComponent>
        ))}
      </tbody>
    </table>
    )
};

export default TableComponent;
