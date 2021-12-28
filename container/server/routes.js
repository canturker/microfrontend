const routes = [
  {
    path: "/",
    element: "Product",
  },
  {
    path: "/:id",
    element: "Product",
  },
  {
    path: "/checkout/basket",
    element: "Checkout",
  },
  {
    path: "/checkout/payment",
    element: "Checkout",
  },
];

export default routes;
