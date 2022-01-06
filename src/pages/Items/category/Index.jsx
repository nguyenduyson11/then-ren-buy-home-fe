import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  FilterIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { getCategory } from "../../../api/itemApi";
function Index({ handleFilter }) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [options, setOptions] = useState([]);
  const handleChangeCategory = (e) => {
    const category = e.target.getAttribute("value");
    handleFilter(category ? { category } : undefined);
  };
  const getCategories = async () => {
    try {
      const response = await getCategory();
      setOptions(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
        Tìm kiếm
      </h1>

      <div className="flex items-center">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
              Quận
              <ChevronDownIcon
                className="flex-shrink-0 -mr-1 ml-1 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  <span
                    value=""
                    onClick={handleChangeCategory}
                    className="font-medium text-gray-900 text-gray-500 bg-gray-100 block px-4 py-2 text-sm hover:bg-violet-400 active:bg-violet-600 cursor-pointer"
                  >
                    Tất cả
                  </span>
                </Menu.Item>
                {options.map((option) => (
                  <Menu.Item key={option._id}>
                    {({ active }) => (
                      <span
                        value={option._id}
                        onClick={handleChangeCategory}
                        className="font-medium text-gray-900 text-gray-500 bg-gray-100 block px-4 py-2 text-sm hover:bg-violet-400 active:bg-violet-600 cursor-pointer"
                      >
                        {option.title}
                      </span>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        <button
          type="button"
          className="p-2 -m-2 ml-5 sm:ml-7 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">View grid</span>
          <ViewGridIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="p-2 -m-2 ml-4 sm:ml-6 text-gray-400 hover:text-gray-500 lg:hidden"
          onClick={() => setMobileFiltersOpen(true)}
        >
          <span className="sr-only">Filters</span>
          <FilterIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export default Index;
