import React from 'react'
import classes from './Data.scss'
import { Field } from 'redux-form'
import DataRegister from './DataRegister'

export const Data = (props) => {
  const { handleSubmit, newData, dataList } = props
  return(
    <div>
      <form onSubmit={handleSubmit(newData)}>
        <Field name="value1" component="input"/>
        <input type="submit" value="Create"/>
      </form>
      {dataList.map((data, i) => <DataRegister key={i} {...data} />)}
    </div>
  )
}

export default Data
