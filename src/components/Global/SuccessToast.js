import { toast } from "react-toastify";

const SuccessToast = (msg) => {
  toast.success(msg, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export default SuccessToast;
