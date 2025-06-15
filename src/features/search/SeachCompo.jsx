import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Input } from '@material-tailwind/react';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router';

export default function SeachCompo() {
  const nav = useNavigate();
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        onSubmit={(val) => {
          nav(`/search/${val.search}`);
        }}
      >
        {({ handleChange, values, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <Input
                label="Search product here"
                color="red"
                value={values.search}
                name="search"
                onChange={handleChange}
                className="bg-white pr-10"
                crossOrigin=""
              />
              <MagnifyingGlassIcon className="absolute top-1/2 right-3 w-5 h-5 text-gray-400 transform -translate-y-1/2 pointer-events-none" />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
