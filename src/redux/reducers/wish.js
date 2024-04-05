// import allProducts from "../../services/watches";
import product1 from "../../images/product1.jpg";
import product2 from "../../images/product2.jpg";
import product3 from "../../images/product3.jpg";
import product4 from "../../images/product7.jpg";
import product5 from "../../images/product8.jpg";

const allProducts = [
  {
    id: 1,
    src: product1,
    name: "product1",
    price: 300,
    rating: 5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 2,
    src: product2,
    name: "product2",
    price: 400,
    rating: 2,
    maxQuantity: 2,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 3,
    src: product3,
    name: "product3",
    price: 370,
    rating: 3.5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 4,
    src: product4,
    name: "product4",
    price: 500,
    rating: 5,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 5,
    src: product5,
    name: "product5",
    price: 250,
    rating: 4,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
  {
    id: 6,
    src: product2,
    name: "product6",
    price: 400,
    rating: 1,
    maxQuantity: 10,
    description:
      "More room to move. With 80GB or 160GB of storage and up to 40 hours of battery life, the new lorem ippsum dolor dummy lets you enjoy up to 40,000 songs or up to 200 hours of video or any combination wherever you go. Cover Flow. Browse through your music collection by flipping..",
    isAddedToWishlist: false,
  },
];

const initialState = {
  allProducts: allProducts,
  wish: [],
};
// initialState.wish.push("hello word");
// console.log(initialState);
const ReduxWish = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_WISH":
      // const wishedPro = state.allProducts.filter((element) => element.isAddedToWishlist === false);
      const item = state.allProducts.find(
        (prod) => prod.id === action.payload.product.id
      );
      const inWish = state.wish.find((item) =>
        item.id === action.payload.product.id ? true : false
      );
      return {
        ...state,
        wish: inWish
          ? state.wish.map((item) =>
              item.id === action.payload.product.id
                ? ({ ...item, toCountWish: item.toCountWish },
                  alert(
                    `${action.payload.product.name} is already in wish list`
                  ))
                : item
            )
          : (alert(
              `${action.payload.product.name} is added to wish successfuly`
            ),
            [
              ...state.wish,
              {
                ...item,
                isWished: {
                  dis: action.payload.button.setAttribute("disabled", "true"),
                  diss: (action.payload.button.style.color = "red"),
                },
                toCountWish: 1,
              },
            ]),
        //item is the same action.payload.product
      };
    case "DELETE_FROM_WISH":
      return {
        ...state,
        wish: state.wish.filter((element) => element.id !== action.payload),
      };
    default:
      return state;
  }
};

export default ReduxWish;
