import { useForm } from 'react-hook-form';
import { BsSearch } from 'react-icons/bs';
import { RxCross1 } from 'react-icons/rx';

interface ISearch {
  setOpenSearch: (isOpen: boolean) => void;
  isOpen: boolean;
}

function Search(props: ISearch) {
  const { setOpenSearch } = props;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: string): void => {
    console.log('form: ', data);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  return (
    <div className='p-10 h-[120px] w-full'>
      <div className="flex justify-center items-center gap-5">
        <button onClick={handleCloseSearch} className="">
          <BsSearch color="black" size={30} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 w-full">
          <input
            className="text-start text-2xl px-3 border-0 outline-none"
            type="text"
            placeholder="Search in our store"
            {...register('search', {
              required: 'Text is required!',
            })}
            style={{width: "100%"}}
          />
        </form>
        <RxCross1 className="cursor-pointer" size={30} color="black" onClick={handleCloseSearch} />
      </div>
    </div>
  );
}

export default Search;
