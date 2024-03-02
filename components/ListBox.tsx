import { Listbox, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoCheckmark } from "react-icons/io5";
import ChevrionUpDown from "./ChevrionUpDown";

interface ListBoxProps {
  state: { id: string; value: string };
  setState: React.Dispatch<React.SetStateAction<{ id: string; value: string }>>;
  options: { id: string; value: string }[];
}

export default function ListBox({ state, setState, options }: ListBoxProps) {
  return (
    <Listbox onChange={setState} value={state}>
      <Listbox.Button className="bg-white text-black text-left rounded-lg w-full mt-4 py-2 pl-4 pr-2 flex justify-between items-center">
        <p>{state.value}</p>
        <ChevrionUpDown />
      </Listbox.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Listbox.Options className="w-full rounded-lg mt-2 absolute z-10">
          {options.map((option) => (
            <Listbox.Option key={option.id} value={option} as="div">
              {({ active, selected }) => (
                <li
                  className={`text-black py-2 px-4 cursor-pointer text-sm transition-colors flex justify-between ${
                    active || option.id === state.id
                      ? "bg-gray-200"
                      : "bg-gray-50"
                  }  ${
                    option.id == (options.length - 1).toString() && "rounded-b-lg"
                  } ${option.id === "0" && "rounded-t-lg"} `}
                >
                  {option.value}
                  {option.id === state.id && <IoCheckmark />}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
}
