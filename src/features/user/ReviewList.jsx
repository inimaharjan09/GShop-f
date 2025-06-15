import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Rating,
} from '@material-tailwind/react';
import { FaUserCircle } from 'react-icons/fa';
export default function ReviewList({ product }) {
  return (
    <div className="mt-10">
      {product.reviews.map((review) => (
        <Card
          key={review._id}
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem] border border-white"
        >
          <CardHeader
            color="transparent"
            floated={false}
            shadow={false}
            className="mx-0 flex items-center gap-4 pt-0 pb-8"
          >
            <FaUserCircle
              size={28}
              className="text-gray-800 hover:text-red-500 transition"
            />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <Typography variant="h6" color="blue-gray">
                  {review.username}
                </Typography>
                <Rating readonly value={review.rating} />
              </div>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0">
            <Typography>{review.comment}</Typography>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
