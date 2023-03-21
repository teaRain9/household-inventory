


export async function getStaticProps(context) {
  const itemId = context.params.itemId
  return {
    props: {
      itemId
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {params: {itemId: 'i1'}},
      {params: {itemId: 'i2'}},
      {params: {itemId: 'i3'}},
    ],
    fallback: 'blocking'
  }
}


function ItemDetailPage(props) {

  return (
    <div>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1>show and edit item details</h1>
      <h1 className="text-white">{props.itemId}</h1>
    </div>
  )
}

export default ItemDetailPage;