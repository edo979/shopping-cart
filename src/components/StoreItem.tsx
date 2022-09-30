type StoreItemsProps = {
  id: number
  name: string
  price: number
  imgUrl: string
}

export function StoreItem({ id, name, price, imgUrl }: StoreItemsProps) {
  return <h2>store item</h2>
}
