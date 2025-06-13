import { XMarkIcon } from '@heroicons/react/24/outline'
import {
  Button,
  Card,
  CardBody,
  IconButton,
  Typography,
} from '@material-tailwind/react'
import React from 'react'

export default function Carts() {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-gray-100 min-h-screen">
      {/* Cart Items Table */}
      <Card className="col-span-2">
        <CardBody className="overflow-x-auto bg-gray-100 p-0">
          <table className="min-w-full text-left table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Name</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
                <th className="p-4">Sub Total</th>
                <th className="p-4"></th>
              </tr>
            </thead>
            <tbody>
              {/* {cartItems.map((item) => (
                <tr key={item.id} className="bg-white border-b">
                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-20 w-20 object-cover rounded"
                    />
                  </td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">Rs: {item.price}</td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4">Rs: {item.price * item.quantity}</td>
                  <td className="p-4">
                    <IconButton variant="text" color="red">
                      <XMarkIcon className="h-6 w-6" />
                    </IconButton>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </CardBody>
      </Card>

      {/* Cart Summary */}
      <Card className="bg-gray-100 p-6 h-fit">
        <Typography variant="h4" className="mb-6 text-center">
          Cart Total
        </Typography>
        <div className="space-y-4 text-lg">
          <div className="flex justify-between">
            <span>Sub Total:</span>
            <span>Rs: </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping Cost</span>
            <span>Rs:</span>
          </div>
          <div className="flex justify-between font-bold">
            <span>Grand Total:</span>
            <span>Rs:</span>
          </div>
        </div>
        <div className="mt-6 flex flex-col gap-4">
          <Button className="bg-black text-white">Cash on delivery</Button>
          <Button className="bg-green-400 text-black hover:bg-green-500">
            Pay with Esewa
          </Button>
        </div>
      </Card>
    </div>
  )
}
