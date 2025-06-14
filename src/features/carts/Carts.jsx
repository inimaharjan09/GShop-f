import { XMarkIcon } from '@heroicons/react/24/outline';
import {
  Button,
  Card,
  CardBody,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseUrl } from '../../app/mainApi';
import { setToCart, removeFromCart } from '../carts/cartSlice';
import { useAddOrderMutation } from '../orders/orderApi';
import toast from 'react-hot-toast';

export default function Carts() {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cartSlice);
  const { user } = useSelector((state) => state.userSlice);

  const total = carts.reduce((a, b) => a + b.price * b.quantity, 0);
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const handleOrder = async () => {
    try {
      await addOrder({
        token: user.token,
        body: {
          total,
          orderItems: carts,
        },
      }).unwrap();
      dispatch(clearCart());
      toast.success('Order Placed Successfully');
    } catch (err) {
      toast.error(err.data?.message || err.data);
    }
  };
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="col-span-2">
        <CardBody className=" ">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Items</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {carts.map((product) => (
                <tr key={product._id} className="bg-white border-b">
                  <td className="p-4">
                    <img
                      src={`${baseUrl}${product.image}`}
                      alt={product.name}
                      className="h-20 w-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">{product.name}</td>
                  <td className="p-4">Rs {product.price}</td>
                  <td className="p-4">
                    <UpdateToCart product={product} />
                  </td>
                  <td className="p-4">{product.price * product.quantity}</td>
                  <td className="p-4">
                    <IconButton
                      onClick={() => dispatch(removeFromCart(product._id))}
                      variant="text"
                      color="red"
                    >
                      <XMarkIcon className="h-6 w-6" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Card className="bg-gray-100 p-6 h-fit">
        <Typography variant="h4" className="mb-6 text-center underline">
          Cart
        </Typography>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>Rs {total}</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Button
            onClick={handleOrder}
            loading={isLoading}
            className="bg-green-400 text-black hover:bg-green-500"
          >
            Payment
          </Button>
        </div>
      </Card>
    </div>
  );
}

function UpdateToCart({ product }) {
  const dispatch = useDispatch();

  const handleCart = (isAdd) => {
    dispatch(
      setToCart({
        ...product,
        quantity: isAdd ? product.quantity + 1 : product.quantity - 1,
      })
    );
  };

  return (
    <div className="flex items-center gap-2">
      <IconButton
        disabled={product.quantity === 1}
        onClick={() => handleCart(false)}
        size="sm"
        className="bg-gray-300"
      >
        <i className="fas fa-minus"></i>
      </IconButton>
      <span className="text-lg font-semibold">{product.quantity}</span>

      <IconButton
        onClick={() => handleCart(true)}
        size="sm"
        className="bg-gray-300"
      >
        <i className="fas fa-plus"></i>
      </IconButton>
    </div>
  );
}
