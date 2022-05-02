import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
      <p>{item.title}</p>
      <img src={item.image} alt=""></img>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      </Flex>
    </>
  );
};
