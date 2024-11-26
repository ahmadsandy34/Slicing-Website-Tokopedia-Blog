import React from "react";

export default function CardThree({ title, content, isFirst }) {
  return (
    <>
      {isFirst ? (
        <div className="bg-white px-56 my-8">
          <div className="flex">
            <div className="border-b-2 border-green-500 w-full flex justify-between">
              <button className="p-2 text-sm font-medium text-white bg-green-500">
                {title}
              </button>
              <div className="text-sm text-gray-500 flex align-bottom">
                <button className="mx-3">Founder&apos;s Letter</button>
                <button>Milestone</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {content.map((item) => (
              <div key={item.id} className="group">
                <div className="relative cursor-pointer">
                  <img
                    className="rounded-lg object-cover w-full h-48"
                    src={item.image}
                    alt=""
                  />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold bg-black bg-opacity-50 rounded-lg p-1">
                    <p>{title}</p>
                  </div>
                </div>
                <div className="group-hover:text-blue-300 cursor-pointer">
                  <h3 className="font-bold w-4/5 mt-2">{item.title}</h3>
                  <p className="text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <button className="border p-1 mr-2">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="border p-1">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>

      ) : (
        
        <div className="bg-white px-56 my-8">
          <div className="flex">
            <div className="border-b-2 border-green-500 w-full">
              <button className="p-2 text-sm font-medium text-white bg-green-500">
                {title}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            {content.map((item) => (
              <div key={item.id} className="group">
                <div className="relative cursor-pointer">
                  <img
                    className="rounded-lg object-cover w-full h-48"
                    src={item.image}
                    alt=""
                  />
                  <div className="absolute bottom-3 left-3 text-white text-xs font-bold bg-black bg-opacity-50 rounded-lg p-1">
                    <p>{title}</p>
                  </div>
                </div>
                <div className="group-hover:text-blue-300 cursor-pointer">
                  <h3 className="font-bold w-4/5 mt-2">{item.title}</h3>
                  <p className="text-gray-400">{item.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button className="border p-1 mr-2">
              <i className="bi bi-chevron-left"></i>
            </button>
            <button className="border p-1">
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
