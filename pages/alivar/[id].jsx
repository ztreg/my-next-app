import React from 'react'

export default function id(props) {

  return (
    <div>
      {props.id}
    </div>
  )
}

export async function getServerSideProps(nextctx){
  console.log(nextctx);
  return {
    props: {
      id: nextctx.query.id,
      
    }
  }
}