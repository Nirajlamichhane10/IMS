{/* <MaterialTable style={Styles.table}
title="Added Items"

icons={tableIcons}
columns={columns}

data={data}
// for adding total
options={{
  search:false,
  paging:false,
  // showTotal: true,
  // totalRow: { name: 'Grand Total', total: ()=>{
  //   let total = 0;
  //   data.forEach(item => {
  //     total+= item.quantity * item.price;
  //   });
  //   return total;} },
}}

components={{
  Toolbar: props => (
    <div>
      <MTableToolbar {...props} />
      <div style={{padding: '0px 10px'}}>
        <hr/>
      </div>
    </div>
  ),
}}



editable={{
  onRowAdd: newData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = newData.price * newData.quantity;
        newData.total=total;
        setData([...data, newData]);
        const tempItem={
          "itemName":itemNames[newData.itemName],
          "unitOfItem":newData.unitOfItem,
          "quantity":newData.quantity,
          "price":newData.price,
          "total":total};
        setItems([...items, {...tempItem} ]);

      //   // Update the grand total
      // const updatedGrandTotal = calculateGrandTotal([...data, newData]);
      // console.log(updatedGrandTotal); // Output: Updated grand total
        
       
       
        resolve();
      }, 1000)
    }),
  onRowUpdate: (newData, oldData) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataUpdate = [...data];
        const index = oldData.tableData.id;
        dataUpdate[index] = newData;
        setData([...dataUpdate]);

        

        resolve();
      }, 1000)
    }),
  onRowDelete: oldData =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDelete = [...data];
        const index = oldData.tableData.id;
        dataDelete.splice(index, 1);
        setData([...dataDelete]);
        
        resolve()
      }, 1000)
      
    }),
}}

/> */}