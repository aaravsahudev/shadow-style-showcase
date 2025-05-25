
import { useEffect, useState } from 'react';

export const LoadingAnimation = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-black z-50 flex items-center justify-center">
      <div className="loader">
        <div className="box-load1"></div>
        <div className="box-load2"></div>
        <div className="box-load3"></div>
      </div>
    </div>
  );
};
