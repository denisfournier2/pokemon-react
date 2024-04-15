import { useEffect } from 'react';
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IToasty } from './types';

const Toasty = (props: IToasty) => {

  useEffect(() => {
      toast(props.message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce
      });
  }, []);

  return null;
}

export default Toasty;
