import { toast } from "react-toastify";

const showToast = () => {
  const notify = () => {
    toast.success("🦄 Wow so easy!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  };
  notify();
};

export { showToast };
