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
    <div className='p-10 h-[120px]'>
      <div className="flex justify-between items-center">
        <button onClick={handleCloseSearch} className="">
          <BsSearch color="black" size={30} />
        </button>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-300 ">
          <input
            className="text-center w-full max-w-[100%] text-[18px]  rounded-sm"
            type="text"
            placeholder="Search"
            {...register('search', {
              required: 'Text is required!',
            })}
          />
        </form>
        <RxCross1 className="cursor-pointer" size={22} color="black" onClick={handleCloseSearch} />
      </div>
    </div>
  );
}

export default Search;
