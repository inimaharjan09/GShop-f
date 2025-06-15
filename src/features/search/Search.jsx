import React from 'react';
import { useNavigate, useParams } from 'react-router';
import { useGetProductsQuery } from '../products/productApi';
import { baseUrl } from '../../app/mainApi';
import { Rating } from '@material-tailwind/react';

export default function Search() {
  const { search } = useParams();

  const nav = useNavigate();
  const { isLoading, error, data } = useGetProductsQuery({
    search,
  });
  if (isLoading) return <h1>Loading...</h1>;

  if (error) return <h1>{error.toString()}</h1>;
  console.log(data);

  return (
    <div className="grid grid-cols-4 my-6 gap-4">
      {data &&
        data.map(({ _id, name, rating, price, stock, image }) => {
          return (
            <div
              onClick={() => nav(`/products/${_id}`)}
              key={_id}
              className="shadow-lg hover:shadow-xl cursor-pointer"
            >
              <div className="h-[250px] w-full">
                <img
                  className="h-full w-full object-cover"
                  src={`${baseUrl}${image}`}
                  alt=""
                ></img>
              </div>

              <div className="p-4 py-2 space-y-1">
                <h2 className="font-semibold">{name}</h2>
                <p className="text-red-500">Rs.{price}</p>
                <Rating value={rating}></Rating>
              </div>
            </div>
          );
        })}
    </div>
  );
}
