import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../services/publisher";
import { getDataBy, editData } from "../../services/book";

function BookUpdateForm() {
  const params = useParams();

  const [publisher, setPublisher] = useState([]);
  useEffect(() => {
    getData((result) => setPublisher(result));
    getDataInfo();
  }, []);

  const [form, setForm] = useState({
    title: "",
    pub_id: "",
    price: 0,
    image: [],
    desc: "",
  });

  const getDataInfo = () => {
    const { id } = params;
    getDataBy(+id, (book) => {
      setForm({
        name: book.name,
        password: book.password,
        address: book.address,
      });
      console.log(book);
    });
  };
  const submitHandler = () => {
    editData(+params.id, form);
  };

  return (
    <>
      <div>
        <form className="w-80" method="post" enctype={"multipart/form-data"}>
          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Publisher
            </label>
            <select
              onChange={(e) => setForm({ ...form, pub_id: e.target.value })}
              className="form-select form-select-sm w-60"
              aria-label=".form-select-sm example"
            >
              <option selected>Open this select menu</option>
              {publisher.length > 0 ? (
                publisher.map((e) => {
                  return <option selected>{e.pub_name}</option>;
                })
              ) : (
                <p>Loading..</p>
              )}
            </select>
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 "
              required
            >
              TItle:
            </label>
            <input
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Price:
            </label>
            <input
              value={form.price}
              onChange={(e) => setForm({ ...form, price: e.target.value })}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div className="mb-2">
            <label
              for="text"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Description:
            </label>
            <input
              value={form.desc}
              onChange={(e) => setForm({ ...form, desc: e.target.value })}
              type="text"
              id="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>
          <div class="w-25 mt-5 mx-auto">
            <div>
              <img
                src="https://via.placeholder.com/300"
                alt={`https://via.placeholder.com/300`}
              />
            </div>
            <label for="exampleFormControlFile1">Image</label>
            <input
              onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
              type="file"
              className="form-control-file"
            />
          </div>
        </form>
        <div className="flex flex-row items-center h-12 mb-4">
          <button
            onClick={() => submitHandler()}
            className="w-24 h-8  text-sm bg-secondary2 text-center pt-1 text-white rounded-full"
          >
            Updatge
          </button>
        </div>
      </div>
    </>
  );
}

export default BookUpdateForm;
