import React from "react";
import './App.css';
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,   
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

export default function GraphicalRepresentation(props) {
  const data = [
    { name: "TOTAL SALES", money: props.sellGrandTotal },
    { name: "TOTAL PURCHASES", money: props.purchaseGrandTotal },
    { name: "TOTAL STOCK VALUE", money: props.stockGrandTotal },
  
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Stock Management</h1>
      <div className="App">
        <PieChart width={400} height={400}>
          <Pie
            dataKey="money"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="money" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
  );
};

